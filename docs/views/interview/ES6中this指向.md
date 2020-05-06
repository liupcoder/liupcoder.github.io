---
title: ES6中this指向
date: 2020-05-05
---

:::tip
在常规函数里 this指向是谁调用 就指向谁
es6的箭头函数对this 做了更新
**知道这些this 指的是谁  就算过关**
:::


## 问题

```javascript
let obj = {
    fun1: function(){
       console.log(this) 
    },
    fun2: ()=>{
        console.log(this) 
    }
  }
obj.fun1()
obj.fun2()
```

```javascript
let obj2 = {
    fun3: function(){
      console.log(this) 
      let fun4 = () => {console.log(this)}
      fun4()
    }
  }
  obj2.fun3() 
  obj2.fun3.call(obj) 
```

## console

```javascript
{fun1: ƒ, fun2: ƒ}
Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
```
```javascript
{fun1: ƒ, fun2: ƒ}
{fun1: ƒ, fun2: ƒ}
```

## 解析

:::tip
箭头函数的this不是在调用的时候决定的，而是在定义的时候决定的
箭头函数的this指向首先看其外部有没有函数
:::

### 答案步骤

### 没有外部函数时
```javascript
 let obj = {
    fun1: function(){
       console.log(this) // this->{obj}
    },
    fun2: ()=>{
        console.log(this) // this->{Window}
    }
  }
    //使用常规函数定义，函数this指向由调用时决定，fun1被obj调用，函数this指向obj
  obj.fun1()

  //使用箭头函数定义，函数this指向由定义时决定，fun2外部没有函数，所以this指向Window
  obj.fun2()
```

### 有外部函数时
```javascript
  let obj2 = {
    fun3: function(){
      console.log(this) // this->{obj2}; 当obj2.fun3.call(obj) this->{obj}
      let fun4 = () => {console.log(this)} //this->{obj2}; 当obj2.fun3.call(obj) this->{obj}
      fun4()
    }
  }
  // 箭头函数fun4()外部有一个函数fun3(),this指向和它绑定，当fun3被调用时this指向哪里，箭头函数this就指向哪里
  obj2.fun3() 
  // 调用fun3时改变this指向，其内部的箭头函数fun4的this指向也发生改变
  obj2.fun3.call(obj)
```