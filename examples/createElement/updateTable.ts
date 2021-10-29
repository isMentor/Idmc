/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
function UpdateTable(dataSources:any, param?:any) {
  const { onClick, onInput } = param || {}
  let { id, data = [] } = dataSources

  const el = document.getElementById(id)

  while(el.hasChildNodes()) //当div下还存在子节点时 循环继续

  {
    el.removeChild(el.firstChild);

  }


    for (let i = 0; i < data.length; i++) {

      let tr = document.createElement('tr')
      tr.addEventListener('click', (ev) => {
          onClick && onClick([data[0].__key__, data[1].__key__])
      })
      el.appendChild(tr)

      createTh(tr, data[i], (n: any, d:any) => {
        onInput && onInput(n, d)
      })
    }

}


function createTh(tr:any, data = {}, onInput:any) {
  for (const key in data) {
    let th = document.createElement('th')
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key];
      if (!['id', '__key__', 'key'].includes(key)) {
        if (element == '1' || element == '0' ) {
          if ([1, '1', '0', 0].includes(element)) {
            th.innerHTML = element == '1' ? '男' : '女'
          } else {
            th.innerHTML = element
          }
        } else {
          th.appendChild(createInput(element, data, key, (n:any, b:any) => {
            onInput && onInput(n, b)
          }))
        }
        tr.appendChild(th)
      }
    }
  }

}

function createInput(vlaue:any, data:any, key:any, onInput:any) {
  let input = document.createElement('input')
  input.value = vlaue
  input.addEventListener('input', (ev:any) => {
    const n = {}
    n[key] = ev.target.value
    onInput && onInput(data, { ...data, ...n})
  })
  return input
}
export default UpdateTable