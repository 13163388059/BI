import { ENGINE_METHOD_NONE } from "constants";

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
    const ajaxData = {
        type: config.type || 'GET',
        url: config.url || '',
        async: config.async || 'true',
        data: config.data || null,
        dataType: config.dataType || 'text',
        contentType: config.contentType || 'application/x-www-form-urlencoded',
        beforeSend: config.beforeSend || function() {}
    }
    ajaxData.beforeSend()

    // 所返回的 promise
    const promise = new Promise(function(resolve, reject) {
        var xhr = createxmlHttpRequest()
        xhr.responseType = ajaxData.dataType
        xhr.open(ajaxData.type, ajaxData.url, ajaxData.async)
        xhr.setRequestHeader('Content-Type', ajaxData.contentType)
        xhr.send(convertData(ajaxData.data))
        xhr.onreadystatechange = function() {
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
    if (typeof data === 'object') {
        var convertResult = ''
        for (var c in data) {
            convertResult += c + '=' + data[c] + '&'
        }
        convertResult = convertResult.substring(0, convertResult.length - 1)
        return convertResult
    } else {
        return data
    }
}



const ajax = {}

ajax.get = (url ='' , data , option )=>(
    new Promise((res,rej)=>{
        // 调用基础 ajax 模块
        _ajax(
            Object.assign({
                url, 
                data,
                type:'GET'
            },option)
        ).then((data)=>{
            // json 数据处理
            JSON.parse(data)
            if(data.success) res(data.data,1)
            else rej()
        }).catch(rej)
    })
)


ajax.post = (url ='' , data , option )=>(_ajax(
    Object.assign({
        url,
        data,
        type:'POST'
    },option)
))


export default ajax
