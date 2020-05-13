---
title: TypeScript 基础语法
date: 2020-05-13
categories:
 - 前端
tags:
 - TypeScript
 - 学习笔记
sidebar: auto
---

## 变量类型

### 基础类型

:::tip
boolean number string void undefined symbol null
:::

```ts
const count: number = 123;
const teacherName: string = 'Dell';
```

### 对象类型

:::tip
{} Class string function []
:::

```ts
const teacher: {
  name: string;
  age: number;
} = {
  name: 'dell',
  age: 18,
};

const numbers: number[] = [1, 2, 3];

const dell: Person = new Person();

const getTotal: () => number = () => {
  return 1;
};
```

```ts
const func = (str: string): number => {
  return parseInt(str, 10);
};
const func2 = (str: string) => {
  return parseInt(str, 10);
};

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};
```

### 类型注解

:::tip
type annotation 类型注解 我们来告诉 TS 变量是什么类型
:::

### 类型推断

:::tip
type inference 类型推断 Ts 会自动的去尝试分析变量的类型
:::

:::danger
如果 TS 能够自动分析变量类型, 我们就什么也不需要做了  
如果 TS 无法分析变量类型的话, 我们就需要使用类型注解
:::

```ts
interface Person {
  name: 'string';
}
const rawData = '{"name":"dell"}';

const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = '456';
```

## 数组和元组

### 数组

```ts
const numberArr: number[] = [1, 2, 3];
const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['1', '2', '3'];
const undefinedArr: undefined[] = [undefined, undefined];

```

```ts
const objectArr: { name: string; age: number }[] = [
  {
    name: 'dell',
    age: 28,
  },
];
```

#### 类型别名

:::tip
type alias 类型别名
:::


```ts
type User = {
  name: string;
  age: number;
};

const objectArr: User[] = [
  {
    name: 'dell',
    age: 28,
  },
];
```

```ts
class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 28,
  },
];
```

### 元组 tuple

```ts
const teacheInfo: [string, string, number] = ['dell', 'male', 18];
// csv
const teacherList: [string, string, number][] = [
  ['dell', 'male', 19],
  ['jeny', 'female', 28]
];
```
## interface


```ts
interface Person {
  name: string;
}

type Person1 = {
  name: string;
};

const getPersonName = (person: Person) => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string) => {
  person.name = name;
};
```


### interface接口与类型别名type

:::tip
相类似, 但并不完全一致  
类型别名可以代表基础类型
:::

:::danger
能用 interface接口 优先使用interface接口
:::

```ts
interface Person {
  name: string;
}

type Person1 = {
  name: string;
};

const getPersonName = (person: Person) => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string) => {
  person.name = name;
};
```

```ts
/* 只读 可选的 */
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any,
  say():string
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello'
  }
};
getPersonName(person);
setPersonName(person, 'lee');

// [propName: string]: any 没有这个会报如下错误
// 类型“{ name: string; sex: string; }”的参数不能赋给类型“Person”的参数。
// 对象文字可以只指定已知属性，并且“sex”不在类型“Person”中。
// 字面量 强校验
getPersonName({name: 'dell', sex: 'male'});
```


### cllass应用接口

```ts
const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello'
  }
};
class User implements Person {
  name: 'dell';
  say() {
    return 'hello';
  }
}
```

### 接口继承

```ts
interface Teacher extends Person {
  teach(): string;
}
```

### 接口定义函数

```ts 
interface SayHi {
  (word: string): string;
}

const say: SayHi = () => {
  return 'hi';
};
```

:::warning
interface只是TS约束代码规范的, 并不会编译成JavaScript
:::

## 类

### 类的定义

```ts
class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

const perosn = new Person();
console.log(perosn.getName());
```

### 类的继承

```ts
class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  getName() {
    return super.getName() + 'lee';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
```
### 访问器

:::tip public
允许在类的内外被调用
:::

:::warning protected
允许在类的内及继承的子类中被使用
:::

:::danger private
允许在类的内被使用
:::

```ts
class Person {
  private name: string;
  protected age: number;
  public sayHi() {
    console.log('hi' + this.name);
  }
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('dell');
console.log(person.name);
person.sayHi();

class Teacher extends Person {
  public sayBye() {
    this.age;
  }
}
```

### constructor

```ts
class Person {
  // 传统写法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  // 简化写法
  constructor(public name: string) {
    this.name = name;
  }
}

const person = new Person('dell');
console.log(person.name);

class Teacher extends Person {
  constructor(public age: number) {
    super('dell');
    this.age = age;
  }
}
const teacher = new Teacher(18);
console.log(teacher.age);
console.log(teacher.name);

```

### getter & setter

```ts
class Person {
  constructor(private _name: string) {}
  get name() {
    return this._name + ' lee';
  }

  set name(name: string) {
    const realName = name.split(' ')[0];
    this._name = realName;
  }
}

const person = new Person('dell');
console.log(person.name);
person.name = 'nick lee';
console.log(person.name);
```

### 单例

```ts
class Demo {
  private static instance: Demo;

  private constructor(public name: string) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('dell lee');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
```

### 抽象类

```ts
abstract class Geom {
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 123;
  }
}
```