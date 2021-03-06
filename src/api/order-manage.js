import req from '../fetch/index.js'

const config = {
  // portExport: {
  //   url: '/api/media/stimulate/exportExcel',
  //   method: 'post',
  //   fileConfig: {
  //     type: 'file',
  //     fileName: '销售激励报表'
  //   }
  // },
  listOrders:{
    url:'/pc/order/listOrders',
    method: 'post',
  },
  updateOrderCondition:{
    url:'/pc/order/updateOrderConditionById',
    method: 'post',
  },
  listOrder:{
    url:'/pc/order/listOrderDetailsById',
    method: 'post',
  }
}

const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request