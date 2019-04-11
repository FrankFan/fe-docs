# Promise

Promise 用于更优雅的处理异步请求。比如发起异步请求：

```js
fetch('/api/todos')
  .then(res => res.json())
  .then(data => ({ data }))
  .catch(err => ({ err }));
```

定义Promise

```js
const delay = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

delay(1000).then(_ => {
  console.log(_, ' excuted');
});
```

## 例子

```js
// 以下代码输出什么？
new Promise((resolve, reject) => {
    reject(1);
}).catch(() => {
    console.log(2);
}).then(() => console.log(3), (a) => console.log(a));
// 2
// 3
```

# Generators

`Generator` 返回的是迭代器，通过`yield`关键字实现暂停功能。

```js
{
  namespace: 'todos',
  effects: {
    *addRemote({ payload: todo }, { put, call }) {
      yield call(addTodo, todo);
      yield put({ type: 'add', payload: todo });
    }
  },
}
```