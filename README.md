<!--
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
### IDMC
[![npm version](https://img.shields.io/npm/v/idmc.svg?style=flat-square)](https://www.npmjs.org/package/idmc)
## 指引

  - [Example](#Example)
## Installing

Using npm:

```bash
$ npm install idmc
```


Using yarn:

```bash
$ yarn add idmc
```

## 例子

```js

// 使用前先实例化
const idmc = new Idmc()

// 修改后的数据
idmc.product // []

// 添加单条数据
idmc.saveOne({})

// 添加多条数据
idmc.save([])

```

添加单条数据 `saveOne`

```js

const idmc = new Idmc()

// 保存的数据存储在实例对象中，通过 idmc.product 获取
idmc.saveOne({ name: 'Tom', age: 18, location: 'Earth', status: true })

console.log(idmc.product)
// { name: 'Tom', age: 18, location: 'Earth', status: true }

```

添加多条数据 `save`

```js

idmc.save([
  { name: 'Tom', age: 18, location: 'Earth', status: true },
  { name: 'Jerry', age: 16, location: 'Mars', status: true }
])

console.log(idmc.product)
// [ { name: 'Tom', age: 18, location: 'Earth', status: true }, { name: 'Jerry', age: 16, location: 'Mars', status: true } ]

```

删除数据 `remove`

```js

// 调用Remove方法，源数据默认 id and key
const data = [
  { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 },
  { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }
]

/**
*  @param data 源数据
* 
* */
const idmc = new Idmc(data)

//  删除单条方法，默认以 id 或 key 作为目标
idmc.remove(2)

console.log(idmc.product)
// [ { name: 'Tom', age: 18, location: 'Earth', status: true }]

//  删除多条方法
idmc.remove([1, 2])

console.log(idmc.product)
// [ ]

// 自定义目标 key
/**
*  @param data 源数据
*  @param { }  {} 参数设置
*  @param { keyTarget } keyTarget 自定义 KEY
* 
* */
const idmc = new Idmc(data, { keyTarget: 'name' })

idmc.remove('Tom') 

console.log(idmc.product)
// [ { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 } ]

idmc.remove(['Tom', 'Jerry']) 

console.log(idmc.product)
// [ ]

```


 修改数据 `update`

```js
const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }

/**
*  @param data 源数据
* 
* */
const idmc = new Idmc([ tom, jerry ])

// 调用update方法，源数据默认 id and key 作为唯一标识符
idmc.update(tom，{ 
  name: 'Tom', 
  age: 20, 
  location: 'Earth', 
  status: true, id: 1 
})

console.log(idmc.product)
// [ { name: 'Tom', age: 20, location: 'Earth', status: true, id: 1 } ]

```

查询单条数据 `findOne`

```js
const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }

/**
*  @param data 源数据
* 
* */
const idmc = new Idmc([ tom, jerry ])

idmc.findOne({ name: 'Tom', age: 18 })

console.log(idmc.product)
// [ tom ]

```

查询多条数据 `findOne`

```js
const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }
const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }
const speike = { name: 'Speike', age: 18, location: 'Earth', status: false, id: 2 }

/**
*  @param data 源数据
* 
* */
const idmc = new Idmc([ tom, jerry, speike ])

idmc.find({ age: 18, location: 'Earth' })

console.log(idmc.product)
// [ tom, speike ]

//  查询所有
idmc.find({})

console.log(idmc.product)
//  [ tom, jerry, speike ]

```