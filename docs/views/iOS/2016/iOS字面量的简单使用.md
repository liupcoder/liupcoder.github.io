---
title: iOS字面量的简单使用
date: 2016-07-27
tags:
 - iOS
categories:
 - iOS
sidebar: auto
---

:::tip
字面量是苹果在2012年的开发者大会出现的新特性之一. 可以帮助程序员更加高效的编写代码. 在XCode4.4以后可以使用.
:::
## 1. 数字(NSNumber)

简化前的写法:

```objc
    NSNumber *value;
    value = [NSNumber numberWithInt:123];
    value = [NSNumber numberWithFloat:123.45f];
    value = [NSNumber numberWithDouble:123.45];
    value = [NSNumber numberWithBool:YES];
```
简化后的写法:

```objc
    NSNumber *value;
    value = @123;
    value = @123.45f;
    value = @123.45;
    value = @YES;

```
装箱表达式也可以采用类似的写法:

```objc
    NSNumber *piOverSixteen = [NSNumber numberWithDouble:(M_PI / 16)];
    NSString *path = [NSString stringWithUTF8String:getenv("PATH")];
```

简写后:

```objc
    NSNumber *piOverSixteen = @(M_PI / 16);
    NSString *path = @(getenv("PATH"));
```

UI有字符串表达式来说, 需要注意, 表达式的值一定不能是NULL, 否则系统会抛出异常.

## 2. 数组(NSArray)

数组的初始化方法有很多, 这里就不再一一罗列, 直接看新的写法.

```objc
    NSArray *array;
    array = @[];                 // 空数组
    array = @[@"a"];             // 一个对象的数组
    array = @[@"a", @"b", @"c"]; // 多个对象的数组
```
需要注意的是如果, 有对象为nil的话, 运行时系统会抛出异常.
## 3. 字典(NSDictionary)
字面量写法:

```objc
    NSDictionary *dic;
    dic =  @{};              // 空字典
    dic = @{k1 : v1};                 // 包含一个键值对的字典
    dic = @{k1 : v1, k2 : v2, k3: v3};   // 包含多个键值对的字典
```
## 4. 下标法与容器类
可以通过下标的方式存取数组和字典的数据.
对于数组:

```objc
    NSArray *array = @[@"a", @"b", @"c"];
    // 通过下标方式获取数组对象, 替换原有写法: [array objectAtIndex:i];
    id obj = array[i];
    // 也可以直接维数组对象赋值.替换原有写法
    array[i] = newObj;
```
对于字典:

```objc
    NSDictionary *dic = @{k1 : v1, k2 : v2, k3: v3}; ;
    // 获取v2对象, 替换原有写法: [dic objectForKey:k2];
    id obj = dic[k2];
    // 重新为键为k2的对象赋值
    dic[k2] = newObj;
```
##5. 容器类数据结构简化的限制
采用上述写法构建的容器都是不可变的, 如果需要生成可变容器, 可以传递-mutableCopy消息. 例如:

```objc
   NSMutableArray *mutablePlants = [@[@"Mercury", @"venus", @"Earth"] mutableCopy];
   NSMutableArray *mutablePlants = @[@"Mercury", @"venus", @"Earth"].mutableCopy;
```

#总结
1. 尽量使用对象字面量语法创建字符串, 数字, 数组和字典等. 
2. 在数组和字典中, 要使用关键字和索引做下标来获取数据
3. 使用对象字面量语法时, 容器类里不可是nil, 否则运行时会抛出异常.