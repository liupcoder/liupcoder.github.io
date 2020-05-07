---
title: UML类图
date: 2020-05-07 14:00:00
tags:
 - 设计模式
categories:
 - 前端
sidebar: auto
---

## 概念

:::tip UML
统一建模语言(Unified Modeling Language，UML)是一种为面向对象系统的产品进行说明、可视化和编制文档的一种标准语言，是非专利的第三代建模和规约语言。UML是面向对象设计的建模工具，独立于任何具体程序设计语言。

::: right
来自 [百度百科](https://baike.baidu.com/item/%E7%BB%9F%E4%B8%80%E5%BB%BA%E6%A8%A1%E8%AF%AD%E8%A8%80/3160571?fr=aladdin)
:::

## 类图

![](http://picbed.04091020.xyz/20200507142551.jpg)

第一行类名
第二行属性
第三行方法
```
+ public
# protected
- private
```

## 关系

泛化，表示继承  
关联，表示引用

```js
class Person {
    constructor(name, age, house) {
        this.name = name
        this.age = age
        this.house = house
    }
    eat() {
        alert(`${this.name} eat somthing`)
    }
    speak() {
        alert(`${this.name} speak age = ${this.age}`)
    }
}

class A extends Person {
    constructor(name, age, house) {
        super(name, age, house)
    }
    saySomething() {
        alert('I am A')
    }
}

class B extends Person {
    constructor(name, age, house) {
        super(name, age, house)
    }
    saySomething() {
        alert('I am B')
    }
}

class House {
    constructor(city) {
        this.city = city
    }
    showCity() {
        alert(this.city)
    }
}

let aHouse = new House('beijing')
let a = new A('a', 26, aHouse)
a.saySomething()
let b = new B('b', 40)
b.saySomething()
```
## 示例
![](http://picbed.04091020.xyz/20200507142809.jpg)

