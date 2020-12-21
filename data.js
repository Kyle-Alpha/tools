const stepsData = [
    {
        title: '基本信息',
        description: '请填写电梯基本信息'
    },
    {
        title: '关联单位',
        description: '请关联电梯相关单位'
    },
    {
        title: '关联设备',
        description: '请关联物联网设备'
    },
    {
        title: '提交成功',
        description: '电梯信息提交成功'
    }
]
// 基本信息表单
const liftTypeList = []
const liftTypeList2 = [{"name":"液压载货电梯","pId":"3d019fe08f3b6629a18606dfdaa82258","id":"135316b92bfa20b89411cb65dcdcd987"},{"name":"消防员电梯","pId":"a748add12265fd352ae899ac7c720aac","id":"13643ff436d18625a2a5c29e574b9952"},{"name":"杂物电梯","pId":"a748add12265fd352ae899ac7c720aac","id":"5324843b2c0935847e04381156005775"},{"name":"防爆电梯","pId":"a748add12265fd352ae899ac7c720aac","id":"5e2d514fb6e8fb54e7c89f9fb5f786ca"},{"name":"自动扶梯","pId":"f61f1c97bb8dd11a9a9ae17585566727","id":"6fab72ccf9b027cfcea69526b0a5dc39"},{"name":"自动人行道","pId":"f61f1c97bb8dd11a9a9ae17585566727","id":"a730e35a1761e67f9e61e09d1012133a"},{"name":"曳引驱动乘客电梯","pId":"aef27ce87774bc4aa91adec18464b48a","id":"056b479b864ca1211a525b40317624b8"},{"name":"新目录外的电梯设备","pId":"","id":"3880c8d2374b36b06eec60a6d4d023ca"},{"name":"液压驱动电梯","pId":"","id":"3d019fe08f3b6629a18606dfdaa82258"},{"name":"强制驱动载货电梯","pId":"aef27ce87774bc4aa91adec18464b48a","id":"9af6c838d84962222ec5bf14d67f69dc"},{"name":"其他类型电梯","pId":"","id":"a748add12265fd352ae899ac7c720aac"},{"name":"曳引与强制驱动电梯","pId":"","id":"aef27ce87774bc4aa91adec18464b48a"},{"name":"液压乘客电梯","pId":"3d019fe08f3b6629a18606dfdaa82258","id":"e8bb3c0d606d3bf7f5c5989262963dea"},{"name":"自动扶梯与自动人行道","pId":"","id":"f61f1c97bb8dd11a9a9ae17585566727"},{"name":"曳引驱动载货电梯","pId":"aef27ce87774bc4aa91adec18464b48a","id":"fc6212a5e5d94fe6d67f16653a5d50f1"}]
const firstFormData = [
    { type: 'input', label: '电梯名称:', prop: 'liftName', placeholder: '请输入电梯名称' },
    { type: 'select', label: '设备类型:', prop: 'equipmentTypeName', placeholder: '请选择设备类型', options: liftTypeList2, optionLabel: 'name', optionValue: 'id', optionDisabled: 'disabled', params: { data: '', url: '' } },
    { type: 'input', label: '救援识别码:', prop: 'helpCode', placeholder: '请输入救援识别码' },
    { type: 'input', label: '注册代码:', prop: 'regCode', placeholder: '请输入注册代码' },
    { type: 'input', label: '设备代码:', prop: 'equipCode', placeholder: '请输入设备代码' },
    { type: 'fuzzySearch',required:true, label: '经纬度:', prop: 'liftName6', placeholder: '请输入经纬度',params: { data: '', url: '' } },
    { type: 'fuzzySearch',required:true, label: '使用地点区划:', prop: 'area', placeholder: '请选择地点', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: '', url: '' } },
    { type: 'input', label: '使用地点明细:', prop: 'installAddress', placeholder: '请输入地点明细' },
    { type: 'select', label: '额定速度:', prop: 'speed', placeholder: '请选择额定速度', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: '', url: '' } },
    { type: 'select', label: '门数:', prop: 'door', placeholder: '请输入门数',options:[{label: '单门',value:1},{label: '双门',value:2}] },
    { type: 'select', label: '层数:', prop: 'floors', placeholder: '请选择层数', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: '', url: '' } },
    { type: 'input', label: '站数:', prop: 'stand', placeholder: '请输入站数' },
    { type: 'select', label: '最底层:', prop: 'minFloor', placeholder: '请选择最底层', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: '', url: '' } },
    { type: 'input', label: '最高层:', prop: 'maxFloor', placeholder: '请输入最高层' },
    { type: 'select', label: '运行类型:', prop: 'runType', placeholder: '请选择运行类型', options: [{label:'客梯',value: 0},{label:'货梯',value: 1}], optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: '', url: '' } },
    { type: 'input', label: '速度类型:', prop: 'speedType', placeholder: '请输入速度类型' },
    { type: 'date', label: '维保合同有效期起:', prop: 'maintenanceValidityStart', placeholder: '请输入维保合同有效期起' },
    { type: 'date', label: '维保合同有效期止:', prop: 'maintenanceValidityEnd', placeholder: '请输入维保合同有效期止' },
    // {
    //     type: 'control',
    //     btnList: [
    //         { showStatus: true, name: '取消', color: 'primary', btnType: 'cancel' },
    //         { showStatus: true, name: '下一步', color: 'primary', btnType: 'sure' }
    //     ]
    // }
]
const secondFormData = [
    { type: 'fuzzySearch', label: '使用单位:', prop: 'useCompany',required: true, placeholder: '请选择使用单位', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftUseUnit/v2/searchUseUnit' } },
    { type: 'fuzzySearch', label: '维保单位:', prop: 'maintenanceCompany',required: true, placeholder: '请选择维保单位', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftMaintenanceUnit/v2/searchMaint' } },
    { type: 'fuzzySearch', label: '检验机构:', prop: 'checkUnitId',required: true, placeholder: '请选择检验机构', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftCheckUnit/v2/searchCheckUnit' } },
    { type: 'fuzzySearch', label: '设计单位:', prop: 'designUnitId', placeholder: '请选择设计单位', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftDesignUnit/v2/searchDesignUnit' } },
    { type: 'fuzzySearch', label: '制造单位:', prop: 'fabricateCompanyId', placeholder: '请选择制造单位', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftManufacturingUnit/v2/searchManufacturingUnit' } },
    { type: 'fuzzySearch', label: '施工单位:', prop: 'constructionUnit', placeholder: '请选择施工单位', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftInstallUnit/v2/searchConstructionUnit' } },
    { type: 'fuzzySearch', label: '监督检验机构:', prop: 'superviseUnit', placeholder: '请选择监督检验机构', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftCheckUnit/v2/searchCheckUnit' } },
    { type: 'fuzzySearch', label: '型式试验机构:', prop: 'typeTestOrgId', placeholder: '请选择型式试验机构', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftCheckUnit/v2/searchCheckUnit' } },
    { type: 'fuzzySearch', label: '产权单位:', prop: 'propertyCompany', placeholder: '请选择产权单位', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftUseUnit/v2/searchUseUnit' } },
    { type: 'fuzzySearch', label: '维保工作站:', prop: 'liftMaintenanceWorkstationName', placeholder: '请选择维保工作站', options: liftTypeList, optionLabel: 'label', optionValue: 'value', optionDisabled: 'disabled', params: { data: 'companyName', url: '/liftMaintenanceWorkstation/v2/searchMaintWorkstation' } },
    // {
    //     type: 'control',
    //     btnList: [
    //         { showStatus: true, name: '取消', color: 'primary', btnType: 'cancel' },
    //         { showStatus: true, name: '上一步', color: 'primary', btnType: 'goback' },
    //         { showStatus: true, name: '下一步', color: 'primary', btnType: 'sure' }
    //     ]
    // }
]
const cityList = [
    {
        "name": "中国",
        "pId": "0",
        "id": "100000"
    },
    {
        "name": "北京",
        "pId": "100000",
        "id": "110000"
    },
    {
        "name": "北京市",
        "pId": "110000",
        "id": "110100"
    },
    {
        "name": "东城区",
        "pId": "110100",
        "id": "110101"
    },
    {
        "name": "西城区",
        "pId": "110100",
        "id": "110102"
    },
    {
        "name": "朝阳区",
        "pId": "110100",
        "id": "110105"
    },
    {
        "name": "丰台区",
        "pId": "110100",
        "id": "110106"
    },
    {
        "name": "石景山区",
        "pId": "110100",
        "id": "110107"
    },
    {
        "name": "海淀区",
        "pId": "110100",
        "id": "110108"
    },
    {
        "name": "门头沟区",
        "pId": "110100",
        "id": "110109"
    },
    {
        "name": "房山区",
        "pId": "110100",
        "id": "110111"
    },
    {
        "name": "通州区",
        "pId": "110100",
        "id": "110112"
    },
    {
        "name": "顺义区",
        "pId": "110100",
        "id": "110113"
    },
    {
        "name": "昌平区",
        "pId": "110100",
        "id": "110114"
    },
    {
        "name": "大兴区",
        "pId": "110100",
        "id": "110115"
    },
    {
        "name": "怀柔区",
        "pId": "110100",
        "id": "110116"
    },
    {
        "name": "平谷区",
        "pId": "110100",
        "id": "110117"
    },
    {
        "name": "密云县",
        "pId": "110100",
        "id": "110228"
    },
    {
        "name": "延庆县",
        "pId": "110100",
        "id": "110229"
    },
    {
        "name": "天津",
        "pId": "100000",
        "id": "120000"
    },
    {
        "name": "天津市",
        "pId": "120000",
        "id": "120100"
    },
    {
        "name": "和平区",
        "pId": "120100",
        "id": "120101"
    },
    {
        "name": "河东区",
        "pId": "120100",
        "id": "120102"
    },
    {
        "name": "河西区",
        "pId": "120100",
        "id": "120103"
    },
    {
        "name": "南开区",
        "pId": "120100",
        "id": "120104"
    },
    {
        "name": "河北区",
        "pId": "120100",
        "id": "120105"
    },
    {
        "name": "红桥区",
        "pId": "120100",
        "id": "120106"
    },
    {
        "name": "东丽区",
        "pId": "120100",
        "id": "120110"
    },
    {
        "name": "西青区",
        "pId": "120100",
        "id": "120111"
    },
    {
        "name": "津南区",
        "pId": "120100",
        "id": "120112"
    },
    {
        "name": "北辰区",
        "pId": "120100",
        "id": "120113"
    },
    {
        "name": "武清区",
        "pId": "120100",
        "id": "120114"
    },
    {
        "name": "宝坻区",
        "pId": "120100",
        "id": "120115"
    },
    {
        "name": "滨海新区",
        "pId": "120100",
        "id": "120116"
    },
    {
        "name": "宁河县",
        "pId": "120100",
        "id": "120221"
    },
    {
        "name": "静海县",
        "pId": "120100",
        "id": "120223"
    },
    {
        "name": "蓟县",
        "pId": "120100",
        "id": "120225"
    },
    {
        "name": "河北省",
        "pId": "100000",
        "id": "130000"
    },
    {
        "name": "石家庄市",
        "pId": "130000",
        "id": "130100"
    },
    {
        "name": "长安区",
        "pId": "130100",
        "id": "130102"
    },
    {
        "name": "桥西区",
        "pId": "130100",
        "id": "130104"
    },
    {
        "name": "新华区",
        "pId": "130100",
        "id": "130105"
    },
    {
        "name": "井陉矿区",
        "pId": "130100",
        "id": "130107"
    },
    {
        "name": "裕华区",
        "pId": "130100",
        "id": "130108"
    },
    {
        "name": "藁城区",
        "pId": "130100",
        "id": "130109"
    },
    {
        "name": "鹿泉区",
        "pId": "130100",
        "id": "130110"
    },
    {
        "name": "栾城区",
        "pId": "130100",
        "id": "130111"
    },
    {
        "name": "井陉县",
        "pId": "130100",
        "id": "130121"
    },
    {
        "name": "正定县",
        "pId": "130100",
        "id": "130123"
    },
    {
        "name": "行唐县",
        "pId": "130100",
        "id": "130125"
    },
    {
        "name": "灵寿县",
        "pId": "130100",
        "id": "130126"
    },
    {
        "name": "高邑县",
        "pId": "130100",
        "id": "130127"
    },
    {
        "name": "深泽县",
        "pId": "130100",
        "id": "130128"
    },
    {
        "name": "赞皇县",
        "pId": "130100",
        "id": "130129"
    },
    {
        "name": "无极县",
        "pId": "130100",
        "id": "130130"
    },
    {
        "name": "平山县",
        "pId": "130100",
        "id": "130131"
    },
    {
        "name": "元氏县",
        "pId": "130100",
        "id": "130132"
    },
    {
        "name": "赵县",
        "pId": "130100",
        "id": "130133"
    },
    {
        "name": "辛集市",
        "pId": "130100",
        "id": "130181"
    },
    {
        "name": "晋州市",
        "pId": "130100",
        "id": "130183"
    },
    {
        "name": "新乐市",
        "pId": "130100",
        "id": "130184"
    },
    {
        "name": "唐山市",
        "pId": "130000",
        "id": "130200"
    },
    {
        "name": "路南区",
        "pId": "130200",
        "id": "130202"
    },
    {
        "name": "路北区",
        "pId": "130200",
        "id": "130203"
    },
    {
        "name": "古冶区",
        "pId": "130200",
        "id": "130204"
    },
    {
        "name": "开平区",
        "pId": "130200",
        "id": "130205"
    },
    {
        "name": "丰南区",
        "pId": "130200",
        "id": "130207"
    },
    {
        "name": "丰润区",
        "pId": "130200",
        "id": "130208"
    },
    {
        "name": "曹妃甸区",
        "pId": "130200",
        "id": "130209"
    },
    {
        "name": "滦县",
        "pId": "130200",
        "id": "130223"
    },
    {
        "name": "滦南县",
        "pId": "130200",
        "id": "130224"
    },
    {
        "name": "乐亭县",
        "pId": "130200",
        "id": "130225"
    },
    {
        "name": "迁西县",
        "pId": "130200",
        "id": "130227"
    },
    {
        "name": "玉田县",
        "pId": "130200",
        "id": "130229"
    },
    {
        "name": "遵化市",
        "pId": "130200",
        "id": "130281"
    },
    {
        "name": "迁安市",
        "pId": "130200",
        "id": "130283"
    },
    {
        "name": "秦皇岛市",
        "pId": "130000",
        "id": "130300"
    },
    {
        "name": "海港区",
        "pId": "130300",
        "id": "130302"
    },
    {
        "name": "山海关区",
        "pId": "130300",
        "id": "130303"
    },
    {
        "name": "北戴河区",
        "pId": "130300",
        "id": "130304"
    },
    {
        "name": "青龙满族自治县",
        "pId": "130300",
        "id": "130321"
    },
    {
        "name": "昌黎县",
        "pId": "130300",
        "id": "130322"
    },
    {
        "name": "抚宁县",
        "pId": "130300",
        "id": "130323"
    },
    {
        "name": "卢龙县",
        "pId": "130300",
        "id": "130324"
    },
    {
        "name": "邯郸市",
        "pId": "130000",
        "id": "130400"
    },
    {
        "name": "邯山区",
        "pId": "130400",
        "id": "130402"
    },
    {
        "name": "丛台区",
        "pId": "130400",
        "id": "130403"
    },
    {
        "name": "复兴区",
        "pId": "130400",
        "id": "130404"
    },
    {
        "name": "峰峰矿区",
        "pId": "130400",
        "id": "130406"
    },
    {
        "name": "邯郸县",
        "pId": "130400",
        "id": "130421"
    },
    {
        "name": "临漳县",
        "pId": "130400",
        "id": "130423"
    },
    {
        "name": "成安县",
        "pId": "130400",
        "id": "130424"
    },
    {
        "name": "大名县",
        "pId": "130400",
        "id": "130425"
    },
    {
        "name": "涉县",
        "pId": "130400",
        "id": "130426"
    },
    {
        "name": "磁县",
        "pId": "130400",
        "id": "130427"
    },
    {
        "name": "肥乡县",
        "pId": "130400",
        "id": "130428"
    },
    {
        "name": "永年县",
        "pId": "130400",
        "id": "130429"
    },
    {
        "name": "邱县",
        "pId": "130400",
        "id": "130430"
    },
    {
        "name": "鸡泽县",
        "pId": "130400",
        "id": "130431"
    },
    {
        "name": "广平县",
        "pId": "130400",
        "id": "130432"
    },
    {
        "name": "馆陶县",
        "pId": "130400",
        "id": "130433"
    },
    {
        "name": "魏县",
        "pId": "130400",
        "id": "130434"
    },
    {
        "name": "曲周县",
        "pId": "130400",
        "id": "130435"
    },
    {
        "name": "武安市",
        "pId": "130400",
        "id": "130481"
    },
    {
        "name": "邢台市",
        "pId": "130000",
        "id": "130500"
    },
    {
        "name": "桥东区",
        "pId": "130500",
        "id": "130502"
    },
    {
        "name": "桥西区",
        "pId": "130500",
        "id": "130503"
    },
    {
        "name": "邢台县",
        "pId": "130500",
        "id": "130521"
    },
    {
        "name": "临城县",
        "pId": "130500",
        "id": "130522"
    },
    {
        "name": "内丘县",
        "pId": "130500",
        "id": "130523"
    },
    {
        "name": "柏乡县",
        "pId": "130500",
        "id": "130524"
    },
    {
        "name": "隆尧县",
        "pId": "130500",
        "id": "130525"
    },
    {
        "name": "任县",
        "pId": "130500",
        "id": "130526"
    },
    {
        "name": "南和县",
        "pId": "130500",
        "id": "130527"
    },
    {
        "name": "宁晋县",
        "pId": "130500",
        "id": "130528"
    },
    {
        "name": "巨鹿县",
        "pId": "130500",
        "id": "130529"
    },
    {
        "name": "新河县",
        "pId": "130500",
        "id": "130530"
    },
    {
        "name": "广宗县",
        "pId": "130500",
        "id": "130531"
    },
    {
        "name": "平乡县",
        "pId": "130500",
        "id": "130532"
    },
    {
        "name": "威县",
        "pId": "130500",
        "id": "130533"
    },
    {
        "name": "清河县",
        "pId": "130500",
        "id": "130534"
    },
    {
        "name": "临西县",
        "pId": "130500",
        "id": "130535"
    },
    {
        "name": "南宫市",
        "pId": "130500",
        "id": "130581"
    },
    {
        "name": "沙河市",
        "pId": "130500",
        "id": "130582"
    },
    {
        "name": "保定市",
        "pId": "130000",
        "id": "130600"
    },
    {
        "name": "新市区",
        "pId": "130600",
        "id": "130602"
    },
    {
        "name": "北市区",
        "pId": "130600",
        "id": "130603"
    },
    {
        "name": "南市区",
        "pId": "130600",
        "id": "130604"
    },
    {
        "name": "满城县",
        "pId": "130600",
        "id": "130621"
    },
    {
        "name": "清苑县",
        "pId": "130600",
        "id": "130622"
    },
    {
        "name": "涞水县",
        "pId": "130600",
        "id": "130623"
    },
    {
        "name": "阜平县",
        "pId": "130600",
        "id": "130624"
    },
    {
        "name": "徐水县",
        "pId": "130600",
        "id": "130625"
    },
    {
        "name": "定兴县",
        "pId": "130600",
        "id": "130626"
    },
    {
        "name": "唐县",
        "pId": "130600",
        "id": "130627"
    },
    {
        "name": "高阳县",
        "pId": "130600",
        "id": "130628"
    },
    {
        "name": "容城县",
        "pId": "130600",
        "id": "130629"
    },
    {
        "name": "涞源县",
        "pId": "130600",
        "id": "130630"
    },
    {
        "name": "望都县",
        "pId": "130600",
        "id": "130631"
    },
    {
        "name": "安新县",
        "pId": "130600",
        "id": "130632"
    },
    {
        "name": "易县",
        "pId": "130600",
        "id": "130633"
    },
    {
        "name": "曲阳县",
        "pId": "130600",
        "id": "130634"
    },
    {
        "name": "蠡县",
        "pId": "130600",
        "id": "130635"
    },
    {
        "name": "顺平县",
        "pId": "130600",
        "id": "130636"
    },
    {
        "name": "博野县",
        "pId": "130600",
        "id": "130637"
    },
    {
        "name": "雄县",
        "pId": "130600",
        "id": "130638"
    },
    {
        "name": "涿州市",
        "pId": "130600",
        "id": "130681"
    },
    {
        "name": "定州市",
        "pId": "130600",
        "id": "130682"
    },
    {
        "name": "安国市",
        "pId": "130600",
        "id": "130683"
    },
    {
        "name": "高碑店市",
        "pId": "130600",
        "id": "130684"
    },
    {
        "name": "张家口市",
        "pId": "130000",
        "id": "130700"
    },
    {
        "name": "桥东区",
        "pId": "130700",
        "id": "130702"
    },
    {
        "name": "桥西区",
        "pId": "130700",
        "id": "130703"
    },
    {
        "name": "宣化区",
        "pId": "130700",
        "id": "130705"
    },
    {
        "name": "下花园区",
        "pId": "130700",
        "id": "130706"
    },
    {
        "name": "宣化县",
        "pId": "130700",
        "id": "130721"
    },
    {
        "name": "张北县",
        "pId": "130700",
        "id": "130722"
    },
    {
        "name": "康保县",
        "pId": "130700",
        "id": "130723"
    },
    {
        "name": "沽源县",
        "pId": "130700",
        "id": "130724"
    },
    {
        "name": "尚义县",
        "pId": "130700",
        "id": "130725"
    },
    {
        "name": "蔚县",
        "pId": "130700",
        "id": "130726"
    },
    {
        "name": "阳原县",
        "pId": "130700",
        "id": "130727"
    },
    {
        "name": "怀安县",
        "pId": "130700",
        "id": "130728"
    },
    {
        "name": "万全县",
        "pId": "130700",
        "id": "130729"
    },
    {
        "name": "怀来县",
        "pId": "130700",
        "id": "130730"
    },
    {
        "name": "涿鹿县",
        "pId": "130700",
        "id": "130731"
    },
    {
        "name": "赤城县",
        "pId": "130700",
        "id": "130732"
    },
    {
        "name": "崇礼县",
        "pId": "130700",
        "id": "130733"
    },
    {
        "name": "承德市",
        "pId": "130000",
        "id": "130800"
    },
    {
        "name": "双桥区",
        "pId": "130800",
        "id": "130802"
    },
    {
        "name": "双滦区",
        "pId": "130800",
        "id": "130803"
    },
    {
        "name": "鹰手营子矿区",
        "pId": "130800",
        "id": "130804"
    },
    {
        "name": "承德县",
        "pId": "130800",
        "id": "130821"
    },
    {
        "name": "兴隆县",
        "pId": "130800",
        "id": "130822"
    },
    {
        "name": "平泉县",
        "pId": "130800",
        "id": "130823"
    },
    {
        "name": "滦平县",
        "pId": "130800",
        "id": "130824"
    },
    {
        "name": "隆化县",
        "pId": "130800",
        "id": "130825"
    },
    {
        "name": "丰宁满族自治县",
        "pId": "130800",
        "id": "130826"
    },
    {
        "name": "宽城满族自治县",
        "pId": "130800",
        "id": "130827"
    },
    {
        "name": "围场满族蒙古族自治县",
        "pId": "130800",
        "id": "130828"
    },
    {
        "name": "沧州市",
        "pId": "130000",
        "id": "130900"
    },
    {
        "name": "新华区",
        "pId": "130900",
        "id": "130902"
    },
    {
        "name": "运河区",
        "pId": "130900",
        "id": "130903"
    },
    {
        "name": "沧县",
        "pId": "130900",
        "id": "130921"
    },
    {
        "name": "青县",
        "pId": "130900",
        "id": "130922"
    },
    {
        "name": "东光县",
        "pId": "130900",
        "id": "130923"
    },
    {
        "name": "海兴县",
        "pId": "130900",
        "id": "130924"
    },
    {
        "name": "盐山县",
        "pId": "130900",
        "id": "130925"
    },
    {
        "name": "肃宁县",
        "pId": "130900",
        "id": "130926"
    },
    {
        "name": "南皮县",
        "pId": "130900",
        "id": "130927"
    },
    {
        "name": "吴桥县",
        "pId": "130900",
        "id": "130928"
    },
    {
        "name": "献县",
        "pId": "130900",
        "id": "130929"
    },
    {
        "name": "孟村回族自治县",
        "pId": "130900",
        "id": "130930"
    },
    {
        "name": "泊头市",
        "pId": "130900",
        "id": "130981"
    },
    {
        "name": "任丘市",
        "pId": "130900",
        "id": "130982"
    },
    {
        "name": "黄骅市",
        "pId": "130900",
        "id": "130983"
    },
    {
        "name": "河间市",
        "pId": "130900",
        "id": "130984"
    },
    {
        "name": "廊坊市",
        "pId": "130000",
        "id": "131000"
    },
    {
        "name": "安次区",
        "pId": "131000",
        "id": "131002"
    },
    {
        "name": "广阳区",
        "pId": "131000",
        "id": "131003"
    },
    {
        "name": "固安县",
        "pId": "131000",
        "id": "131022"
    },
    {
        "name": "永清县",
        "pId": "131000",
        "id": "131023"
    },
    {
        "name": "香河县",
        "pId": "131000",
        "id": "131024"
    },
    {
        "name": "大城县",
        "pId": "131000",
        "id": "131025"
    },
    {
        "name": "文安县",
        "pId": "131000",
        "id": "131026"
    },
    {
        "name": "大厂回族自治县",
        "pId": "131000",
        "id": "131028"
    },
    {
        "name": "霸州市",
        "pId": "131000",
        "id": "131081"
    },
    {
        "name": "三河市",
        "pId": "131000",
        "id": "131082"
    },
    {
        "name": "衡水市",
        "pId": "130000",
        "id": "131100"
    },
    {
        "name": "桃城区",
        "pId": "131100",
        "id": "131102"
    },
    {
        "name": "枣强县",
        "pId": "131100",
        "id": "131121"
    },
    {
        "name": "武邑县",
        "pId": "131100",
        "id": "131122"
    },
    {
        "name": "武强县",
        "pId": "131100",
        "id": "131123"
    },
    {
        "name": "饶阳县",
        "pId": "131100",
        "id": "131124"
    },
    {
        "name": "安平县",
        "pId": "131100",
        "id": "131125"
    },
    {
        "name": "故城县",
        "pId": "131100",
        "id": "131126"
    },
    {
        "name": "景县",
        "pId": "131100",
        "id": "131127"
    },
    {
        "name": "阜城县",
        "pId": "131100",
        "id": "131128"
    },
    {
        "name": "冀州市",
        "pId": "131100",
        "id": "131181"
    },
    {
        "name": "深州市",
        "pId": "131100",
        "id": "131182"
    },
    {
        "name": "山西省",
        "pId": "100000",
        "id": "140000"
    },
    {
        "name": "太原市",
        "pId": "140000",
        "id": "140100"
    },
    {
        "name": "小店区",
        "pId": "140100",
        "id": "140105"
    },
    {
        "name": "迎泽区",
        "pId": "140100",
        "id": "140106"
    },
    {
        "name": "杏花岭区",
        "pId": "140100",
        "id": "140107"
    },
    {
        "name": "尖草坪区",
        "pId": "140100",
        "id": "140108"
    },
    {
        "name": "万柏林区",
        "pId": "140100",
        "id": "140109"
    },
    {
        "name": "晋源区",
        "pId": "140100",
        "id": "140110"
    },
    {
        "name": "清徐县",
        "pId": "140100",
        "id": "140121"
    },
    {
        "name": "阳曲县",
        "pId": "140100",
        "id": "140122"
    },
    {
        "name": "娄烦县",
        "pId": "140100",
        "id": "140123"
    },
    {
        "name": "古交市",
        "pId": "140100",
        "id": "140181"
    },
    {
        "name": "大同市",
        "pId": "140000",
        "id": "140200"
    },
    {
        "name": "城区",
        "pId": "140200",
        "id": "140202"
    },
    {
        "name": "矿区",
        "pId": "140200",
        "id": "140203"
    },
    {
        "name": "南郊区",
        "pId": "140200",
        "id": "140211"
    },
    {
        "name": "新荣区",
        "pId": "140200",
        "id": "140212"
    },
    {
        "name": "阳高县",
        "pId": "140200",
        "id": "140221"
    },
    {
        "name": "天镇县",
        "pId": "140200",
        "id": "140222"
    },
    {
        "name": "广灵县",
        "pId": "140200",
        "id": "140223"
    },
    {
        "name": "灵丘县",
        "pId": "140200",
        "id": "140224"
    },
    {
        "name": "浑源县",
        "pId": "140200",
        "id": "140225"
    },
    {
        "name": "左云县",
        "pId": "140200",
        "id": "140226"
    },
    {
        "name": "大同县",
        "pId": "140200",
        "id": "140227"
    },
    {
        "name": "阳泉市",
        "pId": "140000",
        "id": "140300"
    },
    {
        "name": "城区",
        "pId": "140300",
        "id": "140302"
    },
    {
        "name": "矿区",
        "pId": "140300",
        "id": "140303"
    },
    {
        "name": "郊区",
        "pId": "140300",
        "id": "140311"
    },
    {
        "name": "平定县",
        "pId": "140300",
        "id": "140321"
    },
    {
        "name": "盂县",
        "pId": "140300",
        "id": "140322"
    },
    {
        "name": "长治市",
        "pId": "140000",
        "id": "140400"
    },
    {
        "name": "城区",
        "pId": "140400",
        "id": "140402"
    },
    {
        "name": "郊区",
        "pId": "140400",
        "id": "140411"
    },
    {
        "name": "长治县",
        "pId": "140400",
        "id": "140421"
    },
    {
        "name": "襄垣县",
        "pId": "140400",
        "id": "140423"
    },
    {
        "name": "屯留县",
        "pId": "140400",
        "id": "140424"
    },
    {
        "name": "平顺县",
        "pId": "140400",
        "id": "140425"
    },
    {
        "name": "黎城县",
        "pId": "140400",
        "id": "140426"
    },
    {
        "name": "壶关县",
        "pId": "140400",
        "id": "140427"
    },
    {
        "name": "长子县",
        "pId": "140400",
        "id": "140428"
    },
    {
        "name": "武乡县",
        "pId": "140400",
        "id": "140429"
    },
    {
        "name": "沁县",
        "pId": "140400",
        "id": "140430"
    },
    {
        "name": "沁源县",
        "pId": "140400",
        "id": "140431"
    },
    {
        "name": "潞城市",
        "pId": "140400",
        "id": "140481"
    },
    {
        "name": "晋城市",
        "pId": "140000",
        "id": "140500"
    },
    {
        "name": "城区",
        "pId": "140500",
        "id": "140502"
    },
    {
        "name": "沁水县",
        "pId": "140500",
        "id": "140521"
    },
    {
        "name": "阳城县",
        "pId": "140500",
        "id": "140522"
    },
    {
        "name": "陵川县",
        "pId": "140500",
        "id": "140524"
    },
    {
        "name": "泽州县",
        "pId": "140500",
        "id": "140525"
    },
    {
        "name": "高平市",
        "pId": "140500",
        "id": "140581"
    },
    {
        "name": "朔州市",
        "pId": "140000",
        "id": "140600"
    },
    {
        "name": "朔城区",
        "pId": "140600",
        "id": "140602"
    },
    {
        "name": "平鲁区",
        "pId": "140600",
        "id": "140603"
    },
    {
        "name": "山阴县",
        "pId": "140600",
        "id": "140621"
    },
    {
        "name": "应县",
        "pId": "140600",
        "id": "140622"
    },
    {
        "name": "右玉县",
        "pId": "140600",
        "id": "140623"
    },
    {
        "name": "怀仁县",
        "pId": "140600",
        "id": "140624"
    },
    {
        "name": "晋中市",
        "pId": "140000",
        "id": "140700"
    },
    {
        "name": "榆次区",
        "pId": "140700",
        "id": "140702"
    },
    {
        "name": "榆社县",
        "pId": "140700",
        "id": "140721"
    },
    {
        "name": "左权县",
        "pId": "140700",
        "id": "140722"
    },
    {
        "name": "和顺县",
        "pId": "140700",
        "id": "140723"
    },
    {
        "name": "昔阳县",
        "pId": "140700",
        "id": "140724"
    },
    {
        "name": "寿阳县",
        "pId": "140700",
        "id": "140725"
    },
    {
        "name": "太谷县",
        "pId": "140700",
        "id": "140726"
    },
    {
        "name": "祁县",
        "pId": "140700",
        "id": "140727"
    },
    {
        "name": "平遥县",
        "pId": "140700",
        "id": "140728"
    },
    {
        "name": "灵石县",
        "pId": "140700",
        "id": "140729"
    },
    {
        "name": "介休市",
        "pId": "140700",
        "id": "140781"
    },
    {
        "name": "运城市",
        "pId": "140000",
        "id": "140800"
    },
    {
        "name": "盐湖区",
        "pId": "140800",
        "id": "140802"
    },
    {
        "name": "临猗县",
        "pId": "140800",
        "id": "140821"
    },
    {
        "name": "万荣县",
        "pId": "140800",
        "id": "140822"
    },
    {
        "name": "闻喜县",
        "pId": "140800",
        "id": "140823"
    },
    {
        "name": "稷山县",
        "pId": "140800",
        "id": "140824"
    },
    {
        "name": "新绛县",
        "pId": "140800",
        "id": "140825"
    },
    {
        "name": "绛县",
        "pId": "140800",
        "id": "140826"
    },
    {
        "name": "垣曲县",
        "pId": "140800",
        "id": "140827"
    },
    {
        "name": "夏县",
        "pId": "140800",
        "id": "140828"
    },
    {
        "name": "平陆县",
        "pId": "140800",
        "id": "140829"
    },
    {
        "name": "芮城县",
        "pId": "140800",
        "id": "140830"
    },
    {
        "name": "永济市",
        "pId": "140800",
        "id": "140881"
    },
    {
        "name": "河津市",
        "pId": "140800",
        "id": "140882"
    },
    {
        "name": "忻州市",
        "pId": "140000",
        "id": "140900"
    },
    {
        "name": "忻府区",
        "pId": "140900",
        "id": "140902"
    },
    {
        "name": "定襄县",
        "pId": "140900",
        "id": "140921"
    },
    {
        "name": "五台县",
        "pId": "140900",
        "id": "140922"
    },
    {
        "name": "代县",
        "pId": "140900",
        "id": "140923"
    },
    {
        "name": "繁峙县",
        "pId": "140900",
        "id": "140924"
    },
    {
        "name": "宁武县",
        "pId": "140900",
        "id": "140925"
    },
    {
        "name": "静乐县",
        "pId": "140900",
        "id": "140926"
    },
    {
        "name": "神池县",
        "pId": "140900",
        "id": "140927"
    },
    {
        "name": "五寨县",
        "pId": "140900",
        "id": "140928"
    },
    {
        "name": "岢岚县",
        "pId": "140900",
        "id": "140929"
    },
    {
        "name": "河曲县",
        "pId": "140900",
        "id": "140930"
    },
    {
        "name": "保德县",
        "pId": "140900",
        "id": "140931"
    },
    {
        "name": "偏关县",
        "pId": "140900",
        "id": "140932"
    },
    {
        "name": "原平市",
        "pId": "140900",
        "id": "140981"
    },
    {
        "name": "临汾市",
        "pId": "140000",
        "id": "141000"
    },
    {
        "name": "尧都区",
        "pId": "141000",
        "id": "141002"
    },
    {
        "name": "曲沃县",
        "pId": "141000",
        "id": "141021"
    },
    {
        "name": "翼城县",
        "pId": "141000",
        "id": "141022"
    },
    {
        "name": "襄汾县",
        "pId": "141000",
        "id": "141023"
    },
    {
        "name": "洪洞县",
        "pId": "141000",
        "id": "141024"
    },
    {
        "name": "古县",
        "pId": "141000",
        "id": "141025"
    },
    {
        "name": "安泽县",
        "pId": "141000",
        "id": "141026"
    },
    {
        "name": "浮山县",
        "pId": "141000",
        "id": "141027"
    },
    {
        "name": "吉县",
        "pId": "141000",
        "id": "141028"
    },
    {
        "name": "乡宁县",
        "pId": "141000",
        "id": "141029"
    },
    {
        "name": "大宁县",
        "pId": "141000",
        "id": "141030"
    },
    {
        "name": "隰县",
        "pId": "141000",
        "id": "141031"
    },
    {
        "name": "永和县",
        "pId": "141000",
        "id": "141032"
    },
    {
        "name": "蒲县",
        "pId": "141000",
        "id": "141033"
    },
    {
        "name": "汾西县",
        "pId": "141000",
        "id": "141034"
    },
    {
        "name": "侯马市",
        "pId": "141000",
        "id": "141081"
    },
    {
        "name": "霍州市",
        "pId": "141000",
        "id": "141082"
    },
    {
        "name": "吕梁市",
        "pId": "140000",
        "id": "141100"
    },
    {
        "name": "离石区",
        "pId": "141100",
        "id": "141102"
    },
    {
        "name": "文水县",
        "pId": "141100",
        "id": "141121"
    },
    {
        "name": "交城县",
        "pId": "141100",
        "id": "141122"
    },
    {
        "name": "兴县",
        "pId": "141100",
        "id": "141123"
    },
    {
        "name": "临县",
        "pId": "141100",
        "id": "141124"
    },
    {
        "name": "柳林县",
        "pId": "141100",
        "id": "141125"
    },
    {
        "name": "石楼县",
        "pId": "141100",
        "id": "141126"
    },
    {
        "name": "岚县",
        "pId": "141100",
        "id": "141127"
    },
    {
        "name": "方山县",
        "pId": "141100",
        "id": "141128"
    },
    {
        "name": "中阳县",
        "pId": "141100",
        "id": "141129"
    },
    {
        "name": "交口县",
        "pId": "141100",
        "id": "141130"
    },
    {
        "name": "孝义市",
        "pId": "141100",
        "id": "141181"
    },
    {
        "name": "汾阳市",
        "pId": "141100",
        "id": "141182"
    },
    {
        "name": "内蒙古自治区",
        "pId": "100000",
        "id": "150000"
    },
    {
        "name": "呼和浩特市",
        "pId": "150000",
        "id": "150100"
    },
    {
        "name": "新城区",
        "pId": "150100",
        "id": "150102"
    },
    {
        "name": "回民区",
        "pId": "150100",
        "id": "150103"
    },
    {
        "name": "玉泉区",
        "pId": "150100",
        "id": "150104"
    },
    {
        "name": "赛罕区",
        "pId": "150100",
        "id": "150105"
    },
    {
        "name": "土默特左旗",
        "pId": "150100",
        "id": "150121"
    },
    {
        "name": "托克托县",
        "pId": "150100",
        "id": "150122"
    },
    {
        "name": "和林格尔县",
        "pId": "150100",
        "id": "150123"
    },
    {
        "name": "清水河县",
        "pId": "150100",
        "id": "150124"
    },
    {
        "name": "武川县",
        "pId": "150100",
        "id": "150125"
    },
    {
        "name": "包头市",
        "pId": "150000",
        "id": "150200"
    },
    {
        "name": "东河区",
        "pId": "150200",
        "id": "150202"
    },
    {
        "name": "昆都仑区",
        "pId": "150200",
        "id": "150203"
    },
    {
        "name": "青山区",
        "pId": "150200",
        "id": "150204"
    },
    {
        "name": "石拐区",
        "pId": "150200",
        "id": "150205"
    },
    {
        "name": "白云鄂博矿区",
        "pId": "150200",
        "id": "150206"
    },
    {
        "name": "九原区",
        "pId": "150200",
        "id": "150207"
    },
    {
        "name": "土默特右旗",
        "pId": "150200",
        "id": "150221"
    },
    {
        "name": "固阳县",
        "pId": "150200",
        "id": "150222"
    },
    {
        "name": "达尔罕茂明安联合旗",
        "pId": "150200",
        "id": "150223"
    },
    {
        "name": "乌海市",
        "pId": "150000",
        "id": "150300"
    },
    {
        "name": "海勃湾区",
        "pId": "150300",
        "id": "150302"
    },
    {
        "name": "海南区",
        "pId": "150300",
        "id": "150303"
    },
    {
        "name": "乌达区",
        "pId": "150300",
        "id": "150304"
    },
    {
        "name": "赤峰市",
        "pId": "150000",
        "id": "150400"
    },
    {
        "name": "红山区",
        "pId": "150400",
        "id": "150402"
    },
    {
        "name": "元宝山区",
        "pId": "150400",
        "id": "150403"
    },
    {
        "name": "松山区",
        "pId": "150400",
        "id": "150404"
    },
    {
        "name": "阿鲁科尔沁旗",
        "pId": "150400",
        "id": "150421"
    },
    {
        "name": "巴林左旗",
        "pId": "150400",
        "id": "150422"
    },
    {
        "name": "巴林右旗",
        "pId": "150400",
        "id": "150423"
    },
    {
        "name": "林西县",
        "pId": "150400",
        "id": "150424"
    },
    {
        "name": "克什克腾旗",
        "pId": "150400",
        "id": "150425"
    },
    {
        "name": "翁牛特旗",
        "pId": "150400",
        "id": "150426"
    },
    {
        "name": "喀喇沁旗",
        "pId": "150400",
        "id": "150428"
    },
    {
        "name": "宁城县",
        "pId": "150400",
        "id": "150429"
    },
    {
        "name": "敖汉旗",
        "pId": "150400",
        "id": "150430"
    },
    {
        "name": "通辽市",
        "pId": "150000",
        "id": "150500"
    },
    {
        "name": "科尔沁区",
        "pId": "150500",
        "id": "150502"
    },
    {
        "name": "科尔沁左翼中旗",
        "pId": "150500",
        "id": "150521"
    },
    {
        "name": "科尔沁左翼后旗",
        "pId": "150500",
        "id": "150522"
    },
    {
        "name": "开鲁县",
        "pId": "150500",
        "id": "150523"
    },
    {
        "name": "库伦旗",
        "pId": "150500",
        "id": "150524"
    },
    {
        "name": "奈曼旗",
        "pId": "150500",
        "id": "150525"
    },
    {
        "name": "扎鲁特旗",
        "pId": "150500",
        "id": "150526"
    },
    {
        "name": "霍林郭勒市",
        "pId": "150500",
        "id": "150581"
    },
    {
        "name": "鄂尔多斯市",
        "pId": "150000",
        "id": "150600"
    },
    {
        "name": "东胜区",
        "pId": "150600",
        "id": "150602"
    },
    {
        "name": "达拉特旗",
        "pId": "150600",
        "id": "150621"
    },
    {
        "name": "准格尔旗",
        "pId": "150600",
        "id": "150622"
    },
    {
        "name": "鄂托克前旗",
        "pId": "150600",
        "id": "150623"
    },
    {
        "name": "鄂托克旗",
        "pId": "150600",
        "id": "150624"
    },
    {
        "name": "杭锦旗",
        "pId": "150600",
        "id": "150625"
    },
    {
        "name": "乌审旗",
        "pId": "150600",
        "id": "150626"
    },
    {
        "name": "伊金霍洛旗",
        "pId": "150600",
        "id": "150627"
    },
    {
        "name": "呼伦贝尔市",
        "pId": "150000",
        "id": "150700"
    },
    {
        "name": "海拉尔区",
        "pId": "150700",
        "id": "150702"
    },
    {
        "name": "扎赉诺尔区",
        "pId": "150700",
        "id": "150703"
    },
    {
        "name": "阿荣旗",
        "pId": "150700",
        "id": "150721"
    },
    {
        "name": "莫力达瓦达斡尔族自治旗",
        "pId": "150700",
        "id": "150722"
    },
    {
        "name": "鄂伦春自治旗",
        "pId": "150700",
        "id": "150723"
    },
    {
        "name": "鄂温克族自治旗",
        "pId": "150700",
        "id": "150724"
    },
    {
        "name": "陈巴尔虎旗",
        "pId": "150700",
        "id": "150725"
    },
    {
        "name": "新巴尔虎左旗",
        "pId": "150700",
        "id": "150726"
    },
    {
        "name": "新巴尔虎右旗",
        "pId": "150700",
        "id": "150727"
    },
    {
        "name": "满洲里市",
        "pId": "150700",
        "id": "150781"
    },
    {
        "name": "牙克石市",
        "pId": "150700",
        "id": "150782"
    },
    {
        "name": "扎兰屯市",
        "pId": "150700",
        "id": "150783"
    },
    {
        "name": "额尔古纳市",
        "pId": "150700",
        "id": "150784"
    },
    {
        "name": "根河市",
        "pId": "150700",
        "id": "150785"
    },
    {
        "name": "巴彦淖尔市",
        "pId": "150000",
        "id": "150800"
    },
    {
        "name": "临河区",
        "pId": "150800",
        "id": "150802"
    },
    {
        "name": "五原县",
        "pId": "150800",
        "id": "150821"
    },
    {
        "name": "磴口县",
        "pId": "150800",
        "id": "150822"
    },
    {
        "name": "乌拉特前旗",
        "pId": "150800",
        "id": "150823"
    },
    {
        "name": "乌拉特中旗",
        "pId": "150800",
        "id": "150824"
    },
    {
        "name": "乌拉特后旗",
        "pId": "150800",
        "id": "150825"
    },
    {
        "name": "杭锦后旗",
        "pId": "150800",
        "id": "150826"
    },
    {
        "name": "乌兰察布市",
        "pId": "150000",
        "id": "150900"
    },
    {
        "name": "集宁区",
        "pId": "150900",
        "id": "150902"
    },
    {
        "name": "卓资县",
        "pId": "150900",
        "id": "150921"
    },
    {
        "name": "化德县",
        "pId": "150900",
        "id": "150922"
    },
    {
        "name": "商都县",
        "pId": "150900",
        "id": "150923"
    },
    {
        "name": "兴和县",
        "pId": "150900",
        "id": "150924"
    },
    {
        "name": "凉城县",
        "pId": "150900",
        "id": "150925"
    },
    {
        "name": "察哈尔右翼前旗",
        "pId": "150900",
        "id": "150926"
    },
    {
        "name": "察哈尔右翼中旗",
        "pId": "150900",
        "id": "150927"
    },
    {
        "name": "察哈尔右翼后旗",
        "pId": "150900",
        "id": "150928"
    },
    {
        "name": "四子王旗",
        "pId": "150900",
        "id": "150929"
    },
    {
        "name": "丰镇市",
        "pId": "150900",
        "id": "150981"
    },
    {
        "name": "兴安盟",
        "pId": "150000",
        "id": "152200"
    },
    {
        "name": "乌兰浩特市",
        "pId": "152200",
        "id": "152201"
    },
    {
        "name": "阿尔山市",
        "pId": "152200",
        "id": "152202"
    },
    {
        "name": "科尔沁右翼前旗",
        "pId": "152200",
        "id": "152221"
    },
    {
        "name": "科尔沁右翼中旗",
        "pId": "152200",
        "id": "152222"
    },
    {
        "name": "扎赉特旗",
        "pId": "152200",
        "id": "152223"
    },
    {
        "name": "突泉县",
        "pId": "152200",
        "id": "152224"
    },
    {
        "name": "锡林郭勒盟",
        "pId": "150000",
        "id": "152500"
    },
    {
        "name": "二连浩特市",
        "pId": "152500",
        "id": "152501"
    },
    {
        "name": "锡林浩特市",
        "pId": "152500",
        "id": "152502"
    },
    {
        "name": "阿巴嘎旗",
        "pId": "152500",
        "id": "152522"
    },
    {
        "name": "苏尼特左旗",
        "pId": "152500",
        "id": "152523"
    },
    {
        "name": "苏尼特右旗",
        "pId": "152500",
        "id": "152524"
    },
    {
        "name": "东乌珠穆沁旗",
        "pId": "152500",
        "id": "152525"
    },
    {
        "name": "西乌珠穆沁旗",
        "pId": "152500",
        "id": "152526"
    },
    {
        "name": "太仆寺旗",
        "pId": "152500",
        "id": "152527"
    },
    {
        "name": "镶黄旗",
        "pId": "152500",
        "id": "152528"
    },
    {
        "name": "正镶白旗",
        "pId": "152500",
        "id": "152529"
    },
    {
        "name": "正蓝旗",
        "pId": "152500",
        "id": "152530"
    },
    {
        "name": "多伦县",
        "pId": "152500",
        "id": "152531"
    },
    {
        "name": "阿拉善盟",
        "pId": "150000",
        "id": "152900"
    },
    {
        "name": "阿拉善左旗",
        "pId": "152900",
        "id": "152921"
    },
    {
        "name": "阿拉善右旗",
        "pId": "152900",
        "id": "152922"
    },
    {
        "name": "额济纳旗",
        "pId": "152900",
        "id": "152923"
    },
    {
        "name": "辽宁省",
        "pId": "100000",
        "id": "210000"
    },
    {
        "name": "沈阳市",
        "pId": "210000",
        "id": "210100"
    },
    {
        "name": "和平区",
        "pId": "210100",
        "id": "210102"
    },
    {
        "name": "沈河区",
        "pId": "210100",
        "id": "210103"
    },
    {
        "name": "大东区",
        "pId": "210100",
        "id": "210104"
    },
    {
        "name": "皇姑区",
        "pId": "210100",
        "id": "210105"
    },
    {
        "name": "铁西区",
        "pId": "210100",
        "id": "210106"
    },
    {
        "name": "苏家屯区",
        "pId": "210100",
        "id": "210111"
    },
    {
        "name": "浑南区",
        "pId": "210100",
        "id": "210112"
    },
    {
        "name": "沈北新区",
        "pId": "210100",
        "id": "210113"
    },
    {
        "name": "于洪区",
        "pId": "210100",
        "id": "210114"
    },
    {
        "name": "辽中县",
        "pId": "210100",
        "id": "210122"
    },
    {
        "name": "康平县",
        "pId": "210100",
        "id": "210123"
    },
    {
        "name": "法库县",
        "pId": "210100",
        "id": "210124"
    },
    {
        "name": "新民市",
        "pId": "210100",
        "id": "210181"
    },
    {
        "name": "大连市",
        "pId": "210000",
        "id": "210200"
    },
    {
        "name": "中山区",
        "pId": "210200",
        "id": "210202"
    },
    {
        "name": "西岗区",
        "pId": "210200",
        "id": "210203"
    },
    {
        "name": "沙河口区",
        "pId": "210200",
        "id": "210204"
    },
    {
        "name": "甘井子区",
        "pId": "210200",
        "id": "210211"
    },
    {
        "name": "旅顺口区",
        "pId": "210200",
        "id": "210212"
    },
    {
        "name": "金州区",
        "pId": "210200",
        "id": "210213"
    },
    {
        "name": "长海县",
        "pId": "210200",
        "id": "210224"
    },
    {
        "name": "瓦房店市",
        "pId": "210200",
        "id": "210281"
    },
    {
        "name": "普兰店市",
        "pId": "210200",
        "id": "210282"
    },
    {
        "name": "庄河市",
        "pId": "210200",
        "id": "210283"
    },
    {
        "name": "鞍山市",
        "pId": "210000",
        "id": "210300"
    },
    {
        "name": "铁东区",
        "pId": "210300",
        "id": "210302"
    },
    {
        "name": "铁西区",
        "pId": "210300",
        "id": "210303"
    },
    {
        "name": "立山区",
        "pId": "210300",
        "id": "210304"
    },
    {
        "name": "千山区",
        "pId": "210300",
        "id": "210311"
    },
    {
        "name": "台安县",
        "pId": "210300",
        "id": "210321"
    },
    {
        "name": "岫岩满族自治县",
        "pId": "210300",
        "id": "210323"
    },
    {
        "name": "海城市",
        "pId": "210300",
        "id": "210381"
    },
    {
        "name": "抚顺市",
        "pId": "210000",
        "id": "210400"
    },
    {
        "name": "新抚区",
        "pId": "210400",
        "id": "210402"
    },
    {
        "name": "东洲区",
        "pId": "210400",
        "id": "210403"
    },
    {
        "name": "望花区",
        "pId": "210400",
        "id": "210404"
    },
    {
        "name": "顺城区",
        "pId": "210400",
        "id": "210411"
    },
    {
        "name": "抚顺县",
        "pId": "210400",
        "id": "210421"
    },
    {
        "name": "新宾满族自治县",
        "pId": "210400",
        "id": "210422"
    },
    {
        "name": "清原满族自治县",
        "pId": "210400",
        "id": "210423"
    },
    {
        "name": "本溪市",
        "pId": "210000",
        "id": "210500"
    },
    {
        "name": "平山区",
        "pId": "210500",
        "id": "210502"
    },
    {
        "name": "溪湖区",
        "pId": "210500",
        "id": "210503"
    },
    {
        "name": "明山区",
        "pId": "210500",
        "id": "210504"
    },
    {
        "name": "南芬区",
        "pId": "210500",
        "id": "210505"
    },
    {
        "name": "本溪满族自治县",
        "pId": "210500",
        "id": "210521"
    },
    {
        "name": "桓仁满族自治县",
        "pId": "210500",
        "id": "210522"
    },
    {
        "name": "丹东市",
        "pId": "210000",
        "id": "210600"
    },
    {
        "name": "元宝区",
        "pId": "210600",
        "id": "210602"
    },
    {
        "name": "振兴区",
        "pId": "210600",
        "id": "210603"
    },
    {
        "name": "振安区",
        "pId": "210600",
        "id": "210604"
    },
    {
        "name": "宽甸满族自治县",
        "pId": "210600",
        "id": "210624"
    },
    {
        "name": "东港市",
        "pId": "210600",
        "id": "210681"
    },
    {
        "name": "凤城市",
        "pId": "210600",
        "id": "210682"
    },
    {
        "name": "锦州市",
        "pId": "210000",
        "id": "210700"
    },
    {
        "name": "古塔区",
        "pId": "210700",
        "id": "210702"
    },
    {
        "name": "凌河区",
        "pId": "210700",
        "id": "210703"
    },
    {
        "name": "太和区",
        "pId": "210700",
        "id": "210711"
    },
    {
        "name": "黑山县",
        "pId": "210700",
        "id": "210726"
    },
    {
        "name": "义县",
        "pId": "210700",
        "id": "210727"
    },
    {
        "name": "凌海市",
        "pId": "210700",
        "id": "210781"
    },
    {
        "name": "北镇市",
        "pId": "210700",
        "id": "210782"
    },
    {
        "name": "营口市",
        "pId": "210000",
        "id": "210800"
    },
    {
        "name": "站前区",
        "pId": "210800",
        "id": "210802"
    },
    {
        "name": "西市区",
        "pId": "210800",
        "id": "210803"
    },
    {
        "name": "鲅鱼圈区",
        "pId": "210800",
        "id": "210804"
    },
    {
        "name": "老边区",
        "pId": "210800",
        "id": "210811"
    },
    {
        "name": "盖州市",
        "pId": "210800",
        "id": "210881"
    },
    {
        "name": "大石桥市",
        "pId": "210800",
        "id": "210882"
    },
    {
        "name": "阜新市",
        "pId": "210000",
        "id": "210900"
    },
    {
        "name": "海州区",
        "pId": "210900",
        "id": "210902"
    },
    {
        "name": "新邱区",
        "pId": "210900",
        "id": "210903"
    },
    {
        "name": "太平区",
        "pId": "210900",
        "id": "210904"
    },
    {
        "name": "清河门区",
        "pId": "210900",
        "id": "210905"
    },
    {
        "name": "细河区",
        "pId": "210900",
        "id": "210911"
    },
    {
        "name": "阜新蒙古族自治县",
        "pId": "210900",
        "id": "210921"
    },
    {
        "name": "彰武县",
        "pId": "210900",
        "id": "210922"
    },
    {
        "name": "辽阳市",
        "pId": "210000",
        "id": "211000"
    },
    {
        "name": "白塔区",
        "pId": "211000",
        "id": "211002"
    },
    {
        "name": "文圣区",
        "pId": "211000",
        "id": "211003"
    },
    {
        "name": "宏伟区",
        "pId": "211000",
        "id": "211004"
    },
    {
        "name": "弓长岭区",
        "pId": "211000",
        "id": "211005"
    },
    {
        "name": "太子河区",
        "pId": "211000",
        "id": "211011"
    },
    {
        "name": "辽阳县",
        "pId": "211000",
        "id": "211021"
    },
    {
        "name": "灯塔市",
        "pId": "211000",
        "id": "211081"
    },
    {
        "name": "盘锦市",
        "pId": "210000",
        "id": "211100"
    },
    {
        "name": "双台子区",
        "pId": "211100",
        "id": "211102"
    },
    {
        "name": "兴隆台区",
        "pId": "211100",
        "id": "211103"
    },
    {
        "name": "大洼县",
        "pId": "211100",
        "id": "211121"
    },
    {
        "name": "盘山县",
        "pId": "211100",
        "id": "211122"
    },
    {
        "name": "铁岭市",
        "pId": "210000",
        "id": "211200"
    },
    {
        "name": "银州区",
        "pId": "211200",
        "id": "211202"
    },
    {
        "name": "清河区",
        "pId": "211200",
        "id": "211204"
    },
    {
        "name": "铁岭县",
        "pId": "211200",
        "id": "211221"
    },
    {
        "name": "西丰县",
        "pId": "211200",
        "id": "211223"
    },
    {
        "name": "昌图县",
        "pId": "211200",
        "id": "211224"
    },
    {
        "name": "调兵山市",
        "pId": "211200",
        "id": "211281"
    },
    {
        "name": "开原市",
        "pId": "211200",
        "id": "211282"
    },
    {
        "name": "朝阳市",
        "pId": "210000",
        "id": "211300"
    },
    {
        "name": "双塔区",
        "pId": "211300",
        "id": "211302"
    },
    {
        "name": "龙城区",
        "pId": "211300",
        "id": "211303"
    },
    {
        "name": "朝阳县",
        "pId": "211300",
        "id": "211321"
    },
    {
        "name": "建平县",
        "pId": "211300",
        "id": "211322"
    },
    {
        "name": "喀喇沁左翼蒙古族自治县",
        "pId": "211300",
        "id": "211324"
    },
    {
        "name": "北票市",
        "pId": "211300",
        "id": "211381"
    },
    {
        "name": "凌源市",
        "pId": "211300",
        "id": "211382"
    },
    {
        "name": "葫芦岛市",
        "pId": "210000",
        "id": "211400"
    },
    {
        "name": "连山区",
        "pId": "211400",
        "id": "211402"
    },
    {
        "name": "龙港区",
        "pId": "211400",
        "id": "211403"
    },
    {
        "name": "南票区",
        "pId": "211400",
        "id": "211404"
    },
    {
        "name": "绥中县",
        "pId": "211400",
        "id": "211421"
    },
    {
        "name": "建昌县",
        "pId": "211400",
        "id": "211422"
    },
    {
        "name": "兴城市",
        "pId": "211400",
        "id": "211481"
    },
    {
        "name": "金普新区",
        "pId": "210000",
        "id": "211500"
    },
    {
        "name": "金州新区",
        "pId": "211500",
        "id": "211501"
    },
    {
        "name": "普湾新区",
        "pId": "211500",
        "id": "211502"
    },
    {
        "name": "保税区",
        "pId": "211500",
        "id": "211503"
    },
    {
        "name": "吉林省",
        "pId": "100000",
        "id": "220000"
    },
    {
        "name": "长春市",
        "pId": "220000",
        "id": "220100"
    },
    {
        "name": "南关区",
        "pId": "220100",
        "id": "220102"
    },
    {
        "name": "宽城区",
        "pId": "220100",
        "id": "220103"
    },
    {
        "name": "朝阳区",
        "pId": "220100",
        "id": "220104"
    },
    {
        "name": "二道区",
        "pId": "220100",
        "id": "220105"
    },
    {
        "name": "绿园区",
        "pId": "220100",
        "id": "220106"
    },
    {
        "name": "双阳区",
        "pId": "220100",
        "id": "220112"
    },
    {
        "name": "九台区",
        "pId": "220100",
        "id": "220113"
    },
    {
        "name": "农安县",
        "pId": "220100",
        "id": "220122"
    },
    {
        "name": "榆树市",
        "pId": "220100",
        "id": "220182"
    },
    {
        "name": "德惠市",
        "pId": "220100",
        "id": "220183"
    },
    {
        "name": "吉林市",
        "pId": "220000",
        "id": "220200"
    },
    {
        "name": "昌邑区",
        "pId": "220200",
        "id": "220202"
    },
    {
        "name": "龙潭区",
        "pId": "220200",
        "id": "220203"
    },
    {
        "name": "船营区",
        "pId": "220200",
        "id": "220204"
    },
    {
        "name": "丰满区",
        "pId": "220200",
        "id": "220211"
    },
    {
        "name": "永吉县",
        "pId": "220200",
        "id": "220221"
    },
    {
        "name": "蛟河市",
        "pId": "220200",
        "id": "220281"
    },
    {
        "name": "桦甸市",
        "pId": "220200",
        "id": "220282"
    },
    {
        "name": "舒兰市",
        "pId": "220200",
        "id": "220283"
    },
    {
        "name": "磐石市",
        "pId": "220200",
        "id": "220284"
    },
    {
        "name": "四平市",
        "pId": "220000",
        "id": "220300"
    },
    {
        "name": "铁西区",
        "pId": "220300",
        "id": "220302"
    },
    {
        "name": "铁东区",
        "pId": "220300",
        "id": "220303"
    },
    {
        "name": "梨树县",
        "pId": "220300",
        "id": "220322"
    },
    {
        "name": "伊通满族自治县",
        "pId": "220300",
        "id": "220323"
    },
    {
        "name": "公主岭市",
        "pId": "220300",
        "id": "220381"
    },
    {
        "name": "双辽市",
        "pId": "220300",
        "id": "220382"
    },
    {
        "name": "辽源市",
        "pId": "220000",
        "id": "220400"
    },
    {
        "name": "龙山区",
        "pId": "220400",
        "id": "220402"
    },
    {
        "name": "西安区",
        "pId": "220400",
        "id": "220403"
    },
    {
        "name": "东丰县",
        "pId": "220400",
        "id": "220421"
    },
    {
        "name": "东辽县",
        "pId": "220400",
        "id": "220422"
    },
    {
        "name": "通化市",
        "pId": "220000",
        "id": "220500"
    },
    {
        "name": "东昌区",
        "pId": "220500",
        "id": "220502"
    },
    {
        "name": "二道江区",
        "pId": "220500",
        "id": "220503"
    },
    {
        "name": "通化县",
        "pId": "220500",
        "id": "220521"
    },
    {
        "name": "辉南县",
        "pId": "220500",
        "id": "220523"
    },
    {
        "name": "柳河县",
        "pId": "220500",
        "id": "220524"
    },
    {
        "name": "梅河口市",
        "pId": "220500",
        "id": "220581"
    },
    {
        "name": "集安市",
        "pId": "220500",
        "id": "220582"
    },
    {
        "name": "白山市",
        "pId": "220000",
        "id": "220600"
    },
    {
        "name": "浑江区",
        "pId": "220600",
        "id": "220602"
    },
    {
        "name": "江源区",
        "pId": "220600",
        "id": "220605"
    },
    {
        "name": "抚松县",
        "pId": "220600",
        "id": "220621"
    },
    {
        "name": "靖宇县",
        "pId": "220600",
        "id": "220622"
    },
    {
        "name": "长白朝鲜族自治县",
        "pId": "220600",
        "id": "220623"
    },
    {
        "name": "临江市",
        "pId": "220600",
        "id": "220681"
    },
    {
        "name": "松原市",
        "pId": "220000",
        "id": "220700"
    },
    {
        "name": "宁江区",
        "pId": "220700",
        "id": "220702"
    },
    {
        "name": "前郭尔罗斯蒙古族自治县",
        "pId": "220700",
        "id": "220721"
    },
    {
        "name": "长岭县",
        "pId": "220700",
        "id": "220722"
    },
    {
        "name": "乾安县",
        "pId": "220700",
        "id": "220723"
    },
    {
        "name": "扶余市",
        "pId": "220700",
        "id": "220781"
    },
    {
        "name": "白城市",
        "pId": "220000",
        "id": "220800"
    },
    {
        "name": "洮北区",
        "pId": "220800",
        "id": "220802"
    },
    {
        "name": "镇赉县",
        "pId": "220800",
        "id": "220821"
    },
    {
        "name": "通榆县",
        "pId": "220800",
        "id": "220822"
    },
    {
        "name": "洮南市",
        "pId": "220800",
        "id": "220881"
    },
    {
        "name": "大安市",
        "pId": "220800",
        "id": "220882"
    },
    {
        "name": "延边朝鲜族自治州",
        "pId": "220000",
        "id": "222400"
    },
    {
        "name": "延吉市",
        "pId": "222400",
        "id": "222401"
    },
    {
        "name": "图们市",
        "pId": "222400",
        "id": "222402"
    },
    {
        "name": "敦化市",
        "pId": "222400",
        "id": "222403"
    },
    {
        "name": "珲春市",
        "pId": "222400",
        "id": "222404"
    },
    {
        "name": "龙井市",
        "pId": "222400",
        "id": "222405"
    },
    {
        "name": "和龙市",
        "pId": "222400",
        "id": "222406"
    },
    {
        "name": "汪清县",
        "pId": "222400",
        "id": "222424"
    },
    {
        "name": "安图县",
        "pId": "222400",
        "id": "222426"
    },
    {
        "name": "黑龙江省",
        "pId": "100000",
        "id": "230000"
    },
    {
        "name": "哈尔滨市",
        "pId": "230000",
        "id": "230100"
    },
    {
        "name": "道里区",
        "pId": "230100",
        "id": "230102"
    },
    {
        "name": "南岗区",
        "pId": "230100",
        "id": "230103"
    },
    {
        "name": "道外区",
        "pId": "230100",
        "id": "230104"
    },
    {
        "name": "平房区",
        "pId": "230100",
        "id": "230108"
    },
    {
        "name": "松北区",
        "pId": "230100",
        "id": "230109"
    },
    {
        "name": "香坊区",
        "pId": "230100",
        "id": "230110"
    },
    {
        "name": "呼兰区",
        "pId": "230100",
        "id": "230111"
    },
    {
        "name": "阿城区",
        "pId": "230100",
        "id": "230112"
    },
    {
        "name": "双城区",
        "pId": "230100",
        "id": "230113"
    },
    {
        "name": "依兰县",
        "pId": "230100",
        "id": "230123"
    },
    {
        "name": "方正县",
        "pId": "230100",
        "id": "230124"
    },
    {
        "name": "宾县",
        "pId": "230100",
        "id": "230125"
    },
    {
        "name": "巴彦县",
        "pId": "230100",
        "id": "230126"
    },
    {
        "name": "木兰县",
        "pId": "230100",
        "id": "230127"
    },
    {
        "name": "通河县",
        "pId": "230100",
        "id": "230128"
    },
    {
        "name": "延寿县",
        "pId": "230100",
        "id": "230129"
    },
    {
        "name": "尚志市",
        "pId": "230100",
        "id": "230183"
    },
    {
        "name": "五常市",
        "pId": "230100",
        "id": "230184"
    },
    {
        "name": "齐齐哈尔市",
        "pId": "230000",
        "id": "230200"
    },
    {
        "name": "龙沙区",
        "pId": "230200",
        "id": "230202"
    },
    {
        "name": "建华区",
        "pId": "230200",
        "id": "230203"
    },
    {
        "name": "铁锋区",
        "pId": "230200",
        "id": "230204"
    },
    {
        "name": "昂昂溪区",
        "pId": "230200",
        "id": "230205"
    },
    {
        "name": "富拉尔基区",
        "pId": "230200",
        "id": "230206"
    },
    {
        "name": "碾子山区",
        "pId": "230200",
        "id": "230207"
    },
    {
        "name": "梅里斯达斡尔族区",
        "pId": "230200",
        "id": "230208"
    },
    {
        "name": "龙江县",
        "pId": "230200",
        "id": "230221"
    },
    {
        "name": "依安县",
        "pId": "230200",
        "id": "230223"
    },
    {
        "name": "泰来县",
        "pId": "230200",
        "id": "230224"
    },
    {
        "name": "甘南县",
        "pId": "230200",
        "id": "230225"
    },
    {
        "name": "富裕县",
        "pId": "230200",
        "id": "230227"
    },
    {
        "name": "克山县",
        "pId": "230200",
        "id": "230229"
    },
    {
        "name": "克东县",
        "pId": "230200",
        "id": "230230"
    },
    {
        "name": "拜泉县",
        "pId": "230200",
        "id": "230231"
    },
    {
        "name": "讷河市",
        "pId": "230200",
        "id": "230281"
    },
    {
        "name": "鸡西市",
        "pId": "230000",
        "id": "230300"
    },
    {
        "name": "鸡冠区",
        "pId": "230300",
        "id": "230302"
    },
    {
        "name": "恒山区",
        "pId": "230300",
        "id": "230303"
    },
    {
        "name": "滴道区",
        "pId": "230300",
        "id": "230304"
    },
    {
        "name": "梨树区",
        "pId": "230300",
        "id": "230305"
    },
    {
        "name": "城子河区",
        "pId": "230300",
        "id": "230306"
    },
    {
        "name": "麻山区",
        "pId": "230300",
        "id": "230307"
    },
    {
        "name": "鸡东县",
        "pId": "230300",
        "id": "230321"
    },
    {
        "name": "虎林市",
        "pId": "230300",
        "id": "230381"
    },
    {
        "name": "密山市",
        "pId": "230300",
        "id": "230382"
    },
    {
        "name": "鹤岗市",
        "pId": "230000",
        "id": "230400"
    },
    {
        "name": "向阳区",
        "pId": "230400",
        "id": "230402"
    },
    {
        "name": "工农区",
        "pId": "230400",
        "id": "230403"
    },
    {
        "name": "南山区",
        "pId": "230400",
        "id": "230404"
    },
    {
        "name": "兴安区",
        "pId": "230400",
        "id": "230405"
    },
    {
        "name": "东山区",
        "pId": "230400",
        "id": "230406"
    },
    {
        "name": "兴山区",
        "pId": "230400",
        "id": "230407"
    },
    {
        "name": "萝北县",
        "pId": "230400",
        "id": "230421"
    },
    {
        "name": "绥滨县",
        "pId": "230400",
        "id": "230422"
    },
    {
        "name": "双鸭山市",
        "pId": "230000",
        "id": "230500"
    },
    {
        "name": "尖山区",
        "pId": "230500",
        "id": "230502"
    },
    {
        "name": "岭东区",
        "pId": "230500",
        "id": "230503"
    },
    {
        "name": "四方台区",
        "pId": "230500",
        "id": "230505"
    },
    {
        "name": "宝山区",
        "pId": "230500",
        "id": "230506"
    },
    {
        "name": "集贤县",
        "pId": "230500",
        "id": "230521"
    },
    {
        "name": "友谊县",
        "pId": "230500",
        "id": "230522"
    },
    {
        "name": "宝清县",
        "pId": "230500",
        "id": "230523"
    },
    {
        "name": "饶河县",
        "pId": "230500",
        "id": "230524"
    },
    {
        "name": "大庆市",
        "pId": "230000",
        "id": "230600"
    },
    {
        "name": "萨尔图区",
        "pId": "230600",
        "id": "230602"
    },
    {
        "name": "龙凤区",
        "pId": "230600",
        "id": "230603"
    },
    {
        "name": "让胡路区",
        "pId": "230600",
        "id": "230604"
    },
    {
        "name": "红岗区",
        "pId": "230600",
        "id": "230605"
    },
    {
        "name": "大同区",
        "pId": "230600",
        "id": "230606"
    },
    {
        "name": "肇州县",
        "pId": "230600",
        "id": "230621"
    },
    {
        "name": "肇源县",
        "pId": "230600",
        "id": "230622"
    },
    {
        "name": "林甸县",
        "pId": "230600",
        "id": "230623"
    },
    {
        "name": "杜尔伯特蒙古族自治县",
        "pId": "230600",
        "id": "230624"
    },
    {
        "name": "伊春市",
        "pId": "230000",
        "id": "230700"
    },
    {
        "name": "伊春区",
        "pId": "230700",
        "id": "230702"
    },
    {
        "name": "南岔区",
        "pId": "230700",
        "id": "230703"
    },
    {
        "name": "友好区",
        "pId": "230700",
        "id": "230704"
    },
    {
        "name": "西林区",
        "pId": "230700",
        "id": "230705"
    },
    {
        "name": "翠峦区",
        "pId": "230700",
        "id": "230706"
    },
    {
        "name": "新青区",
        "pId": "230700",
        "id": "230707"
    },
    {
        "name": "美溪区",
        "pId": "230700",
        "id": "230708"
    },
    {
        "name": "金山屯区",
        "pId": "230700",
        "id": "230709"
    },
    {
        "name": "五营区",
        "pId": "230700",
        "id": "230710"
    },
    {
        "name": "乌马河区",
        "pId": "230700",
        "id": "230711"
    },
    {
        "name": "汤旺河区",
        "pId": "230700",
        "id": "230712"
    },
    {
        "name": "带岭区",
        "pId": "230700",
        "id": "230713"
    },
    {
        "name": "乌伊岭区",
        "pId": "230700",
        "id": "230714"
    },
    {
        "name": "红星区",
        "pId": "230700",
        "id": "230715"
    },
    {
        "name": "上甘岭区",
        "pId": "230700",
        "id": "230716"
    },
    {
        "name": "嘉荫县",
        "pId": "230700",
        "id": "230722"
    },
    {
        "name": "铁力市",
        "pId": "230700",
        "id": "230781"
    },
    {
        "name": "佳木斯市",
        "pId": "230000",
        "id": "230800"
    },
    {
        "name": "向阳区",
        "pId": "230800",
        "id": "230803"
    },
    {
        "name": "前进区",
        "pId": "230800",
        "id": "230804"
    },
    {
        "name": "东风区",
        "pId": "230800",
        "id": "230805"
    },
    {
        "name": "郊区",
        "pId": "230800",
        "id": "230811"
    },
    {
        "name": "桦南县",
        "pId": "230800",
        "id": "230822"
    },
    {
        "name": "桦川县",
        "pId": "230800",
        "id": "230826"
    },
    {
        "name": "汤原县",
        "pId": "230800",
        "id": "230828"
    },
    {
        "name": "抚远县",
        "pId": "230800",
        "id": "230833"
    },
    {
        "name": "同江市",
        "pId": "230800",
        "id": "230881"
    },
    {
        "name": "富锦市",
        "pId": "230800",
        "id": "230882"
    },
    {
        "name": "七台河市",
        "pId": "230000",
        "id": "230900"
    },
    {
        "name": "新兴区",
        "pId": "230900",
        "id": "230902"
    },
    {
        "name": "桃山区",
        "pId": "230900",
        "id": "230903"
    },
    {
        "name": "茄子河区",
        "pId": "230900",
        "id": "230904"
    },
    {
        "name": "勃利县",
        "pId": "230900",
        "id": "230921"
    },
    {
        "name": "牡丹江市",
        "pId": "230000",
        "id": "231000"
    },
    {
        "name": "东安区",
        "pId": "231000",
        "id": "231002"
    },
    {
        "name": "阳明区",
        "pId": "231000",
        "id": "231003"
    },
    {
        "name": "爱民区",
        "pId": "231000",
        "id": "231004"
    },
    {
        "name": "西安区",
        "pId": "231000",
        "id": "231005"
    },
    {
        "name": "东宁县",
        "pId": "231000",
        "id": "231024"
    },
    {
        "name": "林口县",
        "pId": "231000",
        "id": "231025"
    },
    {
        "name": "绥芬河市",
        "pId": "231000",
        "id": "231081"
    },
    {
        "name": "海林市",
        "pId": "231000",
        "id": "231083"
    },
    {
        "name": "宁安市",
        "pId": "231000",
        "id": "231084"
    },
    {
        "name": "穆棱市",
        "pId": "231000",
        "id": "231085"
    },
    {
        "name": "黑河市",
        "pId": "230000",
        "id": "231100"
    },
    {
        "name": "爱辉区",
        "pId": "231100",
        "id": "231102"
    },
    {
        "name": "嫩江县",
        "pId": "231100",
        "id": "231121"
    },
    {
        "name": "逊克县",
        "pId": "231100",
        "id": "231123"
    },
    {
        "name": "孙吴县",
        "pId": "231100",
        "id": "231124"
    },
    {
        "name": "北安市",
        "pId": "231100",
        "id": "231181"
    },
    {
        "name": "五大连池市",
        "pId": "231100",
        "id": "231182"
    },
    {
        "name": "绥化市",
        "pId": "230000",
        "id": "231200"
    },
    {
        "name": "北林区",
        "pId": "231200",
        "id": "231202"
    },
    {
        "name": "望奎县",
        "pId": "231200",
        "id": "231221"
    },
    {
        "name": "兰西县",
        "pId": "231200",
        "id": "231222"
    },
    {
        "name": "青冈县",
        "pId": "231200",
        "id": "231223"
    },
    {
        "name": "庆安县",
        "pId": "231200",
        "id": "231224"
    },
    {
        "name": "明水县",
        "pId": "231200",
        "id": "231225"
    },
    {
        "name": "绥棱县",
        "pId": "231200",
        "id": "231226"
    },
    {
        "name": "安达市",
        "pId": "231200",
        "id": "231281"
    },
    {
        "name": "肇东市",
        "pId": "231200",
        "id": "231282"
    },
    {
        "name": "海伦市",
        "pId": "231200",
        "id": "231283"
    },
    {
        "name": "大兴安岭地区",
        "pId": "230000",
        "id": "232700"
    },
    {
        "name": "加格达奇区",
        "pId": "232700",
        "id": "232701"
    },
    {
        "name": "新林区",
        "pId": "232700",
        "id": "232702"
    },
    {
        "name": "松岭区",
        "pId": "232700",
        "id": "232703"
    },
    {
        "name": "呼中区",
        "pId": "232700",
        "id": "232704"
    },
    {
        "name": "呼玛县",
        "pId": "232700",
        "id": "232721"
    },
    {
        "name": "塔河县",
        "pId": "232700",
        "id": "232722"
    },
    {
        "name": "漠河县",
        "pId": "232700",
        "id": "232723"
    },
    {
        "name": "上海",
        "pId": "100000",
        "id": "310000"
    },
    {
        "name": "上海市",
        "pId": "310000",
        "id": "310100"
    },
    {
        "name": "黄浦区",
        "pId": "310100",
        "id": "310101"
    },
    {
        "name": "徐汇区",
        "pId": "310100",
        "id": "310104"
    },
    {
        "name": "长宁区",
        "pId": "310100",
        "id": "310105"
    },
    {
        "name": "静安区",
        "pId": "310100",
        "id": "310106"
    },
    {
        "name": "普陀区",
        "pId": "310100",
        "id": "310107"
    },
    {
        "name": "闸北区",
        "pId": "310100",
        "id": "310108"
    },
    {
        "name": "虹口区",
        "pId": "310100",
        "id": "310109"
    },
    {
        "name": "杨浦区",
        "pId": "310100",
        "id": "310110"
    },
    {
        "name": "闵行区",
        "pId": "310100",
        "id": "310112"
    },
    {
        "name": "宝山区",
        "pId": "310100",
        "id": "310113"
    },
    {
        "name": "嘉定区",
        "pId": "310100",
        "id": "310114"
    },
    {
        "name": "浦东新区",
        "pId": "310100",
        "id": "310115"
    },
    {
        "name": "金山区",
        "pId": "310100",
        "id": "310116"
    },
    {
        "name": "松江区",
        "pId": "310100",
        "id": "310117"
    },
    {
        "name": "青浦区",
        "pId": "310100",
        "id": "310118"
    },
    {
        "name": "奉贤区",
        "pId": "310100",
        "id": "310120"
    },
    {
        "name": "崇明县",
        "pId": "310100",
        "id": "310230"
    },
    {
        "name": "江苏省",
        "pId": "100000",
        "id": "320000"
    },
    {
        "name": "南京市",
        "pId": "320000",
        "id": "320100"
    },
    {
        "name": "玄武区",
        "pId": "320100",
        "id": "320102"
    },
    {
        "name": "秦淮区",
        "pId": "320100",
        "id": "320104"
    },
    {
        "name": "建邺区",
        "pId": "320100",
        "id": "320105"
    },
    {
        "name": "鼓楼区",
        "pId": "320100",
        "id": "320106"
    },
    {
        "name": "浦口区",
        "pId": "320100",
        "id": "320111"
    },
    {
        "name": "栖霞区",
        "pId": "320100",
        "id": "320113"
    },
    {
        "name": "雨花台区",
        "pId": "320100",
        "id": "320114"
    },
    {
        "name": "江宁区",
        "pId": "320100",
        "id": "320115"
    },
    {
        "name": "六合区",
        "pId": "320100",
        "id": "320116"
    },
    {
        "name": "溧水区",
        "pId": "320100",
        "id": "320117"
    },
    {
        "name": "高淳区",
        "pId": "320100",
        "id": "320118"
    },
    {
        "name": "无锡市",
        "pId": "320000",
        "id": "320200"
    },
    {
        "name": "崇安区",
        "pId": "320200",
        "id": "320202"
    },
    {
        "name": "南长区",
        "pId": "320200",
        "id": "320203"
    },
    {
        "name": "北塘区",
        "pId": "320200",
        "id": "320204"
    },
    {
        "name": "锡山区",
        "pId": "320200",
        "id": "320205"
    },
    {
        "name": "惠山区",
        "pId": "320200",
        "id": "320206"
    },
    {
        "name": "滨湖区",
        "pId": "320200",
        "id": "320211"
    },
    {
        "name": "江阴市",
        "pId": "320200",
        "id": "320281"
    },
    {
        "name": "宜兴市",
        "pId": "320200",
        "id": "320282"
    },
    {
        "name": "徐州市",
        "pId": "320000",
        "id": "320300"
    },
    {
        "name": "鼓楼区",
        "pId": "320300",
        "id": "320302"
    },
    {
        "name": "云龙区",
        "pId": "320300",
        "id": "320303"
    },
    {
        "name": "贾汪区",
        "pId": "320300",
        "id": "320305"
    },
    {
        "name": "泉山区",
        "pId": "320300",
        "id": "320311"
    },
    {
        "name": "铜山区",
        "pId": "320300",
        "id": "320312"
    },
    {
        "name": "丰县",
        "pId": "320300",
        "id": "320321"
    },
    {
        "name": "沛县",
        "pId": "320300",
        "id": "320322"
    },
    {
        "name": "睢宁县",
        "pId": "320300",
        "id": "320324"
    },
    {
        "name": "新沂市",
        "pId": "320300",
        "id": "320381"
    },
    {
        "name": "邳州市",
        "pId": "320300",
        "id": "320382"
    },
    {
        "name": "常州市",
        "pId": "320000",
        "id": "320400"
    },
    {
        "name": "天宁区",
        "pId": "320400",
        "id": "320402"
    },
    {
        "name": "钟楼区",
        "pId": "320400",
        "id": "320404"
    },
    {
        "name": "戚墅堰区",
        "pId": "320400",
        "id": "320405"
    },
    {
        "name": "新北区",
        "pId": "320400",
        "id": "320411"
    },
    {
        "name": "武进区",
        "pId": "320400",
        "id": "320412"
    },
    {
        "name": "溧阳市",
        "pId": "320400",
        "id": "320481"
    },
    {
        "name": "金坛市",
        "pId": "320400",
        "id": "320482"
    },
    {
        "name": "苏州市",
        "pId": "320000",
        "id": "320500"
    },
    {
        "name": "虎丘区",
        "pId": "320500",
        "id": "320505"
    },
    {
        "name": "吴中区",
        "pId": "320500",
        "id": "320506"
    },
    {
        "name": "相城区",
        "pId": "320500",
        "id": "320507"
    },
    {
        "name": "姑苏区",
        "pId": "320500",
        "id": "320508"
    },
    {
        "name": "吴江区",
        "pId": "320500",
        "id": "320509"
    },
    {
        "name": "常熟市",
        "pId": "320500",
        "id": "320581"
    },
    {
        "name": "张家港市",
        "pId": "320500",
        "id": "320582"
    },
    {
        "name": "昆山市",
        "pId": "320500",
        "id": "320583"
    },
    {
        "name": "太仓市",
        "pId": "320500",
        "id": "320585"
    },
    {
        "name": "南通市",
        "pId": "320000",
        "id": "320600"
    },
    {
        "name": "崇川区",
        "pId": "320600",
        "id": "320602"
    },
    {
        "name": "港闸区",
        "pId": "320600",
        "id": "320611"
    },
    {
        "name": "通州区",
        "pId": "320600",
        "id": "320612"
    },
    {
        "name": "海安县",
        "pId": "320600",
        "id": "320621"
    },
    {
        "name": "如东县",
        "pId": "320600",
        "id": "320623"
    },
    {
        "name": "启东市",
        "pId": "320600",
        "id": "320681"
    },
    {
        "name": "如皋市",
        "pId": "320600",
        "id": "320682"
    },
    {
        "name": "海门市",
        "pId": "320600",
        "id": "320684"
    },
    {
        "name": "连云港市",
        "pId": "320000",
        "id": "320700"
    },
    {
        "name": "连云区",
        "pId": "320700",
        "id": "320703"
    },
    {
        "name": "海州区",
        "pId": "320700",
        "id": "320706"
    },
    {
        "name": "赣榆区",
        "pId": "320700",
        "id": "320707"
    },
    {
        "name": "东海县",
        "pId": "320700",
        "id": "320722"
    },
    {
        "name": "灌云县",
        "pId": "320700",
        "id": "320723"
    },
    {
        "name": "灌南县",
        "pId": "320700",
        "id": "320724"
    },
    {
        "name": "淮安市",
        "pId": "320000",
        "id": "320800"
    },
    {
        "name": "清河区",
        "pId": "320800",
        "id": "320802"
    },
    {
        "name": "淮安区",
        "pId": "320800",
        "id": "320803"
    },
    {
        "name": "淮阴区",
        "pId": "320800",
        "id": "320804"
    },
    {
        "name": "清浦区",
        "pId": "320800",
        "id": "320811"
    },
    {
        "name": "涟水县",
        "pId": "320800",
        "id": "320826"
    },
    {
        "name": "洪泽县",
        "pId": "320800",
        "id": "320829"
    },
    {
        "name": "盱眙县",
        "pId": "320800",
        "id": "320830"
    },
    {
        "name": "金湖县",
        "pId": "320800",
        "id": "320831"
    },
    {
        "name": "盐城市",
        "pId": "320000",
        "id": "320900"
    },
    {
        "name": "亭湖区",
        "pId": "320900",
        "id": "320902"
    },
    {
        "name": "盐都区",
        "pId": "320900",
        "id": "320903"
    },
    {
        "name": "响水县",
        "pId": "320900",
        "id": "320921"
    },
    {
        "name": "滨海县",
        "pId": "320900",
        "id": "320922"
    },
    {
        "name": "阜宁县",
        "pId": "320900",
        "id": "320923"
    },
    {
        "name": "射阳县",
        "pId": "320900",
        "id": "320924"
    },
    {
        "name": "建湖县",
        "pId": "320900",
        "id": "320925"
    },
    {
        "name": "东台市",
        "pId": "320900",
        "id": "320981"
    },
    {
        "name": "大丰市",
        "pId": "320900",
        "id": "320982"
    },
    {
        "name": "扬州市",
        "pId": "320000",
        "id": "321000"
    },
    {
        "name": "广陵区",
        "pId": "321000",
        "id": "321002"
    },
    {
        "name": "邗江区",
        "pId": "321000",
        "id": "321003"
    },
    {
        "name": "江都区",
        "pId": "321000",
        "id": "321012"
    },
    {
        "name": "宝应县",
        "pId": "321000",
        "id": "321023"
    },
    {
        "name": "仪征市",
        "pId": "321000",
        "id": "321081"
    },
    {
        "name": "高邮市",
        "pId": "321000",
        "id": "321084"
    },
    {
        "name": "镇江市",
        "pId": "320000",
        "id": "321100"
    },
    {
        "name": "京口区",
        "pId": "321100",
        "id": "321102"
    },
    {
        "name": "润州区",
        "pId": "321100",
        "id": "321111"
    },
    {
        "name": "丹徒区",
        "pId": "321100",
        "id": "321112"
    },
    {
        "name": "丹阳市",
        "pId": "321100",
        "id": "321181"
    },
    {
        "name": "扬中市",
        "pId": "321100",
        "id": "321182"
    },
    {
        "name": "句容市",
        "pId": "321100",
        "id": "321183"
    },
    {
        "name": "泰州市",
        "pId": "320000",
        "id": "321200"
    },
    {
        "name": "海陵区",
        "pId": "321200",
        "id": "321202"
    },
    {
        "name": "高港区",
        "pId": "321200",
        "id": "321203"
    },
    {
        "name": "姜堰区",
        "pId": "321200",
        "id": "321204"
    },
    {
        "name": "兴化市",
        "pId": "321200",
        "id": "321281"
    },
    {
        "name": "靖江市",
        "pId": "321200",
        "id": "321282"
    },
    {
        "name": "泰兴市",
        "pId": "321200",
        "id": "321283"
    },
    {
        "name": "宿迁市",
        "pId": "320000",
        "id": "321300"
    },
    {
        "name": "宿城区",
        "pId": "321300",
        "id": "321302"
    },
    {
        "name": "宿豫区",
        "pId": "321300",
        "id": "321311"
    },
    {
        "name": "沭阳县",
        "pId": "321300",
        "id": "321322"
    },
    {
        "name": "泗阳县",
        "pId": "321300",
        "id": "321323"
    },
    {
        "name": "泗洪县",
        "pId": "321300",
        "id": "321324"
    },
    {
        "name": "浙江省",
        "pId": "100000",
        "id": "330000"
    },
    {
        "name": "杭州市",
        "pId": "330000",
        "id": "330100"
    },
    {
        "name": "上城区",
        "pId": "330100",
        "id": "330102"
    },
    {
        "name": "下城区",
        "pId": "330100",
        "id": "330103"
    },
    {
        "name": "江干区",
        "pId": "330100",
        "id": "330104"
    },
    {
        "name": "拱墅区",
        "pId": "330100",
        "id": "330105"
    },
    {
        "name": "西湖区",
        "pId": "330100",
        "id": "330106"
    },
    {
        "name": "滨江区",
        "pId": "330100",
        "id": "330108"
    },
    {
        "name": "萧山区",
        "pId": "330100",
        "id": "330109"
    },
    {
        "name": "余杭区",
        "pId": "330100",
        "id": "330110"
    },
    {
        "name": "桐庐县",
        "pId": "330100",
        "id": "330122"
    },
    {
        "name": "淳安县",
        "pId": "330100",
        "id": "330127"
    },
    {
        "name": "建德市",
        "pId": "330100",
        "id": "330182"
    },
    {
        "name": "富阳区",
        "pId": "330100",
        "id": "330183"
    },
    {
        "name": "临安市",
        "pId": "330100",
        "id": "330185"
    },
    {
        "name": "宁波市",
        "pId": "330000",
        "id": "330200"
    },
    {
        "name": "海曙区",
        "pId": "330200",
        "id": "330203"
    },
    {
        "name": "江东区",
        "pId": "330200",
        "id": "330204"
    },
    {
        "name": "江北区",
        "pId": "330200",
        "id": "330205"
    },
    {
        "name": "北仑区",
        "pId": "330200",
        "id": "330206"
    },
    {
        "name": "镇海区",
        "pId": "330200",
        "id": "330211"
    },
    {
        "name": "鄞州区",
        "pId": "330200",
        "id": "330212"
    },
    {
        "name": "象山县",
        "pId": "330200",
        "id": "330225"
    },
    {
        "name": "宁海县",
        "pId": "330200",
        "id": "330226"
    },
    {
        "name": "余姚市",
        "pId": "330200",
        "id": "330281"
    },
    {
        "name": "慈溪市",
        "pId": "330200",
        "id": "330282"
    },
    {
        "name": "奉化市",
        "pId": "330200",
        "id": "330283"
    },
    {
        "name": "温州市",
        "pId": "330000",
        "id": "330300"
    },
    {
        "name": "鹿城区",
        "pId": "330300",
        "id": "330302"
    },
    {
        "name": "龙湾区",
        "pId": "330300",
        "id": "330303"
    },
    {
        "name": "瓯海区",
        "pId": "330300",
        "id": "330304"
    },
    {
        "name": "洞头县",
        "pId": "330300",
        "id": "330322"
    },
    {
        "name": "永嘉县",
        "pId": "330300",
        "id": "330324"
    },
    {
        "name": "平阳县",
        "pId": "330300",
        "id": "330326"
    },
    {
        "name": "苍南县",
        "pId": "330300",
        "id": "330327"
    },
    {
        "name": "文成县",
        "pId": "330300",
        "id": "330328"
    },
    {
        "name": "泰顺县",
        "pId": "330300",
        "id": "330329"
    },
    {
        "name": "瑞安市",
        "pId": "330300",
        "id": "330381"
    },
    {
        "name": "乐清市",
        "pId": "330300",
        "id": "330382"
    },
    {
        "name": "嘉兴市",
        "pId": "330000",
        "id": "330400"
    },
    {
        "name": "南湖区",
        "pId": "330400",
        "id": "330402"
    },
    {
        "name": "秀洲区",
        "pId": "330400",
        "id": "330411"
    },
    {
        "name": "嘉善县",
        "pId": "330400",
        "id": "330421"
    },
    {
        "name": "海盐县",
        "pId": "330400",
        "id": "330424"
    },
    {
        "name": "海宁市",
        "pId": "330400",
        "id": "330481"
    },
    {
        "name": "平湖市",
        "pId": "330400",
        "id": "330482"
    },
    {
        "name": "桐乡市",
        "pId": "330400",
        "id": "330483"
    },
    {
        "name": "湖州市",
        "pId": "330000",
        "id": "330500"
    },
    {
        "name": "吴兴区",
        "pId": "330500",
        "id": "330502"
    },
    {
        "name": "南浔区",
        "pId": "330500",
        "id": "330503"
    },
    {
        "name": "德清县",
        "pId": "330500",
        "id": "330521"
    },
    {
        "name": "长兴县",
        "pId": "330500",
        "id": "330522"
    },
    {
        "name": "安吉县",
        "pId": "330500",
        "id": "330523"
    },
    {
        "name": "绍兴市",
        "pId": "330000",
        "id": "330600"
    },
    {
        "name": "越城区",
        "pId": "330600",
        "id": "330602"
    },
    {
        "name": "柯桥区",
        "pId": "330600",
        "id": "330603"
    },
    {
        "name": "上虞区",
        "pId": "330600",
        "id": "330604"
    },
    {
        "name": "新昌县",
        "pId": "330600",
        "id": "330624"
    },
    {
        "name": "诸暨市",
        "pId": "330600",
        "id": "330681"
    },
    {
        "name": "嵊州市",
        "pId": "330600",
        "id": "330683"
    },
    {
        "name": "金华市",
        "pId": "330000",
        "id": "330700"
    },
    {
        "name": "婺城区",
        "pId": "330700",
        "id": "330702"
    },
    {
        "name": "金东区",
        "pId": "330700",
        "id": "330703"
    },
    {
        "name": "武义县",
        "pId": "330700",
        "id": "330723"
    },
    {
        "name": "浦江县",
        "pId": "330700",
        "id": "330726"
    },
    {
        "name": "磐安县",
        "pId": "330700",
        "id": "330727"
    },
    {
        "name": "兰溪市",
        "pId": "330700",
        "id": "330781"
    },
    {
        "name": "义乌市",
        "pId": "330700",
        "id": "330782"
    },
    {
        "name": "东阳市",
        "pId": "330700",
        "id": "330783"
    },
    {
        "name": "永康市",
        "pId": "330700",
        "id": "330784"
    },
    {
        "name": "衢州市",
        "pId": "330000",
        "id": "330800"
    },
    {
        "name": "柯城区",
        "pId": "330800",
        "id": "330802"
    },
    {
        "name": "衢江区",
        "pId": "330800",
        "id": "330803"
    },
    {
        "name": "常山县",
        "pId": "330800",
        "id": "330822"
    },
    {
        "name": "开化县",
        "pId": "330800",
        "id": "330824"
    },
    {
        "name": "龙游县",
        "pId": "330800",
        "id": "330825"
    },
    {
        "name": "江山市",
        "pId": "330800",
        "id": "330881"
    },
    {
        "name": "舟山市",
        "pId": "330000",
        "id": "330900"
    },
    {
        "name": "定海区",
        "pId": "330900",
        "id": "330902"
    },
    {
        "name": "普陀区",
        "pId": "330900",
        "id": "330903"
    },
    {
        "name": "岱山县",
        "pId": "330900",
        "id": "330921"
    },
    {
        "name": "嵊泗县",
        "pId": "330900",
        "id": "330922"
    },
    {
        "name": "台州市",
        "pId": "330000",
        "id": "331000"
    },
    {
        "name": "椒江区",
        "pId": "331000",
        "id": "331002"
    },
    {
        "name": "黄岩区",
        "pId": "331000",
        "id": "331003"
    },
    {
        "name": "路桥区",
        "pId": "331000",
        "id": "331004"
    },
    {
        "name": "玉环县",
        "pId": "331000",
        "id": "331021"
    },
    {
        "name": "三门县",
        "pId": "331000",
        "id": "331022"
    },
    {
        "name": "天台县",
        "pId": "331000",
        "id": "331023"
    },
    {
        "name": "仙居县",
        "pId": "331000",
        "id": "331024"
    },
    {
        "name": "温岭市",
        "pId": "331000",
        "id": "331081"
    },
    {
        "name": "临海市",
        "pId": "331000",
        "id": "331082"
    },
    {
        "name": "丽水市",
        "pId": "330000",
        "id": "331100"
    },
    {
        "name": "莲都区",
        "pId": "331100",
        "id": "331102"
    },
    {
        "name": "青田县",
        "pId": "331100",
        "id": "331121"
    },
    {
        "name": "缙云县",
        "pId": "331100",
        "id": "331122"
    },
    {
        "name": "遂昌县",
        "pId": "331100",
        "id": "331123"
    },
    {
        "name": "松阳县",
        "pId": "331100",
        "id": "331124"
    },
    {
        "name": "云和县",
        "pId": "331100",
        "id": "331125"
    },
    {
        "name": "庆元县",
        "pId": "331100",
        "id": "331126"
    },
    {
        "name": "景宁畲族自治县",
        "pId": "331100",
        "id": "331127"
    },
    {
        "name": "龙泉市",
        "pId": "331100",
        "id": "331181"
    },
    {
        "name": "舟山群岛新区",
        "pId": "330000",
        "id": "331200"
    },
    {
        "name": "金塘岛",
        "pId": "331200",
        "id": "331201"
    },
    {
        "name": "六横岛",
        "pId": "331200",
        "id": "331202"
    },
    {
        "name": "衢山岛",
        "pId": "331200",
        "id": "331203"
    },
    {
        "name": "舟山本岛西北部",
        "pId": "331200",
        "id": "331204"
    },
    {
        "name": "岱山岛西南部",
        "pId": "331200",
        "id": "331205"
    },
    {
        "name": "泗礁岛",
        "pId": "331200",
        "id": "331206"
    },
    {
        "name": "朱家尖岛",
        "pId": "331200",
        "id": "331207"
    },
    {
        "name": "洋山岛",
        "pId": "331200",
        "id": "331208"
    },
    {
        "name": "长涂岛",
        "pId": "331200",
        "id": "331209"
    },
    {
        "name": "虾峙岛",
        "pId": "331200",
        "id": "331210"
    },
    {
        "name": "安徽省",
        "pId": "100000",
        "id": "340000"
    },
    {
        "name": "合肥市",
        "pId": "340000",
        "id": "340100"
    },
    {
        "name": "瑶海区",
        "pId": "340100",
        "id": "340102"
    },
    {
        "name": "庐阳区",
        "pId": "340100",
        "id": "340103"
    },
    {
        "name": "蜀山区",
        "pId": "340100",
        "id": "340104"
    },
    {
        "name": "包河区",
        "pId": "340100",
        "id": "340111"
    },
    {
        "name": "长丰县",
        "pId": "340100",
        "id": "340121"
    },
    {
        "name": "肥东县",
        "pId": "340100",
        "id": "340122"
    },
    {
        "name": "肥西县",
        "pId": "340100",
        "id": "340123"
    },
    {
        "name": "庐江县",
        "pId": "340100",
        "id": "340124"
    },
    {
        "name": "巢湖市",
        "pId": "340100",
        "id": "340181"
    },
    {
        "name": "芜湖市",
        "pId": "340000",
        "id": "340200"
    },
    {
        "name": "镜湖区",
        "pId": "340200",
        "id": "340202"
    },
    {
        "name": "弋江区",
        "pId": "340200",
        "id": "340203"
    },
    {
        "name": "鸠江区",
        "pId": "340200",
        "id": "340207"
    },
    {
        "name": "三山区",
        "pId": "340200",
        "id": "340208"
    },
    {
        "name": "芜湖县",
        "pId": "340200",
        "id": "340221"
    },
    {
        "name": "繁昌县",
        "pId": "340200",
        "id": "340222"
    },
    {
        "name": "南陵县",
        "pId": "340200",
        "id": "340223"
    },
    {
        "name": "无为县",
        "pId": "340200",
        "id": "340225"
    },
    {
        "name": "蚌埠市",
        "pId": "340000",
        "id": "340300"
    },
    {
        "name": "龙子湖区",
        "pId": "340300",
        "id": "340302"
    },
    {
        "name": "蚌山区",
        "pId": "340300",
        "id": "340303"
    },
    {
        "name": "禹会区",
        "pId": "340300",
        "id": "340304"
    },
    {
        "name": "淮上区",
        "pId": "340300",
        "id": "340311"
    },
    {
        "name": "怀远县",
        "pId": "340300",
        "id": "340321"
    },
    {
        "name": "五河县",
        "pId": "340300",
        "id": "340322"
    },
    {
        "name": "固镇县",
        "pId": "340300",
        "id": "340323"
    },
    {
        "name": "淮南市",
        "pId": "340000",
        "id": "340400"
    },
    {
        "name": "大通区",
        "pId": "340400",
        "id": "340402"
    },
    {
        "name": "田家庵区",
        "pId": "340400",
        "id": "340403"
    },
    {
        "name": "谢家集区",
        "pId": "340400",
        "id": "340404"
    },
    {
        "name": "八公山区",
        "pId": "340400",
        "id": "340405"
    },
    {
        "name": "潘集区",
        "pId": "340400",
        "id": "340406"
    },
    {
        "name": "凤台县",
        "pId": "340400",
        "id": "340421"
    },
    {
        "name": "马鞍山市",
        "pId": "340000",
        "id": "340500"
    },
    {
        "name": "花山区",
        "pId": "340500",
        "id": "340503"
    },
    {
        "name": "雨山区",
        "pId": "340500",
        "id": "340504"
    },
    {
        "name": "博望区",
        "pId": "340500",
        "id": "340506"
    },
    {
        "name": "当涂县",
        "pId": "340500",
        "id": "340521"
    },
    {
        "name": "含山县",
        "pId": "340500",
        "id": "340522"
    },
    {
        "name": "和县",
        "pId": "340500",
        "id": "340523"
    },
    {
        "name": "淮北市",
        "pId": "340000",
        "id": "340600"
    },
    {
        "name": "杜集区",
        "pId": "340600",
        "id": "340602"
    },
    {
        "name": "相山区",
        "pId": "340600",
        "id": "340603"
    },
    {
        "name": "烈山区",
        "pId": "340600",
        "id": "340604"
    },
    {
        "name": "濉溪县",
        "pId": "340600",
        "id": "340621"
    },
    {
        "name": "铜陵市",
        "pId": "340000",
        "id": "340700"
    },
    {
        "name": "铜官山区",
        "pId": "340700",
        "id": "340702"
    },
    {
        "name": "狮子山区",
        "pId": "340700",
        "id": "340703"
    },
    {
        "name": "郊区",
        "pId": "340700",
        "id": "340711"
    },
    {
        "name": "铜陵县",
        "pId": "340700",
        "id": "340721"
    },
    {
        "name": "安庆市",
        "pId": "340000",
        "id": "340800"
    },
    {
        "name": "迎江区",
        "pId": "340800",
        "id": "340802"
    },
    {
        "name": "大观区",
        "pId": "340800",
        "id": "340803"
    },
    {
        "name": "宜秀区",
        "pId": "340800",
        "id": "340811"
    },
    {
        "name": "怀宁县",
        "pId": "340800",
        "id": "340822"
    },
    {
        "name": "枞阳县",
        "pId": "340800",
        "id": "340823"
    },
    {
        "name": "潜山县",
        "pId": "340800",
        "id": "340824"
    },
    {
        "name": "太湖县",
        "pId": "340800",
        "id": "340825"
    },
    {
        "name": "宿松县",
        "pId": "340800",
        "id": "340826"
    },
    {
        "name": "望江县",
        "pId": "340800",
        "id": "340827"
    },
    {
        "name": "岳西县",
        "pId": "340800",
        "id": "340828"
    },
    {
        "name": "桐城市",
        "pId": "340800",
        "id": "340881"
    },
    {
        "name": "黄山市",
        "pId": "340000",
        "id": "341000"
    },
    {
        "name": "屯溪区",
        "pId": "341000",
        "id": "341002"
    },
    {
        "name": "黄山区",
        "pId": "341000",
        "id": "341003"
    },
    {
        "name": "徽州区",
        "pId": "341000",
        "id": "341004"
    },
    {
        "name": "歙县",
        "pId": "341000",
        "id": "341021"
    },
    {
        "name": "休宁县",
        "pId": "341000",
        "id": "341022"
    },
    {
        "name": "黟县",
        "pId": "341000",
        "id": "341023"
    },
    {
        "name": "祁门县",
        "pId": "341000",
        "id": "341024"
    },
    {
        "name": "滁州市",
        "pId": "340000",
        "id": "341100"
    },
    {
        "name": "琅琊区",
        "pId": "341100",
        "id": "341102"
    },
    {
        "name": "南谯区",
        "pId": "341100",
        "id": "341103"
    },
    {
        "name": "来安县",
        "pId": "341100",
        "id": "341122"
    },
    {
        "name": "全椒县",
        "pId": "341100",
        "id": "341124"
    },
    {
        "name": "定远县",
        "pId": "341100",
        "id": "341125"
    },
    {
        "name": "凤阳县",
        "pId": "341100",
        "id": "341126"
    },
    {
        "name": "天长市",
        "pId": "341100",
        "id": "341181"
    },
    {
        "name": "明光市",
        "pId": "341100",
        "id": "341182"
    },
    {
        "name": "阜阳市",
        "pId": "340000",
        "id": "341200"
    },
    {
        "name": "颍州区",
        "pId": "341200",
        "id": "341202"
    },
    {
        "name": "颍东区",
        "pId": "341200",
        "id": "341203"
    },
    {
        "name": "颍泉区",
        "pId": "341200",
        "id": "341204"
    },
    {
        "name": "临泉县",
        "pId": "341200",
        "id": "341221"
    },
    {
        "name": "太和县",
        "pId": "341200",
        "id": "341222"
    },
    {
        "name": "阜南县",
        "pId": "341200",
        "id": "341225"
    },
    {
        "name": "颍上县",
        "pId": "341200",
        "id": "341226"
    },
    {
        "name": "界首市",
        "pId": "341200",
        "id": "341282"
    },
    {
        "name": "宿州市",
        "pId": "340000",
        "id": "341300"
    },
    {
        "name": "埇桥区",
        "pId": "341300",
        "id": "341302"
    },
    {
        "name": "砀山县",
        "pId": "341300",
        "id": "341321"
    },
    {
        "name": "萧县",
        "pId": "341300",
        "id": "341322"
    },
    {
        "name": "灵璧县",
        "pId": "341300",
        "id": "341323"
    },
    {
        "name": "泗县",
        "pId": "341300",
        "id": "341324"
    },
    {
        "name": "六安市",
        "pId": "340000",
        "id": "341500"
    },
    {
        "name": "金安区",
        "pId": "341500",
        "id": "341502"
    },
    {
        "name": "裕安区",
        "pId": "341500",
        "id": "341503"
    },
    {
        "name": "寿县",
        "pId": "341500",
        "id": "341521"
    },
    {
        "name": "霍邱县",
        "pId": "341500",
        "id": "341522"
    },
    {
        "name": "舒城县",
        "pId": "341500",
        "id": "341523"
    },
    {
        "name": "金寨县",
        "pId": "341500",
        "id": "341524"
    },
    {
        "name": "霍山县",
        "pId": "341500",
        "id": "341525"
    },
    {
        "name": "亳州市",
        "pId": "340000",
        "id": "341600"
    },
    {
        "name": "谯城区",
        "pId": "341600",
        "id": "341602"
    },
    {
        "name": "涡阳县",
        "pId": "341600",
        "id": "341621"
    },
    {
        "name": "蒙城县",
        "pId": "341600",
        "id": "341622"
    },
    {
        "name": "利辛县",
        "pId": "341600",
        "id": "341623"
    },
    {
        "name": "池州市",
        "pId": "340000",
        "id": "341700"
    },
    {
        "name": "贵池区",
        "pId": "341700",
        "id": "341702"
    },
    {
        "name": "东至县",
        "pId": "341700",
        "id": "341721"
    },
    {
        "name": "石台县",
        "pId": "341700",
        "id": "341722"
    },
    {
        "name": "青阳县",
        "pId": "341700",
        "id": "341723"
    },
    {
        "name": "宣城市",
        "pId": "340000",
        "id": "341800"
    },
    {
        "name": "宣州区",
        "pId": "341800",
        "id": "341802"
    },
    {
        "name": "郎溪县",
        "pId": "341800",
        "id": "341821"
    },
    {
        "name": "广德县",
        "pId": "341800",
        "id": "341822"
    },
    {
        "name": "泾县",
        "pId": "341800",
        "id": "341823"
    },
    {
        "name": "绩溪县",
        "pId": "341800",
        "id": "341824"
    },
    {
        "name": "旌德县",
        "pId": "341800",
        "id": "341825"
    },
    {
        "name": "宁国市",
        "pId": "341800",
        "id": "341881"
    },
    {
        "name": "福建省",
        "pId": "100000",
        "id": "350000"
    },
    {
        "name": "福州市",
        "pId": "350000",
        "id": "350100"
    },
    {
        "name": "鼓楼区",
        "pId": "350100",
        "id": "350102"
    },
    {
        "name": "台江区",
        "pId": "350100",
        "id": "350103"
    },
    {
        "name": "仓山区",
        "pId": "350100",
        "id": "350104"
    },
    {
        "name": "马尾区",
        "pId": "350100",
        "id": "350105"
    },
    {
        "name": "晋安区",
        "pId": "350100",
        "id": "350111"
    },
    {
        "name": "闽侯县",
        "pId": "350100",
        "id": "350121"
    },
    {
        "name": "连江县",
        "pId": "350100",
        "id": "350122"
    },
    {
        "name": "罗源县",
        "pId": "350100",
        "id": "350123"
    },
    {
        "name": "闽清县",
        "pId": "350100",
        "id": "350124"
    },
    {
        "name": "永泰县",
        "pId": "350100",
        "id": "350125"
    },
    {
        "name": "平潭县",
        "pId": "350100",
        "id": "350128"
    },
    {
        "name": "福清市",
        "pId": "350100",
        "id": "350181"
    },
    {
        "name": "长乐市",
        "pId": "350100",
        "id": "350182"
    },
    {
        "name": "厦门市",
        "pId": "350000",
        "id": "350200"
    },
    {
        "name": "思明区",
        "pId": "350200",
        "id": "350203"
    },
    {
        "name": "海沧区",
        "pId": "350200",
        "id": "350205"
    },
    {
        "name": "湖里区",
        "pId": "350200",
        "id": "350206"
    },
    {
        "name": "集美区",
        "pId": "350200",
        "id": "350211"
    },
    {
        "name": "同安区",
        "pId": "350200",
        "id": "350212"
    },
    {
        "name": "翔安区",
        "pId": "350200",
        "id": "350213"
    },
    {
        "name": "莆田市",
        "pId": "350000",
        "id": "350300"
    },
    {
        "name": "城厢区",
        "pId": "350300",
        "id": "350302"
    },
    {
        "name": "涵江区",
        "pId": "350300",
        "id": "350303"
    },
    {
        "name": "荔城区",
        "pId": "350300",
        "id": "350304"
    },
    {
        "name": "秀屿区",
        "pId": "350300",
        "id": "350305"
    },
    {
        "name": "仙游县",
        "pId": "350300",
        "id": "350322"
    },
    {
        "name": "三明市",
        "pId": "350000",
        "id": "350400"
    },
    {
        "name": "梅列区",
        "pId": "350400",
        "id": "350402"
    },
    {
        "name": "三元区",
        "pId": "350400",
        "id": "350403"
    },
    {
        "name": "明溪县",
        "pId": "350400",
        "id": "350421"
    },
    {
        "name": "清流县",
        "pId": "350400",
        "id": "350423"
    },
    {
        "name": "宁化县",
        "pId": "350400",
        "id": "350424"
    },
    {
        "name": "大田县",
        "pId": "350400",
        "id": "350425"
    },
    {
        "name": "尤溪县",
        "pId": "350400",
        "id": "350426"
    },
    {
        "name": "沙县",
        "pId": "350400",
        "id": "350427"
    },
    {
        "name": "将乐县",
        "pId": "350400",
        "id": "350428"
    },
    {
        "name": "泰宁县",
        "pId": "350400",
        "id": "350429"
    },
    {
        "name": "建宁县",
        "pId": "350400",
        "id": "350430"
    },
    {
        "name": "永安市",
        "pId": "350400",
        "id": "350481"
    },
    {
        "name": "泉州市",
        "pId": "350000",
        "id": "350500"
    },
    {
        "name": "鲤城区",
        "pId": "350500",
        "id": "350502"
    },
    {
        "name": "丰泽区",
        "pId": "350500",
        "id": "350503"
    },
    {
        "name": "洛江区",
        "pId": "350500",
        "id": "350504"
    },
    {
        "name": "泉港区",
        "pId": "350500",
        "id": "350505"
    },
    {
        "name": "惠安县",
        "pId": "350500",
        "id": "350521"
    },
    {
        "name": "安溪县",
        "pId": "350500",
        "id": "350524"
    },
    {
        "name": "永春县",
        "pId": "350500",
        "id": "350525"
    },
    {
        "name": "德化县",
        "pId": "350500",
        "id": "350526"
    },
    {
        "name": "金门县",
        "pId": "350500",
        "id": "350527"
    },
    {
        "name": "石狮市",
        "pId": "350500",
        "id": "350581"
    },
    {
        "name": "晋江市",
        "pId": "350500",
        "id": "350582"
    },
    {
        "name": "南安市",
        "pId": "350500",
        "id": "350583"
    },
    {
        "name": "漳州市",
        "pId": "350000",
        "id": "350600"
    },
    {
        "name": "芗城区",
        "pId": "350600",
        "id": "350602"
    },
    {
        "name": "龙文区",
        "pId": "350600",
        "id": "350603"
    },
    {
        "name": "云霄县",
        "pId": "350600",
        "id": "350622"
    },
    {
        "name": "漳浦县",
        "pId": "350600",
        "id": "350623"
    },
    {
        "name": "诏安县",
        "pId": "350600",
        "id": "350624"
    },
    {
        "name": "长泰县",
        "pId": "350600",
        "id": "350625"
    },
    {
        "name": "东山县",
        "pId": "350600",
        "id": "350626"
    },
    {
        "name": "南靖县",
        "pId": "350600",
        "id": "350627"
    },
    {
        "name": "平和县",
        "pId": "350600",
        "id": "350628"
    },
    {
        "name": "华安县",
        "pId": "350600",
        "id": "350629"
    },
    {
        "name": "龙海市",
        "pId": "350600",
        "id": "350681"
    },
    {
        "name": "南平市",
        "pId": "350000",
        "id": "350700"
    },
    {
        "name": "延平区",
        "pId": "350700",
        "id": "350702"
    },
    {
        "name": "建阳区",
        "pId": "350700",
        "id": "350703"
    },
    {
        "name": "顺昌县",
        "pId": "350700",
        "id": "350721"
    },
    {
        "name": "浦城县",
        "pId": "350700",
        "id": "350722"
    },
    {
        "name": "光泽县",
        "pId": "350700",
        "id": "350723"
    },
    {
        "name": "松溪县",
        "pId": "350700",
        "id": "350724"
    },
    {
        "name": "政和县",
        "pId": "350700",
        "id": "350725"
    },
    {
        "name": "邵武市",
        "pId": "350700",
        "id": "350781"
    },
    {
        "name": "武夷山市",
        "pId": "350700",
        "id": "350782"
    },
    {
        "name": "建瓯市",
        "pId": "350700",
        "id": "350783"
    },
    {
        "name": "龙岩市",
        "pId": "350000",
        "id": "350800"
    },
    {
        "name": "新罗区",
        "pId": "350800",
        "id": "350802"
    },
    {
        "name": "长汀县",
        "pId": "350800",
        "id": "350821"
    },
    {
        "name": "永定区",
        "pId": "350800",
        "id": "350822"
    },
    {
        "name": "上杭县",
        "pId": "350800",
        "id": "350823"
    },
    {
        "name": "武平县",
        "pId": "350800",
        "id": "350824"
    },
    {
        "name": "连城县",
        "pId": "350800",
        "id": "350825"
    },
    {
        "name": "漳平市",
        "pId": "350800",
        "id": "350881"
    },
    {
        "name": "宁德市",
        "pId": "350000",
        "id": "350900"
    },
    {
        "name": "蕉城区",
        "pId": "350900",
        "id": "350902"
    },
    {
        "name": "霞浦县",
        "pId": "350900",
        "id": "350921"
    },
    {
        "name": "古田县",
        "pId": "350900",
        "id": "350922"
    },
    {
        "name": "屏南县",
        "pId": "350900",
        "id": "350923"
    },
    {
        "name": "寿宁县",
        "pId": "350900",
        "id": "350924"
    },
    {
        "name": "周宁县",
        "pId": "350900",
        "id": "350925"
    },
    {
        "name": "柘荣县",
        "pId": "350900",
        "id": "350926"
    },
    {
        "name": "福安市",
        "pId": "350900",
        "id": "350981"
    },
    {
        "name": "福鼎市",
        "pId": "350900",
        "id": "350982"
    },
    {
        "name": "江西省",
        "pId": "100000",
        "id": "360000"
    },
    {
        "name": "南昌市",
        "pId": "360000",
        "id": "360100"
    },
    {
        "name": "东湖区",
        "pId": "360100",
        "id": "360102"
    },
    {
        "name": "西湖区",
        "pId": "360100",
        "id": "360103"
    },
    {
        "name": "青云谱区",
        "pId": "360100",
        "id": "360104"
    },
    {
        "name": "湾里区",
        "pId": "360100",
        "id": "360105"
    },
    {
        "name": "青山湖区",
        "pId": "360100",
        "id": "360111"
    },
    {
        "name": "南昌县",
        "pId": "360100",
        "id": "360121"
    },
    {
        "name": "新建县",
        "pId": "360100",
        "id": "360122"
    },
    {
        "name": "安义县",
        "pId": "360100",
        "id": "360123"
    },
    {
        "name": "进贤县",
        "pId": "360100",
        "id": "360124"
    },
    {
        "name": "景德镇市",
        "pId": "360000",
        "id": "360200"
    },
    {
        "name": "昌江区",
        "pId": "360200",
        "id": "360202"
    },
    {
        "name": "珠山区",
        "pId": "360200",
        "id": "360203"
    },
    {
        "name": "浮梁县",
        "pId": "360200",
        "id": "360222"
    },
    {
        "name": "乐平市",
        "pId": "360200",
        "id": "360281"
    },
    {
        "name": "萍乡市",
        "pId": "360000",
        "id": "360300"
    },
    {
        "name": "安源区",
        "pId": "360300",
        "id": "360302"
    },
    {
        "name": "湘东区",
        "pId": "360300",
        "id": "360313"
    },
    {
        "name": "莲花县",
        "pId": "360300",
        "id": "360321"
    },
    {
        "name": "上栗县",
        "pId": "360300",
        "id": "360322"
    },
    {
        "name": "芦溪县",
        "pId": "360300",
        "id": "360323"
    },
    {
        "name": "九江市",
        "pId": "360000",
        "id": "360400"
    },
    {
        "name": "庐山区",
        "pId": "360400",
        "id": "360402"
    },
    {
        "name": "浔阳区",
        "pId": "360400",
        "id": "360403"
    },
    {
        "name": "九江县",
        "pId": "360400",
        "id": "360421"
    },
    {
        "name": "武宁县",
        "pId": "360400",
        "id": "360423"
    },
    {
        "name": "修水县",
        "pId": "360400",
        "id": "360424"
    },
    {
        "name": "永修县",
        "pId": "360400",
        "id": "360425"
    },
    {
        "name": "德安县",
        "pId": "360400",
        "id": "360426"
    },
    {
        "name": "星子县",
        "pId": "360400",
        "id": "360427"
    },
    {
        "name": "都昌县",
        "pId": "360400",
        "id": "360428"
    },
    {
        "name": "湖口县",
        "pId": "360400",
        "id": "360429"
    },
    {
        "name": "彭泽县",
        "pId": "360400",
        "id": "360430"
    },
    {
        "name": "瑞昌市",
        "pId": "360400",
        "id": "360481"
    },
    {
        "name": "共青城市",
        "pId": "360400",
        "id": "360482"
    },
    {
        "name": "新余市",
        "pId": "360000",
        "id": "360500"
    },
    {
        "name": "渝水区",
        "pId": "360500",
        "id": "360502"
    },
    {
        "name": "分宜县",
        "pId": "360500",
        "id": "360521"
    },
    {
        "name": "鹰潭市",
        "pId": "360000",
        "id": "360600"
    },
    {
        "name": "月湖区",
        "pId": "360600",
        "id": "360602"
    },
    {
        "name": "余江县",
        "pId": "360600",
        "id": "360622"
    },
    {
        "name": "贵溪市",
        "pId": "360600",
        "id": "360681"
    },
    {
        "name": "赣州市",
        "pId": "360000",
        "id": "360700"
    },
    {
        "name": "章贡区",
        "pId": "360700",
        "id": "360702"
    },
    {
        "name": "南康区",
        "pId": "360700",
        "id": "360703"
    },
    {
        "name": "赣县",
        "pId": "360700",
        "id": "360721"
    },
    {
        "name": "信丰县",
        "pId": "360700",
        "id": "360722"
    },
    {
        "name": "大余县",
        "pId": "360700",
        "id": "360723"
    },
    {
        "name": "上犹县",
        "pId": "360700",
        "id": "360724"
    },
    {
        "name": "崇义县",
        "pId": "360700",
        "id": "360725"
    },
    {
        "name": "安远县",
        "pId": "360700",
        "id": "360726"
    },
    {
        "name": "龙南县",
        "pId": "360700",
        "id": "360727"
    },
    {
        "name": "定南县",
        "pId": "360700",
        "id": "360728"
    },
    {
        "name": "全南县",
        "pId": "360700",
        "id": "360729"
    },
    {
        "name": "宁都县",
        "pId": "360700",
        "id": "360730"
    },
    {
        "name": "于都县",
        "pId": "360700",
        "id": "360731"
    },
    {
        "name": "兴国县",
        "pId": "360700",
        "id": "360732"
    },
    {
        "name": "会昌县",
        "pId": "360700",
        "id": "360733"
    },
    {
        "name": "寻乌县",
        "pId": "360700",
        "id": "360734"
    },
    {
        "name": "石城县",
        "pId": "360700",
        "id": "360735"
    },
    {
        "name": "瑞金市",
        "pId": "360700",
        "id": "360781"
    },
    {
        "name": "吉安市",
        "pId": "360000",
        "id": "360800"
    },
    {
        "name": "吉州区",
        "pId": "360800",
        "id": "360802"
    },
    {
        "name": "青原区",
        "pId": "360800",
        "id": "360803"
    },
    {
        "name": "吉安县",
        "pId": "360800",
        "id": "360821"
    },
    {
        "name": "吉水县",
        "pId": "360800",
        "id": "360822"
    },
    {
        "name": "峡江县",
        "pId": "360800",
        "id": "360823"
    },
    {
        "name": "新干县",
        "pId": "360800",
        "id": "360824"
    },
    {
        "name": "永丰县",
        "pId": "360800",
        "id": "360825"
    },
    {
        "name": "泰和县",
        "pId": "360800",
        "id": "360826"
    },
    {
        "name": "遂川县",
        "pId": "360800",
        "id": "360827"
    },
    {
        "name": "万安县",
        "pId": "360800",
        "id": "360828"
    },
    {
        "name": "安福县",
        "pId": "360800",
        "id": "360829"
    },
    {
        "name": "永新县",
        "pId": "360800",
        "id": "360830"
    },
    {
        "name": "井冈山市",
        "pId": "360800",
        "id": "360881"
    },
    {
        "name": "宜春市",
        "pId": "360000",
        "id": "360900"
    },
    {
        "name": "袁州区",
        "pId": "360900",
        "id": "360902"
    },
    {
        "name": "奉新县",
        "pId": "360900",
        "id": "360921"
    },
    {
        "name": "万载县",
        "pId": "360900",
        "id": "360922"
    },
    {
        "name": "上高县",
        "pId": "360900",
        "id": "360923"
    },
    {
        "name": "宜丰县",
        "pId": "360900",
        "id": "360924"
    },
    {
        "name": "靖安县",
        "pId": "360900",
        "id": "360925"
    },
    {
        "name": "铜鼓县",
        "pId": "360900",
        "id": "360926"
    },
    {
        "name": "丰城市",
        "pId": "360900",
        "id": "360981"
    },
    {
        "name": "樟树市",
        "pId": "360900",
        "id": "360982"
    },
    {
        "name": "高安市",
        "pId": "360900",
        "id": "360983"
    },
    {
        "name": "抚州市",
        "pId": "360000",
        "id": "361000"
    },
    {
        "name": "临川区",
        "pId": "361000",
        "id": "361002"
    },
    {
        "name": "南城县",
        "pId": "361000",
        "id": "361021"
    },
    {
        "name": "黎川县",
        "pId": "361000",
        "id": "361022"
    },
    {
        "name": "南丰县",
        "pId": "361000",
        "id": "361023"
    },
    {
        "name": "崇仁县",
        "pId": "361000",
        "id": "361024"
    },
    {
        "name": "乐安县",
        "pId": "361000",
        "id": "361025"
    },
    {
        "name": "宜黄县",
        "pId": "361000",
        "id": "361026"
    },
    {
        "name": "金溪县",
        "pId": "361000",
        "id": "361027"
    },
    {
        "name": "资溪县",
        "pId": "361000",
        "id": "361028"
    },
    {
        "name": "东乡县",
        "pId": "361000",
        "id": "361029"
    },
    {
        "name": "广昌县",
        "pId": "361000",
        "id": "361030"
    },
    {
        "name": "上饶市",
        "pId": "360000",
        "id": "361100"
    },
    {
        "name": "信州区",
        "pId": "361100",
        "id": "361102"
    },
    {
        "name": "上饶县",
        "pId": "361100",
        "id": "361121"
    },
    {
        "name": "广丰县",
        "pId": "361100",
        "id": "361122"
    },
    {
        "name": "玉山县",
        "pId": "361100",
        "id": "361123"
    },
    {
        "name": "铅山县",
        "pId": "361100",
        "id": "361124"
    },
    {
        "name": "横峰县",
        "pId": "361100",
        "id": "361125"
    },
    {
        "name": "弋阳县",
        "pId": "361100",
        "id": "361126"
    },
    {
        "name": "余干县",
        "pId": "361100",
        "id": "361127"
    },
    {
        "name": "鄱阳县",
        "pId": "361100",
        "id": "361128"
    },
    {
        "name": "万年县",
        "pId": "361100",
        "id": "361129"
    },
    {
        "name": "婺源县",
        "pId": "361100",
        "id": "361130"
    },
    {
        "name": "德兴市",
        "pId": "361100",
        "id": "361181"
    },
    {
        "name": "山东省",
        "pId": "100000",
        "id": "370000"
    },
    {
        "name": "济南市",
        "pId": "370000",
        "id": "370100"
    },
    {
        "name": "历下区",
        "pId": "370100",
        "id": "370102"
    },
    {
        "name": "市中区",
        "pId": "370100",
        "id": "370103"
    },
    {
        "name": "槐荫区",
        "pId": "370100",
        "id": "370104"
    },
    {
        "name": "天桥区",
        "pId": "370100",
        "id": "370105"
    },
    {
        "name": "历城区",
        "pId": "370100",
        "id": "370112"
    },
    {
        "name": "长清区",
        "pId": "370100",
        "id": "370113"
    },
    {
        "name": "平阴县",
        "pId": "370100",
        "id": "370124"
    },
    {
        "name": "济阳县",
        "pId": "370100",
        "id": "370125"
    },
    {
        "name": "商河县",
        "pId": "370100",
        "id": "370126"
    },
    {
        "name": "章丘市",
        "pId": "370100",
        "id": "370181"
    },
    {
        "name": "青岛市",
        "pId": "370000",
        "id": "370200"
    },
    {
        "name": "市南区",
        "pId": "370200",
        "id": "370202"
    },
    {
        "name": "市北区",
        "pId": "370200",
        "id": "370203"
    },
    {
        "name": "黄岛区",
        "pId": "370200",
        "id": "370211"
    },
    {
        "name": "崂山区",
        "pId": "370200",
        "id": "370212"
    },
    {
        "name": "李沧区",
        "pId": "370200",
        "id": "370213"
    },
    {
        "name": "城阳区",
        "pId": "370200",
        "id": "370214"
    },
    {
        "name": "胶州市",
        "pId": "370200",
        "id": "370281"
    },
    {
        "name": "即墨市",
        "pId": "370200",
        "id": "370282"
    },
    {
        "name": "平度市",
        "pId": "370200",
        "id": "370283"
    },
    {
        "name": "莱西市",
        "pId": "370200",
        "id": "370285"
    },
    {
        "name": "西海岸新区",
        "pId": "370200",
        "id": "370286"
    },
    {
        "name": "淄博市",
        "pId": "370000",
        "id": "370300"
    },
    {
        "name": "淄川区",
        "pId": "370300",
        "id": "370302"
    },
    {
        "name": "张店区",
        "pId": "370300",
        "id": "370303"
    },
    {
        "name": "博山区",
        "pId": "370300",
        "id": "370304"
    },
    {
        "name": "临淄区",
        "pId": "370300",
        "id": "370305"
    },
    {
        "name": "周村区",
        "pId": "370300",
        "id": "370306"
    },
    {
        "name": "桓台县",
        "pId": "370300",
        "id": "370321"
    },
    {
        "name": "高青县",
        "pId": "370300",
        "id": "370322"
    },
    {
        "name": "沂源县",
        "pId": "370300",
        "id": "370323"
    },
    {
        "name": "枣庄市",
        "pId": "370000",
        "id": "370400"
    },
    {
        "name": "市中区",
        "pId": "370400",
        "id": "370402"
    },
    {
        "name": "薛城区",
        "pId": "370400",
        "id": "370403"
    },
    {
        "name": "峄城区",
        "pId": "370400",
        "id": "370404"
    },
    {
        "name": "台儿庄区",
        "pId": "370400",
        "id": "370405"
    },
    {
        "name": "山亭区",
        "pId": "370400",
        "id": "370406"
    },
    {
        "name": "滕州市",
        "pId": "370400",
        "id": "370481"
    },
    {
        "name": "东营市",
        "pId": "370000",
        "id": "370500"
    },
    {
        "name": "东营区",
        "pId": "370500",
        "id": "370502"
    },
    {
        "name": "河口区",
        "pId": "370500",
        "id": "370503"
    },
    {
        "name": "垦利县",
        "pId": "370500",
        "id": "370521"
    },
    {
        "name": "利津县",
        "pId": "370500",
        "id": "370522"
    },
    {
        "name": "广饶县",
        "pId": "370500",
        "id": "370523"
    },
    {
        "name": "烟台市",
        "pId": "370000",
        "id": "370600"
    },
    {
        "name": "芝罘区",
        "pId": "370600",
        "id": "370602"
    },
    {
        "name": "福山区",
        "pId": "370600",
        "id": "370611"
    },
    {
        "name": "牟平区",
        "pId": "370600",
        "id": "370612"
    },
    {
        "name": "莱山区",
        "pId": "370600",
        "id": "370613"
    },
    {
        "name": "长岛县",
        "pId": "370600",
        "id": "370634"
    },
    {
        "name": "龙口市",
        "pId": "370600",
        "id": "370681"
    },
    {
        "name": "莱阳市",
        "pId": "370600",
        "id": "370682"
    },
    {
        "name": "莱州市",
        "pId": "370600",
        "id": "370683"
    },
    {
        "name": "蓬莱市",
        "pId": "370600",
        "id": "370684"
    },
    {
        "name": "招远市",
        "pId": "370600",
        "id": "370685"
    },
    {
        "name": "栖霞市",
        "pId": "370600",
        "id": "370686"
    },
    {
        "name": "海阳市",
        "pId": "370600",
        "id": "370687"
    },
    {
        "name": "潍坊市",
        "pId": "370000",
        "id": "370700"
    },
    {
        "name": "潍城区",
        "pId": "370700",
        "id": "370702"
    },
    {
        "name": "寒亭区",
        "pId": "370700",
        "id": "370703"
    },
    {
        "name": "坊子区",
        "pId": "370700",
        "id": "370704"
    },
    {
        "name": "奎文区",
        "pId": "370700",
        "id": "370705"
    },
    {
        "name": "临朐县",
        "pId": "370700",
        "id": "370724"
    },
    {
        "name": "昌乐县",
        "pId": "370700",
        "id": "370725"
    },
    {
        "name": "青州市",
        "pId": "370700",
        "id": "370781"
    },
    {
        "name": "诸城市",
        "pId": "370700",
        "id": "370782"
    },
    {
        "name": "寿光市",
        "pId": "370700",
        "id": "370783"
    },
    {
        "name": "安丘市",
        "pId": "370700",
        "id": "370784"
    },
    {
        "name": "高密市",
        "pId": "370700",
        "id": "370785"
    },
    {
        "name": "昌邑市",
        "pId": "370700",
        "id": "370786"
    },
    {
        "name": "济宁市",
        "pId": "370000",
        "id": "370800"
    },
    {
        "name": "任城区",
        "pId": "370800",
        "id": "370811"
    },
    {
        "name": "兖州区",
        "pId": "370800",
        "id": "370812"
    },
    {
        "name": "微山县",
        "pId": "370800",
        "id": "370826"
    },
    {
        "name": "鱼台县",
        "pId": "370800",
        "id": "370827"
    },
    {
        "name": "金乡县",
        "pId": "370800",
        "id": "370828"
    },
    {
        "name": "嘉祥县",
        "pId": "370800",
        "id": "370829"
    },
    {
        "name": "汶上县",
        "pId": "370800",
        "id": "370830"
    },
    {
        "name": "泗水县",
        "pId": "370800",
        "id": "370831"
    },
    {
        "name": "梁山县",
        "pId": "370800",
        "id": "370832"
    },
    {
        "name": "曲阜市",
        "pId": "370800",
        "id": "370881"
    },
    {
        "name": "邹城市",
        "pId": "370800",
        "id": "370883"
    },
    {
        "name": "泰安市",
        "pId": "370000",
        "id": "370900"
    },
    {
        "name": "泰山区",
        "pId": "370900",
        "id": "370902"
    },
    {
        "name": "岱岳区",
        "pId": "370900",
        "id": "370911"
    },
    {
        "name": "宁阳县",
        "pId": "370900",
        "id": "370921"
    },
    {
        "name": "东平县",
        "pId": "370900",
        "id": "370923"
    },
    {
        "name": "新泰市",
        "pId": "370900",
        "id": "370982"
    },
    {
        "name": "肥城市",
        "pId": "370900",
        "id": "370983"
    },
    {
        "name": "威海市",
        "pId": "370000",
        "id": "371000"
    },
    {
        "name": "环翠区",
        "pId": "371000",
        "id": "371002"
    },
    {
        "name": "文登区",
        "pId": "371000",
        "id": "371003"
    },
    {
        "name": "荣成市",
        "pId": "371000",
        "id": "371082"
    },
    {
        "name": "乳山市",
        "pId": "371000",
        "id": "371083"
    },
    {
        "name": "日照市",
        "pId": "370000",
        "id": "371100"
    },
    {
        "name": "东港区",
        "pId": "371100",
        "id": "371102"
    },
    {
        "name": "岚山区",
        "pId": "371100",
        "id": "371103"
    },
    {
        "name": "五莲县",
        "pId": "371100",
        "id": "371121"
    },
    {
        "name": "莒县",
        "pId": "371100",
        "id": "371122"
    },
    {
        "name": "莱芜市",
        "pId": "370000",
        "id": "371200"
    },
    {
        "name": "莱城区",
        "pId": "371200",
        "id": "371202"
    },
    {
        "name": "钢城区",
        "pId": "371200",
        "id": "371203"
    },
    {
        "name": "临沂市",
        "pId": "370000",
        "id": "371300"
    },
    {
        "name": "兰山区",
        "pId": "371300",
        "id": "371302"
    },
    {
        "name": "罗庄区",
        "pId": "371300",
        "id": "371311"
    },
    {
        "name": "河东区",
        "pId": "371300",
        "id": "371312"
    },
    {
        "name": "沂南县",
        "pId": "371300",
        "id": "371321"
    },
    {
        "name": "郯城县",
        "pId": "371300",
        "id": "371322"
    },
    {
        "name": "沂水县",
        "pId": "371300",
        "id": "371323"
    },
    {
        "name": "兰陵县",
        "pId": "371300",
        "id": "371324"
    },
    {
        "name": "费县",
        "pId": "371300",
        "id": "371325"
    },
    {
        "name": "平邑县",
        "pId": "371300",
        "id": "371326"
    },
    {
        "name": "莒南县",
        "pId": "371300",
        "id": "371327"
    },
    {
        "name": "蒙阴县",
        "pId": "371300",
        "id": "371328"
    },
    {
        "name": "临沭县",
        "pId": "371300",
        "id": "371329"
    },
    {
        "name": "德州市",
        "pId": "370000",
        "id": "371400"
    },
    {
        "name": "德城区",
        "pId": "371400",
        "id": "371402"
    },
    {
        "name": "陵城区",
        "pId": "371400",
        "id": "371403"
    },
    {
        "name": "宁津县",
        "pId": "371400",
        "id": "371422"
    },
    {
        "name": "庆云县",
        "pId": "371400",
        "id": "371423"
    },
    {
        "name": "临邑县",
        "pId": "371400",
        "id": "371424"
    },
    {
        "name": "齐河县",
        "pId": "371400",
        "id": "371425"
    },
    {
        "name": "平原县",
        "pId": "371400",
        "id": "371426"
    },
    {
        "name": "夏津县",
        "pId": "371400",
        "id": "371427"
    },
    {
        "name": "武城县",
        "pId": "371400",
        "id": "371428"
    },
    {
        "name": "乐陵市",
        "pId": "371400",
        "id": "371481"
    },
    {
        "name": "禹城市",
        "pId": "371400",
        "id": "371482"
    },
    {
        "name": "聊城市",
        "pId": "370000",
        "id": "371500"
    },
    {
        "name": "东昌府区",
        "pId": "371500",
        "id": "371502"
    },
    {
        "name": "阳谷县",
        "pId": "371500",
        "id": "371521"
    },
    {
        "name": "莘县",
        "pId": "371500",
        "id": "371522"
    },
    {
        "name": "茌平县",
        "pId": "371500",
        "id": "371523"
    },
    {
        "name": "东阿县",
        "pId": "371500",
        "id": "371524"
    },
    {
        "name": "冠县",
        "pId": "371500",
        "id": "371525"
    },
    {
        "name": "高唐县",
        "pId": "371500",
        "id": "371526"
    },
    {
        "name": "临清市",
        "pId": "371500",
        "id": "371581"
    },
    {
        "name": "滨州市",
        "pId": "370000",
        "id": "371600"
    },
    {
        "name": "滨城区",
        "pId": "371600",
        "id": "371602"
    },
    {
        "name": "沾化区",
        "pId": "371600",
        "id": "371603"
    },
    {
        "name": "惠民县",
        "pId": "371600",
        "id": "371621"
    },
    {
        "name": "阳信县",
        "pId": "371600",
        "id": "371622"
    },
    {
        "name": "无棣县",
        "pId": "371600",
        "id": "371623"
    },
    {
        "name": "博兴县",
        "pId": "371600",
        "id": "371625"
    },
    {
        "name": "邹平县",
        "pId": "371600",
        "id": "371626"
    },
    {
        "name": "北海新区",
        "pId": "371600",
        "id": "371627"
    },
    {
        "name": "菏泽市",
        "pId": "370000",
        "id": "371700"
    },
    {
        "name": "牡丹区",
        "pId": "371700",
        "id": "371702"
    },
    {
        "name": "曹县",
        "pId": "371700",
        "id": "371721"
    },
    {
        "name": "单县",
        "pId": "371700",
        "id": "371722"
    },
    {
        "name": "成武县",
        "pId": "371700",
        "id": "371723"
    },
    {
        "name": "巨野县",
        "pId": "371700",
        "id": "371724"
    },
    {
        "name": "郓城县",
        "pId": "371700",
        "id": "371725"
    },
    {
        "name": "鄄城县",
        "pId": "371700",
        "id": "371726"
    },
    {
        "name": "定陶县",
        "pId": "371700",
        "id": "371727"
    },
    {
        "name": "东明县",
        "pId": "371700",
        "id": "371728"
    },
    {
        "name": "河南省",
        "pId": "100000",
        "id": "410000"
    },
    {
        "name": "郑州市",
        "pId": "410000",
        "id": "410100"
    },
    {
        "name": "中原区",
        "pId": "410100",
        "id": "410102"
    },
    {
        "name": "二七区",
        "pId": "410100",
        "id": "410103"
    },
    {
        "name": "管城回族区",
        "pId": "410100",
        "id": "410104"
    },
    {
        "name": "金水区",
        "pId": "410100",
        "id": "410105"
    },
    {
        "name": "上街区",
        "pId": "410100",
        "id": "410106"
    },
    {
        "name": "惠济区",
        "pId": "410100",
        "id": "410108"
    },
    {
        "name": "中牟县",
        "pId": "410100",
        "id": "410122"
    },
    {
        "name": "巩义市",
        "pId": "410100",
        "id": "410181"
    },
    {
        "name": "荥阳市",
        "pId": "410100",
        "id": "410182"
    },
    {
        "name": "新密市",
        "pId": "410100",
        "id": "410183"
    },
    {
        "name": "新郑市",
        "pId": "410100",
        "id": "410184"
    },
    {
        "name": "登封市",
        "pId": "410100",
        "id": "410185"
    },
    {
        "name": "开封市",
        "pId": "410000",
        "id": "410200"
    },
    {
        "name": "龙亭区",
        "pId": "410200",
        "id": "410202"
    },
    {
        "name": "顺河回族区",
        "pId": "410200",
        "id": "410203"
    },
    {
        "name": "鼓楼区",
        "pId": "410200",
        "id": "410204"
    },
    {
        "name": "禹王台区",
        "pId": "410200",
        "id": "410205"
    },
    {
        "name": "祥符区",
        "pId": "410200",
        "id": "410212"
    },
    {
        "name": "杞县",
        "pId": "410200",
        "id": "410221"
    },
    {
        "name": "通许县",
        "pId": "410200",
        "id": "410222"
    },
    {
        "name": "尉氏县",
        "pId": "410200",
        "id": "410223"
    },
    {
        "name": "兰考县",
        "pId": "410200",
        "id": "410225"
    },
    {
        "name": "洛阳市",
        "pId": "410000",
        "id": "410300"
    },
    {
        "name": "老城区",
        "pId": "410300",
        "id": "410302"
    },
    {
        "name": "西工区",
        "pId": "410300",
        "id": "410303"
    },
    {
        "name": "瀍河回族区",
        "pId": "410300",
        "id": "410304"
    },
    {
        "name": "涧西区",
        "pId": "410300",
        "id": "410305"
    },
    {
        "name": "吉利区",
        "pId": "410300",
        "id": "410306"
    },
    {
        "name": "洛龙区",
        "pId": "410300",
        "id": "410311"
    },
    {
        "name": "孟津县",
        "pId": "410300",
        "id": "410322"
    },
    {
        "name": "新安县",
        "pId": "410300",
        "id": "410323"
    },
    {
        "name": "栾川县",
        "pId": "410300",
        "id": "410324"
    },
    {
        "name": "嵩县",
        "pId": "410300",
        "id": "410325"
    },
    {
        "name": "汝阳县",
        "pId": "410300",
        "id": "410326"
    },
    {
        "name": "宜阳县",
        "pId": "410300",
        "id": "410327"
    },
    {
        "name": "洛宁县",
        "pId": "410300",
        "id": "410328"
    },
    {
        "name": "伊川县",
        "pId": "410300",
        "id": "410329"
    },
    {
        "name": "偃师市",
        "pId": "410300",
        "id": "410381"
    },
    {
        "name": "平顶山市",
        "pId": "410000",
        "id": "410400"
    },
    {
        "name": "新华区",
        "pId": "410400",
        "id": "410402"
    },
    {
        "name": "卫东区",
        "pId": "410400",
        "id": "410403"
    },
    {
        "name": "石龙区",
        "pId": "410400",
        "id": "410404"
    },
    {
        "name": "湛河区",
        "pId": "410400",
        "id": "410411"
    },
    {
        "name": "宝丰县",
        "pId": "410400",
        "id": "410421"
    },
    {
        "name": "叶县",
        "pId": "410400",
        "id": "410422"
    },
    {
        "name": "鲁山县",
        "pId": "410400",
        "id": "410423"
    },
    {
        "name": "郏县",
        "pId": "410400",
        "id": "410425"
    },
    {
        "name": "舞钢市",
        "pId": "410400",
        "id": "410481"
    },
    {
        "name": "汝州市",
        "pId": "410400",
        "id": "410482"
    },
    {
        "name": "安阳市",
        "pId": "410000",
        "id": "410500"
    },
    {
        "name": "文峰区",
        "pId": "410500",
        "id": "410502"
    },
    {
        "name": "北关区",
        "pId": "410500",
        "id": "410503"
    },
    {
        "name": "殷都区",
        "pId": "410500",
        "id": "410505"
    },
    {
        "name": "龙安区",
        "pId": "410500",
        "id": "410506"
    },
    {
        "name": "安阳县",
        "pId": "410500",
        "id": "410522"
    },
    {
        "name": "汤阴县",
        "pId": "410500",
        "id": "410523"
    },
    {
        "name": "滑县",
        "pId": "410500",
        "id": "410526"
    },
    {
        "name": "内黄县",
        "pId": "410500",
        "id": "410527"
    },
    {
        "name": "林州市",
        "pId": "410500",
        "id": "410581"
    },
    {
        "name": "鹤壁市",
        "pId": "410000",
        "id": "410600"
    },
    {
        "name": "鹤山区",
        "pId": "410600",
        "id": "410602"
    },
    {
        "name": "山城区",
        "pId": "410600",
        "id": "410603"
    },
    {
        "name": "淇滨区",
        "pId": "410600",
        "id": "410611"
    },
    {
        "name": "浚县",
        "pId": "410600",
        "id": "410621"
    },
    {
        "name": "淇县",
        "pId": "410600",
        "id": "410622"
    },
    {
        "name": "新乡市",
        "pId": "410000",
        "id": "410700"
    },
    {
        "name": "红旗区",
        "pId": "410700",
        "id": "410702"
    },
    {
        "name": "卫滨区",
        "pId": "410700",
        "id": "410703"
    },
    {
        "name": "凤泉区",
        "pId": "410700",
        "id": "410704"
    },
    {
        "name": "牧野区",
        "pId": "410700",
        "id": "410711"
    },
    {
        "name": "新乡县",
        "pId": "410700",
        "id": "410721"
    },
    {
        "name": "获嘉县",
        "pId": "410700",
        "id": "410724"
    },
    {
        "name": "原阳县",
        "pId": "410700",
        "id": "410725"
    },
    {
        "name": "延津县",
        "pId": "410700",
        "id": "410726"
    },
    {
        "name": "封丘县",
        "pId": "410700",
        "id": "410727"
    },
    {
        "name": "长垣县",
        "pId": "410700",
        "id": "410728"
    },
    {
        "name": "卫辉市",
        "pId": "410700",
        "id": "410781"
    },
    {
        "name": "辉县市",
        "pId": "410700",
        "id": "410782"
    },
    {
        "name": "焦作市",
        "pId": "410000",
        "id": "410800"
    },
    {
        "name": "解放区",
        "pId": "410800",
        "id": "410802"
    },
    {
        "name": "中站区",
        "pId": "410800",
        "id": "410803"
    },
    {
        "name": "马村区",
        "pId": "410800",
        "id": "410804"
    },
    {
        "name": "山阳区",
        "pId": "410800",
        "id": "410811"
    },
    {
        "name": "修武县",
        "pId": "410800",
        "id": "410821"
    },
    {
        "name": "博爱县",
        "pId": "410800",
        "id": "410822"
    },
    {
        "name": "武陟县",
        "pId": "410800",
        "id": "410823"
    },
    {
        "name": "温县",
        "pId": "410800",
        "id": "410825"
    },
    {
        "name": "沁阳市",
        "pId": "410800",
        "id": "410882"
    },
    {
        "name": "孟州市",
        "pId": "410800",
        "id": "410883"
    },
    {
        "name": "濮阳市",
        "pId": "410000",
        "id": "410900"
    },
    {
        "name": "华龙区",
        "pId": "410900",
        "id": "410902"
    },
    {
        "name": "清丰县",
        "pId": "410900",
        "id": "410922"
    },
    {
        "name": "南乐县",
        "pId": "410900",
        "id": "410923"
    },
    {
        "name": "范县",
        "pId": "410900",
        "id": "410926"
    },
    {
        "name": "台前县",
        "pId": "410900",
        "id": "410927"
    },
    {
        "name": "濮阳县",
        "pId": "410900",
        "id": "410928"
    },
    {
        "name": "许昌市",
        "pId": "410000",
        "id": "411000"
    },
    {
        "name": "魏都区",
        "pId": "411000",
        "id": "411002"
    },
    {
        "name": "许昌县",
        "pId": "411000",
        "id": "411023"
    },
    {
        "name": "鄢陵县",
        "pId": "411000",
        "id": "411024"
    },
    {
        "name": "襄城县",
        "pId": "411000",
        "id": "411025"
    },
    {
        "name": "禹州市",
        "pId": "411000",
        "id": "411081"
    },
    {
        "name": "长葛市",
        "pId": "411000",
        "id": "411082"
    },
    {
        "name": "漯河市",
        "pId": "410000",
        "id": "411100"
    },
    {
        "name": "源汇区",
        "pId": "411100",
        "id": "411102"
    },
    {
        "name": "郾城区",
        "pId": "411100",
        "id": "411103"
    },
    {
        "name": "召陵区",
        "pId": "411100",
        "id": "411104"
    },
    {
        "name": "舞阳县",
        "pId": "411100",
        "id": "411121"
    },
    {
        "name": "临颍县",
        "pId": "411100",
        "id": "411122"
    },
    {
        "name": "三门峡市",
        "pId": "410000",
        "id": "411200"
    },
    {
        "name": "湖滨区",
        "pId": "411200",
        "id": "411202"
    },
    {
        "name": "渑池县",
        "pId": "411200",
        "id": "411221"
    },
    {
        "name": "陕县",
        "pId": "411200",
        "id": "411222"
    },
    {
        "name": "卢氏县",
        "pId": "411200",
        "id": "411224"
    },
    {
        "name": "义马市",
        "pId": "411200",
        "id": "411281"
    },
    {
        "name": "灵宝市",
        "pId": "411200",
        "id": "411282"
    },
    {
        "name": "南阳市",
        "pId": "410000",
        "id": "411300"
    },
    {
        "name": "宛城区",
        "pId": "411300",
        "id": "411302"
    },
    {
        "name": "卧龙区",
        "pId": "411300",
        "id": "411303"
    },
    {
        "name": "南召县",
        "pId": "411300",
        "id": "411321"
    },
    {
        "name": "方城县",
        "pId": "411300",
        "id": "411322"
    },
    {
        "name": "西峡县",
        "pId": "411300",
        "id": "411323"
    },
    {
        "name": "镇平县",
        "pId": "411300",
        "id": "411324"
    },
    {
        "name": "内乡县",
        "pId": "411300",
        "id": "411325"
    },
    {
        "name": "淅川县",
        "pId": "411300",
        "id": "411326"
    },
    {
        "name": "社旗县",
        "pId": "411300",
        "id": "411327"
    },
    {
        "name": "唐河县",
        "pId": "411300",
        "id": "411328"
    },
    {
        "name": "新野县",
        "pId": "411300",
        "id": "411329"
    },
    {
        "name": "桐柏县",
        "pId": "411300",
        "id": "411330"
    },
    {
        "name": "邓州市",
        "pId": "411300",
        "id": "411381"
    },
    {
        "name": "商丘市",
        "pId": "410000",
        "id": "411400"
    },
    {
        "name": "梁园区",
        "pId": "411400",
        "id": "411402"
    },
    {
        "name": "睢阳区",
        "pId": "411400",
        "id": "411403"
    },
    {
        "name": "民权县",
        "pId": "411400",
        "id": "411421"
    },
    {
        "name": "睢县",
        "pId": "411400",
        "id": "411422"
    },
    {
        "name": "宁陵县",
        "pId": "411400",
        "id": "411423"
    },
    {
        "name": "柘城县",
        "pId": "411400",
        "id": "411424"
    },
    {
        "name": "虞城县",
        "pId": "411400",
        "id": "411425"
    },
    {
        "name": "夏邑县",
        "pId": "411400",
        "id": "411426"
    },
    {
        "name": "永城市",
        "pId": "411400",
        "id": "411481"
    },
    {
        "name": "信阳市",
        "pId": "410000",
        "id": "411500"
    },
    {
        "name": "浉河区",
        "pId": "411500",
        "id": "411502"
    },
    {
        "name": "平桥区",
        "pId": "411500",
        "id": "411503"
    },
    {
        "name": "罗山县",
        "pId": "411500",
        "id": "411521"
    },
    {
        "name": "光山县",
        "pId": "411500",
        "id": "411522"
    },
    {
        "name": "新县",
        "pId": "411500",
        "id": "411523"
    },
    {
        "name": "商城县",
        "pId": "411500",
        "id": "411524"
    },
    {
        "name": "固始县",
        "pId": "411500",
        "id": "411525"
    },
    {
        "name": "潢川县",
        "pId": "411500",
        "id": "411526"
    },
    {
        "name": "淮滨县",
        "pId": "411500",
        "id": "411527"
    },
    {
        "name": "息县",
        "pId": "411500",
        "id": "411528"
    },
    {
        "name": "周口市",
        "pId": "410000",
        "id": "411600"
    },
    {
        "name": "川汇区",
        "pId": "411600",
        "id": "411602"
    },
    {
        "name": "扶沟县",
        "pId": "411600",
        "id": "411621"
    },
    {
        "name": "西华县",
        "pId": "411600",
        "id": "411622"
    },
    {
        "name": "商水县",
        "pId": "411600",
        "id": "411623"
    },
    {
        "name": "沈丘县",
        "pId": "411600",
        "id": "411624"
    },
    {
        "name": "郸城县",
        "pId": "411600",
        "id": "411625"
    },
    {
        "name": "淮阳县",
        "pId": "411600",
        "id": "411626"
    },
    {
        "name": "太康县",
        "pId": "411600",
        "id": "411627"
    },
    {
        "name": "鹿邑县",
        "pId": "411600",
        "id": "411628"
    },
    {
        "name": "项城市",
        "pId": "411600",
        "id": "411681"
    },
    {
        "name": "驻马店市",
        "pId": "410000",
        "id": "411700"
    },
    {
        "name": "驿城区",
        "pId": "411700",
        "id": "411702"
    },
    {
        "name": "西平县",
        "pId": "411700",
        "id": "411721"
    },
    {
        "name": "上蔡县",
        "pId": "411700",
        "id": "411722"
    },
    {
        "name": "平舆县",
        "pId": "411700",
        "id": "411723"
    },
    {
        "name": "正阳县",
        "pId": "411700",
        "id": "411724"
    },
    {
        "name": "确山县",
        "pId": "411700",
        "id": "411725"
    },
    {
        "name": "泌阳县",
        "pId": "411700",
        "id": "411726"
    },
    {
        "name": "汝南县",
        "pId": "411700",
        "id": "411727"
    },
    {
        "name": "遂平县",
        "pId": "411700",
        "id": "411728"
    },
    {
        "name": "新蔡县",
        "pId": "411700",
        "id": "411729"
    },
    {
        "name": "直辖县级",
        "pId": "410000",
        "id": "419000"
    },
    {
        "name": "济源市",
        "pId": "419000",
        "id": "419001"
    },
    {
        "name": "湖北省",
        "pId": "100000",
        "id": "420000"
    },
    {
        "name": "武汉市",
        "pId": "420000",
        "id": "420100"
    },
    {
        "name": "江岸区",
        "pId": "420100",
        "id": "420102"
    },
    {
        "name": "江汉区",
        "pId": "420100",
        "id": "420103"
    },
    {
        "name": "硚口区",
        "pId": "420100",
        "id": "420104"
    },
    {
        "name": "汉阳区",
        "pId": "420100",
        "id": "420105"
    },
    {
        "name": "武昌区",
        "pId": "420100",
        "id": "420106"
    },
    {
        "name": "青山区",
        "pId": "420100",
        "id": "420107"
    },
    {
        "name": "洪山区",
        "pId": "420100",
        "id": "420111"
    },
    {
        "name": "东西湖区",
        "pId": "420100",
        "id": "420112"
    },
    {
        "name": "汉南区",
        "pId": "420100",
        "id": "420113"
    },
    {
        "name": "蔡甸区",
        "pId": "420100",
        "id": "420114"
    },
    {
        "name": "江夏区",
        "pId": "420100",
        "id": "420115"
    },
    {
        "name": "黄陂区",
        "pId": "420100",
        "id": "420116"
    },
    {
        "name": "新洲区",
        "pId": "420100",
        "id": "420117"
    },
    {
        "name": "黄石市",
        "pId": "420000",
        "id": "420200"
    },
    {
        "name": "黄石港区",
        "pId": "420200",
        "id": "420202"
    },
    {
        "name": "西塞山区",
        "pId": "420200",
        "id": "420203"
    },
    {
        "name": "下陆区",
        "pId": "420200",
        "id": "420204"
    },
    {
        "name": "铁山区",
        "pId": "420200",
        "id": "420205"
    },
    {
        "name": "阳新县",
        "pId": "420200",
        "id": "420222"
    },
    {
        "name": "大冶市",
        "pId": "420200",
        "id": "420281"
    },
    {
        "name": "十堰市",
        "pId": "420000",
        "id": "420300"
    },
    {
        "name": "茅箭区",
        "pId": "420300",
        "id": "420302"
    },
    {
        "name": "张湾区",
        "pId": "420300",
        "id": "420303"
    },
    {
        "name": "郧阳区",
        "pId": "420300",
        "id": "420304"
    },
    {
        "name": "郧西县",
        "pId": "420300",
        "id": "420322"
    },
    {
        "name": "竹山县",
        "pId": "420300",
        "id": "420323"
    },
    {
        "name": "竹溪县",
        "pId": "420300",
        "id": "420324"
    },
    {
        "name": "房县",
        "pId": "420300",
        "id": "420325"
    },
    {
        "name": "丹江口市",
        "pId": "420300",
        "id": "420381"
    },
    {
        "name": "宜昌市",
        "pId": "420000",
        "id": "420500"
    },
    {
        "name": "西陵区",
        "pId": "420500",
        "id": "420502"
    },
    {
        "name": "伍家岗区",
        "pId": "420500",
        "id": "420503"
    },
    {
        "name": "点军区",
        "pId": "420500",
        "id": "420504"
    },
    {
        "name": "猇亭区",
        "pId": "420500",
        "id": "420505"
    },
    {
        "name": "夷陵区",
        "pId": "420500",
        "id": "420506"
    },
    {
        "name": "远安县",
        "pId": "420500",
        "id": "420525"
    },
    {
        "name": "兴山县",
        "pId": "420500",
        "id": "420526"
    },
    {
        "name": "秭归县",
        "pId": "420500",
        "id": "420527"
    },
    {
        "name": "长阳土家族自治县",
        "pId": "420500",
        "id": "420528"
    },
    {
        "name": "五峰土家族自治县",
        "pId": "420500",
        "id": "420529"
    },
    {
        "name": "宜都市",
        "pId": "420500",
        "id": "420581"
    },
    {
        "name": "当阳市",
        "pId": "420500",
        "id": "420582"
    },
    {
        "name": "枝江市",
        "pId": "420500",
        "id": "420583"
    },
    {
        "name": "襄阳市",
        "pId": "420000",
        "id": "420600"
    },
    {
        "name": "襄城区",
        "pId": "420600",
        "id": "420602"
    },
    {
        "name": "樊城区",
        "pId": "420600",
        "id": "420606"
    },
    {
        "name": "襄州区",
        "pId": "420600",
        "id": "420607"
    },
    {
        "name": "南漳县",
        "pId": "420600",
        "id": "420624"
    },
    {
        "name": "谷城县",
        "pId": "420600",
        "id": "420625"
    },
    {
        "name": "保康县",
        "pId": "420600",
        "id": "420626"
    },
    {
        "name": "老河口市",
        "pId": "420600",
        "id": "420682"
    },
    {
        "name": "枣阳市",
        "pId": "420600",
        "id": "420683"
    },
    {
        "name": "宜城市",
        "pId": "420600",
        "id": "420684"
    },
    {
        "name": "鄂州市",
        "pId": "420000",
        "id": "420700"
    },
    {
        "name": "梁子湖区",
        "pId": "420700",
        "id": "420702"
    },
    {
        "name": "华容区",
        "pId": "420700",
        "id": "420703"
    },
    {
        "name": "鄂城区",
        "pId": "420700",
        "id": "420704"
    },
    {
        "name": "荆门市",
        "pId": "420000",
        "id": "420800"
    },
    {
        "name": "东宝区",
        "pId": "420800",
        "id": "420802"
    },
    {
        "name": "掇刀区",
        "pId": "420800",
        "id": "420804"
    },
    {
        "name": "京山县",
        "pId": "420800",
        "id": "420821"
    },
    {
        "name": "沙洋县",
        "pId": "420800",
        "id": "420822"
    },
    {
        "name": "钟祥市",
        "pId": "420800",
        "id": "420881"
    },
    {
        "name": "孝感市",
        "pId": "420000",
        "id": "420900"
    },
    {
        "name": "孝南区",
        "pId": "420900",
        "id": "420902"
    },
    {
        "name": "孝昌县",
        "pId": "420900",
        "id": "420921"
    },
    {
        "name": "大悟县",
        "pId": "420900",
        "id": "420922"
    },
    {
        "name": "云梦县",
        "pId": "420900",
        "id": "420923"
    },
    {
        "name": "应城市",
        "pId": "420900",
        "id": "420981"
    },
    {
        "name": "安陆市",
        "pId": "420900",
        "id": "420982"
    },
    {
        "name": "汉川市",
        "pId": "420900",
        "id": "420984"
    },
    {
        "name": "荆州市",
        "pId": "420000",
        "id": "421000"
    },
    {
        "name": "沙市区",
        "pId": "421000",
        "id": "421002"
    },
    {
        "name": "荆州区",
        "pId": "421000",
        "id": "421003"
    },
    {
        "name": "公安县",
        "pId": "421000",
        "id": "421022"
    },
    {
        "name": "监利县",
        "pId": "421000",
        "id": "421023"
    },
    {
        "name": "江陵县",
        "pId": "421000",
        "id": "421024"
    },
    {
        "name": "石首市",
        "pId": "421000",
        "id": "421081"
    },
    {
        "name": "洪湖市",
        "pId": "421000",
        "id": "421083"
    },
    {
        "name": "松滋市",
        "pId": "421000",
        "id": "421087"
    },
    {
        "name": "黄冈市",
        "pId": "420000",
        "id": "421100"
    },
    {
        "name": "黄州区",
        "pId": "421100",
        "id": "421102"
    },
    {
        "name": "团风县",
        "pId": "421100",
        "id": "421121"
    },
    {
        "name": "红安县",
        "pId": "421100",
        "id": "421122"
    },
    {
        "name": "罗田县",
        "pId": "421100",
        "id": "421123"
    },
    {
        "name": "英山县",
        "pId": "421100",
        "id": "421124"
    },
    {
        "name": "浠水县",
        "pId": "421100",
        "id": "421125"
    },
    {
        "name": "蕲春县",
        "pId": "421100",
        "id": "421126"
    },
    {
        "name": "黄梅县",
        "pId": "421100",
        "id": "421127"
    },
    {
        "name": "麻城市",
        "pId": "421100",
        "id": "421181"
    },
    {
        "name": "武穴市",
        "pId": "421100",
        "id": "421182"
    },
    {
        "name": "咸宁市",
        "pId": "420000",
        "id": "421200"
    },
    {
        "name": "咸安区",
        "pId": "421200",
        "id": "421202"
    },
    {
        "name": "嘉鱼县",
        "pId": "421200",
        "id": "421221"
    },
    {
        "name": "通城县",
        "pId": "421200",
        "id": "421222"
    },
    {
        "name": "崇阳县",
        "pId": "421200",
        "id": "421223"
    },
    {
        "name": "通山县",
        "pId": "421200",
        "id": "421224"
    },
    {
        "name": "赤壁市",
        "pId": "421200",
        "id": "421281"
    },
    {
        "name": "随州市",
        "pId": "420000",
        "id": "421300"
    },
    {
        "name": "曾都区",
        "pId": "421300",
        "id": "421303"
    },
    {
        "name": "随县",
        "pId": "421300",
        "id": "421321"
    },
    {
        "name": "广水市",
        "pId": "421300",
        "id": "421381"
    },
    {
        "name": "恩施土家族苗族自治州",
        "pId": "420000",
        "id": "422800"
    },
    {
        "name": "恩施市",
        "pId": "422800",
        "id": "422801"
    },
    {
        "name": "利川市",
        "pId": "422800",
        "id": "422802"
    },
    {
        "name": "建始县",
        "pId": "422800",
        "id": "422822"
    },
    {
        "name": "巴东县",
        "pId": "422800",
        "id": "422823"
    },
    {
        "name": "宣恩县",
        "pId": "422800",
        "id": "422825"
    },
    {
        "name": "咸丰县",
        "pId": "422800",
        "id": "422826"
    },
    {
        "name": "来凤县",
        "pId": "422800",
        "id": "422827"
    },
    {
        "name": "鹤峰县",
        "pId": "422800",
        "id": "422828"
    },
    {
        "name": "直辖县级",
        "pId": "420000",
        "id": "429000"
    },
    {
        "name": "仙桃市",
        "pId": "429000",
        "id": "429004"
    },
    {
        "name": "潜江市",
        "pId": "429000",
        "id": "429005"
    },
    {
        "name": "天门市",
        "pId": "429000",
        "id": "429006"
    },
    {
        "name": "神农架林区",
        "pId": "429000",
        "id": "429021"
    },
    {
        "name": "湖南省",
        "pId": "100000",
        "id": "430000"
    },
    {
        "name": "长沙市",
        "pId": "430000",
        "id": "430100"
    },
    {
        "name": "芙蓉区",
        "pId": "430100",
        "id": "430102"
    },
    {
        "name": "天心区",
        "pId": "430100",
        "id": "430103"
    },
    {
        "name": "岳麓区",
        "pId": "430100",
        "id": "430104"
    },
    {
        "name": "开福区",
        "pId": "430100",
        "id": "430105"
    },
    {
        "name": "雨花区",
        "pId": "430100",
        "id": "430111"
    },
    {
        "name": "望城区",
        "pId": "430100",
        "id": "430112"
    },
    {
        "name": "长沙县",
        "pId": "430100",
        "id": "430121"
    },
    {
        "name": "宁乡县",
        "pId": "430100",
        "id": "430124"
    },
    {
        "name": "浏阳市",
        "pId": "430100",
        "id": "430181"
    },
    {
        "name": "株洲市",
        "pId": "430000",
        "id": "430200"
    },
    {
        "name": "荷塘区",
        "pId": "430200",
        "id": "430202"
    },
    {
        "name": "芦淞区",
        "pId": "430200",
        "id": "430203"
    },
    {
        "name": "石峰区",
        "pId": "430200",
        "id": "430204"
    },
    {
        "name": "天元区",
        "pId": "430200",
        "id": "430211"
    },
    {
        "name": "株洲县",
        "pId": "430200",
        "id": "430221"
    },
    {
        "name": "攸县",
        "pId": "430200",
        "id": "430223"
    },
    {
        "name": "茶陵县",
        "pId": "430200",
        "id": "430224"
    },
    {
        "name": "炎陵县",
        "pId": "430200",
        "id": "430225"
    },
    {
        "name": "醴陵市",
        "pId": "430200",
        "id": "430281"
    },
    {
        "name": "湘潭市",
        "pId": "430000",
        "id": "430300"
    },
    {
        "name": "雨湖区",
        "pId": "430300",
        "id": "430302"
    },
    {
        "name": "岳塘区",
        "pId": "430300",
        "id": "430304"
    },
    {
        "name": "湘潭县",
        "pId": "430300",
        "id": "430321"
    },
    {
        "name": "湘乡市",
        "pId": "430300",
        "id": "430381"
    },
    {
        "name": "韶山市",
        "pId": "430300",
        "id": "430382"
    },
    {
        "name": "衡阳市",
        "pId": "430000",
        "id": "430400"
    },
    {
        "name": "珠晖区",
        "pId": "430400",
        "id": "430405"
    },
    {
        "name": "雁峰区",
        "pId": "430400",
        "id": "430406"
    },
    {
        "name": "石鼓区",
        "pId": "430400",
        "id": "430407"
    },
    {
        "name": "蒸湘区",
        "pId": "430400",
        "id": "430408"
    },
    {
        "name": "南岳区",
        "pId": "430400",
        "id": "430412"
    },
    {
        "name": "衡阳县",
        "pId": "430400",
        "id": "430421"
    },
    {
        "name": "衡南县",
        "pId": "430400",
        "id": "430422"
    },
    {
        "name": "衡山县",
        "pId": "430400",
        "id": "430423"
    },
    {
        "name": "衡东县",
        "pId": "430400",
        "id": "430424"
    },
    {
        "name": "祁东县",
        "pId": "430400",
        "id": "430426"
    },
    {
        "name": "耒阳市",
        "pId": "430400",
        "id": "430481"
    },
    {
        "name": "常宁市",
        "pId": "430400",
        "id": "430482"
    },
    {
        "name": "邵阳市",
        "pId": "430000",
        "id": "430500"
    },
    {
        "name": "双清区",
        "pId": "430500",
        "id": "430502"
    },
    {
        "name": "大祥区",
        "pId": "430500",
        "id": "430503"
    },
    {
        "name": "北塔区",
        "pId": "430500",
        "id": "430511"
    },
    {
        "name": "邵东县",
        "pId": "430500",
        "id": "430521"
    },
    {
        "name": "新邵县",
        "pId": "430500",
        "id": "430522"
    },
    {
        "name": "邵阳县",
        "pId": "430500",
        "id": "430523"
    },
    {
        "name": "隆回县",
        "pId": "430500",
        "id": "430524"
    },
    {
        "name": "洞口县",
        "pId": "430500",
        "id": "430525"
    },
    {
        "name": "绥宁县",
        "pId": "430500",
        "id": "430527"
    },
    {
        "name": "新宁县",
        "pId": "430500",
        "id": "430528"
    },
    {
        "name": "城步苗族自治县",
        "pId": "430500",
        "id": "430529"
    },
    {
        "name": "武冈市",
        "pId": "430500",
        "id": "430581"
    },
    {
        "name": "岳阳市",
        "pId": "430000",
        "id": "430600"
    },
    {
        "name": "岳阳楼区",
        "pId": "430600",
        "id": "430602"
    },
    {
        "name": "云溪区",
        "pId": "430600",
        "id": "430603"
    },
    {
        "name": "君山区",
        "pId": "430600",
        "id": "430611"
    },
    {
        "name": "岳阳县",
        "pId": "430600",
        "id": "430621"
    },
    {
        "name": "华容县",
        "pId": "430600",
        "id": "430623"
    },
    {
        "name": "湘阴县",
        "pId": "430600",
        "id": "430624"
    },
    {
        "name": "平江县",
        "pId": "430600",
        "id": "430626"
    },
    {
        "name": "汨罗市",
        "pId": "430600",
        "id": "430681"
    },
    {
        "name": "临湘市",
        "pId": "430600",
        "id": "430682"
    },
    {
        "name": "常德市",
        "pId": "430000",
        "id": "430700"
    },
    {
        "name": "武陵区",
        "pId": "430700",
        "id": "430702"
    },
    {
        "name": "鼎城区",
        "pId": "430700",
        "id": "430703"
    },
    {
        "name": "安乡县",
        "pId": "430700",
        "id": "430721"
    },
    {
        "name": "汉寿县",
        "pId": "430700",
        "id": "430722"
    },
    {
        "name": "澧县",
        "pId": "430700",
        "id": "430723"
    },
    {
        "name": "临澧县",
        "pId": "430700",
        "id": "430724"
    },
    {
        "name": "桃源县",
        "pId": "430700",
        "id": "430725"
    },
    {
        "name": "石门县",
        "pId": "430700",
        "id": "430726"
    },
    {
        "name": "津市市",
        "pId": "430700",
        "id": "430781"
    },
    {
        "name": "张家界市",
        "pId": "430000",
        "id": "430800"
    },
    {
        "name": "永定区",
        "pId": "430800",
        "id": "430802"
    },
    {
        "name": "武陵源区",
        "pId": "430800",
        "id": "430811"
    },
    {
        "name": "慈利县",
        "pId": "430800",
        "id": "430821"
    },
    {
        "name": "桑植县",
        "pId": "430800",
        "id": "430822"
    },
    {
        "name": "益阳市",
        "pId": "430000",
        "id": "430900"
    },
    {
        "name": "资阳区",
        "pId": "430900",
        "id": "430902"
    },
    {
        "name": "赫山区",
        "pId": "430900",
        "id": "430903"
    },
    {
        "name": "南县",
        "pId": "430900",
        "id": "430921"
    },
    {
        "name": "桃江县",
        "pId": "430900",
        "id": "430922"
    },
    {
        "name": "安化县",
        "pId": "430900",
        "id": "430923"
    },
    {
        "name": "沅江市",
        "pId": "430900",
        "id": "430981"
    },
    {
        "name": "郴州市",
        "pId": "430000",
        "id": "431000"
    },
    {
        "name": "北湖区",
        "pId": "431000",
        "id": "431002"
    },
    {
        "name": "苏仙区",
        "pId": "431000",
        "id": "431003"
    },
    {
        "name": "桂阳县",
        "pId": "431000",
        "id": "431021"
    },
    {
        "name": "宜章县",
        "pId": "431000",
        "id": "431022"
    },
    {
        "name": "永兴县",
        "pId": "431000",
        "id": "431023"
    },
    {
        "name": "嘉禾县",
        "pId": "431000",
        "id": "431024"
    },
    {
        "name": "临武县",
        "pId": "431000",
        "id": "431025"
    },
    {
        "name": "汝城县",
        "pId": "431000",
        "id": "431026"
    },
    {
        "name": "桂东县",
        "pId": "431000",
        "id": "431027"
    },
    {
        "name": "安仁县",
        "pId": "431000",
        "id": "431028"
    },
    {
        "name": "资兴市",
        "pId": "431000",
        "id": "431081"
    },
    {
        "name": "永州市",
        "pId": "430000",
        "id": "431100"
    },
    {
        "name": "零陵区",
        "pId": "431100",
        "id": "431102"
    },
    {
        "name": "冷水滩区",
        "pId": "431100",
        "id": "431103"
    },
    {
        "name": "祁阳县",
        "pId": "431100",
        "id": "431121"
    },
    {
        "name": "东安县",
        "pId": "431100",
        "id": "431122"
    },
    {
        "name": "双牌县",
        "pId": "431100",
        "id": "431123"
    },
    {
        "name": "道县",
        "pId": "431100",
        "id": "431124"
    },
    {
        "name": "江永县",
        "pId": "431100",
        "id": "431125"
    },
    {
        "name": "宁远县",
        "pId": "431100",
        "id": "431126"
    },
    {
        "name": "蓝山县",
        "pId": "431100",
        "id": "431127"
    },
    {
        "name": "新田县",
        "pId": "431100",
        "id": "431128"
    },
    {
        "name": "江华瑶族自治县",
        "pId": "431100",
        "id": "431129"
    },
    {
        "name": "怀化市",
        "pId": "430000",
        "id": "431200"
    },
    {
        "name": "鹤城区",
        "pId": "431200",
        "id": "431202"
    },
    {
        "name": "中方县",
        "pId": "431200",
        "id": "431221"
    },
    {
        "name": "沅陵县",
        "pId": "431200",
        "id": "431222"
    },
    {
        "name": "辰溪县",
        "pId": "431200",
        "id": "431223"
    },
    {
        "name": "溆浦县",
        "pId": "431200",
        "id": "431224"
    },
    {
        "name": "会同县",
        "pId": "431200",
        "id": "431225"
    },
    {
        "name": "麻阳苗族自治县",
        "pId": "431200",
        "id": "431226"
    },
    {
        "name": "新晃侗族自治县",
        "pId": "431200",
        "id": "431227"
    },
    {
        "name": "芷江侗族自治县",
        "pId": "431200",
        "id": "431228"
    },
    {
        "name": "靖州苗族侗族自治县",
        "pId": "431200",
        "id": "431229"
    },
    {
        "name": "通道侗族自治县",
        "pId": "431200",
        "id": "431230"
    },
    {
        "name": "洪江市",
        "pId": "431200",
        "id": "431281"
    },
    {
        "name": "娄底市",
        "pId": "430000",
        "id": "431300"
    },
    {
        "name": "娄星区",
        "pId": "431300",
        "id": "431302"
    },
    {
        "name": "双峰县",
        "pId": "431300",
        "id": "431321"
    },
    {
        "name": "新化县",
        "pId": "431300",
        "id": "431322"
    },
    {
        "name": "冷水江市",
        "pId": "431300",
        "id": "431381"
    },
    {
        "name": "涟源市",
        "pId": "431300",
        "id": "431382"
    },
    {
        "name": "湘西土家族苗族自治州",
        "pId": "430000",
        "id": "433100"
    },
    {
        "name": "吉首市",
        "pId": "433100",
        "id": "433101"
    },
    {
        "name": "泸溪县",
        "pId": "433100",
        "id": "433122"
    },
    {
        "name": "凤凰县",
        "pId": "433100",
        "id": "433123"
    },
    {
        "name": "花垣县",
        "pId": "433100",
        "id": "433124"
    },
    {
        "name": "保靖县",
        "pId": "433100",
        "id": "433125"
    },
    {
        "name": "古丈县",
        "pId": "433100",
        "id": "433126"
    },
    {
        "name": "永顺县",
        "pId": "433100",
        "id": "433127"
    },
    {
        "name": "龙山县",
        "pId": "433100",
        "id": "433130"
    },
    {
        "name": "广东省",
        "pId": "100000",
        "id": "440000"
    },
    {
        "name": "广州市",
        "pId": "440000",
        "id": "440100"
    },
    {
        "name": "荔湾区",
        "pId": "440100",
        "id": "440103"
    },
    {
        "name": "越秀区",
        "pId": "440100",
        "id": "440104"
    },
    {
        "name": "海珠区",
        "pId": "440100",
        "id": "440105"
    },
    {
        "name": "天河区",
        "pId": "440100",
        "id": "440106"
    },
    {
        "name": "白云区",
        "pId": "440100",
        "id": "440111"
    },
    {
        "name": "黄埔区",
        "pId": "440100",
        "id": "440112"
    },
    {
        "name": "番禺区",
        "pId": "440100",
        "id": "440113"
    },
    {
        "name": "花都区",
        "pId": "440100",
        "id": "440114"
    },
    {
        "name": "南沙区",
        "pId": "440100",
        "id": "440115"
    },
    {
        "name": "从化区",
        "pId": "440100",
        "id": "440117"
    },
    {
        "name": "增城区",
        "pId": "440100",
        "id": "440118"
    },
    {
        "name": "韶关市",
        "pId": "440000",
        "id": "440200"
    },
    {
        "name": "武江区",
        "pId": "440200",
        "id": "440203"
    },
    {
        "name": "浈江区",
        "pId": "440200",
        "id": "440204"
    },
    {
        "name": "曲江区",
        "pId": "440200",
        "id": "440205"
    },
    {
        "name": "始兴县",
        "pId": "440200",
        "id": "440222"
    },
    {
        "name": "仁化县",
        "pId": "440200",
        "id": "440224"
    },
    {
        "name": "翁源县",
        "pId": "440200",
        "id": "440229"
    },
    {
        "name": "乳源瑶族自治县",
        "pId": "440200",
        "id": "440232"
    },
    {
        "name": "新丰县",
        "pId": "440200",
        "id": "440233"
    },
    {
        "name": "乐昌市",
        "pId": "440200",
        "id": "440281"
    },
    {
        "name": "南雄市",
        "pId": "440200",
        "id": "440282"
    },
    {
        "name": "深圳市",
        "pId": "440000",
        "id": "440300"
    },
    {
        "name": "罗湖区",
        "pId": "440300",
        "id": "440303"
    },
    {
        "name": "福田区",
        "pId": "440300",
        "id": "440304"
    },
    {
        "name": "南山区",
        "pId": "440300",
        "id": "440305"
    },
    {
        "name": "宝安区",
        "pId": "440300",
        "id": "440306"
    },
    {
        "name": "龙岗区",
        "pId": "440300",
        "id": "440307"
    },
    {
        "name": "盐田区",
        "pId": "440300",
        "id": "440308"
    },
    {
        "name": "光明新区",
        "pId": "440300",
        "id": "440309"
    },
    {
        "name": "坪山新区",
        "pId": "440300",
        "id": "440310"
    },
    {
        "name": "大鹏新区",
        "pId": "440300",
        "id": "440311"
    },
    {
        "name": "龙华新区",
        "pId": "440300",
        "id": "440312"
    },
    {
        "name": "珠海市",
        "pId": "440000",
        "id": "440400"
    },
    {
        "name": "香洲区",
        "pId": "440400",
        "id": "440402"
    },
    {
        "name": "斗门区",
        "pId": "440400",
        "id": "440403"
    },
    {
        "name": "金湾区",
        "pId": "440400",
        "id": "440404"
    },
    {
        "name": "汕头市",
        "pId": "440000",
        "id": "440500"
    },
    {
        "name": "龙湖区",
        "pId": "440500",
        "id": "440507"
    },
    {
        "name": "金平区",
        "pId": "440500",
        "id": "440511"
    },
    {
        "name": "濠江区",
        "pId": "440500",
        "id": "440512"
    },
    {
        "name": "潮阳区",
        "pId": "440500",
        "id": "440513"
    },
    {
        "name": "潮南区",
        "pId": "440500",
        "id": "440514"
    },
    {
        "name": "澄海区",
        "pId": "440500",
        "id": "440515"
    },
    {
        "name": "南澳县",
        "pId": "440500",
        "id": "440523"
    },
    {
        "name": "佛山市",
        "pId": "440000",
        "id": "440600"
    },
    {
        "name": "禅城区",
        "pId": "440600",
        "id": "440604"
    },
    {
        "name": "南海区",
        "pId": "440600",
        "id": "440605"
    },
    {
        "name": "顺德区",
        "pId": "440600",
        "id": "440606"
    },
    {
        "name": "三水区",
        "pId": "440600",
        "id": "440607"
    },
    {
        "name": "高明区",
        "pId": "440600",
        "id": "440608"
    },
    {
        "name": "江门市",
        "pId": "440000",
        "id": "440700"
    },
    {
        "name": "蓬江区",
        "pId": "440700",
        "id": "440703"
    },
    {
        "name": "江海区",
        "pId": "440700",
        "id": "440704"
    },
    {
        "name": "新会区",
        "pId": "440700",
        "id": "440705"
    },
    {
        "name": "台山市",
        "pId": "440700",
        "id": "440781"
    },
    {
        "name": "开平市",
        "pId": "440700",
        "id": "440783"
    },
    {
        "name": "鹤山市",
        "pId": "440700",
        "id": "440784"
    },
    {
        "name": "恩平市",
        "pId": "440700",
        "id": "440785"
    },
    {
        "name": "湛江市",
        "pId": "440000",
        "id": "440800"
    },
    {
        "name": "赤坎区",
        "pId": "440800",
        "id": "440802"
    },
    {
        "name": "霞山区",
        "pId": "440800",
        "id": "440803"
    },
    {
        "name": "坡头区",
        "pId": "440800",
        "id": "440804"
    },
    {
        "name": "麻章区",
        "pId": "440800",
        "id": "440811"
    },
    {
        "name": "遂溪县",
        "pId": "440800",
        "id": "440823"
    },
    {
        "name": "徐闻县",
        "pId": "440800",
        "id": "440825"
    },
    {
        "name": "廉江市",
        "pId": "440800",
        "id": "440881"
    },
    {
        "name": "雷州市",
        "pId": "440800",
        "id": "440882"
    },
    {
        "name": "吴川市",
        "pId": "440800",
        "id": "440883"
    },
    {
        "name": "茂名市",
        "pId": "440000",
        "id": "440900"
    },
    {
        "name": "茂南区",
        "pId": "440900",
        "id": "440902"
    },
    {
        "name": "电白区",
        "pId": "440900",
        "id": "440904"
    },
    {
        "name": "高州市",
        "pId": "440900",
        "id": "440981"
    },
    {
        "name": "化州市",
        "pId": "440900",
        "id": "440982"
    },
    {
        "name": "信宜市",
        "pId": "440900",
        "id": "440983"
    },
    {
        "name": "肇庆市",
        "pId": "440000",
        "id": "441200"
    },
    {
        "name": "端州区",
        "pId": "441200",
        "id": "441202"
    },
    {
        "name": "鼎湖区",
        "pId": "441200",
        "id": "441203"
    },
    {
        "name": "广宁县",
        "pId": "441200",
        "id": "441223"
    },
    {
        "name": "怀集县",
        "pId": "441200",
        "id": "441224"
    },
    {
        "name": "封开县",
        "pId": "441200",
        "id": "441225"
    },
    {
        "name": "德庆县",
        "pId": "441200",
        "id": "441226"
    },
    {
        "name": "高要市",
        "pId": "441200",
        "id": "441283"
    },
    {
        "name": "四会市",
        "pId": "441200",
        "id": "441284"
    },
    {
        "name": "惠州市",
        "pId": "440000",
        "id": "441300"
    },
    {
        "name": "惠城区",
        "pId": "441300",
        "id": "441302"
    },
    {
        "name": "惠阳区",
        "pId": "441300",
        "id": "441303"
    },
    {
        "name": "博罗县",
        "pId": "441300",
        "id": "441322"
    },
    {
        "name": "惠东县",
        "pId": "441300",
        "id": "441323"
    },
    {
        "name": "龙门县",
        "pId": "441300",
        "id": "441324"
    },
    {
        "name": "梅州市",
        "pId": "440000",
        "id": "441400"
    },
    {
        "name": "梅江区",
        "pId": "441400",
        "id": "441402"
    },
    {
        "name": "梅县区",
        "pId": "441400",
        "id": "441403"
    },
    {
        "name": "大埔县",
        "pId": "441400",
        "id": "441422"
    },
    {
        "name": "丰顺县",
        "pId": "441400",
        "id": "441423"
    },
    {
        "name": "五华县",
        "pId": "441400",
        "id": "441424"
    },
    {
        "name": "平远县",
        "pId": "441400",
        "id": "441426"
    },
    {
        "name": "蕉岭县",
        "pId": "441400",
        "id": "441427"
    },
    {
        "name": "兴宁市",
        "pId": "441400",
        "id": "441481"
    },
    {
        "name": "汕尾市",
        "pId": "440000",
        "id": "441500"
    },
    {
        "name": "城区",
        "pId": "441500",
        "id": "441502"
    },
    {
        "name": "海丰县",
        "pId": "441500",
        "id": "441521"
    },
    {
        "name": "陆河县",
        "pId": "441500",
        "id": "441523"
    },
    {
        "name": "陆丰市",
        "pId": "441500",
        "id": "441581"
    },
    {
        "name": "河源市",
        "pId": "440000",
        "id": "441600"
    },
    {
        "name": "源城区",
        "pId": "441600",
        "id": "441602"
    },
    {
        "name": "紫金县",
        "pId": "441600",
        "id": "441621"
    },
    {
        "name": "龙川县",
        "pId": "441600",
        "id": "441622"
    },
    {
        "name": "连平县",
        "pId": "441600",
        "id": "441623"
    },
    {
        "name": "和平县",
        "pId": "441600",
        "id": "441624"
    },
    {
        "name": "东源县",
        "pId": "441600",
        "id": "441625"
    },
    {
        "name": "阳江市",
        "pId": "440000",
        "id": "441700"
    },
    {
        "name": "江城区",
        "pId": "441700",
        "id": "441702"
    },
    {
        "name": "阳东区",
        "pId": "441700",
        "id": "441704"
    },
    {
        "name": "阳西县",
        "pId": "441700",
        "id": "441721"
    },
    {
        "name": "阳春市",
        "pId": "441700",
        "id": "441781"
    },
    {
        "name": "清远市",
        "pId": "440000",
        "id": "441800"
    },
    {
        "name": "清城区",
        "pId": "441800",
        "id": "441802"
    },
    {
        "name": "清新区",
        "pId": "441800",
        "id": "441803"
    },
    {
        "name": "佛冈县",
        "pId": "441800",
        "id": "441821"
    },
    {
        "name": "阳山县",
        "pId": "441800",
        "id": "441823"
    },
    {
        "name": "连山壮族瑶族自治县",
        "pId": "441800",
        "id": "441825"
    },
    {
        "name": "连南瑶族自治县",
        "pId": "441800",
        "id": "441826"
    },
    {
        "name": "英德市",
        "pId": "441800",
        "id": "441881"
    },
    {
        "name": "连州市",
        "pId": "441800",
        "id": "441882"
    },
    {
        "name": "东莞市",
        "pId": "440000",
        "id": "441900"
    },
    {
        "name": "莞城区",
        "pId": "441900",
        "id": "441901"
    },
    {
        "name": "南城区",
        "pId": "441900",
        "id": "441902"
    },
    {
        "name": "万江区",
        "pId": "441900",
        "id": "441904"
    },
    {
        "name": "石碣镇",
        "pId": "441900",
        "id": "441905"
    },
    {
        "name": "石龙镇",
        "pId": "441900",
        "id": "441906"
    },
    {
        "name": "茶山镇",
        "pId": "441900",
        "id": "441907"
    },
    {
        "name": "石排镇",
        "pId": "441900",
        "id": "441908"
    },
    {
        "name": "企石镇",
        "pId": "441900",
        "id": "441909"
    },
    {
        "name": "横沥镇",
        "pId": "441900",
        "id": "441910"
    },
    {
        "name": "桥头镇",
        "pId": "441900",
        "id": "441911"
    },
    {
        "name": "谢岗镇",
        "pId": "441900",
        "id": "441912"
    },
    {
        "name": "东坑镇",
        "pId": "441900",
        "id": "441913"
    },
    {
        "name": "常平镇",
        "pId": "441900",
        "id": "441914"
    },
    {
        "name": "寮步镇",
        "pId": "441900",
        "id": "441915"
    },
    {
        "name": "大朗镇",
        "pId": "441900",
        "id": "441916"
    },
    {
        "name": "麻涌镇",
        "pId": "441900",
        "id": "441917"
    },
    {
        "name": "中堂镇",
        "pId": "441900",
        "id": "441918"
    },
    {
        "name": "高埗镇",
        "pId": "441900",
        "id": "441919"
    },
    {
        "name": "樟木头镇",
        "pId": "441900",
        "id": "441920"
    },
    {
        "name": "大岭山镇",
        "pId": "441900",
        "id": "441921"
    },
    {
        "name": "望牛墩镇",
        "pId": "441900",
        "id": "441922"
    },
    {
        "name": "黄江镇",
        "pId": "441900",
        "id": "441923"
    },
    {
        "name": "洪梅镇",
        "pId": "441900",
        "id": "441924"
    },
    {
        "name": "清溪镇",
        "pId": "441900",
        "id": "441925"
    },
    {
        "name": "沙田镇",
        "pId": "441900",
        "id": "441926"
    },
    {
        "name": "道滘镇",
        "pId": "441900",
        "id": "441927"
    },
    {
        "name": "塘厦镇",
        "pId": "441900",
        "id": "441928"
    },
    {
        "name": "虎门镇",
        "pId": "441900",
        "id": "441929"
    },
    {
        "name": "厚街镇",
        "pId": "441900",
        "id": "441930"
    },
    {
        "name": "凤岗镇",
        "pId": "441900",
        "id": "441931"
    },
    {
        "name": "长安镇",
        "pId": "441900",
        "id": "441932"
    },
    {
        "name": "中山市",
        "pId": "440000",
        "id": "442000"
    },
    {
        "name": "石岐区",
        "pId": "442000",
        "id": "442001"
    },
    {
        "name": "南区",
        "pId": "442000",
        "id": "442004"
    },
    {
        "name": "五桂山区",
        "pId": "442000",
        "id": "442005"
    },
    {
        "name": "火炬开发区",
        "pId": "442000",
        "id": "442006"
    },
    {
        "name": "黄圃镇",
        "pId": "442000",
        "id": "442007"
    },
    {
        "name": "南头镇",
        "pId": "442000",
        "id": "442008"
    },
    {
        "name": "东凤镇",
        "pId": "442000",
        "id": "442009"
    },
    {
        "name": "阜沙镇",
        "pId": "442000",
        "id": "442010"
    },
    {
        "name": "小榄镇",
        "pId": "442000",
        "id": "442011"
    },
    {
        "name": "东升镇",
        "pId": "442000",
        "id": "442012"
    },
    {
        "name": "古镇镇",
        "pId": "442000",
        "id": "442013"
    },
    {
        "name": "横栏镇",
        "pId": "442000",
        "id": "442014"
    },
    {
        "name": "三角镇",
        "pId": "442000",
        "id": "442015"
    },
    {
        "name": "民众镇",
        "pId": "442000",
        "id": "442016"
    },
    {
        "name": "南朗镇",
        "pId": "442000",
        "id": "442017"
    },
    {
        "name": "港口镇",
        "pId": "442000",
        "id": "442018"
    },
    {
        "name": "大涌镇",
        "pId": "442000",
        "id": "442019"
    },
    {
        "name": "沙溪镇",
        "pId": "442000",
        "id": "442020"
    },
    {
        "name": "三乡镇",
        "pId": "442000",
        "id": "442021"
    },
    {
        "name": "板芙镇",
        "pId": "442000",
        "id": "442022"
    },
    {
        "name": "神湾镇",
        "pId": "442000",
        "id": "442023"
    },
    {
        "name": "坦洲镇",
        "pId": "442000",
        "id": "442024"
    },
    {
        "name": "潮州市",
        "pId": "440000",
        "id": "445100"
    },
    {
        "name": "湘桥区",
        "pId": "445100",
        "id": "445102"
    },
    {
        "name": "潮安区",
        "pId": "445100",
        "id": "445103"
    },
    {
        "name": "饶平县",
        "pId": "445100",
        "id": "445122"
    },
    {
        "name": "揭阳市",
        "pId": "440000",
        "id": "445200"
    },
    {
        "name": "榕城区",
        "pId": "445200",
        "id": "445202"
    },
    {
        "name": "揭东区",
        "pId": "445200",
        "id": "445203"
    },
    {
        "name": "揭西县",
        "pId": "445200",
        "id": "445222"
    },
    {
        "name": "惠来县",
        "pId": "445200",
        "id": "445224"
    },
    {
        "name": "普宁市",
        "pId": "445200",
        "id": "445281"
    },
    {
        "name": "云浮市",
        "pId": "440000",
        "id": "445300"
    },
    {
        "name": "云城区",
        "pId": "445300",
        "id": "445302"
    },
    {
        "name": "云安区",
        "pId": "445300",
        "id": "445303"
    },
    {
        "name": "新兴县",
        "pId": "445300",
        "id": "445321"
    },
    {
        "name": "郁南县",
        "pId": "445300",
        "id": "445322"
    },
    {
        "name": "罗定市",
        "pId": "445300",
        "id": "445381"
    },
    {
        "name": "广西壮族自治区",
        "pId": "100000",
        "id": "450000"
    },
    {
        "name": "南宁市",
        "pId": "450000",
        "id": "450100"
    },
    {
        "name": "兴宁区",
        "pId": "450100",
        "id": "450102"
    },
    {
        "name": "青秀区",
        "pId": "450100",
        "id": "450103"
    },
    {
        "name": "江南区",
        "pId": "450100",
        "id": "450105"
    },
    {
        "name": "西乡塘区",
        "pId": "450100",
        "id": "450107"
    },
    {
        "name": "良庆区",
        "pId": "450100",
        "id": "450108"
    },
    {
        "name": "邕宁区",
        "pId": "450100",
        "id": "450109"
    },
    {
        "name": "武鸣县",
        "pId": "450100",
        "id": "450122"
    },
    {
        "name": "隆安县",
        "pId": "450100",
        "id": "450123"
    },
    {
        "name": "马山县",
        "pId": "450100",
        "id": "450124"
    },
    {
        "name": "上林县",
        "pId": "450100",
        "id": "450125"
    },
    {
        "name": "宾阳县",
        "pId": "450100",
        "id": "450126"
    },
    {
        "name": "横县",
        "pId": "450100",
        "id": "450127"
    },
    {
        "name": "埌东新区",
        "pId": "450100",
        "id": "450128"
    },
    {
        "name": "柳州市",
        "pId": "450000",
        "id": "450200"
    },
    {
        "name": "城中区",
        "pId": "450200",
        "id": "450202"
    },
    {
        "name": "鱼峰区",
        "pId": "450200",
        "id": "450203"
    },
    {
        "name": "柳南区",
        "pId": "450200",
        "id": "450204"
    },
    {
        "name": "柳北区",
        "pId": "450200",
        "id": "450205"
    },
    {
        "name": "柳江县",
        "pId": "450200",
        "id": "450221"
    },
    {
        "name": "柳城县",
        "pId": "450200",
        "id": "450222"
    },
    {
        "name": "鹿寨县",
        "pId": "450200",
        "id": "450223"
    },
    {
        "name": "融安县",
        "pId": "450200",
        "id": "450224"
    },
    {
        "name": "融水苗族自治县",
        "pId": "450200",
        "id": "450225"
    },
    {
        "name": "三江侗族自治县",
        "pId": "450200",
        "id": "450226"
    },
    {
        "name": "柳东新区",
        "pId": "450200",
        "id": "450227"
    },
    {
        "name": "桂林市",
        "pId": "450000",
        "id": "450300"
    },
    {
        "name": "秀峰区",
        "pId": "450300",
        "id": "450302"
    },
    {
        "name": "叠彩区",
        "pId": "450300",
        "id": "450303"
    },
    {
        "name": "象山区",
        "pId": "450300",
        "id": "450304"
    },
    {
        "name": "七星区",
        "pId": "450300",
        "id": "450305"
    },
    {
        "name": "雁山区",
        "pId": "450300",
        "id": "450311"
    },
    {
        "name": "临桂区",
        "pId": "450300",
        "id": "450312"
    },
    {
        "name": "阳朔县",
        "pId": "450300",
        "id": "450321"
    },
    {
        "name": "灵川县",
        "pId": "450300",
        "id": "450323"
    },
    {
        "name": "全州县",
        "pId": "450300",
        "id": "450324"
    },
    {
        "name": "兴安县",
        "pId": "450300",
        "id": "450325"
    },
    {
        "name": "永福县",
        "pId": "450300",
        "id": "450326"
    },
    {
        "name": "灌阳县",
        "pId": "450300",
        "id": "450327"
    },
    {
        "name": "龙胜各族自治县",
        "pId": "450300",
        "id": "450328"
    },
    {
        "name": "资源县",
        "pId": "450300",
        "id": "450329"
    },
    {
        "name": "平乐县",
        "pId": "450300",
        "id": "450330"
    },
    {
        "name": "荔浦县",
        "pId": "450300",
        "id": "450331"
    },
    {
        "name": "恭城瑶族自治县",
        "pId": "450300",
        "id": "450332"
    },
    {
        "name": "梧州市",
        "pId": "450000",
        "id": "450400"
    },
    {
        "name": "万秀区",
        "pId": "450400",
        "id": "450403"
    },
    {
        "name": "长洲区",
        "pId": "450400",
        "id": "450405"
    },
    {
        "name": "龙圩区",
        "pId": "450400",
        "id": "450406"
    },
    {
        "name": "苍梧县",
        "pId": "450400",
        "id": "450421"
    },
    {
        "name": "藤县",
        "pId": "450400",
        "id": "450422"
    },
    {
        "name": "蒙山县",
        "pId": "450400",
        "id": "450423"
    },
    {
        "name": "岑溪市",
        "pId": "450400",
        "id": "450481"
    },
    {
        "name": "北海市",
        "pId": "450000",
        "id": "450500"
    },
    {
        "name": "海城区",
        "pId": "450500",
        "id": "450502"
    },
    {
        "name": "银海区",
        "pId": "450500",
        "id": "450503"
    },
    {
        "name": "铁山港区",
        "pId": "450500",
        "id": "450512"
    },
    {
        "name": "合浦县",
        "pId": "450500",
        "id": "450521"
    },
    {
        "name": "防城港市",
        "pId": "450000",
        "id": "450600"
    },
    {
        "name": "港口区",
        "pId": "450600",
        "id": "450602"
    },
    {
        "name": "防城区",
        "pId": "450600",
        "id": "450603"
    },
    {
        "name": "上思县",
        "pId": "450600",
        "id": "450621"
    },
    {
        "name": "东兴市",
        "pId": "450600",
        "id": "450681"
    },
    {
        "name": "钦州市",
        "pId": "450000",
        "id": "450700"
    },
    {
        "name": "钦南区",
        "pId": "450700",
        "id": "450702"
    },
    {
        "name": "钦北区",
        "pId": "450700",
        "id": "450703"
    },
    {
        "name": "灵山县",
        "pId": "450700",
        "id": "450721"
    },
    {
        "name": "浦北县",
        "pId": "450700",
        "id": "450722"
    },
    {
        "name": "贵港市",
        "pId": "450000",
        "id": "450800"
    },
    {
        "name": "港北区",
        "pId": "450800",
        "id": "450802"
    },
    {
        "name": "港南区",
        "pId": "450800",
        "id": "450803"
    },
    {
        "name": "覃塘区",
        "pId": "450800",
        "id": "450804"
    },
    {
        "name": "平南县",
        "pId": "450800",
        "id": "450821"
    },
    {
        "name": "桂平市",
        "pId": "450800",
        "id": "450881"
    },
    {
        "name": "玉林市",
        "pId": "450000",
        "id": "450900"
    },
    {
        "name": "玉州区",
        "pId": "450900",
        "id": "450902"
    },
    {
        "name": "福绵区",
        "pId": "450900",
        "id": "450903"
    },
    {
        "name": "玉东新区",
        "pId": "450900",
        "id": "450904"
    },
    {
        "name": "容县",
        "pId": "450900",
        "id": "450921"
    },
    {
        "name": "陆川县",
        "pId": "450900",
        "id": "450922"
    },
    {
        "name": "博白县",
        "pId": "450900",
        "id": "450923"
    },
    {
        "name": "兴业县",
        "pId": "450900",
        "id": "450924"
    },
    {
        "name": "北流市",
        "pId": "450900",
        "id": "450981"
    },
    {
        "name": "百色市",
        "pId": "450000",
        "id": "451000"
    },
    {
        "name": "右江区",
        "pId": "451000",
        "id": "451002"
    },
    {
        "name": "田阳县",
        "pId": "451000",
        "id": "451021"
    },
    {
        "name": "田东县",
        "pId": "451000",
        "id": "451022"
    },
    {
        "name": "平果县",
        "pId": "451000",
        "id": "451023"
    },
    {
        "name": "德保县",
        "pId": "451000",
        "id": "451024"
    },
    {
        "name": "靖西县",
        "pId": "451000",
        "id": "451025"
    },
    {
        "name": "那坡县",
        "pId": "451000",
        "id": "451026"
    },
    {
        "name": "凌云县",
        "pId": "451000",
        "id": "451027"
    },
    {
        "name": "乐业县",
        "pId": "451000",
        "id": "451028"
    },
    {
        "name": "田林县",
        "pId": "451000",
        "id": "451029"
    },
    {
        "name": "西林县",
        "pId": "451000",
        "id": "451030"
    },
    {
        "name": "隆林各族自治县",
        "pId": "451000",
        "id": "451031"
    },
    {
        "name": "贺州市",
        "pId": "450000",
        "id": "451100"
    },
    {
        "name": "八步区",
        "pId": "451100",
        "id": "451102"
    },
    {
        "name": "昭平县",
        "pId": "451100",
        "id": "451121"
    },
    {
        "name": "钟山县",
        "pId": "451100",
        "id": "451122"
    },
    {
        "name": "富川瑶族自治县",
        "pId": "451100",
        "id": "451123"
    },
    {
        "name": "平桂管理区",
        "pId": "451100",
        "id": "451124"
    },
    {
        "name": "河池市",
        "pId": "450000",
        "id": "451200"
    },
    {
        "name": "金城江区",
        "pId": "451200",
        "id": "451202"
    },
    {
        "name": "南丹县",
        "pId": "451200",
        "id": "451221"
    },
    {
        "name": "天峨县",
        "pId": "451200",
        "id": "451222"
    },
    {
        "name": "凤山县",
        "pId": "451200",
        "id": "451223"
    },
    {
        "name": "东兰县",
        "pId": "451200",
        "id": "451224"
    },
    {
        "name": "罗城仫佬族自治县",
        "pId": "451200",
        "id": "451225"
    },
    {
        "name": "环江毛南族自治县",
        "pId": "451200",
        "id": "451226"
    },
    {
        "name": "巴马瑶族自治县",
        "pId": "451200",
        "id": "451227"
    },
    {
        "name": "都安瑶族自治县",
        "pId": "451200",
        "id": "451228"
    },
    {
        "name": "大化瑶族自治县",
        "pId": "451200",
        "id": "451229"
    },
    {
        "name": "宜州市",
        "pId": "451200",
        "id": "451281"
    },
    {
        "name": "来宾市",
        "pId": "450000",
        "id": "451300"
    },
    {
        "name": "兴宾区",
        "pId": "451300",
        "id": "451302"
    },
    {
        "name": "忻城县",
        "pId": "451300",
        "id": "451321"
    },
    {
        "name": "象州县",
        "pId": "451300",
        "id": "451322"
    },
    {
        "name": "武宣县",
        "pId": "451300",
        "id": "451323"
    },
    {
        "name": "金秀瑶族自治县",
        "pId": "451300",
        "id": "451324"
    },
    {
        "name": "合山市",
        "pId": "451300",
        "id": "451381"
    },
    {
        "name": "崇左市",
        "pId": "450000",
        "id": "451400"
    },
    {
        "name": "江州区",
        "pId": "451400",
        "id": "451402"
    },
    {
        "name": "扶绥县",
        "pId": "451400",
        "id": "451421"
    },
    {
        "name": "宁明县",
        "pId": "451400",
        "id": "451422"
    },
    {
        "name": "龙州县",
        "pId": "451400",
        "id": "451423"
    },
    {
        "name": "大新县",
        "pId": "451400",
        "id": "451424"
    },
    {
        "name": "天等县",
        "pId": "451400",
        "id": "451425"
    },
    {
        "name": "凭祥市",
        "pId": "451400",
        "id": "451481"
    },
    {
        "name": "海南省",
        "pId": "100000",
        "id": "460000"
    },
    {
        "name": "海口市",
        "pId": "460000",
        "id": "460100"
    },
    {
        "name": "秀英区",
        "pId": "460100",
        "id": "460105"
    },
    {
        "name": "龙华区",
        "pId": "460100",
        "id": "460106"
    },
    {
        "name": "琼山区",
        "pId": "460100",
        "id": "460107"
    },
    {
        "name": "美兰区",
        "pId": "460100",
        "id": "460108"
    },
    {
        "name": "三亚市",
        "pId": "460000",
        "id": "460200"
    },
    {
        "name": "海棠区",
        "pId": "460200",
        "id": "460202"
    },
    {
        "name": "吉阳区",
        "pId": "460200",
        "id": "460203"
    },
    {
        "name": "天涯区",
        "pId": "460200",
        "id": "460204"
    },
    {
        "name": "崖州区",
        "pId": "460200",
        "id": "460205"
    },
    {
        "name": "三沙市",
        "pId": "460000",
        "id": "460300"
    },
    {
        "name": "西沙群岛",
        "pId": "460300",
        "id": "460321"
    },
    {
        "name": "南沙群岛",
        "pId": "460300",
        "id": "460322"
    },
    {
        "name": "中沙群岛",
        "pId": "460300",
        "id": "460323"
    },
    {
        "name": "直辖县级",
        "pId": "460000",
        "id": "469000"
    },
    {
        "name": "五指山市",
        "pId": "469000",
        "id": "469001"
    },
    {
        "name": "琼海市",
        "pId": "469000",
        "id": "469002"
    },
    {
        "name": "儋州市",
        "pId": "469000",
        "id": "469003"
    },
    {
        "name": "文昌市",
        "pId": "469000",
        "id": "469005"
    },
    {
        "name": "万宁市",
        "pId": "469000",
        "id": "469006"
    },
    {
        "name": "东方市",
        "pId": "469000",
        "id": "469007"
    },
    {
        "name": "定安县",
        "pId": "469000",
        "id": "469021"
    },
    {
        "name": "屯昌县",
        "pId": "469000",
        "id": "469022"
    },
    {
        "name": "澄迈县",
        "pId": "469000",
        "id": "469023"
    },
    {
        "name": "临高县",
        "pId": "469000",
        "id": "469024"
    },
    {
        "name": "白沙黎族自治县",
        "pId": "469000",
        "id": "469025"
    },
    {
        "name": "昌江黎族自治县",
        "pId": "469000",
        "id": "469026"
    },
    {
        "name": "乐东黎族自治县",
        "pId": "469000",
        "id": "469027"
    },
    {
        "name": "陵水黎族自治县",
        "pId": "469000",
        "id": "469028"
    },
    {
        "name": "保亭黎族苗族自治县",
        "pId": "469000",
        "id": "469029"
    },
    {
        "name": "琼中黎族苗族自治县",
        "pId": "469000",
        "id": "469030"
    },
    {
        "name": "重庆",
        "pId": "100000",
        "id": "500000"
    },
    {
        "name": "重庆市",
        "pId": "500000",
        "id": "500100"
    },
    {
        "name": "万州区",
        "pId": "500100",
        "id": "500101"
    },
    {
        "name": "涪陵区",
        "pId": "500100",
        "id": "500102"
    },
    {
        "name": "渝中区",
        "pId": "500100",
        "id": "500103"
    },
    {
        "name": "大渡口区",
        "pId": "500100",
        "id": "500104"
    },
    {
        "name": "江北区",
        "pId": "500100",
        "id": "500105"
    },
    {
        "name": "沙坪坝区",
        "pId": "500100",
        "id": "500106"
    },
    {
        "name": "九龙坡区",
        "pId": "500100",
        "id": "500107"
    },
    {
        "name": "南岸区",
        "pId": "500100",
        "id": "500108"
    },
    {
        "name": "北碚区",
        "pId": "500100",
        "id": "500109"
    },
    {
        "name": "綦江区",
        "pId": "500100",
        "id": "500110"
    },
    {
        "name": "大足区",
        "pId": "500100",
        "id": "500111"
    },
    {
        "name": "渝北区",
        "pId": "500100",
        "id": "500112"
    },
    {
        "name": "巴南区",
        "pId": "500100",
        "id": "500113"
    },
    {
        "name": "黔江区",
        "pId": "500100",
        "id": "500114"
    },
    {
        "name": "长寿区",
        "pId": "500100",
        "id": "500115"
    },
    {
        "name": "江津区",
        "pId": "500100",
        "id": "500116"
    },
    {
        "name": "合川区",
        "pId": "500100",
        "id": "500117"
    },
    {
        "name": "永川区",
        "pId": "500100",
        "id": "500118"
    },
    {
        "name": "南川区",
        "pId": "500100",
        "id": "500119"
    },
    {
        "name": "璧山区",
        "pId": "500100",
        "id": "500120"
    },
    {
        "name": "铜梁区",
        "pId": "500100",
        "id": "500151"
    },
    {
        "name": "潼南县",
        "pId": "500100",
        "id": "500223"
    },
    {
        "name": "荣昌县",
        "pId": "500100",
        "id": "500226"
    },
    {
        "name": "梁平县",
        "pId": "500100",
        "id": "500228"
    },
    {
        "name": "城口县",
        "pId": "500100",
        "id": "500229"
    },
    {
        "name": "丰都县",
        "pId": "500100",
        "id": "500230"
    },
    {
        "name": "垫江县",
        "pId": "500100",
        "id": "500231"
    },
    {
        "name": "武隆县",
        "pId": "500100",
        "id": "500232"
    },
    {
        "name": "忠县",
        "pId": "500100",
        "id": "500233"
    },
    {
        "name": "开县",
        "pId": "500100",
        "id": "500234"
    },
    {
        "name": "云阳县",
        "pId": "500100",
        "id": "500235"
    },
    {
        "name": "奉节县",
        "pId": "500100",
        "id": "500236"
    },
    {
        "name": "巫山县",
        "pId": "500100",
        "id": "500237"
    },
    {
        "name": "巫溪县",
        "pId": "500100",
        "id": "500238"
    },
    {
        "name": "石柱土家族自治县",
        "pId": "500100",
        "id": "500240"
    },
    {
        "name": "秀山土家族苗族自治县",
        "pId": "500100",
        "id": "500241"
    },
    {
        "name": "酉阳土家族苗族自治县",
        "pId": "500100",
        "id": "500242"
    },
    {
        "name": "彭水苗族土家族自治县",
        "pId": "500100",
        "id": "500243"
    },
    {
        "name": "两江新区",
        "pId": "500000",
        "id": "500300"
    },
    {
        "name": "北部新区",
        "pId": "500300",
        "id": "500301"
    },
    {
        "name": "保税港区",
        "pId": "500300",
        "id": "500302"
    },
    {
        "name": "工业园区",
        "pId": "500300",
        "id": "500303"
    },
    {
        "name": "四川省",
        "pId": "100000",
        "id": "510000"
    },
    {
        "name": "成都市",
        "pId": "510000",
        "id": "510100"
    },
    {
        "name": "锦江区",
        "pId": "510100",
        "id": "510104"
    },
    {
        "name": "青羊区",
        "pId": "510100",
        "id": "510105"
    },
    {
        "name": "金牛区",
        "pId": "510100",
        "id": "510106"
    },
    {
        "name": "武侯区",
        "pId": "510100",
        "id": "510107"
    },
    {
        "name": "成华区",
        "pId": "510100",
        "id": "510108"
    },
    {
        "name": "龙泉驿区",
        "pId": "510100",
        "id": "510112"
    },
    {
        "name": "青白江区",
        "pId": "510100",
        "id": "510113"
    },
    {
        "name": "新都区",
        "pId": "510100",
        "id": "510114"
    },
    {
        "name": "温江区",
        "pId": "510100",
        "id": "510115"
    },
    {
        "name": "金堂县",
        "pId": "510100",
        "id": "510121"
    },
    {
        "name": "双流县",
        "pId": "510100",
        "id": "510122"
    },
    {
        "name": "郫县",
        "pId": "510100",
        "id": "510124"
    },
    {
        "name": "大邑县",
        "pId": "510100",
        "id": "510129"
    },
    {
        "name": "蒲江县",
        "pId": "510100",
        "id": "510131"
    },
    {
        "name": "新津县",
        "pId": "510100",
        "id": "510132"
    },
    {
        "name": "都江堰市",
        "pId": "510100",
        "id": "510181"
    },
    {
        "name": "彭州市",
        "pId": "510100",
        "id": "510182"
    },
    {
        "name": "邛崃市",
        "pId": "510100",
        "id": "510183"
    },
    {
        "name": "崇州市",
        "pId": "510100",
        "id": "510184"
    },
    {
        "name": "自贡市",
        "pId": "510000",
        "id": "510300"
    },
    {
        "name": "自流井区",
        "pId": "510300",
        "id": "510302"
    },
    {
        "name": "贡井区",
        "pId": "510300",
        "id": "510303"
    },
    {
        "name": "大安区",
        "pId": "510300",
        "id": "510304"
    },
    {
        "name": "沿滩区",
        "pId": "510300",
        "id": "510311"
    },
    {
        "name": "荣县",
        "pId": "510300",
        "id": "510321"
    },
    {
        "name": "富顺县",
        "pId": "510300",
        "id": "510322"
    },
    {
        "name": "攀枝花市",
        "pId": "510000",
        "id": "510400"
    },
    {
        "name": "东区",
        "pId": "510400",
        "id": "510402"
    },
    {
        "name": "西区",
        "pId": "510400",
        "id": "510403"
    },
    {
        "name": "仁和区",
        "pId": "510400",
        "id": "510411"
    },
    {
        "name": "米易县",
        "pId": "510400",
        "id": "510421"
    },
    {
        "name": "盐边县",
        "pId": "510400",
        "id": "510422"
    },
    {
        "name": "泸州市",
        "pId": "510000",
        "id": "510500"
    },
    {
        "name": "江阳区",
        "pId": "510500",
        "id": "510502"
    },
    {
        "name": "纳溪区",
        "pId": "510500",
        "id": "510503"
    },
    {
        "name": "龙马潭区",
        "pId": "510500",
        "id": "510504"
    },
    {
        "name": "泸县",
        "pId": "510500",
        "id": "510521"
    },
    {
        "name": "合江县",
        "pId": "510500",
        "id": "510522"
    },
    {
        "name": "叙永县",
        "pId": "510500",
        "id": "510524"
    },
    {
        "name": "古蔺县",
        "pId": "510500",
        "id": "510525"
    },
    {
        "name": "德阳市",
        "pId": "510000",
        "id": "510600"
    },
    {
        "name": "旌阳区",
        "pId": "510600",
        "id": "510603"
    },
    {
        "name": "中江县",
        "pId": "510600",
        "id": "510623"
    },
    {
        "name": "罗江县",
        "pId": "510600",
        "id": "510626"
    },
    {
        "name": "广汉市",
        "pId": "510600",
        "id": "510681"
    },
    {
        "name": "什邡市",
        "pId": "510600",
        "id": "510682"
    },
    {
        "name": "绵竹市",
        "pId": "510600",
        "id": "510683"
    },
    {
        "name": "绵阳市",
        "pId": "510000",
        "id": "510700"
    },
    {
        "name": "涪城区",
        "pId": "510700",
        "id": "510703"
    },
    {
        "name": "游仙区",
        "pId": "510700",
        "id": "510704"
    },
    {
        "name": "三台县",
        "pId": "510700",
        "id": "510722"
    },
    {
        "name": "盐亭县",
        "pId": "510700",
        "id": "510723"
    },
    {
        "name": "安县",
        "pId": "510700",
        "id": "510724"
    },
    {
        "name": "梓潼县",
        "pId": "510700",
        "id": "510725"
    },
    {
        "name": "北川羌族自治县",
        "pId": "510700",
        "id": "510726"
    },
    {
        "name": "平武县",
        "pId": "510700",
        "id": "510727"
    },
    {
        "name": "江油市",
        "pId": "510700",
        "id": "510781"
    },
    {
        "name": "广元市",
        "pId": "510000",
        "id": "510800"
    },
    {
        "name": "利州区",
        "pId": "510800",
        "id": "510802"
    },
    {
        "name": "昭化区",
        "pId": "510800",
        "id": "510811"
    },
    {
        "name": "朝天区",
        "pId": "510800",
        "id": "510812"
    },
    {
        "name": "旺苍县",
        "pId": "510800",
        "id": "510821"
    },
    {
        "name": "青川县",
        "pId": "510800",
        "id": "510822"
    },
    {
        "name": "剑阁县",
        "pId": "510800",
        "id": "510823"
    },
    {
        "name": "苍溪县",
        "pId": "510800",
        "id": "510824"
    },
    {
        "name": "遂宁市",
        "pId": "510000",
        "id": "510900"
    },
    {
        "name": "船山区",
        "pId": "510900",
        "id": "510903"
    },
    {
        "name": "安居区",
        "pId": "510900",
        "id": "510904"
    },
    {
        "name": "蓬溪县",
        "pId": "510900",
        "id": "510921"
    },
    {
        "name": "射洪县",
        "pId": "510900",
        "id": "510922"
    },
    {
        "name": "大英县",
        "pId": "510900",
        "id": "510923"
    },
    {
        "name": "内江市",
        "pId": "510000",
        "id": "511000"
    },
    {
        "name": "市中区",
        "pId": "511000",
        "id": "511002"
    },
    {
        "name": "东兴区",
        "pId": "511000",
        "id": "511011"
    },
    {
        "name": "威远县",
        "pId": "511000",
        "id": "511024"
    },
    {
        "name": "资中县",
        "pId": "511000",
        "id": "511025"
    },
    {
        "name": "隆昌县",
        "pId": "511000",
        "id": "511028"
    },
    {
        "name": "乐山市",
        "pId": "510000",
        "id": "511100"
    },
    {
        "name": "市中区",
        "pId": "511100",
        "id": "511102"
    },
    {
        "name": "沙湾区",
        "pId": "511100",
        "id": "511111"
    },
    {
        "name": "五通桥区",
        "pId": "511100",
        "id": "511112"
    },
    {
        "name": "金口河区",
        "pId": "511100",
        "id": "511113"
    },
    {
        "name": "犍为县",
        "pId": "511100",
        "id": "511123"
    },
    {
        "name": "井研县",
        "pId": "511100",
        "id": "511124"
    },
    {
        "name": "夹江县",
        "pId": "511100",
        "id": "511126"
    },
    {
        "name": "沐川县",
        "pId": "511100",
        "id": "511129"
    },
    {
        "name": "峨边彝族自治县",
        "pId": "511100",
        "id": "511132"
    },
    {
        "name": "马边彝族自治县",
        "pId": "511100",
        "id": "511133"
    },
    {
        "name": "峨眉山市",
        "pId": "511100",
        "id": "511181"
    },
    {
        "name": "南充市",
        "pId": "510000",
        "id": "511300"
    },
    {
        "name": "顺庆区",
        "pId": "511300",
        "id": "511302"
    },
    {
        "name": "高坪区",
        "pId": "511300",
        "id": "511303"
    },
    {
        "name": "嘉陵区",
        "pId": "511300",
        "id": "511304"
    },
    {
        "name": "南部县",
        "pId": "511300",
        "id": "511321"
    },
    {
        "name": "营山县",
        "pId": "511300",
        "id": "511322"
    },
    {
        "name": "蓬安县",
        "pId": "511300",
        "id": "511323"
    },
    {
        "name": "仪陇县",
        "pId": "511300",
        "id": "511324"
    },
    {
        "name": "西充县",
        "pId": "511300",
        "id": "511325"
    },
    {
        "name": "阆中市",
        "pId": "511300",
        "id": "511381"
    },
    {
        "name": "眉山市",
        "pId": "510000",
        "id": "511400"
    },
    {
        "name": "东坡区",
        "pId": "511400",
        "id": "511402"
    },
    {
        "name": "彭山区",
        "pId": "511400",
        "id": "511403"
    },
    {
        "name": "仁寿县",
        "pId": "511400",
        "id": "511421"
    },
    {
        "name": "洪雅县",
        "pId": "511400",
        "id": "511423"
    },
    {
        "name": "丹棱县",
        "pId": "511400",
        "id": "511424"
    },
    {
        "name": "青神县",
        "pId": "511400",
        "id": "511425"
    },
    {
        "name": "宜宾市",
        "pId": "510000",
        "id": "511500"
    },
    {
        "name": "翠屏区",
        "pId": "511500",
        "id": "511502"
    },
    {
        "name": "南溪区",
        "pId": "511500",
        "id": "511503"
    },
    {
        "name": "宜宾县",
        "pId": "511500",
        "id": "511521"
    },
    {
        "name": "江安县",
        "pId": "511500",
        "id": "511523"
    },
    {
        "name": "长宁县",
        "pId": "511500",
        "id": "511524"
    },
    {
        "name": "高县",
        "pId": "511500",
        "id": "511525"
    },
    {
        "name": "珙县",
        "pId": "511500",
        "id": "511526"
    },
    {
        "name": "筠连县",
        "pId": "511500",
        "id": "511527"
    },
    {
        "name": "兴文县",
        "pId": "511500",
        "id": "511528"
    },
    {
        "name": "屏山县",
        "pId": "511500",
        "id": "511529"
    },
    {
        "name": "广安市",
        "pId": "510000",
        "id": "511600"
    },
    {
        "name": "广安区",
        "pId": "511600",
        "id": "511602"
    },
    {
        "name": "前锋区",
        "pId": "511600",
        "id": "511603"
    },
    {
        "name": "岳池县",
        "pId": "511600",
        "id": "511621"
    },
    {
        "name": "武胜县",
        "pId": "511600",
        "id": "511622"
    },
    {
        "name": "邻水县",
        "pId": "511600",
        "id": "511623"
    },
    {
        "name": "华蓥市",
        "pId": "511600",
        "id": "511681"
    },
    {
        "name": "达州市",
        "pId": "510000",
        "id": "511700"
    },
    {
        "name": "通川区",
        "pId": "511700",
        "id": "511702"
    },
    {
        "name": "达川区",
        "pId": "511700",
        "id": "511703"
    },
    {
        "name": "宣汉县",
        "pId": "511700",
        "id": "511722"
    },
    {
        "name": "开江县",
        "pId": "511700",
        "id": "511723"
    },
    {
        "name": "大竹县",
        "pId": "511700",
        "id": "511724"
    },
    {
        "name": "渠县",
        "pId": "511700",
        "id": "511725"
    },
    {
        "name": "万源市",
        "pId": "511700",
        "id": "511781"
    },
    {
        "name": "雅安市",
        "pId": "510000",
        "id": "511800"
    },
    {
        "name": "雨城区",
        "pId": "511800",
        "id": "511802"
    },
    {
        "name": "名山区",
        "pId": "511800",
        "id": "511803"
    },
    {
        "name": "荥经县",
        "pId": "511800",
        "id": "511822"
    },
    {
        "name": "汉源县",
        "pId": "511800",
        "id": "511823"
    },
    {
        "name": "石棉县",
        "pId": "511800",
        "id": "511824"
    },
    {
        "name": "天全县",
        "pId": "511800",
        "id": "511825"
    },
    {
        "name": "芦山县",
        "pId": "511800",
        "id": "511826"
    },
    {
        "name": "宝兴县",
        "pId": "511800",
        "id": "511827"
    },
    {
        "name": "巴中市",
        "pId": "510000",
        "id": "511900"
    },
    {
        "name": "巴州区",
        "pId": "511900",
        "id": "511902"
    },
    {
        "name": "恩阳区",
        "pId": "511900",
        "id": "511903"
    },
    {
        "name": "通江县",
        "pId": "511900",
        "id": "511921"
    },
    {
        "name": "南江县",
        "pId": "511900",
        "id": "511922"
    },
    {
        "name": "平昌县",
        "pId": "511900",
        "id": "511923"
    },
    {
        "name": "资阳市",
        "pId": "510000",
        "id": "512000"
    },
    {
        "name": "雁江区",
        "pId": "512000",
        "id": "512002"
    },
    {
        "name": "安岳县",
        "pId": "512000",
        "id": "512021"
    },
    {
        "name": "乐至县",
        "pId": "512000",
        "id": "512022"
    },
    {
        "name": "简阳市",
        "pId": "512000",
        "id": "512081"
    },
    {
        "name": "阿坝藏族羌族自治州",
        "pId": "510000",
        "id": "513200"
    },
    {
        "name": "汶川县",
        "pId": "513200",
        "id": "513221"
    },
    {
        "name": "理县",
        "pId": "513200",
        "id": "513222"
    },
    {
        "name": "茂县",
        "pId": "513200",
        "id": "513223"
    },
    {
        "name": "松潘县",
        "pId": "513200",
        "id": "513224"
    },
    {
        "name": "九寨沟县",
        "pId": "513200",
        "id": "513225"
    },
    {
        "name": "金川县",
        "pId": "513200",
        "id": "513226"
    },
    {
        "name": "小金县",
        "pId": "513200",
        "id": "513227"
    },
    {
        "name": "黑水县",
        "pId": "513200",
        "id": "513228"
    },
    {
        "name": "马尔康县",
        "pId": "513200",
        "id": "513229"
    },
    {
        "name": "壤塘县",
        "pId": "513200",
        "id": "513230"
    },
    {
        "name": "阿坝县",
        "pId": "513200",
        "id": "513231"
    },
    {
        "name": "若尔盖县",
        "pId": "513200",
        "id": "513232"
    },
    {
        "name": "红原县",
        "pId": "513200",
        "id": "513233"
    },
    {
        "name": "甘孜藏族自治州",
        "pId": "510000",
        "id": "513300"
    },
    {
        "name": "康定县",
        "pId": "513300",
        "id": "513321"
    },
    {
        "name": "泸定县",
        "pId": "513300",
        "id": "513322"
    },
    {
        "name": "丹巴县",
        "pId": "513300",
        "id": "513323"
    },
    {
        "name": "九龙县",
        "pId": "513300",
        "id": "513324"
    },
    {
        "name": "雅江县",
        "pId": "513300",
        "id": "513325"
    },
    {
        "name": "道孚县",
        "pId": "513300",
        "id": "513326"
    },
    {
        "name": "炉霍县",
        "pId": "513300",
        "id": "513327"
    },
    {
        "name": "甘孜县",
        "pId": "513300",
        "id": "513328"
    },
    {
        "name": "新龙县",
        "pId": "513300",
        "id": "513329"
    },
    {
        "name": "德格县",
        "pId": "513300",
        "id": "513330"
    },
    {
        "name": "白玉县",
        "pId": "513300",
        "id": "513331"
    },
    {
        "name": "石渠县",
        "pId": "513300",
        "id": "513332"
    },
    {
        "name": "色达县",
        "pId": "513300",
        "id": "513333"
    },
    {
        "name": "理塘县",
        "pId": "513300",
        "id": "513334"
    },
    {
        "name": "巴塘县",
        "pId": "513300",
        "id": "513335"
    },
    {
        "name": "乡城县",
        "pId": "513300",
        "id": "513336"
    },
    {
        "name": "稻城县",
        "pId": "513300",
        "id": "513337"
    },
    {
        "name": "得荣县",
        "pId": "513300",
        "id": "513338"
    },
    {
        "name": "凉山彝族自治州",
        "pId": "510000",
        "id": "513400"
    },
    {
        "name": "西昌市",
        "pId": "513400",
        "id": "513401"
    },
    {
        "name": "木里藏族自治县",
        "pId": "513400",
        "id": "513422"
    },
    {
        "name": "盐源县",
        "pId": "513400",
        "id": "513423"
    },
    {
        "name": "德昌县",
        "pId": "513400",
        "id": "513424"
    },
    {
        "name": "会理县",
        "pId": "513400",
        "id": "513425"
    },
    {
        "name": "会东县",
        "pId": "513400",
        "id": "513426"
    },
    {
        "name": "宁南县",
        "pId": "513400",
        "id": "513427"
    },
    {
        "name": "普格县",
        "pId": "513400",
        "id": "513428"
    },
    {
        "name": "布拖县",
        "pId": "513400",
        "id": "513429"
    },
    {
        "name": "金阳县",
        "pId": "513400",
        "id": "513430"
    },
    {
        "name": "昭觉县",
        "pId": "513400",
        "id": "513431"
    },
    {
        "name": "喜德县",
        "pId": "513400",
        "id": "513432"
    },
    {
        "name": "冕宁县",
        "pId": "513400",
        "id": "513433"
    },
    {
        "name": "越西县",
        "pId": "513400",
        "id": "513434"
    },
    {
        "name": "甘洛县",
        "pId": "513400",
        "id": "513435"
    },
    {
        "name": "美姑县",
        "pId": "513400",
        "id": "513436"
    },
    {
        "name": "雷波县",
        "pId": "513400",
        "id": "513437"
    },
    {
        "name": "贵州省",
        "pId": "100000",
        "id": "520000"
    },
    {
        "name": "贵阳市",
        "pId": "520000",
        "id": "520100"
    },
    {
        "name": "南明区",
        "pId": "520100",
        "id": "520102"
    },
    {
        "name": "云岩区",
        "pId": "520100",
        "id": "520103"
    },
    {
        "name": "花溪区",
        "pId": "520100",
        "id": "520111"
    },
    {
        "name": "乌当区",
        "pId": "520100",
        "id": "520112"
    },
    {
        "name": "白云区",
        "pId": "520100",
        "id": "520113"
    },
    {
        "name": "观山湖区",
        "pId": "520100",
        "id": "520115"
    },
    {
        "name": "开阳县",
        "pId": "520100",
        "id": "520121"
    },
    {
        "name": "息烽县",
        "pId": "520100",
        "id": "520122"
    },
    {
        "name": "修文县",
        "pId": "520100",
        "id": "520123"
    },
    {
        "name": "清镇市",
        "pId": "520100",
        "id": "520181"
    },
    {
        "name": "六盘水市",
        "pId": "520000",
        "id": "520200"
    },
    {
        "name": "钟山区",
        "pId": "520200",
        "id": "520201"
    },
    {
        "name": "六枝特区",
        "pId": "520200",
        "id": "520203"
    },
    {
        "name": "水城县",
        "pId": "520200",
        "id": "520221"
    },
    {
        "name": "盘县",
        "pId": "520200",
        "id": "520222"
    },
    {
        "name": "遵义市",
        "pId": "520000",
        "id": "520300"
    },
    {
        "name": "红花岗区",
        "pId": "520300",
        "id": "520302"
    },
    {
        "name": "汇川区",
        "pId": "520300",
        "id": "520303"
    },
    {
        "name": "遵义县",
        "pId": "520300",
        "id": "520321"
    },
    {
        "name": "桐梓县",
        "pId": "520300",
        "id": "520322"
    },
    {
        "name": "绥阳县",
        "pId": "520300",
        "id": "520323"
    },
    {
        "name": "正安县",
        "pId": "520300",
        "id": "520324"
    },
    {
        "name": "道真仡佬族苗族自治县",
        "pId": "520300",
        "id": "520325"
    },
    {
        "name": "务川仡佬族苗族自治县",
        "pId": "520300",
        "id": "520326"
    },
    {
        "name": "凤冈县",
        "pId": "520300",
        "id": "520327"
    },
    {
        "name": "湄潭县",
        "pId": "520300",
        "id": "520328"
    },
    {
        "name": "余庆县",
        "pId": "520300",
        "id": "520329"
    },
    {
        "name": "习水县",
        "pId": "520300",
        "id": "520330"
    },
    {
        "name": "赤水市",
        "pId": "520300",
        "id": "520381"
    },
    {
        "name": "仁怀市",
        "pId": "520300",
        "id": "520382"
    },
    {
        "name": "安顺市",
        "pId": "520000",
        "id": "520400"
    },
    {
        "name": "西秀区",
        "pId": "520400",
        "id": "520402"
    },
    {
        "name": "平坝区",
        "pId": "520400",
        "id": "520421"
    },
    {
        "name": "普定县",
        "pId": "520400",
        "id": "520422"
    },
    {
        "name": "镇宁布依族苗族自治县",
        "pId": "520400",
        "id": "520423"
    },
    {
        "name": "关岭布依族苗族自治县",
        "pId": "520400",
        "id": "520424"
    },
    {
        "name": "紫云苗族布依族自治县",
        "pId": "520400",
        "id": "520425"
    },
    {
        "name": "毕节市",
        "pId": "520000",
        "id": "520500"
    },
    {
        "name": "七星关区",
        "pId": "520500",
        "id": "520502"
    },
    {
        "name": "大方县",
        "pId": "520500",
        "id": "520521"
    },
    {
        "name": "黔西县",
        "pId": "520500",
        "id": "520522"
    },
    {
        "name": "金沙县",
        "pId": "520500",
        "id": "520523"
    },
    {
        "name": "织金县",
        "pId": "520500",
        "id": "520524"
    },
    {
        "name": "纳雍县",
        "pId": "520500",
        "id": "520525"
    },
    {
        "name": "威宁彝族回族苗族自治县",
        "pId": "520500",
        "id": "520526"
    },
    {
        "name": "赫章县",
        "pId": "520500",
        "id": "520527"
    },
    {
        "name": "铜仁市",
        "pId": "520000",
        "id": "520600"
    },
    {
        "name": "碧江区",
        "pId": "520600",
        "id": "520602"
    },
    {
        "name": "万山区",
        "pId": "520600",
        "id": "520603"
    },
    {
        "name": "江口县",
        "pId": "520600",
        "id": "520621"
    },
    {
        "name": "玉屏侗族自治县",
        "pId": "520600",
        "id": "520622"
    },
    {
        "name": "石阡县",
        "pId": "520600",
        "id": "520623"
    },
    {
        "name": "思南县",
        "pId": "520600",
        "id": "520624"
    },
    {
        "name": "印江土家族苗族自治县",
        "pId": "520600",
        "id": "520625"
    },
    {
        "name": "德江县",
        "pId": "520600",
        "id": "520626"
    },
    {
        "name": "沿河土家族自治县",
        "pId": "520600",
        "id": "520627"
    },
    {
        "name": "松桃苗族自治县",
        "pId": "520600",
        "id": "520628"
    },
    {
        "name": "黔西南布依族苗族自治州",
        "pId": "520000",
        "id": "522300"
    },
    {
        "name": "兴义市 ",
        "pId": "522300",
        "id": "522301"
    },
    {
        "name": "兴仁县",
        "pId": "522300",
        "id": "522322"
    },
    {
        "name": "普安县",
        "pId": "522300",
        "id": "522323"
    },
    {
        "name": "晴隆县",
        "pId": "522300",
        "id": "522324"
    },
    {
        "name": "贞丰县",
        "pId": "522300",
        "id": "522325"
    },
    {
        "name": "望谟县",
        "pId": "522300",
        "id": "522326"
    },
    {
        "name": "册亨县",
        "pId": "522300",
        "id": "522327"
    },
    {
        "name": "安龙县",
        "pId": "522300",
        "id": "522328"
    },
    {
        "name": "黔东南苗族侗族自治州",
        "pId": "520000",
        "id": "522600"
    },
    {
        "name": "凯里市",
        "pId": "522600",
        "id": "522601"
    },
    {
        "name": "黄平县",
        "pId": "522600",
        "id": "522622"
    },
    {
        "name": "施秉县",
        "pId": "522600",
        "id": "522623"
    },
    {
        "name": "三穗县",
        "pId": "522600",
        "id": "522624"
    },
    {
        "name": "镇远县",
        "pId": "522600",
        "id": "522625"
    },
    {
        "name": "岑巩县",
        "pId": "522600",
        "id": "522626"
    },
    {
        "name": "天柱县",
        "pId": "522600",
        "id": "522627"
    },
    {
        "name": "锦屏县",
        "pId": "522600",
        "id": "522628"
    },
    {
        "name": "剑河县",
        "pId": "522600",
        "id": "522629"
    },
    {
        "name": "台江县",
        "pId": "522600",
        "id": "522630"
    },
    {
        "name": "黎平县",
        "pId": "522600",
        "id": "522631"
    },
    {
        "name": "榕江县",
        "pId": "522600",
        "id": "522632"
    },
    {
        "name": "从江县",
        "pId": "522600",
        "id": "522633"
    },
    {
        "name": "雷山县",
        "pId": "522600",
        "id": "522634"
    },
    {
        "name": "麻江县",
        "pId": "522600",
        "id": "522635"
    },
    {
        "name": "丹寨县",
        "pId": "522600",
        "id": "522636"
    },
    {
        "name": "黔南布依族苗族自治州",
        "pId": "520000",
        "id": "522700"
    },
    {
        "name": "都匀市",
        "pId": "522700",
        "id": "522701"
    },
    {
        "name": "福泉市",
        "pId": "522700",
        "id": "522702"
    },
    {
        "name": "荔波县",
        "pId": "522700",
        "id": "522722"
    },
    {
        "name": "贵定县",
        "pId": "522700",
        "id": "522723"
    },
    {
        "name": "瓮安县",
        "pId": "522700",
        "id": "522725"
    },
    {
        "name": "独山县",
        "pId": "522700",
        "id": "522726"
    },
    {
        "name": "平塘县",
        "pId": "522700",
        "id": "522727"
    },
    {
        "name": "罗甸县",
        "pId": "522700",
        "id": "522728"
    },
    {
        "name": "长顺县",
        "pId": "522700",
        "id": "522729"
    },
    {
        "name": "龙里县",
        "pId": "522700",
        "id": "522730"
    },
    {
        "name": "惠水县",
        "pId": "522700",
        "id": "522731"
    },
    {
        "name": "三都水族自治县",
        "pId": "522700",
        "id": "522732"
    },
    {
        "name": "云南省",
        "pId": "100000",
        "id": "530000"
    },
    {
        "name": "昆明市",
        "pId": "530000",
        "id": "530100"
    },
    {
        "name": "五华区",
        "pId": "530100",
        "id": "530102"
    },
    {
        "name": "盘龙区",
        "pId": "530100",
        "id": "530103"
    },
    {
        "name": "官渡区",
        "pId": "530100",
        "id": "530111"
    },
    {
        "name": "西山区",
        "pId": "530100",
        "id": "530112"
    },
    {
        "name": "东川区",
        "pId": "530100",
        "id": "530113"
    },
    {
        "name": "呈贡区",
        "pId": "530100",
        "id": "530114"
    },
    {
        "name": "晋宁县",
        "pId": "530100",
        "id": "530122"
    },
    {
        "name": "富民县",
        "pId": "530100",
        "id": "530124"
    },
    {
        "name": "宜良县",
        "pId": "530100",
        "id": "530125"
    },
    {
        "name": "石林彝族自治县",
        "pId": "530100",
        "id": "530126"
    },
    {
        "name": "嵩明县",
        "pId": "530100",
        "id": "530127"
    },
    {
        "name": "禄劝彝族苗族自治县",
        "pId": "530100",
        "id": "530128"
    },
    {
        "name": "寻甸回族彝族自治县 ",
        "pId": "530100",
        "id": "530129"
    },
    {
        "name": "安宁市",
        "pId": "530100",
        "id": "530181"
    },
    {
        "name": "曲靖市",
        "pId": "530000",
        "id": "530300"
    },
    {
        "name": "麒麟区",
        "pId": "530300",
        "id": "530302"
    },
    {
        "name": "马龙县",
        "pId": "530300",
        "id": "530321"
    },
    {
        "name": "陆良县",
        "pId": "530300",
        "id": "530322"
    },
    {
        "name": "师宗县",
        "pId": "530300",
        "id": "530323"
    },
    {
        "name": "罗平县",
        "pId": "530300",
        "id": "530324"
    },
    {
        "name": "富源县",
        "pId": "530300",
        "id": "530325"
    },
    {
        "name": "会泽县",
        "pId": "530300",
        "id": "530326"
    },
    {
        "name": "沾益县",
        "pId": "530300",
        "id": "530328"
    },
    {
        "name": "宣威市",
        "pId": "530300",
        "id": "530381"
    },
    {
        "name": "玉溪市",
        "pId": "530000",
        "id": "530400"
    },
    {
        "name": "红塔区",
        "pId": "530400",
        "id": "530402"
    },
    {
        "name": "江川县",
        "pId": "530400",
        "id": "530421"
    },
    {
        "name": "澄江县",
        "pId": "530400",
        "id": "530422"
    },
    {
        "name": "通海县",
        "pId": "530400",
        "id": "530423"
    },
    {
        "name": "华宁县",
        "pId": "530400",
        "id": "530424"
    },
    {
        "name": "易门县",
        "pId": "530400",
        "id": "530425"
    },
    {
        "name": "峨山彝族自治县",
        "pId": "530400",
        "id": "530426"
    },
    {
        "name": "新平彝族傣族自治县",
        "pId": "530400",
        "id": "530427"
    },
    {
        "name": "元江哈尼族彝族傣族自治县",
        "pId": "530400",
        "id": "530428"
    },
    {
        "name": "保山市",
        "pId": "530000",
        "id": "530500"
    },
    {
        "name": "隆阳区",
        "pId": "530500",
        "id": "530502"
    },
    {
        "name": "施甸县",
        "pId": "530500",
        "id": "530521"
    },
    {
        "name": "腾冲县",
        "pId": "530500",
        "id": "530522"
    },
    {
        "name": "龙陵县",
        "pId": "530500",
        "id": "530523"
    },
    {
        "name": "昌宁县",
        "pId": "530500",
        "id": "530524"
    },
    {
        "name": "昭通市",
        "pId": "530000",
        "id": "530600"
    },
    {
        "name": "昭阳区",
        "pId": "530600",
        "id": "530602"
    },
    {
        "name": "鲁甸县",
        "pId": "530600",
        "id": "530621"
    },
    {
        "name": "巧家县",
        "pId": "530600",
        "id": "530622"
    },
    {
        "name": "盐津县",
        "pId": "530600",
        "id": "530623"
    },
    {
        "name": "大关县",
        "pId": "530600",
        "id": "530624"
    },
    {
        "name": "永善县",
        "pId": "530600",
        "id": "530625"
    },
    {
        "name": "绥江县",
        "pId": "530600",
        "id": "530626"
    },
    {
        "name": "镇雄县",
        "pId": "530600",
        "id": "530627"
    },
    {
        "name": "彝良县",
        "pId": "530600",
        "id": "530628"
    },
    {
        "name": "威信县",
        "pId": "530600",
        "id": "530629"
    },
    {
        "name": "水富县",
        "pId": "530600",
        "id": "530630"
    },
    {
        "name": "丽江市",
        "pId": "530000",
        "id": "530700"
    },
    {
        "name": "古城区",
        "pId": "530700",
        "id": "530702"
    },
    {
        "name": "玉龙纳西族自治县",
        "pId": "530700",
        "id": "530721"
    },
    {
        "name": "永胜县",
        "pId": "530700",
        "id": "530722"
    },
    {
        "name": "华坪县",
        "pId": "530700",
        "id": "530723"
    },
    {
        "name": "宁蒗彝族自治县",
        "pId": "530700",
        "id": "530724"
    },
    {
        "name": "普洱市",
        "pId": "530000",
        "id": "530800"
    },
    {
        "name": "思茅区",
        "pId": "530800",
        "id": "530802"
    },
    {
        "name": "宁洱哈尼族彝族自治县",
        "pId": "530800",
        "id": "530821"
    },
    {
        "name": "墨江哈尼族自治县",
        "pId": "530800",
        "id": "530822"
    },
    {
        "name": "景东彝族自治县",
        "pId": "530800",
        "id": "530823"
    },
    {
        "name": "景谷傣族彝族自治县",
        "pId": "530800",
        "id": "530824"
    },
    {
        "name": "镇沅彝族哈尼族拉祜族自治县",
        "pId": "530800",
        "id": "530825"
    },
    {
        "name": "江城哈尼族彝族自治县",
        "pId": "530800",
        "id": "530826"
    },
    {
        "name": "孟连傣族拉祜族佤族自治县",
        "pId": "530800",
        "id": "530827"
    },
    {
        "name": "澜沧拉祜族自治县",
        "pId": "530800",
        "id": "530828"
    },
    {
        "name": "西盟佤族自治县",
        "pId": "530800",
        "id": "530829"
    },
    {
        "name": "临沧市",
        "pId": "530000",
        "id": "530900"
    },
    {
        "name": "临翔区",
        "pId": "530900",
        "id": "530902"
    },
    {
        "name": "凤庆县",
        "pId": "530900",
        "id": "530921"
    },
    {
        "name": "云县",
        "pId": "530900",
        "id": "530922"
    },
    {
        "name": "永德县",
        "pId": "530900",
        "id": "530923"
    },
    {
        "name": "镇康县",
        "pId": "530900",
        "id": "530924"
    },
    {
        "name": "双江拉祜族佤族布朗族傣族自治县",
        "pId": "530900",
        "id": "530925"
    },
    {
        "name": "耿马傣族佤族自治县",
        "pId": "530900",
        "id": "530926"
    },
    {
        "name": "沧源佤族自治县",
        "pId": "530900",
        "id": "530927"
    },
    {
        "name": "楚雄彝族自治州",
        "pId": "530000",
        "id": "532300"
    },
    {
        "name": "楚雄市",
        "pId": "532300",
        "id": "532301"
    },
    {
        "name": "双柏县",
        "pId": "532300",
        "id": "532322"
    },
    {
        "name": "牟定县",
        "pId": "532300",
        "id": "532323"
    },
    {
        "name": "南华县",
        "pId": "532300",
        "id": "532324"
    },
    {
        "name": "姚安县",
        "pId": "532300",
        "id": "532325"
    },
    {
        "name": "大姚县",
        "pId": "532300",
        "id": "532326"
    },
    {
        "name": "永仁县",
        "pId": "532300",
        "id": "532327"
    },
    {
        "name": "元谋县",
        "pId": "532300",
        "id": "532328"
    },
    {
        "name": "武定县",
        "pId": "532300",
        "id": "532329"
    },
    {
        "name": "禄丰县",
        "pId": "532300",
        "id": "532331"
    },
    {
        "name": "红河哈尼族彝族自治州",
        "pId": "530000",
        "id": "532500"
    },
    {
        "name": "个旧市",
        "pId": "532500",
        "id": "532501"
    },
    {
        "name": "开远市",
        "pId": "532500",
        "id": "532502"
    },
    {
        "name": "蒙自市",
        "pId": "532500",
        "id": "532503"
    },
    {
        "name": "弥勒市",
        "pId": "532500",
        "id": "532504"
    },
    {
        "name": "屏边苗族自治县",
        "pId": "532500",
        "id": "532523"
    },
    {
        "name": "建水县",
        "pId": "532500",
        "id": "532524"
    },
    {
        "name": "石屏县",
        "pId": "532500",
        "id": "532525"
    },
    {
        "name": "泸西县",
        "pId": "532500",
        "id": "532527"
    },
    {
        "name": "元阳县",
        "pId": "532500",
        "id": "532528"
    },
    {
        "name": "红河县",
        "pId": "532500",
        "id": "532529"
    },
    {
        "name": "金平苗族瑶族傣族自治县",
        "pId": "532500",
        "id": "532530"
    },
    {
        "name": "绿春县",
        "pId": "532500",
        "id": "532531"
    },
    {
        "name": "河口瑶族自治县",
        "pId": "532500",
        "id": "532532"
    },
    {
        "name": "文山壮族苗族自治州",
        "pId": "530000",
        "id": "532600"
    },
    {
        "name": "文山市",
        "pId": "532600",
        "id": "532601"
    },
    {
        "name": "砚山县",
        "pId": "532600",
        "id": "532622"
    },
    {
        "name": "西畴县",
        "pId": "532600",
        "id": "532623"
    },
    {
        "name": "麻栗坡县",
        "pId": "532600",
        "id": "532624"
    },
    {
        "name": "马关县",
        "pId": "532600",
        "id": "532625"
    },
    {
        "name": "丘北县",
        "pId": "532600",
        "id": "532626"
    },
    {
        "name": "广南县",
        "pId": "532600",
        "id": "532627"
    },
    {
        "name": "富宁县",
        "pId": "532600",
        "id": "532628"
    },
    {
        "name": "西双版纳傣族自治州",
        "pId": "530000",
        "id": "532800"
    },
    {
        "name": "景洪市",
        "pId": "532800",
        "id": "532801"
    },
    {
        "name": "勐海县",
        "pId": "532800",
        "id": "532822"
    },
    {
        "name": "勐腊县",
        "pId": "532800",
        "id": "532823"
    },
    {
        "name": "大理白族自治州",
        "pId": "530000",
        "id": "532900"
    },
    {
        "name": "大理市",
        "pId": "532900",
        "id": "532901"
    },
    {
        "name": "漾濞彝族自治县",
        "pId": "532900",
        "id": "532922"
    },
    {
        "name": "祥云县",
        "pId": "532900",
        "id": "532923"
    },
    {
        "name": "宾川县",
        "pId": "532900",
        "id": "532924"
    },
    {
        "name": "弥渡县",
        "pId": "532900",
        "id": "532925"
    },
    {
        "name": "南涧彝族自治县",
        "pId": "532900",
        "id": "532926"
    },
    {
        "name": "巍山彝族回族自治县",
        "pId": "532900",
        "id": "532927"
    },
    {
        "name": "永平县",
        "pId": "532900",
        "id": "532928"
    },
    {
        "name": "云龙县",
        "pId": "532900",
        "id": "532929"
    },
    {
        "name": "洱源县",
        "pId": "532900",
        "id": "532930"
    },
    {
        "name": "剑川县",
        "pId": "532900",
        "id": "532931"
    },
    {
        "name": "鹤庆县",
        "pId": "532900",
        "id": "532932"
    },
    {
        "name": "德宏傣族景颇族自治州",
        "pId": "530000",
        "id": "533100"
    },
    {
        "name": "瑞丽市",
        "pId": "533100",
        "id": "533102"
    },
    {
        "name": "芒市",
        "pId": "533100",
        "id": "533103"
    },
    {
        "name": "梁河县",
        "pId": "533100",
        "id": "533122"
    },
    {
        "name": "盈江县",
        "pId": "533100",
        "id": "533123"
    },
    {
        "name": "陇川县",
        "pId": "533100",
        "id": "533124"
    },
    {
        "name": "怒江傈僳族自治州",
        "pId": "530000",
        "id": "533300"
    },
    {
        "name": "泸水县",
        "pId": "533300",
        "id": "533321"
    },
    {
        "name": "福贡县",
        "pId": "533300",
        "id": "533323"
    },
    {
        "name": "贡山独龙族怒族自治县",
        "pId": "533300",
        "id": "533324"
    },
    {
        "name": "兰坪白族普米族自治县",
        "pId": "533300",
        "id": "533325"
    },
    {
        "name": "迪庆藏族自治州",
        "pId": "530000",
        "id": "533400"
    },
    {
        "name": "香格里拉市",
        "pId": "533400",
        "id": "533421"
    },
    {
        "name": "德钦县",
        "pId": "533400",
        "id": "533422"
    },
    {
        "name": "维西傈僳族自治县",
        "pId": "533400",
        "id": "533423"
    },
    {
        "name": "西藏自治区",
        "pId": "100000",
        "id": "540000"
    },
    {
        "name": "拉萨市",
        "pId": "540000",
        "id": "540100"
    },
    {
        "name": "城关区",
        "pId": "540100",
        "id": "540102"
    },
    {
        "name": "林周县",
        "pId": "540100",
        "id": "540121"
    },
    {
        "name": "当雄县",
        "pId": "540100",
        "id": "540122"
    },
    {
        "name": "尼木县",
        "pId": "540100",
        "id": "540123"
    },
    {
        "name": "曲水县",
        "pId": "540100",
        "id": "540124"
    },
    {
        "name": "堆龙德庆县",
        "pId": "540100",
        "id": "540125"
    },
    {
        "name": "达孜县",
        "pId": "540100",
        "id": "540126"
    },
    {
        "name": "墨竹工卡县",
        "pId": "540100",
        "id": "540127"
    },
    {
        "name": "日喀则市",
        "pId": "540000",
        "id": "540200"
    },
    {
        "name": "桑珠孜区",
        "pId": "540200",
        "id": "540202"
    },
    {
        "name": "南木林县",
        "pId": "540200",
        "id": "540221"
    },
    {
        "name": "江孜县",
        "pId": "540200",
        "id": "540222"
    },
    {
        "name": "定日县",
        "pId": "540200",
        "id": "540223"
    },
    {
        "name": "萨迦县",
        "pId": "540200",
        "id": "540224"
    },
    {
        "name": "拉孜县",
        "pId": "540200",
        "id": "540225"
    },
    {
        "name": "昂仁县",
        "pId": "540200",
        "id": "540226"
    },
    {
        "name": "谢通门县",
        "pId": "540200",
        "id": "540227"
    },
    {
        "name": "白朗县",
        "pId": "540200",
        "id": "540228"
    },
    {
        "name": "仁布县",
        "pId": "540200",
        "id": "540229"
    },
    {
        "name": "康马县",
        "pId": "540200",
        "id": "540230"
    },
    {
        "name": "定结县",
        "pId": "540200",
        "id": "540231"
    },
    {
        "name": "仲巴县",
        "pId": "540200",
        "id": "540232"
    },
    {
        "name": "亚东县",
        "pId": "540200",
        "id": "540233"
    },
    {
        "name": "吉隆县",
        "pId": "540200",
        "id": "540234"
    },
    {
        "name": "聂拉木县",
        "pId": "540200",
        "id": "540235"
    },
    {
        "name": "萨嘎县",
        "pId": "540200",
        "id": "540236"
    },
    {
        "name": "岗巴县",
        "pId": "540200",
        "id": "540237"
    },
    {
        "name": "昌都市",
        "pId": "540000",
        "id": "540300"
    },
    {
        "name": "卡若区",
        "pId": "540300",
        "id": "540302"
    },
    {
        "name": "江达县",
        "pId": "540300",
        "id": "540321"
    },
    {
        "name": "贡觉县",
        "pId": "540300",
        "id": "540322"
    },
    {
        "name": "类乌齐县",
        "pId": "540300",
        "id": "540323"
    },
    {
        "name": "丁青县",
        "pId": "540300",
        "id": "540324"
    },
    {
        "name": "察雅县",
        "pId": "540300",
        "id": "540325"
    },
    {
        "name": "八宿县",
        "pId": "540300",
        "id": "540326"
    },
    {
        "name": "左贡县",
        "pId": "540300",
        "id": "540327"
    },
    {
        "name": "芒康县",
        "pId": "540300",
        "id": "540328"
    },
    {
        "name": "洛隆县",
        "pId": "540300",
        "id": "540329"
    },
    {
        "name": "边坝县",
        "pId": "540300",
        "id": "540330"
    },
    {
        "name": "山南地区",
        "pId": "540000",
        "id": "542200"
    },
    {
        "name": "乃东县",
        "pId": "542200",
        "id": "542221"
    },
    {
        "name": "扎囊县",
        "pId": "542200",
        "id": "542222"
    },
    {
        "name": "贡嘎县",
        "pId": "542200",
        "id": "542223"
    },
    {
        "name": "桑日县",
        "pId": "542200",
        "id": "542224"
    },
    {
        "name": "琼结县",
        "pId": "542200",
        "id": "542225"
    },
    {
        "name": "曲松县",
        "pId": "542200",
        "id": "542226"
    },
    {
        "name": "措美县",
        "pId": "542200",
        "id": "542227"
    },
    {
        "name": "洛扎县",
        "pId": "542200",
        "id": "542228"
    },
    {
        "name": "加查县",
        "pId": "542200",
        "id": "542229"
    },
    {
        "name": "隆子县",
        "pId": "542200",
        "id": "542231"
    },
    {
        "name": "错那县",
        "pId": "542200",
        "id": "542232"
    },
    {
        "name": "浪卡子县",
        "pId": "542200",
        "id": "542233"
    },
    {
        "name": "那曲地区",
        "pId": "540000",
        "id": "542400"
    },
    {
        "name": "那曲县",
        "pId": "542400",
        "id": "542421"
    },
    {
        "name": "嘉黎县",
        "pId": "542400",
        "id": "542422"
    },
    {
        "name": "比如县",
        "pId": "542400",
        "id": "542423"
    },
    {
        "name": "聂荣县",
        "pId": "542400",
        "id": "542424"
    },
    {
        "name": "安多县",
        "pId": "542400",
        "id": "542425"
    },
    {
        "name": "申扎县",
        "pId": "542400",
        "id": "542426"
    },
    {
        "name": "索县",
        "pId": "542400",
        "id": "542427"
    },
    {
        "name": "班戈县",
        "pId": "542400",
        "id": "542428"
    },
    {
        "name": "巴青县",
        "pId": "542400",
        "id": "542429"
    },
    {
        "name": "尼玛县",
        "pId": "542400",
        "id": "542430"
    },
    {
        "name": "双湖县",
        "pId": "542400",
        "id": "542431"
    },
    {
        "name": "阿里地区",
        "pId": "540000",
        "id": "542500"
    },
    {
        "name": "普兰县",
        "pId": "542500",
        "id": "542521"
    },
    {
        "name": "札达县",
        "pId": "542500",
        "id": "542522"
    },
    {
        "name": "噶尔县",
        "pId": "542500",
        "id": "542523"
    },
    {
        "name": "日土县",
        "pId": "542500",
        "id": "542524"
    },
    {
        "name": "革吉县",
        "pId": "542500",
        "id": "542525"
    },
    {
        "name": "改则县",
        "pId": "542500",
        "id": "542526"
    },
    {
        "name": "措勤县",
        "pId": "542500",
        "id": "542527"
    },
    {
        "name": "林芝地区",
        "pId": "540000",
        "id": "542600"
    },
    {
        "name": "林芝县",
        "pId": "542600",
        "id": "542621"
    },
    {
        "name": "工布江达县",
        "pId": "542600",
        "id": "542622"
    },
    {
        "name": "米林县",
        "pId": "542600",
        "id": "542623"
    },
    {
        "name": "墨脱县",
        "pId": "542600",
        "id": "542624"
    },
    {
        "name": "波密县",
        "pId": "542600",
        "id": "542625"
    },
    {
        "name": "察隅县",
        "pId": "542600",
        "id": "542626"
    },
    {
        "name": "朗县",
        "pId": "542600",
        "id": "542627"
    },
    {
        "name": "陕西省",
        "pId": "100000",
        "id": "610000"
    },
    {
        "name": "西安市",
        "pId": "610000",
        "id": "610100"
    },
    {
        "name": "新城区",
        "pId": "610100",
        "id": "610102"
    },
    {
        "name": "碑林区",
        "pId": "610100",
        "id": "610103"
    },
    {
        "name": "莲湖区",
        "pId": "610100",
        "id": "610104"
    },
    {
        "name": "灞桥区",
        "pId": "610100",
        "id": "610111"
    },
    {
        "name": "未央区",
        "pId": "610100",
        "id": "610112"
    },
    {
        "name": "雁塔区",
        "pId": "610100",
        "id": "610113"
    },
    {
        "name": "阎良区",
        "pId": "610100",
        "id": "610114"
    },
    {
        "name": "临潼区",
        "pId": "610100",
        "id": "610115"
    },
    {
        "name": "长安区",
        "pId": "610100",
        "id": "610116"
    },
    {
        "name": "蓝田县",
        "pId": "610100",
        "id": "610122"
    },
    {
        "name": "周至县",
        "pId": "610100",
        "id": "610124"
    },
    {
        "name": "户县",
        "pId": "610100",
        "id": "610125"
    },
    {
        "name": "高陵区",
        "pId": "610100",
        "id": "610126"
    },
    {
        "name": "铜川市",
        "pId": "610000",
        "id": "610200"
    },
    {
        "name": "王益区",
        "pId": "610200",
        "id": "610202"
    },
    {
        "name": "印台区",
        "pId": "610200",
        "id": "610203"
    },
    {
        "name": "耀州区",
        "pId": "610200",
        "id": "610204"
    },
    {
        "name": "宜君县",
        "pId": "610200",
        "id": "610222"
    },
    {
        "name": "宝鸡市",
        "pId": "610000",
        "id": "610300"
    },
    {
        "name": "渭滨区",
        "pId": "610300",
        "id": "610302"
    },
    {
        "name": "金台区",
        "pId": "610300",
        "id": "610303"
    },
    {
        "name": "陈仓区",
        "pId": "610300",
        "id": "610304"
    },
    {
        "name": "凤翔县",
        "pId": "610300",
        "id": "610322"
    },
    {
        "name": "岐山县",
        "pId": "610300",
        "id": "610323"
    },
    {
        "name": "扶风县",
        "pId": "610300",
        "id": "610324"
    },
    {
        "name": "眉县",
        "pId": "610300",
        "id": "610326"
    },
    {
        "name": "陇县",
        "pId": "610300",
        "id": "610327"
    },
    {
        "name": "千阳县",
        "pId": "610300",
        "id": "610328"
    },
    {
        "name": "麟游县",
        "pId": "610300",
        "id": "610329"
    },
    {
        "name": "凤县",
        "pId": "610300",
        "id": "610330"
    },
    {
        "name": "太白县",
        "pId": "610300",
        "id": "610331"
    },
    {
        "name": "咸阳市",
        "pId": "610000",
        "id": "610400"
    },
    {
        "name": "秦都区",
        "pId": "610400",
        "id": "610402"
    },
    {
        "name": "杨陵区",
        "pId": "610400",
        "id": "610403"
    },
    {
        "name": "渭城区",
        "pId": "610400",
        "id": "610404"
    },
    {
        "name": "三原县",
        "pId": "610400",
        "id": "610422"
    },
    {
        "name": "泾阳县",
        "pId": "610400",
        "id": "610423"
    },
    {
        "name": "乾县",
        "pId": "610400",
        "id": "610424"
    },
    {
        "name": "礼泉县",
        "pId": "610400",
        "id": "610425"
    },
    {
        "name": "永寿县",
        "pId": "610400",
        "id": "610426"
    },
    {
        "name": "彬县",
        "pId": "610400",
        "id": "610427"
    },
    {
        "name": "长武县",
        "pId": "610400",
        "id": "610428"
    },
    {
        "name": "旬邑县",
        "pId": "610400",
        "id": "610429"
    },
    {
        "name": "淳化县",
        "pId": "610400",
        "id": "610430"
    },
    {
        "name": "武功县",
        "pId": "610400",
        "id": "610431"
    },
    {
        "name": "兴平市",
        "pId": "610400",
        "id": "610481"
    },
    {
        "name": "渭南市",
        "pId": "610000",
        "id": "610500"
    },
    {
        "name": "临渭区",
        "pId": "610500",
        "id": "610502"
    },
    {
        "name": "华县",
        "pId": "610500",
        "id": "610521"
    },
    {
        "name": "潼关县",
        "pId": "610500",
        "id": "610522"
    },
    {
        "name": "大荔县",
        "pId": "610500",
        "id": "610523"
    },
    {
        "name": "合阳县",
        "pId": "610500",
        "id": "610524"
    },
    {
        "name": "澄城县",
        "pId": "610500",
        "id": "610525"
    },
    {
        "name": "蒲城县",
        "pId": "610500",
        "id": "610526"
    },
    {
        "name": "白水县",
        "pId": "610500",
        "id": "610527"
    },
    {
        "name": "富平县",
        "pId": "610500",
        "id": "610528"
    },
    {
        "name": "韩城市",
        "pId": "610500",
        "id": "610581"
    },
    {
        "name": "华阴市",
        "pId": "610500",
        "id": "610582"
    },
    {
        "name": "延安市",
        "pId": "610000",
        "id": "610600"
    },
    {
        "name": "宝塔区",
        "pId": "610600",
        "id": "610602"
    },
    {
        "name": "延长县",
        "pId": "610600",
        "id": "610621"
    },
    {
        "name": "延川县",
        "pId": "610600",
        "id": "610622"
    },
    {
        "name": "子长县",
        "pId": "610600",
        "id": "610623"
    },
    {
        "name": "安塞县",
        "pId": "610600",
        "id": "610624"
    },
    {
        "name": "志丹县",
        "pId": "610600",
        "id": "610625"
    },
    {
        "name": "吴起县",
        "pId": "610600",
        "id": "610626"
    },
    {
        "name": "甘泉县",
        "pId": "610600",
        "id": "610627"
    },
    {
        "name": "富县",
        "pId": "610600",
        "id": "610628"
    },
    {
        "name": "洛川县",
        "pId": "610600",
        "id": "610629"
    },
    {
        "name": "宜川县",
        "pId": "610600",
        "id": "610630"
    },
    {
        "name": "黄龙县",
        "pId": "610600",
        "id": "610631"
    },
    {
        "name": "黄陵县",
        "pId": "610600",
        "id": "610632"
    },
    {
        "name": "汉中市",
        "pId": "610000",
        "id": "610700"
    },
    {
        "name": "汉台区",
        "pId": "610700",
        "id": "610702"
    },
    {
        "name": "南郑县",
        "pId": "610700",
        "id": "610721"
    },
    {
        "name": "城固县",
        "pId": "610700",
        "id": "610722"
    },
    {
        "name": "洋县",
        "pId": "610700",
        "id": "610723"
    },
    {
        "name": "西乡县",
        "pId": "610700",
        "id": "610724"
    },
    {
        "name": "勉县",
        "pId": "610700",
        "id": "610725"
    },
    {
        "name": "宁强县",
        "pId": "610700",
        "id": "610726"
    },
    {
        "name": "略阳县",
        "pId": "610700",
        "id": "610727"
    },
    {
        "name": "镇巴县",
        "pId": "610700",
        "id": "610728"
    },
    {
        "name": "留坝县",
        "pId": "610700",
        "id": "610729"
    },
    {
        "name": "佛坪县",
        "pId": "610700",
        "id": "610730"
    },
    {
        "name": "榆林市",
        "pId": "610000",
        "id": "610800"
    },
    {
        "name": "榆阳区",
        "pId": "610800",
        "id": "610802"
    },
    {
        "name": "神木县",
        "pId": "610800",
        "id": "610821"
    },
    {
        "name": "府谷县",
        "pId": "610800",
        "id": "610822"
    },
    {
        "name": "横山县",
        "pId": "610800",
        "id": "610823"
    },
    {
        "name": "靖边县",
        "pId": "610800",
        "id": "610824"
    },
    {
        "name": "定边县",
        "pId": "610800",
        "id": "610825"
    },
    {
        "name": "绥德县",
        "pId": "610800",
        "id": "610826"
    },
    {
        "name": "米脂县",
        "pId": "610800",
        "id": "610827"
    },
    {
        "name": "佳县",
        "pId": "610800",
        "id": "610828"
    },
    {
        "name": "吴堡县",
        "pId": "610800",
        "id": "610829"
    },
    {
        "name": "清涧县",
        "pId": "610800",
        "id": "610830"
    },
    {
        "name": "子洲县",
        "pId": "610800",
        "id": "610831"
    },
    {
        "name": "安康市",
        "pId": "610000",
        "id": "610900"
    },
    {
        "name": "汉滨区",
        "pId": "610900",
        "id": "610902"
    },
    {
        "name": "汉阴县",
        "pId": "610900",
        "id": "610921"
    },
    {
        "name": "石泉县",
        "pId": "610900",
        "id": "610922"
    },
    {
        "name": "宁陕县",
        "pId": "610900",
        "id": "610923"
    },
    {
        "name": "紫阳县",
        "pId": "610900",
        "id": "610924"
    },
    {
        "name": "岚皋县",
        "pId": "610900",
        "id": "610925"
    },
    {
        "name": "平利县",
        "pId": "610900",
        "id": "610926"
    },
    {
        "name": "镇坪县",
        "pId": "610900",
        "id": "610927"
    },
    {
        "name": "旬阳县",
        "pId": "610900",
        "id": "610928"
    },
    {
        "name": "白河县",
        "pId": "610900",
        "id": "610929"
    },
    {
        "name": "商洛市",
        "pId": "610000",
        "id": "611000"
    },
    {
        "name": "商州区",
        "pId": "611000",
        "id": "611002"
    },
    {
        "name": "洛南县",
        "pId": "611000",
        "id": "611021"
    },
    {
        "name": "丹凤县",
        "pId": "611000",
        "id": "611022"
    },
    {
        "name": "商南县",
        "pId": "611000",
        "id": "611023"
    },
    {
        "name": "山阳县",
        "pId": "611000",
        "id": "611024"
    },
    {
        "name": "镇安县",
        "pId": "611000",
        "id": "611025"
    },
    {
        "name": "柞水县",
        "pId": "611000",
        "id": "611026"
    },
    {
        "name": "西咸新区",
        "pId": "610000",
        "id": "611100"
    },
    {
        "name": "空港新城",
        "pId": "611100",
        "id": "611101"
    },
    {
        "name": "沣东新城",
        "pId": "611100",
        "id": "611102"
    },
    {
        "name": "秦汉新城",
        "pId": "611100",
        "id": "611103"
    },
    {
        "name": "沣西新城",
        "pId": "611100",
        "id": "611104"
    },
    {
        "name": "泾河新城",
        "pId": "611100",
        "id": "611105"
    },
    {
        "name": "甘肃省",
        "pId": "100000",
        "id": "620000"
    },
    {
        "name": "兰州市",
        "pId": "620000",
        "id": "620100"
    },
    {
        "name": "城关区",
        "pId": "620100",
        "id": "620102"
    },
    {
        "name": "七里河区",
        "pId": "620100",
        "id": "620103"
    },
    {
        "name": "西固区",
        "pId": "620100",
        "id": "620104"
    },
    {
        "name": "安宁区",
        "pId": "620100",
        "id": "620105"
    },
    {
        "name": "红古区",
        "pId": "620100",
        "id": "620111"
    },
    {
        "name": "永登县",
        "pId": "620100",
        "id": "620121"
    },
    {
        "name": "皋兰县",
        "pId": "620100",
        "id": "620122"
    },
    {
        "name": "榆中县",
        "pId": "620100",
        "id": "620123"
    },
    {
        "name": "嘉峪关市",
        "pId": "620000",
        "id": "620200"
    },
    {
        "name": "雄关区",
        "pId": "620200",
        "id": "620201"
    },
    {
        "name": "长城区",
        "pId": "620200",
        "id": "620202"
    },
    {
        "name": "镜铁区",
        "pId": "620200",
        "id": "620203"
    },
    {
        "name": "金昌市",
        "pId": "620000",
        "id": "620300"
    },
    {
        "name": "金川区",
        "pId": "620300",
        "id": "620302"
    },
    {
        "name": "永昌县",
        "pId": "620300",
        "id": "620321"
    },
    {
        "name": "白银市",
        "pId": "620000",
        "id": "620400"
    },
    {
        "name": "白银区",
        "pId": "620400",
        "id": "620402"
    },
    {
        "name": "平川区",
        "pId": "620400",
        "id": "620403"
    },
    {
        "name": "靖远县",
        "pId": "620400",
        "id": "620421"
    },
    {
        "name": "会宁县",
        "pId": "620400",
        "id": "620422"
    },
    {
        "name": "景泰县",
        "pId": "620400",
        "id": "620423"
    },
    {
        "name": "天水市",
        "pId": "620000",
        "id": "620500"
    },
    {
        "name": "秦州区",
        "pId": "620500",
        "id": "620502"
    },
    {
        "name": "麦积区",
        "pId": "620500",
        "id": "620503"
    },
    {
        "name": "清水县",
        "pId": "620500",
        "id": "620521"
    },
    {
        "name": "秦安县",
        "pId": "620500",
        "id": "620522"
    },
    {
        "name": "甘谷县",
        "pId": "620500",
        "id": "620523"
    },
    {
        "name": "武山县",
        "pId": "620500",
        "id": "620524"
    },
    {
        "name": "张家川回族自治县",
        "pId": "620500",
        "id": "620525"
    },
    {
        "name": "武威市",
        "pId": "620000",
        "id": "620600"
    },
    {
        "name": "凉州区",
        "pId": "620600",
        "id": "620602"
    },
    {
        "name": "民勤县",
        "pId": "620600",
        "id": "620621"
    },
    {
        "name": "古浪县",
        "pId": "620600",
        "id": "620622"
    },
    {
        "name": "天祝藏族自治县",
        "pId": "620600",
        "id": "620623"
    },
    {
        "name": "张掖市",
        "pId": "620000",
        "id": "620700"
    },
    {
        "name": "甘州区",
        "pId": "620700",
        "id": "620702"
    },
    {
        "name": "肃南裕固族自治县",
        "pId": "620700",
        "id": "620721"
    },
    {
        "name": "民乐县",
        "pId": "620700",
        "id": "620722"
    },
    {
        "name": "临泽县",
        "pId": "620700",
        "id": "620723"
    },
    {
        "name": "高台县",
        "pId": "620700",
        "id": "620724"
    },
    {
        "name": "山丹县",
        "pId": "620700",
        "id": "620725"
    },
    {
        "name": "平凉市",
        "pId": "620000",
        "id": "620800"
    },
    {
        "name": "崆峒区",
        "pId": "620800",
        "id": "620802"
    },
    {
        "name": "泾川县",
        "pId": "620800",
        "id": "620821"
    },
    {
        "name": "灵台县",
        "pId": "620800",
        "id": "620822"
    },
    {
        "name": "崇信县",
        "pId": "620800",
        "id": "620823"
    },
    {
        "name": "华亭县",
        "pId": "620800",
        "id": "620824"
    },
    {
        "name": "庄浪县",
        "pId": "620800",
        "id": "620825"
    },
    {
        "name": "静宁县",
        "pId": "620800",
        "id": "620826"
    },
    {
        "name": "酒泉市",
        "pId": "620000",
        "id": "620900"
    },
    {
        "name": "肃州区",
        "pId": "620900",
        "id": "620902"
    },
    {
        "name": "金塔县",
        "pId": "620900",
        "id": "620921"
    },
    {
        "name": "瓜州县",
        "pId": "620900",
        "id": "620922"
    },
    {
        "name": "肃北蒙古族自治县",
        "pId": "620900",
        "id": "620923"
    },
    {
        "name": "阿克塞哈萨克族自治县",
        "pId": "620900",
        "id": "620924"
    },
    {
        "name": "玉门市",
        "pId": "620900",
        "id": "620981"
    },
    {
        "name": "敦煌市",
        "pId": "620900",
        "id": "620982"
    },
    {
        "name": "庆阳市",
        "pId": "620000",
        "id": "621000"
    },
    {
        "name": "西峰区",
        "pId": "621000",
        "id": "621002"
    },
    {
        "name": "庆城县",
        "pId": "621000",
        "id": "621021"
    },
    {
        "name": "环县",
        "pId": "621000",
        "id": "621022"
    },
    {
        "name": "华池县",
        "pId": "621000",
        "id": "621023"
    },
    {
        "name": "合水县",
        "pId": "621000",
        "id": "621024"
    },
    {
        "name": "正宁县",
        "pId": "621000",
        "id": "621025"
    },
    {
        "name": "宁县",
        "pId": "621000",
        "id": "621026"
    },
    {
        "name": "镇原县",
        "pId": "621000",
        "id": "621027"
    },
    {
        "name": "定西市",
        "pId": "620000",
        "id": "621100"
    },
    {
        "name": "安定区",
        "pId": "621100",
        "id": "621102"
    },
    {
        "name": "通渭县",
        "pId": "621100",
        "id": "621121"
    },
    {
        "name": "陇西县",
        "pId": "621100",
        "id": "621122"
    },
    {
        "name": "渭源县",
        "pId": "621100",
        "id": "621123"
    },
    {
        "name": "临洮县",
        "pId": "621100",
        "id": "621124"
    },
    {
        "name": "漳县",
        "pId": "621100",
        "id": "621125"
    },
    {
        "name": "岷县",
        "pId": "621100",
        "id": "621126"
    },
    {
        "name": "陇南市",
        "pId": "620000",
        "id": "621200"
    },
    {
        "name": "武都区",
        "pId": "621200",
        "id": "621202"
    },
    {
        "name": "成县",
        "pId": "621200",
        "id": "621221"
    },
    {
        "name": "文县",
        "pId": "621200",
        "id": "621222"
    },
    {
        "name": "宕昌县",
        "pId": "621200",
        "id": "621223"
    },
    {
        "name": "康县",
        "pId": "621200",
        "id": "621224"
    },
    {
        "name": "西和县",
        "pId": "621200",
        "id": "621225"
    },
    {
        "name": "礼县",
        "pId": "621200",
        "id": "621226"
    },
    {
        "name": "徽县",
        "pId": "621200",
        "id": "621227"
    },
    {
        "name": "两当县",
        "pId": "621200",
        "id": "621228"
    },
    {
        "name": "临夏回族自治州",
        "pId": "620000",
        "id": "622900"
    },
    {
        "name": "临夏市",
        "pId": "622900",
        "id": "622901"
    },
    {
        "name": "临夏县",
        "pId": "622900",
        "id": "622921"
    },
    {
        "name": "康乐县",
        "pId": "622900",
        "id": "622922"
    },
    {
        "name": "永靖县",
        "pId": "622900",
        "id": "622923"
    },
    {
        "name": "广河县",
        "pId": "622900",
        "id": "622924"
    },
    {
        "name": "和政县",
        "pId": "622900",
        "id": "622925"
    },
    {
        "name": "东乡族自治县",
        "pId": "622900",
        "id": "622926"
    },
    {
        "name": "积石山保安族东乡族撒拉族自治县",
        "pId": "622900",
        "id": "622927"
    },
    {
        "name": "甘南藏族自治州",
        "pId": "620000",
        "id": "623000"
    },
    {
        "name": "合作市",
        "pId": "623000",
        "id": "623001"
    },
    {
        "name": "临潭县",
        "pId": "623000",
        "id": "623021"
    },
    {
        "name": "卓尼县",
        "pId": "623000",
        "id": "623022"
    },
    {
        "name": "舟曲县",
        "pId": "623000",
        "id": "623023"
    },
    {
        "name": "迭部县",
        "pId": "623000",
        "id": "623024"
    },
    {
        "name": "玛曲县",
        "pId": "623000",
        "id": "623025"
    },
    {
        "name": "碌曲县",
        "pId": "623000",
        "id": "623026"
    },
    {
        "name": "夏河县",
        "pId": "623000",
        "id": "623027"
    },
    {
        "name": "青海省",
        "pId": "100000",
        "id": "630000"
    },
    {
        "name": "西宁市",
        "pId": "630000",
        "id": "630100"
    },
    {
        "name": "城东区",
        "pId": "630100",
        "id": "630102"
    },
    {
        "name": "城中区",
        "pId": "630100",
        "id": "630103"
    },
    {
        "name": "城西区",
        "pId": "630100",
        "id": "630104"
    },
    {
        "name": "城北区",
        "pId": "630100",
        "id": "630105"
    },
    {
        "name": "大通回族土族自治县",
        "pId": "630100",
        "id": "630121"
    },
    {
        "name": "湟中县",
        "pId": "630100",
        "id": "630122"
    },
    {
        "name": "湟源县",
        "pId": "630100",
        "id": "630123"
    },
    {
        "name": "海东市",
        "pId": "630000",
        "id": "630200"
    },
    {
        "name": "乐都区",
        "pId": "630200",
        "id": "630202"
    },
    {
        "name": "平安县",
        "pId": "630200",
        "id": "630221"
    },
    {
        "name": "民和回族土族自治县",
        "pId": "630200",
        "id": "630222"
    },
    {
        "name": "互助土族自治县",
        "pId": "630200",
        "id": "630223"
    },
    {
        "name": "化隆回族自治县",
        "pId": "630200",
        "id": "630224"
    },
    {
        "name": "循化撒拉族自治县",
        "pId": "630200",
        "id": "630225"
    },
    {
        "name": "海北藏族自治州",
        "pId": "630000",
        "id": "632200"
    },
    {
        "name": "门源回族自治县",
        "pId": "632200",
        "id": "632221"
    },
    {
        "name": "祁连县",
        "pId": "632200",
        "id": "632222"
    },
    {
        "name": "海晏县",
        "pId": "632200",
        "id": "632223"
    },
    {
        "name": "刚察县",
        "pId": "632200",
        "id": "632224"
    },
    {
        "name": "黄南藏族自治州",
        "pId": "630000",
        "id": "632300"
    },
    {
        "name": "同仁县",
        "pId": "632300",
        "id": "632321"
    },
    {
        "name": "尖扎县",
        "pId": "632300",
        "id": "632322"
    },
    {
        "name": "泽库县",
        "pId": "632300",
        "id": "632323"
    },
    {
        "name": "河南蒙古族自治县",
        "pId": "632300",
        "id": "632324"
    },
    {
        "name": "海南藏族自治州",
        "pId": "630000",
        "id": "632500"
    },
    {
        "name": "共和县",
        "pId": "632500",
        "id": "632521"
    },
    {
        "name": "同德县",
        "pId": "632500",
        "id": "632522"
    },
    {
        "name": "贵德县",
        "pId": "632500",
        "id": "632523"
    },
    {
        "name": "兴海县",
        "pId": "632500",
        "id": "632524"
    },
    {
        "name": "贵南县",
        "pId": "632500",
        "id": "632525"
    },
    {
        "name": "果洛藏族自治州",
        "pId": "630000",
        "id": "632600"
    },
    {
        "name": "玛沁县",
        "pId": "632600",
        "id": "632621"
    },
    {
        "name": "班玛县",
        "pId": "632600",
        "id": "632622"
    },
    {
        "name": "甘德县",
        "pId": "632600",
        "id": "632623"
    },
    {
        "name": "达日县",
        "pId": "632600",
        "id": "632624"
    },
    {
        "name": "久治县",
        "pId": "632600",
        "id": "632625"
    },
    {
        "name": "玛多县",
        "pId": "632600",
        "id": "632626"
    },
    {
        "name": "玉树藏族自治州",
        "pId": "630000",
        "id": "632700"
    },
    {
        "name": "玉树市",
        "pId": "632700",
        "id": "632701"
    },
    {
        "name": "杂多县",
        "pId": "632700",
        "id": "632722"
    },
    {
        "name": "称多县",
        "pId": "632700",
        "id": "632723"
    },
    {
        "name": "治多县",
        "pId": "632700",
        "id": "632724"
    },
    {
        "name": "囊谦县",
        "pId": "632700",
        "id": "632725"
    },
    {
        "name": "曲麻莱县",
        "pId": "632700",
        "id": "632726"
    },
    {
        "name": "海西蒙古族藏族自治州",
        "pId": "630000",
        "id": "632800"
    },
    {
        "name": "格尔木市",
        "pId": "632800",
        "id": "632801"
    },
    {
        "name": "德令哈市",
        "pId": "632800",
        "id": "632802"
    },
    {
        "name": "乌兰县",
        "pId": "632800",
        "id": "632821"
    },
    {
        "name": "都兰县",
        "pId": "632800",
        "id": "632822"
    },
    {
        "name": "天峻县",
        "pId": "632800",
        "id": "632823"
    },
    {
        "name": "宁夏回族自治区",
        "pId": "100000",
        "id": "640000"
    },
    {
        "name": "银川市",
        "pId": "640000",
        "id": "640100"
    },
    {
        "name": "兴庆区",
        "pId": "640100",
        "id": "640104"
    },
    {
        "name": "西夏区",
        "pId": "640100",
        "id": "640105"
    },
    {
        "name": "金凤区",
        "pId": "640100",
        "id": "640106"
    },
    {
        "name": "永宁县",
        "pId": "640100",
        "id": "640121"
    },
    {
        "name": "贺兰县",
        "pId": "640100",
        "id": "640122"
    },
    {
        "name": "灵武市",
        "pId": "640100",
        "id": "640181"
    },
    {
        "name": "石嘴山市",
        "pId": "640000",
        "id": "640200"
    },
    {
        "name": "大武口区",
        "pId": "640200",
        "id": "640202"
    },
    {
        "name": "惠农区",
        "pId": "640200",
        "id": "640205"
    },
    {
        "name": "平罗县",
        "pId": "640200",
        "id": "640221"
    },
    {
        "name": "吴忠市",
        "pId": "640000",
        "id": "640300"
    },
    {
        "name": "利通区",
        "pId": "640300",
        "id": "640302"
    },
    {
        "name": "红寺堡区",
        "pId": "640300",
        "id": "640303"
    },
    {
        "name": "盐池县",
        "pId": "640300",
        "id": "640323"
    },
    {
        "name": "同心县",
        "pId": "640300",
        "id": "640324"
    },
    {
        "name": "青铜峡市",
        "pId": "640300",
        "id": "640381"
    },
    {
        "name": "固原市",
        "pId": "640000",
        "id": "640400"
    },
    {
        "name": "原州区",
        "pId": "640400",
        "id": "640402"
    },
    {
        "name": "西吉县",
        "pId": "640400",
        "id": "640422"
    },
    {
        "name": "隆德县",
        "pId": "640400",
        "id": "640423"
    },
    {
        "name": "泾源县",
        "pId": "640400",
        "id": "640424"
    },
    {
        "name": "彭阳县",
        "pId": "640400",
        "id": "640425"
    },
    {
        "name": "中卫市",
        "pId": "640000",
        "id": "640500"
    },
    {
        "name": "沙坡头区",
        "pId": "640500",
        "id": "640502"
    },
    {
        "name": "中宁县",
        "pId": "640500",
        "id": "640521"
    },
    {
        "name": "海原县",
        "pId": "640500",
        "id": "640522"
    },
    {
        "name": "新疆维吾尔自治区",
        "pId": "100000",
        "id": "650000"
    },
    {
        "name": "乌鲁木齐市",
        "pId": "650000",
        "id": "650100"
    },
    {
        "name": "天山区",
        "pId": "650100",
        "id": "650102"
    },
    {
        "name": "沙依巴克区",
        "pId": "650100",
        "id": "650103"
    },
    {
        "name": "新市区",
        "pId": "650100",
        "id": "650104"
    },
    {
        "name": "水磨沟区",
        "pId": "650100",
        "id": "650105"
    },
    {
        "name": "头屯河区",
        "pId": "650100",
        "id": "650106"
    },
    {
        "name": "达坂城区",
        "pId": "650100",
        "id": "650107"
    },
    {
        "name": "米东区",
        "pId": "650100",
        "id": "650109"
    },
    {
        "name": "乌鲁木齐县",
        "pId": "650100",
        "id": "650121"
    },
    {
        "name": "克拉玛依市",
        "pId": "650000",
        "id": "650200"
    },
    {
        "name": "独山子区",
        "pId": "650200",
        "id": "650202"
    },
    {
        "name": "克拉玛依区",
        "pId": "650200",
        "id": "650203"
    },
    {
        "name": "白碱滩区",
        "pId": "650200",
        "id": "650204"
    },
    {
        "name": "乌尔禾区",
        "pId": "650200",
        "id": "650205"
    },
    {
        "name": "吐鲁番地区",
        "pId": "650000",
        "id": "652100"
    },
    {
        "name": "吐鲁番市",
        "pId": "652100",
        "id": "652101"
    },
    {
        "name": "鄯善县",
        "pId": "652100",
        "id": "652122"
    },
    {
        "name": "托克逊县",
        "pId": "652100",
        "id": "652123"
    },
    {
        "name": "哈密地区",
        "pId": "650000",
        "id": "652200"
    },
    {
        "name": "哈密市",
        "pId": "652200",
        "id": "652201"
    },
    {
        "name": "巴里坤哈萨克自治县",
        "pId": "652200",
        "id": "652222"
    },
    {
        "name": "伊吾县",
        "pId": "652200",
        "id": "652223"
    },
    {
        "name": "昌吉回族自治州",
        "pId": "650000",
        "id": "652300"
    },
    {
        "name": "昌吉市",
        "pId": "652300",
        "id": "652301"
    },
    {
        "name": "阜康市",
        "pId": "652300",
        "id": "652302"
    },
    {
        "name": "呼图壁县",
        "pId": "652300",
        "id": "652323"
    },
    {
        "name": "玛纳斯县",
        "pId": "652300",
        "id": "652324"
    },
    {
        "name": "奇台县",
        "pId": "652300",
        "id": "652325"
    },
    {
        "name": "吉木萨尔县",
        "pId": "652300",
        "id": "652327"
    },
    {
        "name": "木垒哈萨克自治县",
        "pId": "652300",
        "id": "652328"
    },
    {
        "name": "博尔塔拉蒙古自治州",
        "pId": "650000",
        "id": "652700"
    },
    {
        "name": "博乐市",
        "pId": "652700",
        "id": "652701"
    },
    {
        "name": "阿拉山口市",
        "pId": "652700",
        "id": "652702"
    },
    {
        "name": "精河县",
        "pId": "652700",
        "id": "652722"
    },
    {
        "name": "温泉县",
        "pId": "652700",
        "id": "652723"
    },
    {
        "name": "巴音郭楞蒙古自治州",
        "pId": "650000",
        "id": "652800"
    },
    {
        "name": "库尔勒市",
        "pId": "652800",
        "id": "652801"
    },
    {
        "name": "轮台县",
        "pId": "652800",
        "id": "652822"
    },
    {
        "name": "尉犁县",
        "pId": "652800",
        "id": "652823"
    },
    {
        "name": "若羌县",
        "pId": "652800",
        "id": "652824"
    },
    {
        "name": "且末县",
        "pId": "652800",
        "id": "652825"
    },
    {
        "name": "焉耆回族自治县",
        "pId": "652800",
        "id": "652826"
    },
    {
        "name": "和静县",
        "pId": "652800",
        "id": "652827"
    },
    {
        "name": "和硕县",
        "pId": "652800",
        "id": "652828"
    },
    {
        "name": "博湖县",
        "pId": "652800",
        "id": "652829"
    },
    {
        "name": "阿克苏地区",
        "pId": "650000",
        "id": "652900"
    },
    {
        "name": "阿克苏市",
        "pId": "652900",
        "id": "652901"
    },
    {
        "name": "温宿县",
        "pId": "652900",
        "id": "652922"
    },
    {
        "name": "库车县",
        "pId": "652900",
        "id": "652923"
    },
    {
        "name": "沙雅县",
        "pId": "652900",
        "id": "652924"
    },
    {
        "name": "新和县",
        "pId": "652900",
        "id": "652925"
    },
    {
        "name": "拜城县",
        "pId": "652900",
        "id": "652926"
    },
    {
        "name": "乌什县",
        "pId": "652900",
        "id": "652927"
    },
    {
        "name": "阿瓦提县",
        "pId": "652900",
        "id": "652928"
    },
    {
        "name": "柯坪县",
        "pId": "652900",
        "id": "652929"
    },
    {
        "name": "克孜勒苏柯尔克孜自治州",
        "pId": "650000",
        "id": "653000"
    },
    {
        "name": "阿图什市",
        "pId": "653000",
        "id": "653001"
    },
    {
        "name": "阿克陶县",
        "pId": "653000",
        "id": "653022"
    },
    {
        "name": "阿合奇县",
        "pId": "653000",
        "id": "653023"
    },
    {
        "name": "乌恰县",
        "pId": "653000",
        "id": "653024"
    },
    {
        "name": "喀什地区",
        "pId": "650000",
        "id": "653100"
    },
    {
        "name": "喀什市",
        "pId": "653100",
        "id": "653101"
    },
    {
        "name": "疏附县",
        "pId": "653100",
        "id": "653121"
    },
    {
        "name": "疏勒县",
        "pId": "653100",
        "id": "653122"
    },
    {
        "name": "英吉沙县",
        "pId": "653100",
        "id": "653123"
    },
    {
        "name": "泽普县",
        "pId": "653100",
        "id": "653124"
    },
    {
        "name": "莎车县",
        "pId": "653100",
        "id": "653125"
    },
    {
        "name": "叶城县",
        "pId": "653100",
        "id": "653126"
    },
    {
        "name": "麦盖提县",
        "pId": "653100",
        "id": "653127"
    },
    {
        "name": "岳普湖县",
        "pId": "653100",
        "id": "653128"
    },
    {
        "name": "伽师县",
        "pId": "653100",
        "id": "653129"
    },
    {
        "name": "巴楚县",
        "pId": "653100",
        "id": "653130"
    },
    {
        "name": "塔什库尔干塔吉克自治县",
        "pId": "653100",
        "id": "653131"
    },
    {
        "name": "和田地区",
        "pId": "650000",
        "id": "653200"
    },
    {
        "name": "和田市",
        "pId": "653200",
        "id": "653201"
    },
    {
        "name": "和田县",
        "pId": "653200",
        "id": "653221"
    },
    {
        "name": "墨玉县",
        "pId": "653200",
        "id": "653222"
    },
    {
        "name": "皮山县",
        "pId": "653200",
        "id": "653223"
    },
    {
        "name": "洛浦县",
        "pId": "653200",
        "id": "653224"
    },
    {
        "name": "策勒县",
        "pId": "653200",
        "id": "653225"
    },
    {
        "name": "于田县",
        "pId": "653200",
        "id": "653226"
    },
    {
        "name": "民丰县",
        "pId": "653200",
        "id": "653227"
    },
    {
        "name": "伊犁哈萨克自治州",
        "pId": "650000",
        "id": "654000"
    },
    {
        "name": "伊宁市",
        "pId": "654000",
        "id": "654002"
    },
    {
        "name": "奎屯市",
        "pId": "654000",
        "id": "654003"
    },
    {
        "name": "霍尔果斯市",
        "pId": "654000",
        "id": "654004"
    },
    {
        "name": "伊宁县",
        "pId": "654000",
        "id": "654021"
    },
    {
        "name": "察布查尔锡伯自治县",
        "pId": "654000",
        "id": "654022"
    },
    {
        "name": "霍城县",
        "pId": "654000",
        "id": "654023"
    },
    {
        "name": "巩留县",
        "pId": "654000",
        "id": "654024"
    },
    {
        "name": "新源县",
        "pId": "654000",
        "id": "654025"
    },
    {
        "name": "昭苏县",
        "pId": "654000",
        "id": "654026"
    },
    {
        "name": "特克斯县",
        "pId": "654000",
        "id": "654027"
    },
    {
        "name": "尼勒克县",
        "pId": "654000",
        "id": "654028"
    },
    {
        "name": "塔城地区",
        "pId": "650000",
        "id": "654200"
    },
    {
        "name": "塔城市",
        "pId": "654200",
        "id": "654201"
    },
    {
        "name": "乌苏市",
        "pId": "654200",
        "id": "654202"
    },
    {
        "name": "额敏县",
        "pId": "654200",
        "id": "654221"
    },
    {
        "name": "沙湾县",
        "pId": "654200",
        "id": "654223"
    },
    {
        "name": "托里县",
        "pId": "654200",
        "id": "654224"
    },
    {
        "name": "裕民县",
        "pId": "654200",
        "id": "654225"
    },
    {
        "name": "和布克赛尔蒙古自治县",
        "pId": "654200",
        "id": "654226"
    },
    {
        "name": "阿勒泰地区",
        "pId": "650000",
        "id": "654300"
    },
    {
        "name": "阿勒泰市",
        "pId": "654300",
        "id": "654301"
    },
    {
        "name": "布尔津县",
        "pId": "654300",
        "id": "654321"
    },
    {
        "name": "富蕴县",
        "pId": "654300",
        "id": "654322"
    },
    {
        "name": "福海县",
        "pId": "654300",
        "id": "654323"
    },
    {
        "name": "哈巴河县",
        "pId": "654300",
        "id": "654324"
    },
    {
        "name": "青河县",
        "pId": "654300",
        "id": "654325"
    },
    {
        "name": "吉木乃县",
        "pId": "654300",
        "id": "654326"
    },
    {
        "name": "直辖县级",
        "pId": "650000",
        "id": "659000"
    },
    {
        "name": "石河子市",
        "pId": "659000",
        "id": "659001"
    },
    {
        "name": "阿拉尔市",
        "pId": "659000",
        "id": "659002"
    },
    {
        "name": "图木舒克市",
        "pId": "659000",
        "id": "659003"
    },
    {
        "name": "五家渠市",
        "pId": "659000",
        "id": "659004"
    },
    {
        "name": "北屯市",
        "pId": "659000",
        "id": "659005"
    },
    {
        "name": "铁门关市",
        "pId": "659000",
        "id": "659006"
    },
    {
        "name": "双河市",
        "pId": "659000",
        "id": "659007"
    },
    {
        "name": "台湾",
        "pId": "100000",
        "id": "710000"
    },
    {
        "name": "台北市",
        "pId": "710000",
        "id": "710100"
    },
    {
        "name": "松山区",
        "pId": "710100",
        "id": "710101"
    },
    {
        "name": "信义区",
        "pId": "710100",
        "id": "710102"
    },
    {
        "name": "大安区",
        "pId": "710100",
        "id": "710103"
    },
    {
        "name": "中山区",
        "pId": "710100",
        "id": "710104"
    },
    {
        "name": "中正区",
        "pId": "710100",
        "id": "710105"
    },
    {
        "name": "大同区",
        "pId": "710100",
        "id": "710106"
    },
    {
        "name": "万华区",
        "pId": "710100",
        "id": "710107"
    },
    {
        "name": "文山区",
        "pId": "710100",
        "id": "710108"
    },
    {
        "name": "南港区",
        "pId": "710100",
        "id": "710109"
    },
    {
        "name": "内湖区",
        "pId": "710100",
        "id": "710110"
    },
    {
        "name": "士林区",
        "pId": "710100",
        "id": "710111"
    },
    {
        "name": "北投区",
        "pId": "710100",
        "id": "710112"
    },
    {
        "name": "高雄市",
        "pId": "710000",
        "id": "710200"
    },
    {
        "name": "盐埕区",
        "pId": "710200",
        "id": "710201"
    },
    {
        "name": "鼓山区",
        "pId": "710200",
        "id": "710202"
    },
    {
        "name": "左营区",
        "pId": "710200",
        "id": "710203"
    },
    {
        "name": "楠梓区",
        "pId": "710200",
        "id": "710204"
    },
    {
        "name": "三民区",
        "pId": "710200",
        "id": "710205"
    },
    {
        "name": "新兴区",
        "pId": "710200",
        "id": "710206"
    },
    {
        "name": "前金区",
        "pId": "710200",
        "id": "710207"
    },
    {
        "name": "苓雅区",
        "pId": "710200",
        "id": "710208"
    },
    {
        "name": "前镇区",
        "pId": "710200",
        "id": "710209"
    },
    {
        "name": "旗津区",
        "pId": "710200",
        "id": "710210"
    },
    {
        "name": "小港区",
        "pId": "710200",
        "id": "710211"
    },
    {
        "name": "凤山区",
        "pId": "710200",
        "id": "710212"
    },
    {
        "name": "林园区",
        "pId": "710200",
        "id": "710213"
    },
    {
        "name": "大寮区",
        "pId": "710200",
        "id": "710214"
    },
    {
        "name": "大树区",
        "pId": "710200",
        "id": "710215"
    },
    {
        "name": "大社区",
        "pId": "710200",
        "id": "710216"
    },
    {
        "name": "仁武区",
        "pId": "710200",
        "id": "710217"
    },
    {
        "name": "鸟松区",
        "pId": "710200",
        "id": "710218"
    },
    {
        "name": "冈山区",
        "pId": "710200",
        "id": "710219"
    },
    {
        "name": "桥头区",
        "pId": "710200",
        "id": "710220"
    },
    {
        "name": "燕巢区",
        "pId": "710200",
        "id": "710221"
    },
    {
        "name": "田寮区",
        "pId": "710200",
        "id": "710222"
    },
    {
        "name": "阿莲区",
        "pId": "710200",
        "id": "710223"
    },
    {
        "name": "路竹区",
        "pId": "710200",
        "id": "710224"
    },
    {
        "name": "湖内区",
        "pId": "710200",
        "id": "710225"
    },
    {
        "name": "茄萣区",
        "pId": "710200",
        "id": "710226"
    },
    {
        "name": "永安区",
        "pId": "710200",
        "id": "710227"
    },
    {
        "name": "弥陀区",
        "pId": "710200",
        "id": "710228"
    },
    {
        "name": "梓官区",
        "pId": "710200",
        "id": "710229"
    },
    {
        "name": "旗山区",
        "pId": "710200",
        "id": "710230"
    },
    {
        "name": "美浓区",
        "pId": "710200",
        "id": "710231"
    },
    {
        "name": "六龟区",
        "pId": "710200",
        "id": "710232"
    },
    {
        "name": "甲仙区",
        "pId": "710200",
        "id": "710233"
    },
    {
        "name": "杉林区",
        "pId": "710200",
        "id": "710234"
    },
    {
        "name": "内门区",
        "pId": "710200",
        "id": "710235"
    },
    {
        "name": "茂林区",
        "pId": "710200",
        "id": "710236"
    },
    {
        "name": "桃源区",
        "pId": "710200",
        "id": "710237"
    },
    {
        "name": "那玛夏区",
        "pId": "710200",
        "id": "710238"
    },
    {
        "name": "基隆市",
        "pId": "710000",
        "id": "710300"
    },
    {
        "name": "中正区",
        "pId": "710300",
        "id": "710301"
    },
    {
        "name": "七堵区",
        "pId": "710300",
        "id": "710302"
    },
    {
        "name": "暖暖区",
        "pId": "710300",
        "id": "710303"
    },
    {
        "name": "仁爱区",
        "pId": "710300",
        "id": "710304"
    },
    {
        "name": "中山区",
        "pId": "710300",
        "id": "710305"
    },
    {
        "name": "安乐区",
        "pId": "710300",
        "id": "710306"
    },
    {
        "name": "信义区",
        "pId": "710300",
        "id": "710307"
    },
    {
        "name": "台中市",
        "pId": "710000",
        "id": "710400"
    },
    {
        "name": "中区",
        "pId": "710400",
        "id": "710401"
    },
    {
        "name": "东区",
        "pId": "710400",
        "id": "710402"
    },
    {
        "name": "南区",
        "pId": "710400",
        "id": "710403"
    },
    {
        "name": "西区",
        "pId": "710400",
        "id": "710404"
    },
    {
        "name": "北区",
        "pId": "710400",
        "id": "710405"
    },
    {
        "name": "西屯区",
        "pId": "710400",
        "id": "710406"
    },
    {
        "name": "南屯区",
        "pId": "710400",
        "id": "710407"
    },
    {
        "name": "北屯区",
        "pId": "710400",
        "id": "710408"
    },
    {
        "name": "丰原区",
        "pId": "710400",
        "id": "710409"
    },
    {
        "name": "东势区",
        "pId": "710400",
        "id": "710410"
    },
    {
        "name": "大甲区",
        "pId": "710400",
        "id": "710411"
    },
    {
        "name": "清水区",
        "pId": "710400",
        "id": "710412"
    },
    {
        "name": "沙鹿区",
        "pId": "710400",
        "id": "710413"
    },
    {
        "name": "梧栖区",
        "pId": "710400",
        "id": "710414"
    },
    {
        "name": "后里区",
        "pId": "710400",
        "id": "710415"
    },
    {
        "name": "神冈区",
        "pId": "710400",
        "id": "710416"
    },
    {
        "name": "潭子区",
        "pId": "710400",
        "id": "710417"
    },
    {
        "name": "大雅区",
        "pId": "710400",
        "id": "710418"
    },
    {
        "name": "新社区",
        "pId": "710400",
        "id": "710419"
    },
    {
        "name": "石冈区",
        "pId": "710400",
        "id": "710420"
    },
    {
        "name": "外埔区",
        "pId": "710400",
        "id": "710421"
    },
    {
        "name": "大安区",
        "pId": "710400",
        "id": "710422"
    },
    {
        "name": "乌日区",
        "pId": "710400",
        "id": "710423"
    },
    {
        "name": "大肚区",
        "pId": "710400",
        "id": "710424"
    },
    {
        "name": "龙井区",
        "pId": "710400",
        "id": "710425"
    },
    {
        "name": "雾峰区",
        "pId": "710400",
        "id": "710426"
    },
    {
        "name": "太平区",
        "pId": "710400",
        "id": "710427"
    },
    {
        "name": "大里区",
        "pId": "710400",
        "id": "710428"
    },
    {
        "name": "和平区",
        "pId": "710400",
        "id": "710429"
    },
    {
        "name": "台南市",
        "pId": "710000",
        "id": "710500"
    },
    {
        "name": "东区",
        "pId": "710500",
        "id": "710501"
    },
    {
        "name": "南区",
        "pId": "710500",
        "id": "710502"
    },
    {
        "name": "北区",
        "pId": "710500",
        "id": "710504"
    },
    {
        "name": "安南区",
        "pId": "710500",
        "id": "710506"
    },
    {
        "name": "安平区",
        "pId": "710500",
        "id": "710507"
    },
    {
        "name": "中西区",
        "pId": "710500",
        "id": "710508"
    },
    {
        "name": "新营区",
        "pId": "710500",
        "id": "710509"
    },
    {
        "name": "盐水区",
        "pId": "710500",
        "id": "710510"
    },
    {
        "name": "白河区",
        "pId": "710500",
        "id": "710511"
    },
    {
        "name": "柳营区",
        "pId": "710500",
        "id": "710512"
    },
    {
        "name": "后壁区",
        "pId": "710500",
        "id": "710513"
    },
    {
        "name": "东山区",
        "pId": "710500",
        "id": "710514"
    },
    {
        "name": "麻豆区",
        "pId": "710500",
        "id": "710515"
    },
    {
        "name": "下营区",
        "pId": "710500",
        "id": "710516"
    },
    {
        "name": "六甲区",
        "pId": "710500",
        "id": "710517"
    },
    {
        "name": "官田区",
        "pId": "710500",
        "id": "710518"
    },
    {
        "name": "大内区",
        "pId": "710500",
        "id": "710519"
    },
    {
        "name": "佳里区",
        "pId": "710500",
        "id": "710520"
    },
    {
        "name": "学甲区",
        "pId": "710500",
        "id": "710521"
    },
    {
        "name": "西港区",
        "pId": "710500",
        "id": "710522"
    },
    {
        "name": "七股区",
        "pId": "710500",
        "id": "710523"
    },
    {
        "name": "将军区",
        "pId": "710500",
        "id": "710524"
    },
    {
        "name": "北门区",
        "pId": "710500",
        "id": "710525"
    },
    {
        "name": "新化区",
        "pId": "710500",
        "id": "710526"
    },
    {
        "name": "善化区",
        "pId": "710500",
        "id": "710527"
    },
    {
        "name": "新市区",
        "pId": "710500",
        "id": "710528"
    },
    {
        "name": "安定区",
        "pId": "710500",
        "id": "710529"
    },
    {
        "name": "山上区",
        "pId": "710500",
        "id": "710530"
    },
    {
        "name": "玉井区",
        "pId": "710500",
        "id": "710531"
    },
    {
        "name": "楠西区",
        "pId": "710500",
        "id": "710532"
    },
    {
        "name": "南化区",
        "pId": "710500",
        "id": "710533"
    },
    {
        "name": "左镇区",
        "pId": "710500",
        "id": "710534"
    },
    {
        "name": "仁德区",
        "pId": "710500",
        "id": "710535"
    },
    {
        "name": "归仁区",
        "pId": "710500",
        "id": "710536"
    },
    {
        "name": "关庙区",
        "pId": "710500",
        "id": "710537"
    },
    {
        "name": "龙崎区",
        "pId": "710500",
        "id": "710538"
    },
    {
        "name": "永康区",
        "pId": "710500",
        "id": "710539"
    },
    {
        "name": "新竹市",
        "pId": "710000",
        "id": "710600"
    },
    {
        "name": "东区",
        "pId": "710600",
        "id": "710601"
    },
    {
        "name": "北区",
        "pId": "710600",
        "id": "710602"
    },
    {
        "name": "香山区",
        "pId": "710600",
        "id": "710603"
    },
    {
        "name": "嘉义市",
        "pId": "710000",
        "id": "710700"
    },
    {
        "name": "东区",
        "pId": "710700",
        "id": "710701"
    },
    {
        "name": "西区",
        "pId": "710700",
        "id": "710702"
    },
    {
        "name": "新北市",
        "pId": "710000",
        "id": "710800"
    },
    {
        "name": "板桥区",
        "pId": "710800",
        "id": "710801"
    },
    {
        "name": "三重区",
        "pId": "710800",
        "id": "710802"
    },
    {
        "name": "中和区",
        "pId": "710800",
        "id": "710803"
    },
    {
        "name": "永和区",
        "pId": "710800",
        "id": "710804"
    },
    {
        "name": "新庄区",
        "pId": "710800",
        "id": "710805"
    },
    {
        "name": "新店区",
        "pId": "710800",
        "id": "710806"
    },
    {
        "name": "树林区",
        "pId": "710800",
        "id": "710807"
    },
    {
        "name": "莺歌区",
        "pId": "710800",
        "id": "710808"
    },
    {
        "name": "三峡区",
        "pId": "710800",
        "id": "710809"
    },
    {
        "name": "淡水区",
        "pId": "710800",
        "id": "710810"
    },
    {
        "name": "汐止区",
        "pId": "710800",
        "id": "710811"
    },
    {
        "name": "瑞芳区",
        "pId": "710800",
        "id": "710812"
    },
    {
        "name": "土城区",
        "pId": "710800",
        "id": "710813"
    },
    {
        "name": "芦洲区",
        "pId": "710800",
        "id": "710814"
    },
    {
        "name": "五股区",
        "pId": "710800",
        "id": "710815"
    },
    {
        "name": "泰山区",
        "pId": "710800",
        "id": "710816"
    },
    {
        "name": "林口区",
        "pId": "710800",
        "id": "710817"
    },
    {
        "name": "深坑区",
        "pId": "710800",
        "id": "710818"
    },
    {
        "name": "石碇区",
        "pId": "710800",
        "id": "710819"
    },
    {
        "name": "坪林区",
        "pId": "710800",
        "id": "710820"
    },
    {
        "name": "三芝区",
        "pId": "710800",
        "id": "710821"
    },
    {
        "name": "石门区",
        "pId": "710800",
        "id": "710822"
    },
    {
        "name": "八里区",
        "pId": "710800",
        "id": "710823"
    },
    {
        "name": "平溪区",
        "pId": "710800",
        "id": "710824"
    },
    {
        "name": "双溪区",
        "pId": "710800",
        "id": "710825"
    },
    {
        "name": "贡寮区",
        "pId": "710800",
        "id": "710826"
    },
    {
        "name": "金山区",
        "pId": "710800",
        "id": "710827"
    },
    {
        "name": "万里区",
        "pId": "710800",
        "id": "710828"
    },
    {
        "name": "乌来区",
        "pId": "710800",
        "id": "710829"
    },
    {
        "name": "宜兰县",
        "pId": "710000",
        "id": "712200"
    },
    {
        "name": "宜兰市",
        "pId": "712200",
        "id": "712201"
    },
    {
        "name": "罗东镇",
        "pId": "712200",
        "id": "712221"
    },
    {
        "name": "苏澳镇",
        "pId": "712200",
        "id": "712222"
    },
    {
        "name": "头城镇",
        "pId": "712200",
        "id": "712223"
    },
    {
        "name": "礁溪乡",
        "pId": "712200",
        "id": "712224"
    },
    {
        "name": "壮围乡",
        "pId": "712200",
        "id": "712225"
    },
    {
        "name": "员山乡",
        "pId": "712200",
        "id": "712226"
    },
    {
        "name": "冬山乡",
        "pId": "712200",
        "id": "712227"
    },
    {
        "name": "五结乡",
        "pId": "712200",
        "id": "712228"
    },
    {
        "name": "三星乡",
        "pId": "712200",
        "id": "712229"
    },
    {
        "name": "大同乡",
        "pId": "712200",
        "id": "712230"
    },
    {
        "name": "南澳乡",
        "pId": "712200",
        "id": "712231"
    },
    {
        "name": "桃园县",
        "pId": "710000",
        "id": "712300"
    },
    {
        "name": "桃园市",
        "pId": "712300",
        "id": "712301"
    },
    {
        "name": "中坜市",
        "pId": "712300",
        "id": "712302"
    },
    {
        "name": "平镇市",
        "pId": "712300",
        "id": "712303"
    },
    {
        "name": "八德市",
        "pId": "712300",
        "id": "712304"
    },
    {
        "name": "杨梅市",
        "pId": "712300",
        "id": "712305"
    },
    {
        "name": "芦竹市",
        "pId": "712300",
        "id": "712306"
    },
    {
        "name": "大溪镇",
        "pId": "712300",
        "id": "712321"
    },
    {
        "name": "大园乡",
        "pId": "712300",
        "id": "712324"
    },
    {
        "name": "龟山乡",
        "pId": "712300",
        "id": "712325"
    },
    {
        "name": "龙潭乡",
        "pId": "712300",
        "id": "712327"
    },
    {
        "name": "新屋乡",
        "pId": "712300",
        "id": "712329"
    },
    {
        "name": "观音乡",
        "pId": "712300",
        "id": "712330"
    },
    {
        "name": "复兴乡",
        "pId": "712300",
        "id": "712331"
    },
    {
        "name": "新竹县",
        "pId": "710000",
        "id": "712400"
    },
    {
        "name": "竹北市",
        "pId": "712400",
        "id": "712401"
    },
    {
        "name": "竹东镇",
        "pId": "712400",
        "id": "712421"
    },
    {
        "name": "新埔镇",
        "pId": "712400",
        "id": "712422"
    },
    {
        "name": "关西镇",
        "pId": "712400",
        "id": "712423"
    },
    {
        "name": "湖口乡",
        "pId": "712400",
        "id": "712424"
    },
    {
        "name": "新丰乡",
        "pId": "712400",
        "id": "712425"
    },
    {
        "name": "芎林乡",
        "pId": "712400",
        "id": "712426"
    },
    {
        "name": "横山乡",
        "pId": "712400",
        "id": "712427"
    },
    {
        "name": "北埔乡",
        "pId": "712400",
        "id": "712428"
    },
    {
        "name": "宝山乡",
        "pId": "712400",
        "id": "712429"
    },
    {
        "name": "峨眉乡",
        "pId": "712400",
        "id": "712430"
    },
    {
        "name": "尖石乡",
        "pId": "712400",
        "id": "712431"
    },
    {
        "name": "五峰乡",
        "pId": "712400",
        "id": "712432"
    },
    {
        "name": "苗栗县",
        "pId": "710000",
        "id": "712500"
    },
    {
        "name": "苗栗市",
        "pId": "712500",
        "id": "712501"
    },
    {
        "name": "苑里镇",
        "pId": "712500",
        "id": "712521"
    },
    {
        "name": "通霄镇",
        "pId": "712500",
        "id": "712522"
    },
    {
        "name": "竹南镇",
        "pId": "712500",
        "id": "712523"
    },
    {
        "name": "头份镇",
        "pId": "712500",
        "id": "712524"
    },
    {
        "name": "后龙镇",
        "pId": "712500",
        "id": "712525"
    },
    {
        "name": "卓兰镇",
        "pId": "712500",
        "id": "712526"
    },
    {
        "name": "大湖乡",
        "pId": "712500",
        "id": "712527"
    },
    {
        "name": "公馆乡",
        "pId": "712500",
        "id": "712528"
    },
    {
        "name": "铜锣乡",
        "pId": "712500",
        "id": "712529"
    },
    {
        "name": "南庄乡",
        "pId": "712500",
        "id": "712530"
    },
    {
        "name": "头屋乡",
        "pId": "712500",
        "id": "712531"
    },
    {
        "name": "三义乡",
        "pId": "712500",
        "id": "712532"
    },
    {
        "name": "西湖乡",
        "pId": "712500",
        "id": "712533"
    },
    {
        "name": "造桥乡",
        "pId": "712500",
        "id": "712534"
    },
    {
        "name": "三湾乡",
        "pId": "712500",
        "id": "712535"
    },
    {
        "name": "狮潭乡",
        "pId": "712500",
        "id": "712536"
    },
    {
        "name": "泰安乡",
        "pId": "712500",
        "id": "712537"
    },
    {
        "name": "彰化县",
        "pId": "710000",
        "id": "712700"
    },
    {
        "name": "彰化市",
        "pId": "712700",
        "id": "712701"
    },
    {
        "name": "鹿港镇",
        "pId": "712700",
        "id": "712721"
    },
    {
        "name": "和美镇",
        "pId": "712700",
        "id": "712722"
    },
    {
        "name": "线西乡",
        "pId": "712700",
        "id": "712723"
    },
    {
        "name": "伸港乡",
        "pId": "712700",
        "id": "712724"
    },
    {
        "name": "福兴乡",
        "pId": "712700",
        "id": "712725"
    },
    {
        "name": "秀水乡",
        "pId": "712700",
        "id": "712726"
    },
    {
        "name": "花坛乡",
        "pId": "712700",
        "id": "712727"
    },
    {
        "name": "芬园乡",
        "pId": "712700",
        "id": "712728"
    },
    {
        "name": "员林镇",
        "pId": "712700",
        "id": "712729"
    },
    {
        "name": "溪湖镇",
        "pId": "712700",
        "id": "712730"
    },
    {
        "name": "田中镇",
        "pId": "712700",
        "id": "712731"
    },
    {
        "name": "大村乡",
        "pId": "712700",
        "id": "712732"
    },
    {
        "name": "埔盐乡",
        "pId": "712700",
        "id": "712733"
    },
    {
        "name": "埔心乡",
        "pId": "712700",
        "id": "712734"
    },
    {
        "name": "永靖乡",
        "pId": "712700",
        "id": "712735"
    },
    {
        "name": "社头乡",
        "pId": "712700",
        "id": "712736"
    },
    {
        "name": "二水乡",
        "pId": "712700",
        "id": "712737"
    },
    {
        "name": "北斗镇",
        "pId": "712700",
        "id": "712738"
    },
    {
        "name": "二林镇",
        "pId": "712700",
        "id": "712739"
    },
    {
        "name": "田尾乡",
        "pId": "712700",
        "id": "712740"
    },
    {
        "name": "埤头乡",
        "pId": "712700",
        "id": "712741"
    },
    {
        "name": "芳苑乡",
        "pId": "712700",
        "id": "712742"
    },
    {
        "name": "大城乡",
        "pId": "712700",
        "id": "712743"
    },
    {
        "name": "竹塘乡",
        "pId": "712700",
        "id": "712744"
    },
    {
        "name": "溪州乡",
        "pId": "712700",
        "id": "712745"
    },
    {
        "name": "南投县",
        "pId": "710000",
        "id": "712800"
    },
    {
        "name": "南投市",
        "pId": "712800",
        "id": "712801"
    },
    {
        "name": "埔里镇",
        "pId": "712800",
        "id": "712821"
    },
    {
        "name": "草屯镇",
        "pId": "712800",
        "id": "712822"
    },
    {
        "name": "竹山镇",
        "pId": "712800",
        "id": "712823"
    },
    {
        "name": "集集镇",
        "pId": "712800",
        "id": "712824"
    },
    {
        "name": "名间乡",
        "pId": "712800",
        "id": "712825"
    },
    {
        "name": "鹿谷乡",
        "pId": "712800",
        "id": "712826"
    },
    {
        "name": "中寮乡",
        "pId": "712800",
        "id": "712827"
    },
    {
        "name": "鱼池乡",
        "pId": "712800",
        "id": "712828"
    },
    {
        "name": "国姓乡",
        "pId": "712800",
        "id": "712829"
    },
    {
        "name": "水里乡",
        "pId": "712800",
        "id": "712830"
    },
    {
        "name": "信义乡",
        "pId": "712800",
        "id": "712831"
    },
    {
        "name": "仁爱乡",
        "pId": "712800",
        "id": "712832"
    },
    {
        "name": "云林县",
        "pId": "710000",
        "id": "712900"
    },
    {
        "name": "斗六市",
        "pId": "712900",
        "id": "712901"
    },
    {
        "name": "斗南镇",
        "pId": "712900",
        "id": "712921"
    },
    {
        "name": "虎尾镇",
        "pId": "712900",
        "id": "712922"
    },
    {
        "name": "西螺镇",
        "pId": "712900",
        "id": "712923"
    },
    {
        "name": "土库镇",
        "pId": "712900",
        "id": "712924"
    },
    {
        "name": "北港镇",
        "pId": "712900",
        "id": "712925"
    },
    {
        "name": "古坑乡",
        "pId": "712900",
        "id": "712926"
    },
    {
        "name": "大埤乡",
        "pId": "712900",
        "id": "712927"
    },
    {
        "name": "莿桐乡",
        "pId": "712900",
        "id": "712928"
    },
    {
        "name": "林内乡",
        "pId": "712900",
        "id": "712929"
    },
    {
        "name": "二仑乡",
        "pId": "712900",
        "id": "712930"
    },
    {
        "name": "仑背乡",
        "pId": "712900",
        "id": "712931"
    },
    {
        "name": "麦寮乡",
        "pId": "712900",
        "id": "712932"
    },
    {
        "name": "东势乡",
        "pId": "712900",
        "id": "712933"
    },
    {
        "name": "褒忠乡",
        "pId": "712900",
        "id": "712934"
    },
    {
        "name": "台西乡",
        "pId": "712900",
        "id": "712935"
    },
    {
        "name": "元长乡",
        "pId": "712900",
        "id": "712936"
    },
    {
        "name": "四湖乡",
        "pId": "712900",
        "id": "712937"
    },
    {
        "name": "口湖乡",
        "pId": "712900",
        "id": "712938"
    },
    {
        "name": "水林乡",
        "pId": "712900",
        "id": "712939"
    },
    {
        "name": "嘉义县",
        "pId": "710000",
        "id": "713000"
    },
    {
        "name": "太保市",
        "pId": "713000",
        "id": "713001"
    },
    {
        "name": "朴子市",
        "pId": "713000",
        "id": "713002"
    },
    {
        "name": "布袋镇",
        "pId": "713000",
        "id": "713023"
    },
    {
        "name": "大林镇",
        "pId": "713000",
        "id": "713024"
    },
    {
        "name": "民雄乡",
        "pId": "713000",
        "id": "713025"
    },
    {
        "name": "溪口乡",
        "pId": "713000",
        "id": "713026"
    },
    {
        "name": "新港乡",
        "pId": "713000",
        "id": "713027"
    },
    {
        "name": "六脚乡",
        "pId": "713000",
        "id": "713028"
    },
    {
        "name": "东石乡",
        "pId": "713000",
        "id": "713029"
    },
    {
        "name": "义竹乡",
        "pId": "713000",
        "id": "713030"
    },
    {
        "name": "鹿草乡",
        "pId": "713000",
        "id": "713031"
    },
    {
        "name": "水上乡",
        "pId": "713000",
        "id": "713032"
    },
    {
        "name": "中埔乡",
        "pId": "713000",
        "id": "713033"
    },
    {
        "name": "竹崎乡",
        "pId": "713000",
        "id": "713034"
    },
    {
        "name": "梅山乡",
        "pId": "713000",
        "id": "713035"
    },
    {
        "name": "番路乡",
        "pId": "713000",
        "id": "713036"
    },
    {
        "name": "大埔乡",
        "pId": "713000",
        "id": "713037"
    },
    {
        "name": "阿里山乡",
        "pId": "713000",
        "id": "713038"
    },
    {
        "name": "屏东县",
        "pId": "710000",
        "id": "713300"
    },
    {
        "name": "屏东市",
        "pId": "713300",
        "id": "713301"
    },
    {
        "name": "潮州镇",
        "pId": "713300",
        "id": "713321"
    },
    {
        "name": "东港镇",
        "pId": "713300",
        "id": "713322"
    },
    {
        "name": "恒春镇",
        "pId": "713300",
        "id": "713323"
    },
    {
        "name": "万丹乡",
        "pId": "713300",
        "id": "713324"
    },
    {
        "name": "长治乡",
        "pId": "713300",
        "id": "713325"
    },
    {
        "name": "麟洛乡",
        "pId": "713300",
        "id": "713326"
    },
    {
        "name": "九如乡",
        "pId": "713300",
        "id": "713327"
    },
    {
        "name": "里港乡",
        "pId": "713300",
        "id": "713328"
    },
    {
        "name": "盐埔乡",
        "pId": "713300",
        "id": "713329"
    },
    {
        "name": "高树乡",
        "pId": "713300",
        "id": "713330"
    },
    {
        "name": "万峦乡",
        "pId": "713300",
        "id": "713331"
    },
    {
        "name": "内埔乡",
        "pId": "713300",
        "id": "713332"
    },
    {
        "name": "竹田乡",
        "pId": "713300",
        "id": "713333"
    },
    {
        "name": "新埤乡",
        "pId": "713300",
        "id": "713334"
    },
    {
        "name": "枋寮乡",
        "pId": "713300",
        "id": "713335"
    },
    {
        "name": "新园乡",
        "pId": "713300",
        "id": "713336"
    },
    {
        "name": "崁顶乡",
        "pId": "713300",
        "id": "713337"
    },
    {
        "name": "林边乡",
        "pId": "713300",
        "id": "713338"
    },
    {
        "name": "南州乡",
        "pId": "713300",
        "id": "713339"
    },
    {
        "name": "佳冬乡",
        "pId": "713300",
        "id": "713340"
    },
    {
        "name": "琉球乡",
        "pId": "713300",
        "id": "713341"
    },
    {
        "name": "车城乡",
        "pId": "713300",
        "id": "713342"
    },
    {
        "name": "满州乡",
        "pId": "713300",
        "id": "713343"
    },
    {
        "name": "枋山乡",
        "pId": "713300",
        "id": "713344"
    },
    {
        "name": "三地门乡",
        "pId": "713300",
        "id": "713345"
    },
    {
        "name": "雾台乡",
        "pId": "713300",
        "id": "713346"
    },
    {
        "name": "玛家乡",
        "pId": "713300",
        "id": "713347"
    },
    {
        "name": "泰武乡",
        "pId": "713300",
        "id": "713348"
    },
    {
        "name": "来义乡",
        "pId": "713300",
        "id": "713349"
    },
    {
        "name": "春日乡",
        "pId": "713300",
        "id": "713350"
    },
    {
        "name": "狮子乡",
        "pId": "713300",
        "id": "713351"
    },
    {
        "name": "牡丹乡",
        "pId": "713300",
        "id": "713352"
    },
    {
        "name": "台东县",
        "pId": "710000",
        "id": "713400"
    },
    {
        "name": "台东市",
        "pId": "713400",
        "id": "713401"
    },
    {
        "name": "成功镇",
        "pId": "713400",
        "id": "713421"
    },
    {
        "name": "关山镇",
        "pId": "713400",
        "id": "713422"
    },
    {
        "name": "卑南乡",
        "pId": "713400",
        "id": "713423"
    },
    {
        "name": "鹿野乡",
        "pId": "713400",
        "id": "713424"
    },
    {
        "name": "池上乡",
        "pId": "713400",
        "id": "713425"
    },
    {
        "name": "东河乡",
        "pId": "713400",
        "id": "713426"
    },
    {
        "name": "长滨乡",
        "pId": "713400",
        "id": "713427"
    },
    {
        "name": "太麻里乡",
        "pId": "713400",
        "id": "713428"
    },
    {
        "name": "大武乡",
        "pId": "713400",
        "id": "713429"
    },
    {
        "name": "绿岛乡",
        "pId": "713400",
        "id": "713430"
    },
    {
        "name": "海端乡",
        "pId": "713400",
        "id": "713431"
    },
    {
        "name": "延平乡",
        "pId": "713400",
        "id": "713432"
    },
    {
        "name": "金峰乡",
        "pId": "713400",
        "id": "713433"
    },
    {
        "name": "达仁乡",
        "pId": "713400",
        "id": "713434"
    },
    {
        "name": "兰屿乡",
        "pId": "713400",
        "id": "713435"
    },
    {
        "name": "花莲县",
        "pId": "710000",
        "id": "713500"
    },
    {
        "name": "花莲市",
        "pId": "713500",
        "id": "713501"
    },
    {
        "name": "凤林镇",
        "pId": "713500",
        "id": "713521"
    },
    {
        "name": "玉里镇",
        "pId": "713500",
        "id": "713522"
    },
    {
        "name": "新城乡",
        "pId": "713500",
        "id": "713523"
    },
    {
        "name": "吉安乡",
        "pId": "713500",
        "id": "713524"
    },
    {
        "name": "寿丰乡",
        "pId": "713500",
        "id": "713525"
    },
    {
        "name": "光复乡",
        "pId": "713500",
        "id": "713526"
    },
    {
        "name": "丰滨乡",
        "pId": "713500",
        "id": "713527"
    },
    {
        "name": "瑞穗乡",
        "pId": "713500",
        "id": "713528"
    },
    {
        "name": "富里乡",
        "pId": "713500",
        "id": "713529"
    },
    {
        "name": "秀林乡",
        "pId": "713500",
        "id": "713530"
    },
    {
        "name": "万荣乡",
        "pId": "713500",
        "id": "713531"
    },
    {
        "name": "卓溪乡",
        "pId": "713500",
        "id": "713532"
    },
    {
        "name": "澎湖县",
        "pId": "710000",
        "id": "713600"
    },
    {
        "name": "马公市",
        "pId": "713600",
        "id": "713601"
    },
    {
        "name": "湖西乡",
        "pId": "713600",
        "id": "713621"
    },
    {
        "name": "白沙乡",
        "pId": "713600",
        "id": "713622"
    },
    {
        "name": "西屿乡",
        "pId": "713600",
        "id": "713623"
    },
    {
        "name": "望安乡",
        "pId": "713600",
        "id": "713624"
    },
    {
        "name": "七美乡",
        "pId": "713600",
        "id": "713625"
    },
    {
        "name": "金门县",
        "pId": "710000",
        "id": "713700"
    },
    {
        "name": "金城镇",
        "pId": "713700",
        "id": "713701"
    },
    {
        "name": "金湖镇",
        "pId": "713700",
        "id": "713702"
    },
    {
        "name": "金沙镇",
        "pId": "713700",
        "id": "713703"
    },
    {
        "name": "金宁乡",
        "pId": "713700",
        "id": "713704"
    },
    {
        "name": "烈屿乡",
        "pId": "713700",
        "id": "713705"
    },
    {
        "name": "乌丘乡",
        "pId": "713700",
        "id": "713706"
    },
    {
        "name": "连江县",
        "pId": "710000",
        "id": "713800"
    },
    {
        "name": "南竿乡",
        "pId": "713800",
        "id": "713801"
    },
    {
        "name": "北竿乡",
        "pId": "713800",
        "id": "713802"
    },
    {
        "name": "莒光乡",
        "pId": "713800",
        "id": "713803"
    },
    {
        "name": "东引乡",
        "pId": "713800",
        "id": "713804"
    },
    {
        "name": "香港特别行政区",
        "pId": "100000",
        "id": "810000"
    },
    {
        "name": "香港岛",
        "pId": "810000",
        "id": "810100"
    },
    {
        "name": "中西区",
        "pId": "810100",
        "id": "810101"
    },
    {
        "name": "湾仔区",
        "pId": "810100",
        "id": "810102"
    },
    {
        "name": "东区",
        "pId": "810100",
        "id": "810103"
    },
    {
        "name": "南区",
        "pId": "810100",
        "id": "810104"
    },
    {
        "name": "九龙",
        "pId": "810000",
        "id": "810200"
    },
    {
        "name": "油尖旺区",
        "pId": "810200",
        "id": "810201"
    },
    {
        "name": "深水埗区",
        "pId": "810200",
        "id": "810202"
    },
    {
        "name": "九龙城区",
        "pId": "810200",
        "id": "810203"
    },
    {
        "name": "黄大仙区",
        "pId": "810200",
        "id": "810204"
    },
    {
        "name": "观塘区",
        "pId": "810200",
        "id": "810205"
    },
    {
        "name": "新界",
        "pId": "810000",
        "id": "810300"
    },
    {
        "name": "荃湾区",
        "pId": "810300",
        "id": "810301"
    },
    {
        "name": "屯门区",
        "pId": "810300",
        "id": "810302"
    },
    {
        "name": "元朗区",
        "pId": "810300",
        "id": "810303"
    },
    {
        "name": "北区",
        "pId": "810300",
        "id": "810304"
    },
    {
        "name": "大埔区",
        "pId": "810300",
        "id": "810305"
    },
    {
        "name": "西贡区",
        "pId": "810300",
        "id": "810306"
    },
    {
        "name": "沙田区",
        "pId": "810300",
        "id": "810307"
    },
    {
        "name": "葵青区",
        "pId": "810300",
        "id": "810308"
    },
    {
        "name": "离岛区",
        "pId": "810300",
        "id": "810309"
    },
    {
        "name": "澳门特别行政区",
        "pId": "100000",
        "id": "820000"
    },
    {
        "name": "澳门半岛",
        "pId": "820000",
        "id": "820100"
    },
    {
        "name": "花地玛堂区",
        "pId": "820100",
        "id": "820101"
    },
    {
        "name": "圣安多尼堂区",
        "pId": "820100",
        "id": "820102"
    },
    {
        "name": "大堂区",
        "pId": "820100",
        "id": "820103"
    },
    {
        "name": "望德堂区",
        "pId": "820100",
        "id": "820104"
    },
    {
        "name": "风顺堂区",
        "pId": "820100",
        "id": "820105"
    },
    {
        "name": "氹仔岛",
        "pId": "820000",
        "id": "820200"
    },
    {
        "name": "嘉模堂区",
        "pId": "820200",
        "id": "820201"
    },
    {
        "name": "路环岛",
        "pId": "820000",
        "id": "820300"
    },
    {
        "name": "圣方济各堂区",
        "pId": "820300",
        "id": "820301"
    },
    {
        "name": "钓鱼岛",
        "pId": "100000",
        "id": "900000"
    }
]