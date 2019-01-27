import {
  unique,
} from './arrayUtil';

/**
 * 求一个字符串中出现次数最多的字符
 * @param {string} str
 * @example 'abz901idad8anziaqa2a'
 * @returns 'a'
 */
export function getMaxDuplicate(str) {
  if (!str) {
    return new Error('params required');
  }
  if(str.length === 1) {
    return str;
  }
  let obj = {};
  str.split('').forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  });
  let maxCount = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (maxCount < value) {
        maxCount = value;
      }
    }
  }
  return maxCount;
}

/**
 * 判断一个字符串是不是回文
 * @param {string} str
 */
export function hiuwen(str) {
  if (!str) {
    return new Error('params required');
  }
  return str === str.split('').reverse().join('');
}

/**
 * 求N阶斐波那契数列
 * @param {number} n 阶
 */
export function fibonacci(n) {
  let fibarr = [];
  let i = 0;
  while (i < n) {
    if (i <= 1) {
      fibarr.push(i);
    } else {
      fibarr.push(fibarr[i - 1] + fibarr[i - 2]);
    }
    i++;
  }
  return fibarr;
}

/**
 * 求一个正数组中的最大差值
 * @param {array} arr
 */
export function getMaxDiff(arr) {
  let result = 0;
  let uniqueArr = unique(arr);
  var sortedArr = uniqueArr.sort((a, b) => { return b -a });
  result = sortedArr[0] - sortedArr[sortedArr.length - 1];
  return result;
}

/**
 * 随机生成指定长度的字符串
 * @param {number} n 位数
 */
export function getRandomStrByNum(n) {
  let randomString = '';
  let base = 'abcdefghijklmnopqrstuvwxyz1234567890';
  for (let i = 0; i < n; i++) {
    randomString += base.charAt(Math.floor(Math.random() * base.length));
  }
  return randomString;
}