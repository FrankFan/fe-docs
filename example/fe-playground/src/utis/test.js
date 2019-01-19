/**
 * 判断一个字符串是否是回文
 * 设置一个标志位，循环判断字符串的首尾、第二位和倒数第二位...以此类推， 是否相同
 * 若有不同，则为非回文
 */
function huiwen(str) {
  if (str.length === 0) {
    return;
  }
  let flag = true;
  const arr = str.split('');
  const length = arr.length;
  let i = 0;
  let j = length - 1;
  for(; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) {
      flag = false;
    }
  }
  return flag;
}

// console.log(huiwen('level'));
// console.log(huiwen('noon'));
// console.log(huiwen('good'));
// console.log(huiwen('牛奶奶牛'));

/**
 * https://juejin.im/entry/5a3754ad51882512b72fc1f2
 * 给一串数字添加千分位
 * 利用正则表达式
 * https://regexr.com/
 */
function toMoney(num) {
  return ('' + num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

console.log(toMoney(12345678));
