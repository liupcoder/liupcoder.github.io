---
title: "webpack笔记"
date: 2020-08-25 13:00:00
categories:
  - 前端
tags:
  - 珠峰高级
  - 学习笔记
sidebar: auto
---

## webpack的基础操作
### 安装

```shell
// 为防止全局安装webpack导致版本冲突，真实项目中以本地安装为主 
$ npm init -y
$ npm install webpack webpack-cli --save-dev
OR
$ yarn init -y
$ yarn add webpack webpack-cli -D
```

### 零配置使用

webpack默认会把当前项目src目录下的文件进行打包编译（默认编译的文件名是index.js），编译到dist文件目录下（合并打包后的文件名是main.js）（webpack编译代码的过程中支持CommonJS规范和ES6Module规范）  
|- src  
&nbsp;&nbsp;&nbsp;&nbsp;当前项目开发的原代码  
|- dist  
&nbsp;&nbsp;&nbsp;&nbsp;编译后的文件（未来部署到服务器上的）  

```shell
/*
 * 默认会打包SRC目录中的JS文件（入口默认index.js）
 * 打包完成的目录默认是DIST/MAIN.JS
 * webpack默认支持CommonJS和ES6 Module的模块规范，依此进行依赖打包
 */
$ npx webpack
```

### 自定义基础配置

> webpack.config.js OR webpackfile.js


编写自定义的webpack配置项，以后webpack打包编译的时候是按照自己配置的内容进行打包编译处理的（这个文件放置在项目的根目录下）  
文件名：webpack.config.js / webpackfile.js  
1. webpack本身是基于Node开发的，所以配置项的模块处理规则参考CommonJS规范来完成  

```js
const path = require('path');
module.exports = {
  // 设置编译模式 development/production
  mode: 'production',
  // 设置编译的入口文件（真实项目中一般开发的代码都要放置到SRC下）
  entry: './src/main.js',
  // 设置编译的出口文件 
  output: {
    // 编译后的文件名
    filename: 'bundle.[hash].min.js',
    // 输出的目录(绝对路径)
    path: path.resolve(__dirname, 'build')
  }
}
```

 ### 自定义配置文件名

 可在package.json中配置可执行的脚本命令（区分开发环境）

 ```js
 "scripts": {
    "serve": "webpack --config webpack.config.development.js",
    "build": "webpack --config webpack.config.production.js"
},
```