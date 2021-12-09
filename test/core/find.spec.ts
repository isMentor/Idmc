/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 测试查找
 */
import Idmc from '../../src/index'
describe('Test Find => 0.0.1', () => {
  const data = [
    { name: '张三', age: 18, sex: 1, adder: '上海' },
    { name: '李四', age: 28, sex: 1, adder: '长沙' },
    { name: '如花', age: 18, sex: 0, adder: '四川' },
    { name: '王麻子', age: 18, sex: 1, adder: '四川' },
    { name: '二溜子', age: 18, sex: 1, adder: '湖北' },
    { name: '九头鸟', age: 58, sex: 1, adder: '黄岗' },
    { name: '四爷', age: 33, sex: 1, adder: '北京' },
    { name: '乌芳', age: 21, sex: 0, adder: '咸阳' }
  ]
  const data2 = [
    { name: '张三', age: null, sex: 1, adder: '上海' },
    { name: '李四', age: 28, sex: 1, adder: '长沙' },
    { name: '如花', age: 18, sex: 0, adder: '四川' },
    { name: '王麻子', age: 18, sex: 1, adder: '四川' },
    { name: '二溜子', age: null, sex: 1, adder: '湖北' },
    { name: '九头鸟', age: 58, sex: 1, adder: '黄岗' },
    { name: '四爷', age: 33, sex: null, adder: '北京' },
    { name: '乌芳', age: 21, sex: 0 }
  ]
  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({ name: '张三', age: null })
    expect(idmc.product).toEqual([data[0]])
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data2)
    idmc.find({ name: '张三' })
    expect(idmc.product).toEqual([data2[0]])
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({})
    expect(idmc.product).toEqual(data)
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({})
    expect(idmc.product).toEqual(data)
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({})
    expect(idmc.product).toEqual(data)
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({ sex: 1, age: 18 })
    expect(idmc.product).toEqual([data[0], data[3], data[4]])
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({ sex: 0, name: '如花' })
    expect(idmc.product).toEqual([data[2]])
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({ sex: 0, name: '如花三' })
    expect(idmc.product).toEqual([])
  })

  test('Query 多条 => ', () => {
    const idmc = new Idmc(data)
    idmc.find({ a: '如花三' })
    expect(idmc.product).toEqual([])
  })

  test('Query 单条 => ', () => {
    const idmc = new Idmc(data)
    idmc.findOne({ age: 18 })
    expect(idmc.product).toEqual([data[0]])
  })

  test('Query 单条 => ', () => {
    const idmc = new Idmc(data)
    idmc.findOne({ age: 18 }, 1)
    expect(idmc.product).toEqual([data[2]])
  })

  test('Query 单条 => ', () => {
    const idmc = new Idmc(data)
    idmc.findOne({ age: 18 }, 2)
    expect(idmc.product).toEqual([data[3]])
  })

  test('Query 单条 => ', () => {
    const idmc = new Idmc(data)
    idmc.findOne({ age: 18 }, 4)
    expect(idmc.product).toEqual(undefined)
  })
})
