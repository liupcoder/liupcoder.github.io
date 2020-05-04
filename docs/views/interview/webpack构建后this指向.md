---
title: webpack构建后this指向
author: 菊哥
date: 2020-05-04
---

## 问题

```javascript
 //同一段代码，webpack构建后和浏览器控制台打印出什么
let test = {
  name: 'test',
  say: () => {
    console.log(this.name, this)
  }
}
test.say()
```

## console

```javascript
//webpack下
undefined {}

//浏览器控制台下
undefined window{...}
```

## 解析
:::tip

2个环境下执行结果不同，因为webpack 代码构建->eval(),把最外层作用域指向一个空对象。

:::