---
title: ES6 类的理解
date: 2020-04-27
---

## 问题
```javascript
class Animal {
	constructor(type) {
		this.type = type;
	}
	eat() {
		this.walk();
		console.log('eating...')
	}
	static walk() {
		console.log('walking...')
	}
}
let dog = new Animal('dog')
dog.eat()
dog.walk()
// 运行结果
```

## 结果
```
Uncaught TypeError: this.walk is not a function
    at Animal.eat (<anonymous>:6:8)
    at <anonymous>:1:5
Uncaught TypeError: dog.walk is not a function
    at <anonymous>:1:5
```


## 解析

::: tip
静态方法或属性是加在类上的，在实例对象里是找不到的。
:::
### ES5 写法

```javascript
let Animal = function(type) {
    this.type = type;
}
Animal.prototype.eat = function() {
    console.log('eating...')
};
Animal.walk = function() {
    console.log('walking...')
};
```