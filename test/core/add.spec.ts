import Idmc from '../../src/index'
import { TAG } from '../../src/helpers/util'
import { SaveFunc } from '../../src/types'
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 新增
 */
const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }
const speike = { name: 'Speike', age: 18, location: 'Earth', status: false, id: 2 }
describe('测试添加数据 0.0.1 => ', () => {


  test('添加单条数据 ==================================== ', () => {
    const idmc = new Idmc()
    idmc.saveOne(tom)
    expect(idmc.product).toEqual([tom])
  })


  test('添加多条数据 ====================================  ', () => {
    const idmc = new Idmc([tom])
    idmc.save([jerry, speike])
    expect(idmc.product).toEqual([tom, jerry, speike])
  })

})
