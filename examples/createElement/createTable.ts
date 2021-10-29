/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
function CreateTable(dataSources:any, param?:any) {
  const { onClick } = param || {}
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

      createTh(tr, data[i])
    }

}


function createTh(tr:any, data = {}) {
  for (const key in data) {
    let th = document.createElement('th')
    if (Object.prototype.hasOwnProperty.call(data, key)) {

      const element = data[key];
      if (!['id', '__key__', 'key'].includes(key)) {
        th.innerHTML = element
        tr.appendChild(th)
      }
    }
  }

}
export default CreateTable