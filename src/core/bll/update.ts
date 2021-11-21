/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Update
 */
import { Intruder } from '../../types'
export default (
  sourcesData: Array<Intruder>,
  target: Intruder,
  data: Intruder
): Array<Intruder> => {
  const dataSources = [...sourcesData]

  const sources = dataSources.find((item: any) => item.__key__ === target.__key__)

  for (const key in sources) {
    if (Object.prototype.hasOwnProperty.call(sources, key)) {
      key && (sources[key] = data[key])
    }
  }

  return dataSources
}
