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
  if (!updateData[KEY_NAME]) updateData[KEY_NAME] = source.id || source.key
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
