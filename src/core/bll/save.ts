/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Base
 */
import { KEY_NAME } from '../../global/default'
import { TAG } from '../../helpers/util'
import { Intruder,CoreParam } from '../../types'
export default (data: Array<Intruder>, parameters: CoreParam): Array<Intruder> => {
  // Default Key
  const keyTarget: String = parameters.keyTarget || KEY_NAME

  // 给新对象赋一个 key
  const dataTag: Array<Intruder> = data.map((item: Intruder, i: Number) => {
    item[`${keyTarget}`] = TAG(i)
    return item
  })

  return dataTag
}
