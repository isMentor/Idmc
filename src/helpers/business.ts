/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 业务处理
 */

/**
 * @description: 筛选 Target
 * @param {Object} target
 */
 export const screenTarget = <T>(target: T): T => {
  let targets: T = { ...target }
  for (const key in target) {
    if (key && Object.prototype && Object.prototype.hasOwnProperty && Object.prototype.hasOwnProperty.call && Object.prototype.hasOwnProperty.call(target, key)) {
      const value: any = target[key]
      const targetAssert = ['', null, undefined].includes(value)
       if (targetAssert) {
        delete targets[key]
       } else {
        //  ...
       }
    } else {
      // ...
    }
  }
  return targets
}

/**
 * @description: Data Resolve
 * @param {Array} dataSources
 */
export const resolveData = (dataSources: Array<any>, target: Object): Array<any> => {
  return dataSources.map((item: any) => {
    let map = new Map()
    const asserts: Array<Boolean> = assert(item, target)
    map.set(!asserts.includes(false), item)
    return map.get(true)
  })
}

/**
 * @description: 断言
 * @param {Array} item
 * @param {any} target
 * @return {*} 所有结果集合
 */
export const assert = (item: Array<any>, target: any): Array<Boolean> => {
  const targetKeys = Object.keys(target)
  let fact: Array<Boolean> = []
  targetKeys.map((name: any) => {
    try {
      const is = `${item[name]}` === `${target[name]}`
      if (is) {
        fact.push(true)
      } else {
        fact.push(false)
      }
    } catch (error) {
      // ...
    }
  })

  return fact
}
