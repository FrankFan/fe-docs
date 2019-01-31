// https://juejin.im/entry/59a5a194f265da24734447f2
// https://segmentfault.com/a/1190000007665361

function jsonp(url, options = { timeout: 3000}) {
  const timeout = options.timeout;
  let timerId;
  return new Promise((resolve, reject) => {
    const funcName = generateJsonpCallback();
    window[funcName] = (res) => {
      resolve(res);
      timerId = setTimeout(() => {
        removeScript(funcName);
        removeFunc(funcName);
      }, timeout);
    }
    const script = document.createElement('script');
    script.src = `${url}?callback=${funcName}`;
    script.id = funcName;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    // error handling
    script.onerror = () => {
      reject(new Error(`fetch ${url} failed`));
      removeScript(funcName);
      removeFunc(funcName);
      if (timerId) clearTimeout(timerId);
    }
  });
}

function generateJsonpCallback() {
  return `jsonpcallback_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function getSrcUrl(url, data) {
  let _url = _url + (url.indexOf('?') < 0 ? '?' : '&');
  let arrQueryString = [];
  if (typeof data === 'string') {
    arrQueryString.push(data);
  } else {
    for(let key in data) {
      // TODO
      // arrQueryString.push();
    }
  }
}

function removeScript(id) {
  document.body.removeChild(document.getElementById(id));
}

function removeFunc(name) {
  delete window[name];
}

// test
jsonp('http://localhost:5000').then((res) => {
  const text = document.createTextNode(res.data);
  document.body.appendChild(text);
}).catch(error => {
  debugger;
  console.log(error);
});