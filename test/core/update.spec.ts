/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 修改
 */
import Idmc from '../../src/index'
const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }
describe('Test Update => 0.0.1', () => {
  
  test('Update Data', () => {
    const idmc = new Idmc([ tom, jerry ])
    idmc.update(tom, { 
      name: 'Tom', 
      age: 20, 
      location: 'Earth', 
      status: true, id: 1 
    })
    expect(idmc.product).toEqual([
      { 
        name: 'Tom', 
        age: 20, 
        location: 'Earth', 
        status: true, id: 1 
      }, jerry
    ])
  })
  
})
