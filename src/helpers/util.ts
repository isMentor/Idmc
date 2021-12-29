/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { KEY_NAME } from '../global/default'
import { AssertParam, CoreParam, Intruder } from '../types'
const random = Math.random()
const toStringType = Object.prototype.toString

/**
 * @description: TAG 生成文档的唯一标识符
 * @param {Number} index
 * @return { key } 唯一标识符
 */
export const TAG = (index?: Number | String): String =>
  `${index || 0}${random}${new Date().getTime()}`

/**
 * @description: 初始化识别码
 * @param {Array} dataSource 数据源
 * @return {Array} dataSource
 */
export const headingCode = (dataSource: Array<any>, param: CoreParam = {}): Array<any> => {
  return dataSource.map((item: any, i: Number) => {
    if (!item[KEY_NAME]) {
      item[KEY_NAME] = item[`${param.keyTarget}`] || item.id || item.key || TAG(i)
    } else {
      // ... 
    }
    return item
  })
}

/**
 * @description: 初始化识别码
 * @param {Intruder} source 数据源
 * @return {Array} dataSource
 */
export const headingCodeOne = (source: Intruder): Intruder => {
  const updateData = { ...source }
   if (!updateData[KEY_NAME]) {
    updateData[KEY_NAME] = source.id || source.key
   } else {
    //  ...
   }
  return updateData
}

/**
 * @description: 断言数据类型
 * @param {*} T
 * @return {*}
 */
export const assert = <T>(data?: T): AssertParam => {
  const type = toStringType.call(data)
  return {
    array: type === '[object Array]',
    none: !data
  }
}

/**
 * @description: Remove Key
 * @param {any} tag
 * @param {Array} dataSources
 * @return {*}
 */
 export const removeKey = (tag: any, dataSources: Array<Intruder>): Array<Intruder> => {
  return dataSources.map((item: Intruder) => {
    for (const key in item) {
      const hasOwnPropertyCall = key && Object.prototype && Object.prototype.hasOwnProperty && Object.prototype.hasOwnProperty.call
      if (hasOwnPropertyCall && Object.prototype.hasOwnProperty.call(item, key)) {
        try {
            const keys = Object.keys(item)
            keys.map(keysItem => {
              if (tag && tag.length > 0 && keysItem && tag.includes(keysItem)) {
                delete item[`${keysItem}`]
              } else {
                // ...
              }
            })
        } catch (error) {
          // ...
        }
      } else {
        //     // ...
      }
    }
    return item
  })
}