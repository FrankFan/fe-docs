# JavaScript

## 一、数据类型

JavaScript 是 **弱类型** 语言，但并不是没有类型，JavaScript 由下面 6 种基本类型和 1 种复杂类型组成。

1. 基本数据类型

- boolean
- number
- string
- null
- undefined
- symbol

2. Object

- Array
- Date
- RegExp
- Math
- ...

可以使用 **typeof** 关键字判断数据类型，会返回一个字符串作为类型，但是并非所有的返回结果都符合预期。**typeof** 只能检测基本类型，对引用类型(Array、Object 等)不能很好的区分，如果是自定义对象就更别指望能正确区分了。

举例如下：

```js
typeof false; // "boolean"
typeof 0.2; // "number
typeof NaN; // "number"
typeof ''; // "string"
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"
typeof Symbol; // "function"

typeof []; // "object"
typeof new Date(); // "object"
typeof Date; // "function"

typeof alert; // "function"

typeof null; // "object"
typeof not_defined_var; // "undefined"
```

![](https://ws1.sinaimg.cn/large/006tNbRwgy1fxecxl49umj306q0dxq3v.jpg)

### 判断具体类型

```js
Object.prototype.toString.call(42) === '[object Number]';
Object.prototype.toString.call('') === '[object String]';
Object.prototype.toString.call(false) === '[object Boolean]';
Object.prototype.toString.call({}) === '[object Object]';
Object.prototype.toString.call([]) === '[object Array]';
Object.prototype.toString.call(/^$/) === '[object RegExp]';

function isType(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  };
}

var isNumber = isType('Number');

console.log(isNumber(1));
console.log(isNumber('s'));

var isArray = isType('Array');

console.log(isArray(1));
console.log(isArray([1, 2, 3]));

var type = obj => {
  return Object.prototype.toString
    .call(obj)
    .match(/^\[object (.*?)\]/)[1]
    .toLowerCase();
};
```

![示例](https://ws3.sinaimg.cn/large/006tNc79gy1g1yzkx23w8j306j0diwf4.jpg)

### 类型转换

提到类型就不能不提 JavaScript 中的类型自动转换，必须十分清楚的明白这一点才能在写代码过程中不犯迷糊。

```js
// 分析以下代码
var a = 0;
if (a) {
  console.log('hello');
}
```

在 JavaScript 中，布尔值是一种基本的数据类型。Boolean 对象是一个将布尔值打包的布尔对象。Boolean 对象主要用于提供将值转换成布尔值，即 true 或 false.

那么什么时候是 true ， 什么时候是 false 呢？ 具体转换规则如下表：

| 数据类型 | 转换为 true 的值 | 转换为 false 的值 |
| -------- | ---------------- | ----------------- |
| Boolean  | true             | false             |
| String   | 任何非空字符串   | 空字符串''        |
| Number   | 任何非 0 数值    | 0 和 NaN          |
| Object   | 任何对象         | null              |
| undfined |                  | undefined         |

**注意**： `undefined` 没有转换为 true 的值。

从这里我们一目了然， Boolean(0) 返回的是 false;

那么当 if 语句里面没有表达式，只是某个值时 如 `if (xxx)` 它会自动执行 Boolean(xxx)操作， 即 `if(xxx) = if(Boolean(xxx))`

所以我们对应上面 Boolean 的转换规则 ，再结合上面的题，就非常容易理解了。

这就是 if(0) 会返回 false 的原因。

## 二、变量

在应用程序中，使用变量为值命名。变量的名称称为`identifiers`。

### 声明

1. 使用关键字`var`声明：函数作用域
2. 使用关键字`let`声明：块级作用域（block scope local variable）
3. 直接使用：全局作用域（global scope）

```js
var global_var = 1;

function fn() {
  var fn_var = 2;
  if (fn_var > 10) {
    let block_var = 3;
    global_var2 = 4;
  }
}
```

只声明不赋值，变量的默认值是`undefined`。 `const`关键字可以声明不可变变量，同样为块级作用域。对不可变的理解在对象需要注意：

```js
const num = 1;
const obj = {
  prop: 'value'
};
num = 2; // Uncaught TypeError: Assignment to constant variable.
obj.prop = 'newValue'; // 这是ok 的

obj = []; // Uncaught TypeError: Assignment to constant variable.
```

### 变量提升 hoist

JavaScript 中可以引用稍后声明的变量，而不会引发异常，这一概念被称为变量声明提升（hoisting）

#### 例子

```js
console.log(a); // undefined
var a = 2;

// 等同于下面代码

var a;
console.log(a); // undefined
a = 2;
```

以上只是简单的变量提升。还有一种情况需要注意，那就是`函数声明`的变量提升。

var（变量声明） 和 function（函数声明） 都会被提升到作用域顶部。 如果同时出现变量声明和函数声明的话，函数声明会被最先提升，其次才是变量提升。[证据参考这里](https://stackoverflow.com/questions/28246589/order-of-hoisting-in-javascript)

#### 例子一

```js
console.log(a);

var a = function() {};
```

输出： `undefined`

`a`在声明之前被调用，为什么不会报错？这是因为在 JS 中，变量声明会被提升到作用域顶部，上面的代码等同于这样：

```js
var a;
console.log(a);
a = function() {};
```

#### 例子二

下面这段代码的运行结果会什么？

```js
console.log(typeof b); // function

var b = 1;

function b() {}

console.log(b); // 1
```

输出：`function、1` 同样是因为 JS 的变量提升的原因。`函数声明和变量声明都会被提升到作用域顶部，且函数声明优先级更高`。

于是，上面那段代码在 JS 解析器看来应该这样的：

```js
function b() {}
var b;
console.log(typeof b); // function
b = 1;
console.log(b); // 1
```

## 三、函数

一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的`子程序`。

### 函数定义

1. 函数声明
2. 函数表达式
3. Function 构造函数
4. 箭头函数

```js
function fn() {} // 存在变量提升

var fn = function() {};

var fn = new Function(arg1, arg2, ...argN, funcBody);

var fn = param => {};
```

### arguments

1. arguments： 一个包含了传递给当前执行函数参数的类似于数组(array-like)的对象
   > 转为真正的数组
   - ES6
   - `var args = Array.from(arguments);`
   - `var args = [...arguments];`
   - ES5
   - `var args = Array.prototype.slice.call(arguments);`
   - `var args = [].slice.call(arguments);`
2. arguments.length: 传递给函数的参数个数
3. ~~arguments.caller 调用当前执行函数的函数~~ [已废弃](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/caller)
4. ~~arguments.callee: 当前正在执行的函数~~ [严格模式已废弃](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)

```js
function foo() {
  return arguments;
}
foo(1, 2, 3); // Arguments(3) [1,2,3]
```

### rest

剩余参数

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1,2,3]

function fn(a, b, ...args) {
  return args;
}
fn(1, 2, 3, 4, 5); // [3,4,5]
```

### default

函数的参数可以再定义时约定默认值

```js
function fn(a = 2, b = 3) {
  return a + b;
}
fn(1, 2); // 3
fn(5); // 8
fn(); // 5
```

## 四、对象

JavaScript 中对象是可变的`带键的集合`(keyed collections)

### 定义对象

1. 字面量
2. 构造函数

```js
var obj = {
  prop: 'value',
  fn: function() {}
};

var date = new Date();
```

构造函数和普通函数并没有区别，使用 `new` 关键字调用就是构造函数，使用构造函数可以**实例化**一个对象。

构造函数的返回值有两种可能：

1. 显式调用`return`返回`return`后表达式的求值
2. 没有调用`return`返回`undefined`

```js
function People(name, age) {
  this.name = name;
  this.age = age;
}

var people = new People('Tony', 26);
```

### prototype

1. 每个函数都有一个`prototype`的对象属性，对象内有一个`constructor`属性，默认指向函数本身；
2. 每个对象都有一个`__proto__`的属性，指向其父类型的`prototype`。

```js
function Person(name) {
  this.name = name;
}

Person.prototype.print = function() {
  console.log(this.name);
};

var p1 = new Person('Tony');
var p2 = new Person('Lucy');

p1.print();
p2.print();
```

## 五、this 和作用域

this 场景

### 普通函数

1. 严格模式： this 是 `undefined`
2. 非严格模式： this 是 全局对象
3. Node 环境： `global`
4. 浏览器环境： `window`

### 构造函数

this 指向对象的实例

### 对象方法

this 指向对象本身。

call 和 apply

1. fn.call(context, arg1, arg2, ... argn);
2. fn.apply(context, args);

### `Function.prototype.bind`

`bind` 返回一个新函数，函数的作用域为`bind`参数

```js
function fn() {
  this.i = 0;

  setInterval(
    function() {
      console.log(this.i++);
    }.bind(this),
    500
  );
}

fn();
```

### 箭头函数 () => {}

箭头函数是 ES6 提供的新特性，是简写的函数表达式，拥有词法作用域和`this`值

```js
function fn() {
  this.i = 0;

  setInterval(() => {
    console.log(this.i++);
  }, 500);
}

fn();
```

## 六、继承

在 JavaScript 的场景，继承有两个目标，子类需要得到父类的：

1. 对象的属性
2. 对象的方法

```js
function inherits(child, parent) {
  var _prototype = Object.create(parent.prototype);
  _prototype.constructor = child.prototype.constructor;
  child.prototype = _prototype;
}

function People(name, age) {
  this.name = name;
  this.age = age;
}

People.prototype.getName = function() {
  return this.name;
};

function English(name, age, language) {
  People.call(this, name, age);
  this.language = language;
}

inherits(English, People);

English.prototype.introduce = function() {
  console.log(`Hi, I am ${this.name}`);
  console.log(`I speak ${this.language}`);
};

function Chinese(name, age, language) {
  People.call(this, name, age);
  this.language = language;
}

inherits(Chinese, People);

Chinese.prototype.introduce = function() {
  console.log('你好，我是' + this.getName());
  console.log('我说' + this.language);
};

var en = new English('Tony', 26, 'English');
var cn = new Chinese('小明', 27, '汉语');

en.introduce();
cn.introduce();
```

### ES6 class 与继承

```js
'use strict';

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class English extends People {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}`);
    console.log(`I speak ${this.language}`);
  }
}

let en = new English('Byron', 26, 'English');

en.intrduce();
```

## 七、高阶函数

高阶函数是把函数当做参数或者返回值是函数的函数。

### 回调函数

```js
[1, 2, 3, 4].forEach(function(item) {
  console.log(item + 2); // 3,4,5,6
});
```

### 闭包

闭包由两部分组成，

1. 函数
2. 环境： 函数创建时作用域内的局部变量

```js
function makeCounter(init) {
  var init = init || 0;
  return function() {
    return ++init;
  };
}

var counter = makeCounter(10);

console.log(counter());
console.log(counter());
```

典型错误

```js
for (var i = 0; i < doms.length; i++) {
  doms.eq(i).on('click', function(ev) {
    console.log(i);
  });
}

// 修改后
for (var i = 0; i < doms.length; i++) {
  (function(i) {
    doms.eq(i).on('click', function(ev) {
      console.log(i);
    });
  })(i);
}
```

### 尾递归

尾调用是指某个函数的最后一步是调用另一个函数
函数调用自身，称为递归
如果尾调用自身，就称为尾递归
递归很容易发生"栈溢出"错误（stack overflow）

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5); // 120
```

但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误

```js
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1); // 120
```

### 柯里化

一种允许使用部分参数生成函数的方式。

```js
// 柯里化减少参数
function currying(fn, n) {
  return function(m) {
    return fn.call(this, m, n);
  };
}

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

