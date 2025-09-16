/**
 * PQueue 简化版本 - JavaScript 实现
 * 包含核心功能：并发控制、优先级队列、基本事件系统
 */

class SimplePQueue {
  constructor(options = {}) {
    // 默认配置
    this.concurrency = options.concurrency || Infinity;
    this.autoStart = options.autoStart !== false;
    this.timeout = options.timeout;
    this.throwOnTimeout = options.throwOnTimeout || false;

    // 内部状态
    this.queue = [];
    this.pending = 0;
    this.isPaused = !this.autoStart;
    this.idCounter = 1;

    // 事件监听器
    this.listeners = {};
  }

  /**
   * 添加任务到队列
   */
  async add(task, options = {}) {
    // 生成唯一ID
    const id = options.id || `task_${this.idCounter++}`;

    // 创建任务包装器
    const taskWrapper = {
      id,
      task,
      priority: options.priority || 0,
      timeout: options.timeout || this.timeout,
      throwOnTimeout: options.throwOnTimeout !== undefined ? options.throwOnTimeout : this.throwOnTimeout,
      signal: options.signal,
      resolve: null,
      reject: null
    };

    // 创建Promise
    const promise = new Promise((resolve, reject) => {
      taskWrapper.resolve = resolve;
      taskWrapper.reject = reject;
    });

    // 检查是否被取消
    if (taskWrapper.signal?.aborted) {
      taskWrapper.reject(new DOMException('Task aborted', 'AbortError'));
      return promise;
    }

    // 添加到队列（按优先级排序）
    this._enqueue(taskWrapper);

    // 触发add事件
    this._emit('add');

    // 尝试执行下一个任务
    if (!this.isPaused) {
      this._tryToStartAnother();
    }

    return promise;
  }

  /**
   * 批量添加任务
   */
  async addAll(tasks, options = {}) {
    const promises = tasks.map(task => this.add(task, options));
    return Promise.all(promises);
  }

  /**
   * 将任务按优先级加入队列
   */
  _enqueue(taskWrapper) {
    // 如果队列为空，直接添加
    if (this.queue.length === 0) {
      this.queue.push(taskWrapper);
      return;
    }

    // 找到合适的插入位置（优先级从高到低）
    let inserted = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority < taskWrapper.priority) {
        this.queue.splice(i, 0, taskWrapper);
        inserted = true;
        break;
      }
    }

    // 如果没有插入，说明优先级最低，添加到末尾
    if (!inserted) {
      this.queue.push(taskWrapper);
    }
  }

  /**
   * 尝试执行下一个任务
   */
  _tryToStartAnother() {
    // 队列为空
    if (this.queue.length === 0) {
      this._emit('empty');
      if (this.pending === 0) {
        this._emit('idle');
      }
      return false;
    }

    // 暂停状态
    if (this.isPaused) {
      return false;
    }

    // 检查并发限制
    if (this.pending >= this.concurrency) {
      return false;
    }

    // 取出下一个任务
    const taskWrapper = this.queue.shift();
    this.pending++;

    // 触发active事件
    this._emit('active');

    // 执行任务
    this._executeTask(taskWrapper);

    return true;
  }

  /**
   * 执行任务
   */
  async _executeTask(taskWrapper) {
    try {
      // 检查取消信号
      if (taskWrapper.signal?.aborted) {
        throw new DOMException('Task aborted', 'AbortError');
      }

      // 执行任务
      let result;
      if (taskWrapper.timeout) {
        result = await this._withTimeout(taskWrapper.task, taskWrapper.timeout);
      } else {
        result = await taskWrapper.task();
      }

      // 任务成功完成
      taskWrapper.resolve(result);
      this._emit('completed', result);

    } catch (error) {
      // 任务失败
      if (error.name === 'TimeoutError' && !taskWrapper.throwOnTimeout) {
        taskWrapper.resolve();
      } else {
        taskWrapper.reject(error);
        this._emit('error', error);
      }
    } finally {
      // 任务完成，减少pending计数
      this.pending--;
      this._emit('next');

      // 尝试执行下一个任务
      this._tryToStartAnother();
    }
  }

  /**
   * 带超时的任务执行
   */
  async _withTimeout(task, timeout) {
    return Promise.race([
      task(),
      new Promise((_, reject) => {
        setTimeout(() => {
          const error = new Error(`Task timeout after ${timeout}ms`);
          error.name = 'TimeoutError';
          reject(error);
        }, timeout);
      })
    ]);
  }

  /**
   * 暂停队列
   */
  pause() {
    this.isPaused = true;
  }

  /**
   * 恢复队列
   */
  start() {
    this.isPaused = false;
    this._tryToStartAnother();
    return this;
  }

  /**
   * 清空队列
   */
  clear() {
    // 拒绝所有未执行的任务
    this.queue.forEach(taskWrapper => {
      taskWrapper.reject(new Error('Queue cleared'));
    });
    this.queue = [];
  }

  /**
   * 设置任务优先级
   */
  setPriority(id, priority) {
    const index = this.queue.findIndex(task => task.id === id);
    if (index === -1) {
      throw new ReferenceError(`No task with id "${id}" found in queue`);
    }

    const taskWrapper = this.queue.splice(index, 1)[0];
    taskWrapper.priority = priority;
    this._enqueue(taskWrapper);
  }

  /**
   * 等待队列为空
   */
  async onEmpty() {
    if (this.queue.length === 0) {
      return;
    }

    return new Promise(resolve => {
      this.once('empty', resolve);
    });
  }

  /**
   * 等待队列空闲
   */
  async onIdle() {
    if (this.queue.length === 0 && this.pending === 0) {
      return;
    }

    return new Promise(resolve => {
      this.once('idle', resolve);
    });
  }

  /**
   * 等待队列大小小于指定值
   */
  async onSizeLessThan(limit) {
    if (this.queue.length < limit) {
      return;
    }

    return new Promise(resolve => {
      const checkSize = () => {
        if (this.queue.length < limit) {
          resolve();
        }
      };

      this.on('next', checkSize);
      this.on('empty', resolve);
    });
  }

  /**
   * 按选项过滤队列大小
   */
  sizeBy(options) {
    return this.queue.filter(task => {
      if (options.priority !== undefined) {
        return task.priority === options.priority;
      }
      return true;
    }).length;
  }

  /**
   * 获取队列大小
   */
  get size() {
    return this.queue.length;
  }

  /**
   * 获取正在运行的任务数
   */
  get pending() {
    return this._pending;
  }

  /**
   * 设置pending值
   */
  set pending(value) {
    this._pending = value;
  }

  /**
   * 获取是否暂停状态
   */
  get isPaused() {
    return this._isPaused;
  }

  /**
   * 设置暂停状态
   */
  set isPaused(value) {
    this._isPaused = value;
  }

  /**
   * 事件系统 - 添加监听器
   */
  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  /**
   * 事件系统 - 添加一次性监听器
   */
  once(event, listener) {
    const onceWrapper = (...args) => {
      this.off(event, onceWrapper);
      listener(...args);
    };
    this.on(event, onceWrapper);
  }

  /**
   * 事件系统 - 移除监听器
   */
  off(event, listener) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event] = this.listeners[event].filter(l => l !== listener);
  }

  /**
   * 事件系统 - 触发事件
   */
  _emit(event, ...args) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach(listener => {
      try {
        listener(...args);
      } catch (error) {
        console.error(`Error in event listener for "${event}":`, error);
      }
    });
  }
}


