/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Query / check
 */
import { resolveData, screenTarget } from '../../helpers/business'
export default (dataSources: Array<any>, target: Object) => {
  const disTarget = screenTarget(target)
  const resolve = resolveData(dataSources, disTarget)

  const sources = resolve.filter(<T>(item: T) => !!item)
  return sources
}

