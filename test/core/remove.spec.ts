/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 删除
 *
 *
 */

import Idmc from '../../src/index'

const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }
const speike = { name: 'Speike', age: 18, location: 'Earth', status: false, id: 3 }

describe('测试移除数据 0.0.1 => ', () => {
  test('Remove 多条 => ', () => {

    const idmc1 = new Idmc([tom, jerry, speike ])
    idmc1.remove([1, 2])
    expect(idmc1.product).toEqual([ speike ])
  })

  test('Remove 单条 => ', () => {

    const idmc2 = new Idmc([tom, jerry, speike ])
    idmc2.remove(3)

    expect(idmc2.product).toEqual([ tom, jerry ])

  })

  test('Remove 自定义 KEY => ', () => {
    const idmc3 = new Idmc([ tom, jerry, speike ])
    idmc3.remove('Tom', { key: 'name' })
    expect(idmc3.product).toStrictEqual([ jerry, speike ])
  })

  test('Remove 自定义 KEY => ', () => {
    const idmc3 = new Idmc([ tom, jerry, speike ])
    idmc3.remove(['Tom', 'Speike'], { key: 'name' })
    expect(idmc3.product).toStrictEqual([ jerry ])
  })

  test('Remove 自定义 KEY => ', () => {
    const idmc3 = new Idmc([ tom, jerry, speike ])
    idmc3.remove(['Tom', 'Speike', 'Jerry'], { key: 'name' })
    expect(idmc3.product).toStrictEqual([ ])
  })

})
