import { save, remove, query, update } from '../../src/core/bll'
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Global
 */

describe('Test Add 0.0.1 => ', () => {
  test('Default param', () => {
    expect(save([], {})).toBeTruthy()
    expect(remove(1, [])).toBeTruthy()
    expect(update([], { id: 1 }, {})).toBeTruthy()
    expect(query([], { id: 1 })).toBeTruthy()
  })
})
