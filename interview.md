# 面试题


## JS 基础

1. JS数据类型有哪些？如何判断类型？
```js
原始类型 primitive： `bool number string null undefined`
引用类型： `object`

Object.prototype.toString.call(obj);
```
2.内存泄漏问题
  a. 闭包
  b. xxx
  c. 全局变量

3. 实现一些方案

a) 模拟一个HashTable类，包含有add、remove、contains、length方法
b) 2个数组，求交集、差集、并集
c) 求数组中重复的数
d) 数组去重
e) 数组中最长子序列
f) 求数组中乘积最大的三个数（先排序，再计算）

4. JS 面向对象，ES5 VS ES6中类的概念以及写法
实例属性、方法
静态属性、方法
私有方法

5. 异步编程方案

a) callback
b) promise
c) generator
d) async/await


## CSS基础

1. position 有哪些属性?
2. BFC
3. Container block
4. 在 html 中从上到下有3个 div，每个div的宽高都是100px，请问这3个div在浏览器中是如何排列的？
问题2： 如果给第2个div设置`position:absolute`属性，这时候怎么怎么排列？
5. css权重问题
```html
<div class="color1 color2"></div>
```

```css
.color1 {
  color: red;
}

.color2 {
  color: green;
}
```
6. 如何书写、组织CSS？ 如何避免命名冲突，样式覆盖问题？
  - CSS Modules

7. CSS左边固定，右边可变的布局实现方法；要求在源码顺序中左边必须在前。


## 前端工程化

1. CDN调优、搭建

2. http缓存
- 协商缓存
- 强缓存

3. url request 流程
- DNS解析

4. 如何管理js代码？模块化方案了解哪些？

AMD
CMD
CommonJS

5. 遇到过哪些兼容性问题，怎么解决的？

a) CSS兼容
b) JS API兼容
3) HTML兼容


## web安全

1. XSS
2. CSRF


## Node.js

1. node.js特点
a) error first callback
b) 异步、非阻塞、高并发



### 前端工程化的问题

1. Webpack

a) 核心概念
b) 插件机制
c) loader机制

```
1. __webpack_require__
2. webpackJsonp
3. 如何实现按需打包？
4. 按需加载？
5. 代码拆分？
6. TreeShaking
7. hoist
```

2. Babel

a) 如何写一个 Babel 插件？



### React
1. React 声明组件的方式和区别
2. 新版本React新增的API
3. 数据流管理


### 谈谈 Vue 和 React 自己的理解

1. 数据绑定方式
2. cli 方式
3. 数据管理方式


### 做过的最有挑战性的一个项目，交互场景多的是什么？


