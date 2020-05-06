---
title: Object.assign()
date: 2020-05-06
---

:::tip 
对象的复制
:::

## 问题
```js
const target = {}
const source = { a: 1, b: 2, c: { x: 11, y: 22 } }
Object.assign(target, source)
console.log('target', target)

source.d = 3
console.log('source', source)
console.log('target', target)

source.a = 9
target.b = 8
Object.assign(target, source)
console.log('source', source)
console.log('target', target)

source.c = { x: 33, z: 44 }
Object.assign(target, source)
console.log('source', source)
console.log('target', target)
```

## console

```js
target {a: 1, b: 2, c: {x: 11, y: 22}}
```

```js
source {a: 1, b: 2, c: {x: 11, y: 22}, d: 3}
target {a: 1, b: 2, c: {x: 11, y: 22}}
```

```js
source {a: 9, b: 2, c: {x: 11, y: 22}, d: 3}
target {a: 9, b: 2, c: {x: 11, y: 22}, d: 3}
```

```js
source {a: 9, b: 2, c: {x: 33, y: 44}, d: 3}
target {a: 9, b: 2, c: {x: 33, y: 44}, d: 3}
```

## 解析

[MDN Object.assign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

:::tip
Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
:::
:::tip
针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。
:::
:::warning
继承属性和不可枚举属性是不能拷贝的
:::