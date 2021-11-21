/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 删除
 *
 *
 */

import Idmc from '../../src/index'
import { TAG, assert } from '../../src/helpers/util'
describe('Test Remove 0.0.1 => ', () => {
  test('Remove Array => ', () => {
    const array = [
      { id: 1, name: '李四', age: 18 },
      { id: 2, name: '张三', age: 28 },
      { id: 3, name: '王麻', age: 38 },
      { id: 4, name: '刘二狗', age: 48 }
    ]
    const idmc1 = new Idmc(array)
    idmc1.remove([1, 2])
    expect(idmc1.product).toEqual([
      { id: 3, name: '王麻', age: 38 },
      { id: 4, name: '刘二狗', age: 48 }
    ])
  })

  test('Remove One => ', () => {
    const array = [
      { id: 1, name: '李四', age: 18 },
      { id: 2, name: '张三', age: 28 },
      { id: 3, name: '王麻', age: 38 },
      { id: 4, name: '刘二狗', age: 48 }
    ]
    const idmc2 = new Idmc(array)
    idmc2.remove(4)
    expect(idmc2.product).toEqual([
      { id: 1, name: '李四', age: 18 },
      { id: 2, name: '张三', age: 28 },
      { id: 3, name: '王麻', age: 38 }
    ])
  })

  test('Remove 自定义 KEY => ', () => {
    const array = [
      { a: 1, name: '李四', age: 18 },
      { a: 2, name: '张三', age: 28 },
      { a: 3, name: '王麻', age: 38 },
      { a: 4, name: '刘二狗', age: 48 }
    ]
    const idmc3 = new Idmc(array, { keyTarget: 'age' })
    idmc3.remove(18)
    expect(idmc3.product).toStrictEqual([
      { a: 2, age: 28, name: '张三' },
      { a: 3, age: 38, name: '王麻' },
      { a: 4, age: 48, name: '刘二狗' }
    ])
  })
})
