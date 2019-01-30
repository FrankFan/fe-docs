function jsonp(url, timeout, callback) {
  const funcName = generateJsonpCallback();
  window[funcName] = callback;
  const script = document.createElement('script');
  script.src = `${url}?callback=${funcName}`;
  script.id = funcName;
  script.type = 'text/javascript';
  document.body.appendChild(script);
  console.log(`timeout default is ${timeout}`);
  setTimeout(() => {
    removeScript(funcName);
    removeFunc(funcName);
  }, timeout)
}

function generateJsonpCallback() {
  return `jsonpcallback_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function removeScript(id) {
  document.body.removeChild(document.getElementById(id));
}

function removeFunc(name) {
  delete window[name];
}

jsonp('http://localhost:5000', 3000, function(res) {
  console.log(res);
  const text = document.createTextNode(res.data);
  document.body.appendChild(text);
});

