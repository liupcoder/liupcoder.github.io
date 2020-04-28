---
title: IDEA前端配置
date: 2019-11-12
tags:
 - IDEA
categories:
 - 前端
sidebar: auto
---

:::tip
**IDEA 中前端优化 （ES6 to ES5 js压缩混淆 css预编译 css 压缩）**
:::

ES6 to ES5，js压缩混淆是基于node环境进行，在进行操作前需先安装node环境。这里不做详细介绍。

[菜鸟教程Node.js 安装配置](https://www.runoob.com/nodejs/nodejs-install-setup.html)

对没有node环境的项目进行初始化：
```
npm init
```
有node环境的项目直接安装：
```
npm install
```
在IDEA中安装 **File Watchers** 插件

![设置](http://picbed.04091020.xyz/20200425175443.jpg)
## ES6 to ES5 
> 安装Babel7

```
npm install @babel/core
```
```
npm install @babel/preset-env
```
```
npm install @babel/cli
```
> 设置语言为ES6

![](http://picbed.04091020.xyz/20200425182246.jpg)

> 在 File Watchers 中设置 Babel

![](http://picbed.04091020.xyz/20200425182143.jpg)
![](http://picbed.04091020.xyz/20200425182204.jpg)

**配置参数**

第二个参数好像没啥用还需要测试一下

**mac**    
```
--out-file $FileDir$/$FileNameWithoutExtension$.js --presets @babel/env $FilePath$
```

```
$FileNameWithoutExtension$.js:$FileNameWithoutExtension$.js.map
```
**win**

```
--out-file $FileDir$\$FileNameWithoutExtension$.js --presets @babel/env $FilePath$
```

```
$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.js:dist\$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.js.map
```

## js压缩混淆


```
npm install uglify-js -g 
```
![](http://picbed.04091020.xyz/20200425182328.jpg)
![](http://picbed.04091020.xyz/20200425182342.jpg)


```
$FileName$ -o $FileNameWithoutExtension$.min.js -c -m
```
```
$FileNameWithoutExtension$.min.js
```

## css预编译 

```
npm install --global stylus
```
![](http://picbed.04091020.xyz/20200425182355.jpg)
![](http://picbed.04091020.xyz/20200425182408.jpg)

## css压缩
> 下载 [YUICompressor 2.4.8 Released](https://github.com/yui/yuicompressor/releases)

![](http://picbed.04091020.xyz/20200425182431.jpg)
![](http://picbed.04091020.xyz/20200425182451.jpg)