factorial(5); // 120
```

### 反柯里化

```js
Function.prototype.uncurry = function() {
  return this.call.bind(this);
};

// push 通用化
var push = Array.prototype.push.uncurry();

var arr = [];

push(arr, 1);
push(arr, 2);
push(arr, 3);

console.log(arr); // 1 2 3
```

### javascript 中如何对一个对象进行`深度clone`？（只考虑原始值、数组和对象，不考虑原型链、函数指针等 corner cases）请代码实现

```js
function deepClone(objOrArray) {
  // [1,2,['a','b'],5,6]
  // [1,2,['a','b'],5,6]
  const copyArray = arr => {
    let arrayResult = [];
    arr.forEach(item => {
      arrayResult.push(cloneObjOrArray(item));
    });
    return arrayResult;
  };

  const copyObj = obj => {
    let objResult = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        objResult[key] = cloneObjOrArray(obj[key]);
      }
    }
    return objResult;
  };

  const cloneObjOrArray = el => {
    if (Array.isArray(el)) {
      return copyArray(el);
    } else if (typeof el === 'object') {
      return copyObj(el);
    } else {
      return el;
    }
  };

  return cloneObjOrArray(objOrArray);
}

var obj = [1, 2, ['a', 'b'], 5, 6];
var obj2 = { a: '1', b: [1, 3, 5] };
var res = deepClone(obj2);
// var res = deepCopy(obj2);
console.log(res);
console.log(res === obj2);
```
