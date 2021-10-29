/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 核心入口文件
 */
import { TAG, assert } from '../helpers/util'
import query from './query'
import update from './update'

interface Assignment {
  sources?: Boolean
}

class Core {

  private dataSources:any
  public product: any

  constructor(parameters: Array<any>) {

    const data = parameters || []
    this.dataSources = data
    this.product = data

  }

  public save() {
    return this.dataSources
  }

  /**
   * @description: Add one data
   * @param {Object} data 添加的数据
   */  
  public saveOne(data: Object, param: Object = {}): void {
    
    let newData: Array<Object> = [ ...this.dataSources ]
    newData.push({...data, __key__: TAG()})
    this.assignment(newData)
  }

  /**
   * @description: 删除数据
   * @param {any} key
   */  
  public remove(key: any): void {
    const dataSources = [ ...this.dataSources ]
    const ass = assert(key)
    const tag = ass && ass.array ? [ ...key ] : [ key ]
    
    const data = dataSources.filter(item => !tag.includes(item.__key__))
    this.assignment(data)
  }

  /**
   * @description: 
   * @param {any} target
   * @param {any} data
   * @return {*}
   */  
  public update(target: any, data: any): void {
    
    const dataSources: Array<any> = update(this.dataSources, target, data)
    this.assignment(dataSources)
  }

  /**
   * @description: 查询
   * @param {any} data
   */  
  public find(data: any) {

    const sources = query(this.dataSources, data)
    this.assignment(sources, { sources: false })

  }

  /**
   * @description: 查询多个
   * @param {Object} data
   * @param {Number} index
   */  
  public findOne(data: Object, index: Number = 0): void {

    const sources = query(this.dataSources, data)
    const oneSources = sources.filter(<T>(item: T, i: Number) => i === index )
    this.assignment(oneSources, { sources: false })

  }

  /**
   * @description: 私有方法
   * @param {Array} data
   */  
  private assignment<T>(data: T, config?: Assignment) {
    const { sources } = config || {}
    if (sources) this.dataSources = data
    this.product = data
  }

}


export default Core