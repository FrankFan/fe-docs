export function unique(arr) {
  let uniqueArr = [];
  arr.forEach(item => {
    if(!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}

export function unique2(arr) {
  let uniqueArr = [];
  arr.forEach(item => {
    if (uniqueArr.indexOf(item) < 0) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}

export function unique3(arr) {
  let uniqueArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });

  return uniqueArr;
}

export function intersect(arr1, arr2) {
  let result = [];
  arr1.forEach(item => {
    arr2.forEach(element => {
      if (item === element && result.indexOf(item) < 0) {
        result.push(item);
      }
    });
  })
  return result;
}

export function intersect2(arr1, arr2) {
  let result = [];
  arr1.forEach(item => {
    arr2.forEach(element => {
      if (item === element && result.indexOf(item) < 0) {
        result.push(item);
      }
    });
  })
  return result;
}

export function difference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

// 数组中最长子序列


// 求数组中乘积最大的三个数


// webpack插件机制，写一个webpack插件


// CDN调优、搭建

// http缓存
// - 协商缓存
// - 强缓存


// 一次 url request 完整流程
// - DNS解析

// Web 安全
// XSS
// CSRF


// node
// - error first callback



