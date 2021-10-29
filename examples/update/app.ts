/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */

import CreateTable from '../createElement/createTable'
import UpdateTable from '../createElement/updateTable'
import Idmc from '../../src/index'

const submit = document.getElementById('formSubmit')
const query = document.getElementById('formQuery')

const data = [
  { name: '张三', age: 18, sex: 1, adder: '上海' },
  { name: '李四', age: 28, sex: 1, adder: '长沙' },
  { name: '如花', age: 18, sex: 0, adder: '四川' },
  { name: '王麻子', age: 18, sex: 1, adder: '四川' },
  { name: '二溜子', age: 18, sex: 1, adder: '湖北' },
  { name: '九头鸟', age: 58, sex: 1, adder: '黄岗' },
  { name: '四爷', age: 33, sex: 1, adder: '北京' },
  { name: '乌芳', age: 21, sex: 0, adder: '咸阳' },
]
const m = new Idmc(data)

UpdateTable({ 
  id: 'tBody', data: m.product,
}, {
  onInput: (oldData:any, newData:any) => {
    m.update(oldData, newData)
    CreateTable({ id: 'tBodyQuery', data: m.product })
  }
})

CreateTable({ id: 'tBodyQuery', data: m.product })


