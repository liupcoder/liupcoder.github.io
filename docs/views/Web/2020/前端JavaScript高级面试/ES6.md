---
title: 前端JavaScript高级面试-ES6篇
date: 2020-05-11
categories:
 - 前端
tags: 
 - 面试
sidebar: auto
---

## ES6 模块化

:::tip
ES6 模块化如何使用, 开发环境如何打包
:::

### 模块化的基本语法

#### export 语法

```js
/** util1.js **/
export default {
    a: 1
}

/** util2.js **/
export function fn1() {
    alert('fn1');
}

export function fn2() {
    alert('fn2');
}
```

#### import 语法

```js
/** index.js **/
import util1 from './util1.js'
import { fn1, fn2 } from './util2.js'

console.log(util1);
fn1();
fn2();
```

### 开发环境配置

### 关于JS众多模块化标准

## Class 和构造函数

:::tip
Class 和普通构造函数有何区别
:::

## Promise

:::tip
Promise 的基本使用和原理
:::

## ES6 其他常用功能
