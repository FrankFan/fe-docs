# ECMAScript 6

- es6 特性那么多，我需要全部学会吗？
- react component 有三种写法，我需要全部学会吗？


## 一、变量和声明

### const 和 let

首先，不要用`var`，而是用`const`和`let`，分别表示常量和变量。不同于`var`的函数作用域，`const`和`let`都是块级作用域。

```js
const DELAY = 1000;

let count = 1;
count = count + 1;
```

### 模板字符串

模板字符串提供了另一种字符串组合的方法，比起字符串拼接方便了很多。

```js
// 单行
const user = 'world';
console.log(`hello ${world}`); // hello world

// 多行
const content = `
  Hello ${firstName},
  Thanks for ordering ${qty} tickets to ${event}.
`;
```


### 默认参数

```js
function logActivity(activity = 'running') {
  console.log(avtivity);
}

logActivity(); // running
```

### 箭头函数

函数的快捷写法，不需要通过`function`关键字创建函数，并且可以省略`return`关键字。同时，箭头函数还会继承当前上下文的`this`关键字。

比如：

```js
[1, 2 ,3].map(x => x + 1); // [2, 3, 4]
```

等同于：

```js
[1, 2 ,3].map(function(x) {
  return x + 1;
}.bind(this)); // [2, 3, 4]
```

### 模块的 import 和 export

`import`用于引入模块， `export`用于导出模块。

比如：

```js
// 引入全部
import dva from 'dva';

// 引入部分
import { connect } from 'dva';
import { Link, Route } from 'dva/router';

// 引入全部并作为 github 对象
import * as github from './services/github';

// 导出默认
export default App;
// 部分导出，需 import { App } from './file'; 引入
export class App extend Component {};
```

## 二、ES6对象和数组

### 解构（析构）赋值

```js
// 对象
const user = { name: 'Tony', age: 18, };
const { name, age } = user;
console.log(`${name} : ${age}`); // Tony : 18

// 数组
const arr = [1, 2];
const [foo, bar] = arr;
console.log(foo); // 1
```

也可以解构传入函数的参数，终于可以不用记住函数参数的顺序了，太方便了。

```js
const add (state, { payload, loading, global }) => {
  return state.concat(payload);
}
```

解构时还可以配 alias，让代码更具有语义。

```js
const add (state, { payload: todo }) => {
  return state.concat(todo);
}
```

对象字面量改进。这是解构的反向操作，用于重新组织一个 Object。

```js
const name = 'Tony';
const age = 18;

const user = { name, age }; // { name: 'Tony', age: 18}
```

定义对象方法时，还可以省去`function`关键字。

```js
class Slide extends React.Component {
  // 普通function
  add() {} // 等同于 add: function() {}

  // generator
  *addRemote() {} // 等同于 addRemote: function*() {}
}
```

### Spread Operator 扩展运算符

`Spread Operator` 即3个点`...`，有几种不同的使用方法。

可用于组装数组。

```js
const todos = ['plan A', 'plan B'];
[...todos, 'plan C']; // ['plan A', 'plan B', 'plan C']
```

也可用于获取数组的部分项。

```js
const arr = ['a', 'b', 'c'];
const [first, ...rest] = arr;
console.log(rest); // ['b', 'c']

const [first, , ...rest] = arr;
console.log(rest); // ['b', 'c']
```

还可以收集函数参数为数组。

```js
function log(first, ...rest) {
  cosnole.log(rest);
}

log('a', 'b', 'c'); // ['b', 'c']
```

代替 apply

```js
function foo(x, y, x) {}
const args = [1, 2, 3];

// 下面两句效果相同
foo.apply(null, args);
foo(...args);
```

对于Object而言，用于组合成新的Object。

```js
https://dvajs.com/knowledgemap/#es6-%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%95%B0%E7%BB%84
```