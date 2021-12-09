/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Query / check
 */

export default (dataSources: Array<any>, target: Object) => {
  const disTarget = screenTarget(target)
  const resolve = resolveData(dataSources, disTarget)

  const sources = resolve.filter(<T>(item: T) => !!item)
  return sources
}

/**
 * @description: 筛选 Target
 * @param {Object} target
 */
const screenTarget = <T>(target: T): T => {
  let targets: T = { ...target }
  for (const key in target) {
    const hasOwnProperty = Object.prototype.hasOwnProperty.call(target, key)
    if (hasOwnProperty) {
      const value: any = target[key]
      const targetAssert = ['', null, undefined].includes(value)
      targetAssert && delete targets[key]
    } else {
      return targets
    }
  }
  return targets
}

/**
 * @description: Data Resolve
 * @param {Array} dataSources
 */
const resolveData = (dataSources: Array<any>, target: Object): Array<any> => {
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
const assert = (item: Array<any>, target: any): Array<Boolean> => {
  const targetKeys = Object.keys(target)
  let fact: Array<Boolean> = []
  targetKeys.map((name: any) => {
    const is = `${item[name]}` === `${target[name]}`
    fact.push(is)
  })

  return fact
}
