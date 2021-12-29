/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { DefaultKeyTarget, AssertParam, Intruder, Assignment, SaveFunc, CoreParam } from '../../src/types'
describe('Test Types File => 0.0.1', () => {
  
  test('Default Key Target', () => {
    const key: DefaultKeyTarget = '__key__'
    expect(key).toBeTruthy()

    const Assert: AssertParam = { array: true, none: true }
    expect(Assert).toBeTruthy()

    const intruder: Intruder = { id: 1 }
    expect(intruder).toBeTruthy()

    const assignment: Assignment = { sources: true }
    expect(assignment).toBeTruthy()

    const saveFunc: SaveFunc = function() { }
    expect(saveFunc).toBeTruthy()

    const coreParam: CoreParam = { key: '1' }
    expect(coreParam).toBeTruthy()

  })

})
