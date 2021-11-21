/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Delete
 */

import { KEY_NAME } from '../../global/default'
import { Intruder, Assignment, AssertParam, CoreParam } from '../../types'
import { TAG, assert, headingCodeOne } from '../../helpers/util'
export default (key: any, dataSources: Array<Intruder>): Array<Intruder> => {
  const ass: Boolean | AssertParam = assert(key)

  const tag: any = ass && ass.array ? [...key] : [key]

  const data = dataSources.filter((item: Intruder) => !tag.includes(item[`${KEY_NAME}`]))

  return data
}
