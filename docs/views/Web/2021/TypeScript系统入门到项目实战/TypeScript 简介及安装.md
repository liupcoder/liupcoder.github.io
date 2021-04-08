---
title: TypeScript 简介及安装
date: 2021-04-07
categories:
  - 前端
tags:
  - TypeScript
  - 学习笔记
sidebar: auto
---

## TypeScript

### 简介

[TypeScript 中文文档](https://www.tslang.cn/)

:::tip
JavaScript 的超集。  
TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。  
TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。  
:::

1. 超集
2. 静态类型
3. 需要编译

### 优势

```js
function demo(data) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
demo();
```

```ts
interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsDemo();
tsDemo({ x: 1, y: 123 });
```

### 运行环境

#### node

```shell
npm install typescript -g
```

```shell
tsc -v
```

#### 编译

```shell
tsc demo.ts
```

```shell
npm install -g ts-node
```

```shell
ts-node demo.ts
```
