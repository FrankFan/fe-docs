## JSONP
JSONP
全称 JSON with Padding，用于解决AJAX跨域问题的一种方案。

### 原理

由于同源策略的限制，浏览器只允许XmlHttpRequest请求当前源（域名、协议、端口）的资源，而对请求script资源没有限制。通过请求script标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，这种跨域的数据的方式被称为JSONP。


