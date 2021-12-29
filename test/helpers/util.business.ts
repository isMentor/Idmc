/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { resolveData, screenTarget, assert } from '../../src/helpers/business'

const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }
const speike = { name: 'Speike', age: 18, location: 'Earth', status: false, id: 3 }
describe('测试基础业务逻辑 => 0.0.1', () => {

  test('测试 ScreenTarget', () => {
    const screenTa = screenTarget({ name: 'Tom', age: 18})
    expect(screenTa).toEqual({ name: 'Tom', age: 18})
  })

  test('测试 ResolveData', () => {
    const screenTa = screenTarget({ name: 'Tom', age: 18})
    const resolveDa = resolveData([tom, jerry], screenTa)
    expect(resolveDa).toEqual([tom, jerry])
  })

  test('测试 Assert', () => {
    const asserts = assert([tom], tom)
    expect(asserts).toEqual([true, true, true, true, true])
  })

})
