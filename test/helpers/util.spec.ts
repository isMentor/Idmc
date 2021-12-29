/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { TAG, headingCode, assert, headingCodeOne, removeKey } from '../../src/helpers/util'

const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }
const speike = { name: 'Speike', age: 18, location: 'Earth', status: false, id: 3 }
describe('Test Util File => 0.0.1', () => {
  test('Test is for true', () => {
    // 测试是否有值
    expect(TAG()).toBeTruthy()
  })

  test('测试虚拟ID是否唯一', () => {
    expect(TAG(1)).not.toBe(TAG(2))
  })

  test('初始化识别码 ID ', () => {
    expect(headingCode([])).toBeTruthy()
  })

  test('初始化识别码 ID ', () => {
    expect(headingCodeOne({})).toBeTruthy()
  })

  describe('断言数据类型 =>', () => {
    test('Array type => ', () => {
      const arr = assert([])
      expect(arr).toEqual({ array: true, none: false })
    })

    test('Null type => ', () => {
      const arr = assert()
      expect(arr).toEqual({ array: false, none: true })
    })
    
  })

  test('Remove Key => ', () => {
    const arr = removeKey('name', [tom, jerry])
    expect(arr).toEqual([
      { age: 18, location: 'Earth', status: true, id: 1 },
      { age: 16, location: 'Mars', status: true, id: 2 }
    ])
  })


  test('Remove Key => ', () => {
    const arr = removeKey('', [tom])
    expect(arr).toEqual([tom])
  })

})
