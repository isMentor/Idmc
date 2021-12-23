/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 核心入口文件
 */
import { TAG, assert, headingCodeOne } from '../helpers/util'
import { KEY_NAME } from '../global/default'
import { Intruder, Assignment, AssertParam, CoreParam } from '../types'
import { save, remove, update, query } from './bll'

class Core {
  // Data Source
  private dataSources: Array<Intruder>

  // Parameter Setting
  readonly parameters: CoreParam

  // Key Target
  readonly keyTarget: String

  // Product
  public product: Array<Intruder> | Intruder

  constructor(source: Array<Intruder>, param: CoreParam) {
    const data: Array<Intruder> = source || []

    this.dataSources = data

    this.parameters = param

    this.keyTarget = param.keyTarget || KEY_NAME

    this.product = data
  }

  /**
   * @description: Add multiple
   * @param {Array} data 添加的数据
   * @return {*}
   */

  public save(data: Array<Intruder>) {
    let product: Array<Intruder> = [...this.dataSources, ...save(data, this.parameters)]

    this.assignment(product)
  }

  /**
   * @description: Add one data
   * @param {Object} data 添加的数据
   */

  public saveOne(data: Intruder): void {
    let product: Array<Intruder> = [...this.dataSources, ...save([data], this.parameters)]

    this.assignment(product)
  }

  /**
   * @description: 删除数据
   * @param {any} key
   */

  public remove(key: any, param?: CoreParam): void {
    const data = remove(key, this.dataSources, param)

    this.assignment(data)
  }

  /**
   * @description:
   * @param {any} target
   * @param {any} data
   * @return {*}
   */

  public update<T>(target: T, data: T): void {
    const dataSources: Array<any> = update(
      this.dataSources,
      headingCodeOne(target),
      headingCodeOne(data)
    )
    this.assignment(dataSources)
  }

  /**
   * @description: 查询多个
   * @param {any} data 查询的对象
   */

  public find(data: any): void {
    const sources = query(this.dataSources, data)
    this.assignment(sources, { sources: false })
  }

  /**
   * @description: 查询单个
   * @param {Object} data 查询的对象
   * @param {Number} index
   */

  public findOne(data: Object, index: Number = 0): void {
    const sources: Array<Intruder> = query(this.dataSources, data)
    this.assignment(sources[`${index}`], { sources: false })
  }

  /**
   * @description: 私有方法
   * @param {Array} data
   */

  private assignment(data: Array<Intruder>, config?: Assignment) {
    const { sources } = config || {}
    if (sources) this.dataSources = data
    this.product = data && this.clearKey(data)
  }

  /**
   * @description: 清除 __key__
   * @param {Array} data
   * @return {*}
   */

  private clearKey(data: Array<Intruder> | Intruder): Array<Intruder> | Intruder {
    const ass: Boolean | AssertParam = assert(data)
    const conversionData = ass.array ? data : [data]

    return conversionData.map((item: Intruder) => {
      item[KEY_NAME] && delete item[KEY_NAME]
      return item
    })
  }
}

export default Core
