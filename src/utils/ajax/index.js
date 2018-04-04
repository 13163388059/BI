import {
  def_config, // 默认 ajax 配置
  origin // 默认域
} from './config'

/**
 * 调用 ajax 基础方法
 * @param {*} config 
 * @param {string} config.type http 方法
 * @param {string} config.url 地址
 * @param {bool} config.async 是否异步  
 * @param {string} config.dataType 
 * @param {string} config.contentType 
 * @param {function} config.beforeSend 发送前执行
 * 
 * @returns {Promise} 
 */

function _ajax(config) {


  //设定 ajax 参数
  const ajaxData = Object.assign(def_config, config)

  ajaxData.beforeSend()

  // 所返回的 promise
  const promise = new Promise(function (resolve, reject) {
    var xhr = createxmlHttpRequest()
    xhr.responseType = ajaxData.dataType
    xhr.open(ajaxData.type, ajaxData.url, ajaxData.async)
    xhr.setRequestHeader('Content-Type', ajaxData.contentType)
    xhr.send(convertData(ajaxData.data))
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return
      }

      if (xhr.status == 200) {
        console.log('get data')
        resolve(xhr.response)
      } else {
        console.log('get error')
        reject(xhr.statusText)
      }
    }
  })

  return promise
}

// 创建 XHR
function createxmlHttpRequest() {
  if (window.ActiveXObject) {
    return new ActiveXObject('Microsoft.XMLHTTP')
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest()
  }
}

// 如果传递参数是 obj，将其转换为 str
function convertData(data) {
  if (typeof data === 'object' && data !== null) {
    var convertResult = ''
    for (var c in data) {
      if (typeof data[c] === "object" && data[c] !== null)
        convertResult += c + '=' + JSON.stringify(data[c]) + '&'
      else
        convertResult += c + '=' + data[c] + '&'
    }
    convertResult = convertResult.substring(0, convertResult.length - 1)
    return convertResult
  } else {
    return data
  }
}



const ajax = {}

ajax.get = (path = '', data, option) => (

  new Promise((res, rej) => {
    // 调用基础 ajax 模块
    _ajax(
      Object.assign({
        url: origin + path,
        data,
        type: 'GET'
      }, option)
    ).then((data) => {
      // json 数据处理
      if (typeof data === 'string')
        JSON.parse(data)
      //
      if (data.success)
        res(data)
      else
        rej(data)
    }).catch(rej)
  })
)


ajax.post = (path = '', data = '', option) => (

  new Promise((res, rej) => {
    // 调用基础 ajax 模块
    _ajax(
      Object.assign({
        url: origin + path,
        data: JSON.stringify({
          params: JSON.stringify({
            data,
            token:''
          })
        }),
        type: 'POST'
      }, option)
    ).then((data) => {
      // json 数据处理
      if (typeof data === 'string')
        JSON.parse(data)
      //
      if (data.success)
        res(data)
      else
        rej(data)
    }).catch(rej)
  })
)


export default ajax
