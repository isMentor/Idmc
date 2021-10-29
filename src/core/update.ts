/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Update
 */

export default <T>(sourcesData: Array<T>, target: any, data: any): Array<T> => {
  const dataSources = [ ...sourcesData ]
  const sources = dataSources.find((item: any) => item.__key__ === target.__key__)
  for (const key in sources) {
    if (Object.prototype.hasOwnProperty.call(sources, key)) {
      sources[key] = data[key]
    }
  }
  return dataSources
}
