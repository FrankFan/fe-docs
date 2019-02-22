// 设计一套面试
/**
 * web前端工程师的竞争力 = web前端知识 + 能力
 * 能力 = 编程能力 + 工程能力 + 架构能力
 */


/**
 * HTML 的一道题
 * 获取页面中DOM元素出现的次数，并进行排序
 */
function getDomObj() {
  let obj = {};
  var doms = document.getElementsByTagName('*');
  Array.from(doms).forEach(item => {
    const tag = item.tagName.toLowerCase();
    obj[tag] = (obj[tag] || 0) + 1;
  });
  return obj;
}

/**
 * 对 obj 进行排序
 * 方法：转成数组排序
 * @param {obj} obj
 */
function sortObj(obj) {
  var sortable = [];
  for(const i in obj) {
    sortable.push([i, domObj[i]]);
  }
  sortable.sort((a, b) => b[1] - a[1]);
  return sortable;
}

var domObj = getDomObj();
var result = sortObj(domObj);


// CSS
/**
 * 1. css的position属性
 * 2. normal flow、
 * 3. containing block、
 * 4. bfc、margin collapse，
 * 5. base line，writing mode，bidi
 *
 */

/**
 * 实例题目
 * 1. 用CSS画三角形，边长不一样的三角形
 * 2. 画自适应宽高的正方形
 * 3. 布局
 *  - 2列布局
 *  - 3列布局
 *  - flex API 理解
 * 4.
 */


// JS
/**
 * 1. 类型
 * 2. API的掌握情况
 *  - getQueryByName
 *  - parseUrl
 * 3. 异步编程的理解 callback Promise Generator async await
 * 4. 模块化的理解 AMD CommonJS ES module
 * 5. prototype
 * 6. scope
 * 7. closure
 * 8. hoist
 * 9. OO 面向对象 实例属性、静态属性、私有属性
 * 10. 异常处理
 * 11. Event loop
 *
 */


/**
 *
 *

// var a = [1,2,3,4,5];
// a.concat(a.slice(3));
// console.log(a);

// var b = [{a: 1}, {a: 2}, {a: 3}];
// b.slice(2)[0].a = 1;
// console.log(b.reduce((s, t) => s+t.a>0));


// var c = typeof (document.querySelectorAll('body'));
// console.log(c);

// var t = [
//     {},[],1, '21', {},[],null,function(){},setTimeout, Object.keys, Array.prototype
// ];

// var s = {};
// t.forEach(tt => {
//     var k = Object.prototype.toString.call(tt).slice(1,-1).split(' ')[1];
//     s[k] = (s[k]||0) + 1;
// });
// console.log(s);

// a. 查找一个字符串中出现次数为奇数的字符
// function checkOdd(arr) {
//     var result = [];
//     var obj = {};
//     arr.forEach(item => {
//         obj[item] = (obj[item]||0) + 1;
//     });
//     for(var i in obj) {
//       var value = aa[i];
//       if(value%2 != 0) {
//         result.push(i);
//       }
//     }
//     return result;

// }

// var strs = ['1','2','1'];
// checkOdd(strs);

// b. 在一个空白页面上创建100个元素，给每个元素一个独立的背景色，点击每个元素时，被点元素背景色保持不变，其他元素的背景色必须全部发生变化，
// 且这100个元素的背景色不能重复

 */


/**
 * 前端框架
 * 1. React
 * 2. Vue.js
 * 3. 有什么区别？
 * 4. 介绍下Virtual dom
 * 5. 介绍下 DOM diff 算法？
 * 6. Web 安全
 * 7. 密码
 */

/**
 * HTTP
 * 1. 列举HTTP Code并说明对应的含义
 * 2. 列举10个常见的 Http headers
 * 3. 缓存机制
 *  - 强缓存
 *  - 协商缓存
 * 4. HTTP 2.0
 */

/**
 * 工程化
 * 1. webpack原理研究情况
 *  - __webpack_require__ 是什么
 *  - webpackJsonp 实现
 *  - code spliting 实现
 * 2. node.js 底层
 *  - 依赖循环加载怎么办？
 *  - 核心库、底层库了解情况
 */