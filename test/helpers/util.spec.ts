/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { TAG, headingCode, assert } from '../../src/helpers/util'

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
})
