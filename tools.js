class Kyle {
  constructor() {}
  /* 深克隆 */
  deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    if (obj instanceof Object || Array.isArray(obj)) {
      for (let key of [
        ...Object.keys(obj),
        ...Object.getOwnPropertySymbols(obj)
      ]) {
        if (obj.hasOwnProperty(key) || typeof key === 'symbol') {
          if (obj[key] && typeof obj[key] === 'object') {
            objClone[key] = deepClone(obj[key])
          } else {
            objClone[key] = obj[key]
          }
        }
      }
    }
    return objClone
  }
  /* 依据对象属性去重 */
  objUnique(arr, prop) {
    let obj = {}
    arr.reduce((s, v) => {
      obj[v[prop]] ? '' : (obj[v[prop]] = true && s.push(v))
      return s
    }, [])
  }
  /* 依据对象属性排序 */
  sortByProp(arr, prop) {
    return arr.sort((a, b) => a[prop] - b[prop])
  }
  /* 数组去重 */
  arrUnique(arr) {
    return [...new Set(arr)]
  }
  // 防抖
  debounce(fn, delay) {
    let timer = null
    return (arg) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        fn(arg)
      }, delay)
    }
  }
  // 节流
  throttle(fn, delay) {
    let timer, lastTime
    return (args) => {
      const now = Date.now()
      const space = now - lastTime
      if (lastTime && space < delay) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
          fn(args)
        }, delay - space)
        return
      }
      lastTime = now
      fn(args)
    }
  }
  // 金钱格式化
  formatMoney(str) {
    return `${str}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  // 日期格式化
  formatDate(time, format = 'YY-MM-DD hh:mm:ss') {
    let date = new Date(time)
    let pad = (v) => `${v}`.padStart(2, 0)
    let year = date.getFullYear(),
      month = date.getMonth() + 1, //月份是从0开始的
      day = date.getDate(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds()
    return format
      .replace(/YY/g, year)
      .replace(/MM/g, pad(month))
      .replace(/DD/g, pad(day))
      .replace(/hh/g, pad(hour))
      .replace(/mm/g, pad(min))
      .replace(/ss/g, pad(sec))
  }
  // 随机数范围
  randomRange(lower = 0, upper = 0) {
    return Math.floor(Math.random() * (upper - lower) + lower)
  }
  // 横线转驼峰
  canalize(str) {
    let humpReg = /-(\w)/g
    return str.replace(humpReg, (_, c) => c && c.toUpperCase())
  }
  // 驼峰转横线
  hyphenate(str) {
    let hyphenateRE = /\B([A-Z])/g
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  }
  /* 求和 */
  sum(arr) {
    if (!Array.isArray(arr)) return
    return arr.reduce((t, v) => t + v, 0)
  }
  /* 平均数 */
  avg(arr) {
    if (!Array.isArray(arr)) return
    return arr.reduce((t, v) => t + v, 0) / arr.length
  }
  /* 唯一值 */
  filterOnly(arr) {
    if (!Array.isArray(arr)) return
    return arr.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
  }
  /**
   * 数组转树
   * @param {Array} 输入
   * @param {Object.String} keyMap.KEY_ID 表示唯一性键值(id)
   * @param {Object.String} keyMap.KEY_PID 对应的父id
   * @param {Object.String} keyMap.KEY_ORDER 排序依据的键值
   * @returns {Object} 树结构
   */
  arrayToTree(list, { KEY_ID, KEY_PID, KEY_ORDER }) {
    const roots = []
    // 当前非根节点
    let childrenNode = []
    // 分组根和非根节点
    list.forEach((item) => {
      if (!item[KEY_PID] || item[KEY_PID] === '0') {
        roots.push(item)
      } else {
        childrenNode.push(item)
      }
    })
    // 递归单个根节点
    const findChild = (root) => {
      if (!childrenNode.length) return
      let newChildNode = []
      childrenNode.forEach((child) => {
        if (root[KEY_ID] === child[KEY_PID]) {
          if (!root.children ) root.children = []
          root.children.push(child)
          findChild(child)
        } else {
          newChildNode.push(child)
        }
      })

      // 排序
      if (KEY_ORDER && root.children && root.children.length > 1) {
        root.children = root.children.sort(
          (prev, current) => prev[KEY_ORDER] - current[KEY_ORDER]
        )
      }
      childrenNode = newChildNode
    }
    // 遍历根节点
    roots.forEach((root) => findChild(root))
    return roots
  }
  /**
   * 树转数组
   * @param {Array} 输入树结构
   * @returns {Array} 输出数组
   */
  treeToArray(tree, flatArr = []) {
    tree.forEach((item) => {
      const { children } = item
      if (children) {
        delete item.children

        if (children.length) {
          flatArr.push(item)
          return this.treeToArray(children, flatArr)
        }
      }
      flatArr.push(item)
    })
    return flatArr
  }
}
