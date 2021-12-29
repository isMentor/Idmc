/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Main
 */
import Core from './core'
import { Intruder, CoreParam } from './types'
import { headingCode } from './helpers/util'
class Idmc extends Core {
  constructor(dataSource: Array<Intruder> = [], param: CoreParam = {}) {
    // 初始化识别码
    headingCode(dataSource, param)

    super(dataSource, param)
  }
}
export default Idmc
