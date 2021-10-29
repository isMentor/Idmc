/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
const random = Math.floor(Math.random() * 10000)
const toStringType = Object.prototype.toString

/**
 * @description: TAG 生成文档的唯一标识符
 * @param {Number} index
 * @return { key } 唯一标识符
 */
export const TAG = (index?: Number | String): String => `${index || 0}${random}${new Date().getTime()}`


/**
 * @description: 初始化识别码
 * @param {Array} dataSource 数据源
 * @return {Array} dataSource
 */
export const headingCode = (dataSource: Array<any>): Array<any> => {
  return dataSource.map((item, i) => {
    item.__key__ = item.id || item.key || TAG(i)
    return item
  })
} 
export const assert = (data?: any) => {
  if (!data) return false
  const type = toStringType.call(data)
  return {
    array: type === '[object Array]',
  }
}