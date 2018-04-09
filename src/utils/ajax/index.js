import {
    def_config, // 默认 ajax 配置
    origin, // 默认域,
    system // 系统
} from './config'

import _ajax from './_ajax'



const ajax = {}

ajax.get = (path = '', data, sys = 'def', option = {}) => (

    new Promise((res, rej) => {
        // 调用基础 ajax 模块
        _ajax(
            Object.assign({
                url: origin['dev'] + system[sys] + path,
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


ajax.post = (path = '', data = '', sys = 'def', option = {}) => {

    return new Promise((res, rej) => {
        // 调用基础 ajax 模块
        _ajax(
            Object.assign({
                url: origin['dev'] + system[sys] + path,
                data: JSON.stringify({
                    params: JSON.stringify({
                        data,
                        token: ''
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
}


export default ajax