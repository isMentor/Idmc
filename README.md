### IDMC
[![npm version](https://img.shields.io/npm/v/idmc.svg?style=flat-square)](https://www.npmjs.org/package/idmc)

## IDMC 
### Increase Delete Modify Check - 增删改查

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
## 支持语法

`Javascript` `TypeScript`
## Example

```js

// 使用前先实例化
const idmc = new Idmc()


// 修改后的数据
idmc.product

// 添加单条数据
idmc.saveOne()

// 添加多条数据
idmc.save()

// 添加多条数据
idmc.save()

// 删除数据
idmc.remove()

// 修改数据
idmc.update()

// 查询多个数据
idmc.find()

// 查询单个数据
idmc.findOne()


```

示例数据
```js

const tom = { name: 'Tom', age: 18, location: 'Earth', status: true, id: 1 }

const jerry = { name: 'Jerry', age: 16, location: 'Mars', status: true, id: 2 }

const speike = { name: 'Speike', age: 18, location: 'Earth', status: false, id: 3 }


```

添加单条数据 `saveOne( target: {}, param?: Object )`

```js

const idmc = new Idmc([ tom ])

// 保存数据 -- 默认最前面
idmc.saveOne(jerry)

// [ jerry, tom ]
idmc.product 


const idmc = new Idmc([ tom ])
// 保存数据至后面
idmc.saveOne(jerry, { index: 1 } )

// [ tom, jerry ]
idmc.product 

```

添加多条数据 `save(target: Array<Object>)`

```js

const idmc = new Idmc()

idmc.save([ tom, jerry ])

// [ tom, jerry ]
idmc.product 


```

删除单条数据 `remove(target: String | Number )` 默认以 id 或 key 作为目标

```js

const idmc = new Idmc([ tom, jerry ])

idmc.remove(2)

// [ tom ]
idmc.product


```

删除多条数据 `remove([ target: String | Number, target: String | Number ])` 默认以 id 或 key 作为目标
```js

const idmc = new Idmc([ tom, jerry ])

//  删除多条方法
idmc.remove([1, 2])

// [ ]
idmc.product



```
自定义 key 删除数据`remove(target: String || [ target: String ], { key: 'target' })`
```js

/**
 *  @Description 单个删除
 *  @param { target }  删除的目标
 *  @param { key } key 自定义 KEY
 * 
 * */
 
const idmc = new Idmc([ tom, jerry ])
idmc.remove('Tom', { key: 'name' }) 

// [ jerry ]
idmc.product


/**
 *  @Description 多个删除
 *  @param { [ target, target ] }  删除的目标
 *  @param { key } key 自定义 KEY
 * 
 * */
 
idmc.remove(['Tom', 'Jerry'], { key: 'name' }) 

// [ ]
idmc.product



```
仅删除 KEY `remove(target: String | Number || [ target: String | Number ], { type: 'key' })`

```js
/**
 *  @Description 单个删除
 *  @param { target }  删除的目标
 *  @param { type } type 自定义 KEY
 * 
 * */
 
const idmc = new Idmc([ tom, jerry ])

idmc.remove('name', { type: 'key' })

// [ { age: 18, location: 'Earth', status: true, id: 1 }, {  age: 16, location: 'Mars', status: true, id: 2 } ]
idmc.product



/**
 *  @Description 多个删除
 *  @param { [ target, target ] }  删除的目标
 *  @param { key } key 自定义 KEY
 * 
 * */

const idmc = new Idmc([ tom, jerry ])
idmc.remove(['name', 'age' ], { type: 'key' })

// [ { location: 'Earth', status: true, id: 1 }, { location: 'Mars', status: true, id: 2 } ]
idmc.product



```

 修改数据 `update(target: Object, data: Object)`

```js

const idmc = new Idmc([ tom, jerry ])

// 调用update方法，源数据默认 id and key 作为唯一标识符
idmc.update(tom，{ 
  name: 'Tom', 
  age: 20, 
  location: 'Earth', 
  status: true, id: 1 
})

// [ { name: 'Tom', age: 20, location: 'Earth', status: true, id: 1 }, jerry ]
idmc.product


```

查询单条数据 `findOne(target: Object)`

```js

const idmc = new Idmc([ tom, jerry ])

idmc.findOne({ name: 'Tom', age: 18 })

// [ tom ]
idmc.product


```

查询多条数据 `findOne(target: Object)`

```js

const idmc = new Idmc([ tom, jerry, speike ])

idmc.find({ age: 18, location: 'Earth' })

// [ tom, speike ]
idmc.product


//  查询所有
idmc.find({})

//  [ tom, jerry, speike ]
idmc.product


```