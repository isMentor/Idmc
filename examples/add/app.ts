/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */

import CreateTable from '../createElement/createTable'
import Idmc from '../../src/index'

const submit = document.getElementById('formSubmit')
const query = document.getElementById('formQuery')

const data = [
  { id: 4, name: '张三', age: 18, sex: 1, adder: '上海', status: false, open: false },
  { id: 123, name: '李四', age: 28, sex: 1, adder: '长沙', status: true, open: false},
  { id: 5, name: '如花', age: 18, sex: 0, adder: '四川', status: true, open: true},
  { id: 456, name: '王麻子', age: 18, sex: 1, adder: '四川', status: false, open: true},
  { id: 90, name: '二溜子', age: 18, sex: 1, adder: '湖北',status: false, open: false },
  { id: 190, name: '九头鸟', age: 58, sex: 1, adder: '黄岗',status: false, open: false },
  { id: 192, name: '四爷', age: 33, sex: 1, adder: '北京',status: false, open: false },
  { id: 1390, name: '乌芳', age: 21, sex: 0, adder: '咸阳',status: false, open: false },
]
const m = new Idmc(data)
const q = new Idmc(data)
renderTable(m, m.product)

// 提交
submit.onclick = function () {
  const data = getValue({
    name: null,
    age: null,
    sex0: null,
    sex: null,
    sex1: null,
    adder: null
  })
  m.saveOne(data)
  console.log(m.product)
  renderTable(m, m.product)
   
}

// 查询
query.onclick = () => {
  const data = getValue({
    name: null,
    age: null,
    sex0: null,
    sex: null,
    sex1: null,
    adder: null
  })
  q.find({...data})
  CreateTable({
    id: 'tBodyQuery',
    data: q.product
  })
}

function renderTable(m:any, product: any) {
  CreateTable({
    id: 'tBody',
    data: product
  }, {
    onClick: (index:any) => {
      m.remove(index)
      renderTable(m, m.product)
    }
  })
}

const getValue = (template: Object): Object => {
  let tem = { ...template }
  for (const key in template) {
    if (Object.prototype.hasOwnProperty.call(template, key)) {
  const element = template[key];
      if (['sex1', 'sex0'].includes(key)) {
        const obj = {
          sex1: document.forms[0]['sex1'] && document.forms[0]['sex1']['checked'],
          sex0: document.forms[0]['sex0'] && document.forms[0]['sex0']['checked']
        }
        tem['sex'] = obj.sex0 ? 0 : 1
      } else {
        const value = document.forms[0][key] && document.forms[0][key]['value']
        tem[key] = value
      }
    }
  }
  return tem
}