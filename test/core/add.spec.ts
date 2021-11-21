import Idmc from '../../src/index'
import { TAG } from '../../src/helpers/util'
import { SaveFunc } from '../../src/types'
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 新增
 */

describe('Test Add 0.0.1 => ', () => {
  test('123', () => {
    // console.llg()
  })

  test('Save One Fn => ', () => {
    const idmc = new Idmc()
    idmc.saveOne({ id: 4, name: '张三', age: 18, sex: 1, adder: '上海' })
    expect(idmc.product).toEqual([{ id: 4, name: '张三', age: 18, sex: 1, adder: '上海' }])
  })

  test('Save One Fn On id => ', () => {
    const idmc = new Idmc()
    const data = { name: '张三', age: 18, sex: 1, adder: '上海', status: false, open: false }
    const product = [{ name: '张三', age: 18, sex: 1, adder: '上海', status: false, open: false }]
    idmc.saveOne(data)
    expect(idmc.product).toEqual(product)
  })

  test('Save Fn => ', () => {
    const data = [
      { id: 4, name: '张三', age: 18, sex: 1, adder: '上海', status: false, open: false }
    ]
    const add = [{ name: '李四', age: 18, sex: 1, adder: '北京', status: false, open: false }]
    const product = [
      ...data,
      {
        name: '李四',
        age: 18,
        sex: 1,
        adder: '北京',
        status: false,
        open: false
      }
    ]
    const idmc = new Idmc(data)
    idmc.save(add)
    expect(idmc.product).toEqual(product)
  })
})
