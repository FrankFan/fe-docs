/**
 * http://www.dengzhr.com/frontend/1065
 *
 * 思路：
 * 1. 分析下Location对象
 * 2. 写几个API方法：
 *  parse
 *  getQueryString 不同的实现方式
 *
 * 3. 增加 UT
 *
 */


/**
 * parse query string
 * @param {string} name query name
 * @example http://localhost/index.html?q1=abc&q2=efg&q3=h
 * https://blog.csdn.net/wqq1018893786/article/details/73895250
 */
export function parse(url) {
  let queryObj = {};
  const reg = /[?&]([^=&#]+)=([^&#]*)/g;
  let queries = url.match(reg);
  if (queries) {
    for(const i in queries) {
      const query = queries[i].split('=');
      const key = query[0].substr(1);
      const value = query[1];
      queryObj[key]
        ? queryObj[key] = [].concat(queryObj[key], value)
        : queryObj[key] = value;
    }
  }
  return queryObj;
}

/**
 * getQueryByName
 * @param {string} url
 * @param {string} name
 * @description 使用 parse 方法
 */
export function getQueryByName(url, name) {
  const queryObj = parse(url);
  return queryObj[name] || '';
}

/**
 * getQueryByName2 by split
 * @param {string} url
 * @param {string} name
 */
export function getQueryByName2(url, name) {
  const reg = new RegExp('[?&]' + name + '=([^&#]*)');
  const query = url.match(reg);
  return query ? query[1] : '';
}

/**
 * getQueryByName3 by split
 * @param {string} url
 * @param {string} name
 * http://www.dengzhr.com/frontend/1065  split 法
 */
export function getQueryByName3(url, name) {
  let queryObj = {};
  const qsStr = (url.split('?') && url.split('?').length > 1) ? url.split('?')[1] : '';
  const pairs = qsStr.length > 0 ? qsStr.split('&') : [];
  for (let i = 0; i < pairs.length; i++) {
    const item = pairs[i].split('=');
    const name = decodeURIComponent(item[0]);
    const value = decodeURIComponent(item[1]);
    queryObj[name] = value;
  }
  return queryObj[name] || '';
}

// https://www.cnblogs.com/Wayou/p/things_you_dont_know_about_frontend.html

export function parseUrl(url) {
  let a = document.createElement('a');
  a.href = url;
  return {
    source: url,
    // protocal: a.protocol.
  };
}


