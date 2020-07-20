---
title: "This处理及Call-Apply-Bind"
date: 2020-07-18
categories:
  - 前端
tags:
  - 珠峰高级
  - 学习笔记
sidebar: auto
keys:
  - "de9b9ed78d7e2e1dceeffee780e2f919"
---

## This

全局上下文中的 **this** -> **window**, 块及上下文中没有自己的**this**, 它的**this**是集成所在上下文中的**this**的;在函数的私有上下文中, this的情况会多种多样, 也是接下来我们重点研究的;  
this 不是执行上下文(EC才是执行上下文), **this** 是执行主体  

```js
{
  let a = 1;
  console.log(this)
}
// => Window
let obj = {
  fn() {
    {
      let a = 1;
      console.log(this)
    }
  }
}
obj.fn();
// => {fn: ƒ}
```


如何区分执行主体:
  1. 事件绑定中: 给元素的某个事件行为绑定方法, 当事件行为触发, 方法执行, 方法中的**this**是当前元素本身(特殊: IE6-8中基于attachEvent方法实现的DOM2事件绑定, 事件触发, 方法中的 **this** 是**window**而不是元素本身)
  2. 普通方法执行(包含自治性函数执行, 普通函数执行, 对象成员访问调取方法执行等), 只要看函数执行的时候, 方法名前面是否有**点**, 有**点**, **点**前面是谁就是谁, 没有**点**, **this**就是window[非严格模式]/undefined[严格模式]
  3. 构造函数执行(new XXX): 构造函数中的**this*是当前类的实例
  4. ES6中提供了Arrow Function(箭头函数): 箭头函数没有自己的**this**, 他的this是继承所在上下文中的this, 哪怕强制改也没用
  5. 可以基于call/aplly/bind等方式, 强制手动改变函数中的**this**指向: 这三种模式是很直接很暴力的(前三种情况在使用这三个方法的情况后, 都以手动改变的为主)

```js
// 事件绑定 DOM0 DOM2 
let body = document.body;
body.onclick = function () {
  // 事件触发, 方法执行, 方法中的this是body
  console.log(this)
}
// => body

body.addEventListener('click', function () {
  console.log(this)
})
// => body
```

```js
(function () {
  console.log(this);
})();
// => Window
let obj = {
  fn: (function () {
    console.log(this);
    return function () { }
  })()
}
// => Window
```

```js
function func() {
  console.log(this)
}

let obj = {
  func: func
}
func(); //=> window
obj.func(); //=> obj
```

```js
[].slice(); //=>数组实例基于原型链机制, 找到Array原型上的slice方法, 然后再把slice方法执行, 此时slice方法中的this 是当前的空数组
Array.prototype.slice();//=>slice方法执行中的this: Array.prototype
[].__proto___.slice();//=>slice方法执行中的this: [].__proto___ === Array.prototype
```

```js
function func() {
  console.log(this)
}

document.body.onclick = function () {
  func();
}
```

```js
function Func() {
  this.name = 'F';
  console.log(this);
}

Func.prototype.getNum = function getNum() {
  console.log(this);
}
let f = new Func;
```

## call apply bind

这三个方法都是用来改变函数中的this的

call: [function].call([context], params1, params2,...) [function]作为Function内置类的一个实例, 可以基于__proto__找到Function.prototype的call方法, 并且把找到的call方法执行;在call方法执行的时候, 会把[function]执行, 并且把函数中的this指向[context], 并且把params1, params2...等参数值分别传递给函数  
apply: 和call作用一样, 只不过传递给函数的参数需要以数组的形式传递给apply
bind: [function].bind([context], params1, params2,...)语法和call类似, 但是作用和call/apply都不太一样; call/apply都是把当前函数立即执行, 并且改变函数中的this指向的, 而bind是一个预处理的思想, 基于bind只是预先把函数中的this指向[context], 把params这些参数值预先存储起来, 但是此时函数并没有执行

```js
let obj = {
  name: 'obj'
}

function func(x, y) {
  console.log(this, x, y);
}

// func(10, 20) //=>this: window
// obj.func()  //=>Uncaught TypeError: obj.func is not a funcation

// call 和 apply的唯一区别在于传递参数的形式不一样
// call 方法的第一个参数,  如果不传递或者传递的是null/undefiend 在非严格模式下都是让this指向window, 严格模式下, 传递的是谁就是谁
``` 

### bind 原理

执行bind(bind中的this是要操作的函数), 返回一个匿名函数给时间绑定或者其他内容, 当事件触发的时候, 首先执行的是匿名函数(此时匿名函数中的this和bind中的this是没有关系的)  
bind的内部机制就是利用闭包(柯理化函数编程思想)预先把需要执行的函数以及改变的this再以及后续需要给函数传递的参数信息等都保存到不释放的上下文中, 后续使用的时候直接哪来用, 这就是经典的预先存储思想

