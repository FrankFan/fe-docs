# 变量提升

var（变量声明） 和 function（函数声明） 都会被提升到作用域顶部。
如果同时出现变量声明和函数声明的话，函数声明会被最先提升，其次才是变量提升。[证据参考这里](https://stackoverflow.com/questions/28246589/order-of-hoisting-in-javascript)

## 例子一

```js
console.log(a);

var a = function() {};
```

输出： `undefined`

`a`在声明之前被调用，为什么不会报错？这是因为在JS中，变量声明会被提升到作用域顶部，上面的代码等同于这样：

```js
var a;
console.log(a);
a = function() {};
```

## 例子二

下面这段代码的运行结果会什么？

```js
console.log(typeof b);

var b = 1;

function b() {};

console.log(b);
```

输出：`function、1` 同样是因为JS的变量提升的原因。`函数声明和变量声明都会被提升到作用域顶部，且函数声明优先级更高`。

于是，上面那段代码在JS解析器看来应该这样的：

```js
function b() {};
var b;
console.log(typeof b);
b = 1;
console.log(b);
```

[参考文章](https://idiotwu.me/playing-with-javascript-function/)