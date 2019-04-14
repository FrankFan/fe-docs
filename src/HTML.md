# HTML

HTML(HyperText Markup Language)，一种超文本标记语言，用于网页的创建和其他信息在浏览器中的显示。它的语法比较简单，基本上是一系列标签（也称为元素）组成的。这些标签可以用来表示文字、图片、多媒体等。

HTML是由Tim Berners-Lee于1991年提出的，同时他还是第一个浏览器的发明者。

后面经理多次版本更新，直到1997年的4.0版和1999年的4.01版。

2012年，具有划时代意义的HTML5技术由WHATWG和W3C推荐位候选规范。

HTML5包含了一系列的标准，一共包含 10 个大的类别，它们分别是：
- 离线 offline
- 存储 storage
- 连接 connectivity
- 文件访问 file access
- 语义性 semantics
- 音频和视频 audio/video
- 3D和图形 3D/graphics
- 展示 presentation
- 性能 performance
- 其他 numts and bolts


### 对html5语义化的理解

1. 标签语义化，比如header、footer、nav、aside、article、section等；
2. 新增了很多表单元素，比如email、url等，去除了center等样式标签，还去除了有性能问题的frame、framesetd等标签。
3. 新增了很多API，比如获取用户地理位置信息的navigator.geolocation
4. websocket
  - websocket是一种协议，可以让我们建立客户端到服务器端的全双工通信，这就意味着服务器端可以主动推送数据到客户端

### html块级元素和行内元素

1. 块级元素(block element)：浏览器默认情况下，块级元素会另起一行，并尽可能的充满整个容器（默认宽度是容器的100%），块级元素可以包含行内元素和和其它块级元素，相比于行内元素可以创建更复杂的大型结构。

块级元素举例：

- `div、article、aside、footer、p、section、h1-h6、ul、ol、table等`

2. 行内元素(inline block)：行内元素不会另起一行，只会占据它对应的标签的边框所包含内容的空间
行内元素举例：
- `input、label、button、select、textarea、span、em、img、br、a等`

### `cookie、session、sessionStorage、localStorage`的区别

- cookie是客户端的，cookie随着浏览器的请求一起发送到服务器端，有一定的到期时间，到了过期时间自动消失。cookie大小有限制，通常是4kb
- session是服务端的，sessionId是由cookie存储的
- sesstionStorage和webStorage是存储在客户端本地的，ls只要用户不主动删除就不会消失，ss存在的是一个会话期，一旦浏览器关闭了该页面的会话，ss也就消除了。

### 浏览器的渲染过程是怎样的？

1）先获取html，然后构建dom树

2）其次根据css构建render树，render树种不包含定位和几何信息

3）最后构建布局树，布局是含有元素定位信息和几何信息的

### 重绘、回流 repaint， reflow

- 浏览器的重绘指的是改变每个元素外观时所触发的浏览器行为，比如颜色，背景等样式发生了改变而进行的重新构造新外观的过程。重绘不会引发页面的重新布局，不一定伴随着回流

- 回流指的是浏览器为了重新渲染页面的需要而进行的重新计算元素的几何大小和位置的，他的开销是非常大的，回流可以理解为渲染树需要重新进行计算，一般最好触发元素的重构，避免元素的回流；比如通过通过添加类来添加css样式，而不是直接在DOM上设置，当需要操作某一块元素时候，最好使其脱离文档流，这样就不会引起回流了，比如设置`position：absolute`或者`fixed`，或者`display：none`，等操作结束后在显示。







## DOM 模型


## URI

![](./imgs/url.png)


```js
function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf("?") + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2){
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}
```