```js
Function.prototype.bind = function bind(context = window, ...params) {
  // this -> func
  let _this = this;
  return function anonymous(...inners) {
    // this -> body
    // _this.call(context, ...params);
    _this.apply(context, params.concat(inners));
  }
}
```

### call 应用场景 把类数组转换为数组

类数组: 具备和数组类似的结(索引和length以及具备interator可迭代性), 但是并不是数组的实例(不能用数组原型上的方法), 我们把这样的结构称为类数组结构

```js
function func() {
  console.log(arguments);
  // 1. Array.from
  // let args = Array.from(arguments);

  // 2. 基于ES6的展开运算符
  // let args = [...arguments];

  // 3. 手动循环
  // let args = [];
  // for (let i = 0; i < arguments.length; i++) {
  //   args.push(arguments[i]);
  // }
  // 4. arguments 具备和数组类似的结构, 所以操作数组的一些代码(例如循环)也同样使用与arguments; 如果我们让array原型上的内置方法执行, 并且让方法中的this 变为我们要操作的数组, 那么久相当于我们在借用数组原型上的方法操作类数组, 让类数组也和数组一样可以调用这些方法实现具体需求
  // let args = Array.prototype.slice.call(arguments);
  let args = [].slice.call(arguments);

  console.log(args);
  [].forEach.call(arguments, item=>{
    console.log(item);
  });
}

func(1, 2, 3, 4)
```

```js

Array.prototype.slice = function slice() {
  // this -> arr
  let args = [];
  for (let i = 0; i < this.length; i++) {
    args.push(this[i]);
  }
  return args;
}
```

我不是某个类的实例, 不能直接用它原型上的方法, 但是我可以让某个类原型上的方法执行, 让方法中的this(一般是需要处理的实例)变为我, 这样就相当于我在借用这个方法实现具体功能  
这种借用规则, 利用的就是call改变this实现的, 也是面向对象的一种深层次应用

### apply 应用场景 获取数组中的最大值


```js
let arr = [12, 13, 2, 34, 27, 34];

let max = arr.sort((a, b) => b - a)[0];

let max = arr[0];
arr.forEach(item => {
  if (item > max) {
    max = item;
  }
})

let max  = math.max.apply(Math, arr);
console.log(max);
```
## call的原理

核心原理: 给context设置一个属性(属性名尽可能保持唯一, 避免我们自己设置的属性修改默认对象中的结构, 例如可以基于Symbol实现, 也可以创建一个时间戳名字), 属性值一定是我们要执行的函数(也就是this, call中的this就是我们要操作的这个函数);接下来基于context.xxx()成员访问执行方法, 就可以把函数执行, 并且改变里面的this(还可以把params中的信息传递给这个函数即可);都处理完了, 别忘记把给context设置的这个属性删掉;

```js
Function.prototype.call = function call(context, ...params) {
  console.log(context)
  // 非严格模式下 不传或者传递null/undefined 都让this最后改变为window
  context == undefined ? context = window : null;
  // context不能是基本数据类型值, 如果传递的是值类型, 我们需要把其变成对应类的对象类型
  if (!/^(object|function)$/.test(typeof context)) {
    if (/^(sysbol|bigini)$/.test(typeof context)) {
      context = Object(context)
    } else {
      context = new context.constructor(context);
    }
  }
  let key = Symbol('KEY'),
    result;
  context[key] = this;
  result = context[key](...params);
  delete context[key];
  return result;
}

let obj = {
  name: 'obj'
}

function func(x, y) {
  console.log(this, x, y);
}

// 只要按照成员方位这种方式执行, 就可以让func中的this变为obj, (前提obj中需要有func这个属性), 当然属性名不一定是func, 只要属性值是这个函数即可
obj.func = func;
obj.func();

func.call(obj, 10, 20)
```


创建一个值的两种方法, 对于引用数据类型来讲, 两种方式没有啥区别, 但是对于值类型, 字面量方式创建的是基本类型值, 但是构造函数方式创造的是对象类型值; 再但是, 不管基本类型还是对象类型都是所属类的实例, 都可以调用原型上的方法; (基本值无法给其设置属性, 但是引用值可以设置属性的)

```js
// 1. 字面量创建
let num = 10;
let obj = {};

// 2. 构造函数创建
let num2 = new Number(10);
let obj2 = new Object();
```
### 阿里面试题
![](http://picbed.04091020.xyz/20200720153714.png)