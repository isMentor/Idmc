/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Delete
 */

import { KEY_NAME } from '../../global/default'
import { Intruder, AssertParam, CoreParam } from '../../types'
import { assert, removeKey } from '../../helpers/util'
export default (key: any, dataSources: Array<Intruder>, param: CoreParam = {}): Array<Intruder> => {
  const ass: Boolean | AssertParam = assert(key)
  const tag: any = ass && ass.array ? [...key] : [key]
  const KEY = param.key || KEY_NAME
  let data: Array<Intruder> = [ ...dataSources ]
  if (param.type === 'key') {
    data = removeKey(tag, dataSources)
  } else {
    data = dataSources.filter((item: Intruder) => !tag.includes(item[`${KEY}`]))
  }

  return data
}



