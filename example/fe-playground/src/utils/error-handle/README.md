# ERROR Handling in JS
[https://github.com/hawx1993/tech-blog/issues/13](https://github.com/hawx1993/tech-blog/issues/13)

1. 异步函数异常捕获
因为异步函数的回调是在event loop的事件队列里单独拉出来执行的，所以在异步函数外面包裹try-catch是无法捕捉到回调函数里抛出的异常。因为当回调函数从事件队列里被拉出来执行的时候try-catch所在的代码块已经执行完毕了。
例如：
```js
try {
	setTimeout(() => {
	    throw new Error('show error');
	}, 0);
} catch(e) {
	console.error('发生 error:', e);
}
console.log('try-catch bloc ends');
```
2.
