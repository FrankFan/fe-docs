# Rreduce in JavaScript

当我面试候选人的时候，我常常会问一些他们用过的JS数组的原生方法，并且让他们在纸上实现其中一个方法，比如`some`、`map`等。如果有人能说出来函数可以被当做参数和返回值传来传去的话，那么这就不是难事。

`reduce` 方法是最少被问及的。

## Reduce 和 Fold

`Reduce`是一个高阶函数，在函数式编程语言中通常被称作`fold`。于我而言，和`reduce`相比，`fold`绝对是一个更好的名字，因为在我脑海里就像折叠扇子的过程。

`reduce`是有方向的，它从左至右遍历一个列表;`reduceRight`从右至左遍历。也许你在其它地方看到过`foldl`和`foldr`，它们其实说的是同一回事儿，只不过可读性更强一些。

在 JavaScript 中，如果`reduce`方法没有提供初始值的话，数组的第一个元素将会被当做初始值。

```js
// 初始值是1
[1, 2, 3].reduce((a, b) => a + b, 1); // 7

// 当第二个参数不传的时候，数组的第一个元素当被当做初始值
[1, 2, 3].reduce((a, b) => a + b); // 6
```

## 两个task

根据下面给定的数据有2个任务，使用普通循环的解决方案是：

```js
const scoreArray = [
  { name: 'Jim', score: 99 },
  { name: 'Han', score: 55 },
  { name: 'Tom', score: 87 },
  { name: 'Ana', score: 50 }
];
```

#### a) 获取所有项的总分

```js
function getScoreSum(array) {
  let ret = 0;
  array.forEach(item => {
    ret += item.score;
  });
  return ret;
}
```

#### b) 获取所有项中的最高分

```js
function getHighest(array) {
  let ret = {};
  array.forEach(item => {
    if(!ret.score || (ret.score < item.score)) {
      ret = item;
    }
  });
  return ret;
}
```

## 分析模式

上面的2个函数有一些共同点：

1. 一个初始值
2. 如何用列表中的每一项更新初始值的一个规则
3. 返回最后被更新的值

我们可以定义一个函数来抽象出这个模式。也就是`Array.prototype.reduce`的一个简单实现。

```js
function reduce(array, rule, initial) {
  // 初始化
  let result = initial;
  // 遍历列表，根据自定义规则更新结果
  array.forEach(item => {
    result = rule(result, item);
  });
  // 返回最终结果
  return result;
}
```

现在我们用`reduce`重写上面的2个解决方案：

```js
function getScoreSum(array) {
  return reduce(array, (ret, item) => ret + item.score, 0);
}

function getHighest(array) {
  return reduce(array, (ret, item) => {
    if(!ret.score || (ret.score < item.score)) {
      ret = item;
    }
    return ret;
  }, {});
}
```

一旦你认同这一模式，代码将会更加易于理解。抽象的好处在于规则可以被单独处理并且可以被复用。

```js
function maxByScore(a, b) {
  return a.score > b.score ? a : b;
}

function getHighest(array) {
  return reduce(array, maxByScore, {});
}
```

## 不同点

上面的 `getScoreSum()` 和 `getHighest()` 方法也有不同的地方。

1. `getScoreSum()` 返回`number`类型
2. `getHightest()` 返回一个对象，这个对象的类型和数组中的元素一样。

通常，当返回值和和数组中元素类型不同的时候被称为非对称性(asymmetrical)，反之，称为对称性(symmetrical)。

## 一些感想

抽象是一种思维方式。

如果性能不是关键的话，在合适的地方我更倾向于使用`reduce`函数。因为这样可以让我用更少的代码关注与更重要的地方。





https://yuanchuan.name/2019/03/04/the-reduce-function.html

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

