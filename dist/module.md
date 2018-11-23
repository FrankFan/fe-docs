# 模块化

## 函数封装

函数的功能就是实现特定逻辑的一组语句打包，而且JavaScript的作用域就是基于函数的，所以把函数作为模块化的第一步是很自然的事情，在一个文件里编写几个相关的函数就是最初模块的样子。

```js
function fn1() {
  // statement
}

function fn2() {
  // statement
}
```

这样在需要的函数所在的文件内就可以调用函数了。

这种做法的缺点很明显： 污染了全局变量，无法保证不与其他模块发生变量命名冲突，而且模块成员之间没什么关系。

## 对象封装

为了解决上面的问题，基于对象的写法应运而生，可以把所有的模块成员封装在一个对象中：

```js
var myModule = {
  var1: 1,
  var2: 2,

  fn1: function() {},

  fn2: function() {}
}
```

这样我们在希望调用模块的时候引用对应文件，然后：

```js
myModule.fn2();
```

这样避免了变量污染，只要保证模块名唯一即可，同时同一模块内的成员也有了关系。

看似不错的方案，但是也有缺陷，外部可以随意修改内部成员，如：

```js
myModule.var2 = 'test';
```

这样的话会产生意外的安全问题。

## 立即执行函数

可以通过立即执行函数，来达到隐藏细节的目的。

```js
var myModule = (
  var var1 = 1;
  var var2 = 2;

  function fn1() {}

  function fn2() {}

  return {
    fn1: fn1,
    fn2: fn2,
  }
)();
```

这样在模块外部无法修改我们没有暴露出来的变量、函数。


上述的做法是我们模块化的基础，目前流行的JavaScript模块规范主要有两种： `CommonJS`、`AMD`

## CommonJS

CommonJS规范是由NodeJS发扬光大的，这标志着JavaScript模块化变成正式登上舞台。

1. 定义模块
  根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为`global`对象的属性。
2. 模块输出
  模块只有一个出口：`module.exports`对象，我们需要把模块希望输出的内容放入该对象
3. 加载模块
  加载模块使用`require`方法，该方法读取一个文件并执行，返回文件内部的`module.exports`对象。

举例：

```js
// 定义模块

var name = 'Tony';

function printName() {
  console.log(name);
}

function printFullName(firstName) {
  console.log(`${firstName} ${name}`);
}

module.exports = {
  printName: printName,
  printFullName: printFullName,
}

// 加载模块

var nameModule = require('./myModule.js'); // .js 可省略

// 使用模块
nameModule.printName();
```



参考：
http://www.cnblogs.com/dolphinX/p/4381855.html