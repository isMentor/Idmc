/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Main
 */
import Core from './core'
import { headingCode } from './helpers/util'
class Idmc extends Core {
  
  constructor(dataSource?: any) {
    
    // 初始化识别码
    headingCode(dataSource || [])

    super(dataSource)
  
  }

}
export default Idmc
