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
**IDEA 中前端优化 （ES6 to ES5 js 压缩混淆 css 预编译 css 压缩）**
:::

ES6 to ES5，js 压缩混淆是基于 node 环境进行，在进行操作前需先安装 node 环境。这里不做详细介绍。

[菜鸟教程 Node.js 安装配置](https://www.runoob.com/nodejs/nodejs-install-setup.html)

对没有 node 环境的项目进行初始化：

```
npm init
```

有 node 环境的项目直接安装：

```
npm install
```

在 IDEA 中安装 **File Watchers** 插件

![设置](https://picbed.04091020.xyz/20200425175443.jpg)

## ES6 to ES5

> 安装 Babel7

```
npm install @babel/core
```

```
npm install @babel/preset-env
```

```
npm install @babel/cli
```

> 设置语言为 ES6

![](https://picbed.04091020.xyz/20200425182246.jpg)

> 在 File Watchers 中设置 Babel

![](https://picbed.04091020.xyz/20200425182143.jpg)
![](https://picbed.04091020.xyz/20200425182204.jpg)

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

## js 压缩混淆

```
npm install uglify-js -g
```

![](https://picbed.04091020.xyz/20200425182328.jpg)
![](https://picbed.04091020.xyz/20200425182342.jpg)

```
$FileName$ -o $FileNameWithoutExtension$.min.js -c -m
```

```
$FileNameWithoutExtension$.min.js
```

## css 预编译

```
npm install --global stylus
```

![](https://picbed.04091020.xyz/20200425182355.jpg)
![](https://picbed.04091020.xyz/20200425182408.jpg)

## css 压缩

> 下载 [YUICompressor 2.4.8 Released](https://github.com/yui/yuicompressor/releases)

![](https://picbed.04091020.xyz/20200425182431.jpg)
![](https://picbed.04091020.xyz/20200425182451.jpg)
