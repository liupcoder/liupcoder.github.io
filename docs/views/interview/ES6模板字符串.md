---
title: ES6模板字符串
date: 2020-05-07
---

:::tip
ES6模板字符串使用
:::

## 问题

```js
let str1='我说123，木头人'+
'再不心动就要被扣分';

let str2=`我说123，木头人
再不心动就要被扣分`;

console.log(str1==str2)
```

```js
function Price (strings, v1, v2) {
  let s1 = strings[0]
  const retailPrice = 20
  const wholeSalePrice = 16
  let returnTxt
  if (v1 === 'retail') {
    returnTxt = '购买单价是' + retailPrice
  } else {
    returnTxt = '购买批发价是' + wholeSalePrice
  }
 
  return `${s1}${returnTxt}${v2}`
}

let showTxt = Price`您此次的${'retail'}， ${'ohoh'}`
console.log(showTxt)
```

## console

```
false
```
```
您此次的购买单价是20ohoh
```

## 解析

[MDN 模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)
