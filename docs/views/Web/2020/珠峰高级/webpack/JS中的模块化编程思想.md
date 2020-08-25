---
title: "JS中的模块化编程思想"
date: 2020-08-25 10:00:00
categories:
  - 前端
tags:
  - 珠峰高级
  - 学习笔记
sidebar: auto
---

## 前端开发的模块化进化史


JavaScript本身是弱化命名空间概念的，只有全局作用域和函数的私有作用域（ES6中新增块作用域），而模块化开发，从某种意义上来说，是强化了命名空间的概念！

- 有利于代码分离、解耦以及复用
- 团队并行开发
- 避免命名冲突
- 相互引用，按需加载
- ……


模块化的发展史：

- 单例设计模式（Singleton Pattern）
- AMD （Asynchronous Module Definition 异步模块定义）
- CMD （Common Module Definition 通用模块定义）
- CommonJS（一般应用于服务器开发，例如：Node.js）
- ES6 Module （ESM : JS官方标准模块定义方式）
- ……

### 单例设计模式

```js
let xxxModule=(function(){
    function fn(){
        //...
    }
    return {
        init(){
            //...        
        }
    }
})();

xxxModule.init();
```

### AMD require.js
[https://requirejs.org](https://requirejs.org)  
![](http://picbed.04091020.xyz/20200825102159.png)  
**main.js**

```js
//全局配置
require.config({
    baseUrl: 'js/lib',
});
require(['moduleB', 'moduleA'], function (moduleB, moduleA) {
    console.log(moduleB.average(10, 20, 30, 40, 50));
});
```

**moduleA.js**
```js
define(function () {
    return {
        sum(...args) {
            return args.reduce((total, item) => {
                return total + item;
            });
        }
    };
});
```
**moduleB.js**
```js
define(['moduleA'], function (moudleA) {
    return {
        average(...args) {
            args.sort((a, b) => a - b);
            args.pop();
            args.shift();
            return moudleA.sum(...args) / args.length;
        }
    };
});
```

:::tip
AMD 思想特点: **依赖前置** 在定义一个新的模块之前, 需要把依赖的模块全部设定好
:::

### CMD sea.js
[http://seajs.org/](http://seajs.org/)  

```js
define(function(require, exports, module) {
  // 通过 require 引入依赖
  let $ = require('jquery');
  let spinning = require('./spinning');

  // 通过 module.exports 提供接口
  module.exports = {
      init(){}
  };
});
```

**CommonJs规范**
在 CommonJS 模块中，如果你 require 了一个模块，那就相当于你执行了该文件的代码并最终获取到模块输出的 module.exports 对象的一份拷贝，并且重复引入的模块并不会重复执行，再次获取模块只会获得之前获取到的模块的拷贝

- module.exports
- require

:::tip
CMD相对于AMD更灵活  
CMD参考CommonJS规范 可以运行在客户端
:::

### ES6 Module模块规范
[https://es6.ruanyifeng.com/#docs/module](https://es6.ruanyifeng.com/#docs/module)  

:::tip
ES6Module是JS新增的模块导入导出规范（不同于AMD和CMD[CommonJS]，它是静态编译的）  
- 动态编译：代码执行到具体位置的时候才会进行模块的导入导出 
- 静态编译：代码还没有执行，就按照依赖的关系把模块导入导出和编译好了  

模块的导入都要放到代码执行的最前面
浏览器不能直接识别，需要先进行编译才可以（webpack可以完成这个编译）
:::

**a.js** 

```js
export function sum(x, y) {
	return x + y;
}

export let n = 10;
```

**b.js**

```js
import {
	sum,
	n
} from './A.js';

// import * as A from './A';
// A.sum()
// A.n

import c from './C.js';

console.log(sum(10, 20));
console.log(c(10, 20));
```

**c.js**

```js
export default function average(x, y) {
	return x + y;
};
```

## NPM的操作指南

### 常规操作

```shell
$ npm install xxx
$ npm i xxx -g
$ npm i xxx@xx.xx
$ npm uninstall xxx / -g

$ npm root -g
$ npm view xxx versions > xxx.version.json
```

全局安装：  
1.所有项目都能使用  
2.一般可以基于命令来操作()  
3.容易导致版本冲突  
4.不能在项目中导入对应的模块  

本地安装:   
1.只能本地项目使用  
2.默认不支持命令操作（可以基于package.json或者npx[npm > 5.2]）  
3.不会导致版本冲突  
4.可以在本地代码中导入对应的模块  


### 优化速度

- nrm
- yarn
- cnpm
- ……

### 跑环境和依赖项

```shell
$ npm init -y
$ npm i xxx --save / --save-dev
$ npm i
$ npm i --production  
```
