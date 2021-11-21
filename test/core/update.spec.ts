/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 修改
 */
import Idmc from '../../src/index'
import { TAG } from '../../src/helpers/util'
describe('Test Update => 0.0.1', () => {
  test('Update Data', () => {
    const data = [
      { name: '张三', age: 18, sex: 1, adder: '上海', id: 1 },
      { name: '李四', age: 28, sex: 1, adder: '长沙', id: 11 },
      { name: '乌芳', age: 21, sex: 0, adder: '咸阳', id: 3 }
    ]
    const todata = [
      { name: '张三三', age: 18, sex: 1, adder: '上海', id: 1 },
      { name: '李四', age: 28, sex: 1, adder: '长沙', id: 11 },
      { name: '乌芳', age: 21, sex: 0, adder: '咸阳', id: 3 }
    ]
    const updateData = { name: '张三三', age: 18, sex: 1, id: 1, adder: '上海' }
    const idmc = new Idmc(data)
    idmc.update(data[0], updateData)
    expect(idmc.product).toEqual(todata)
  })
})
