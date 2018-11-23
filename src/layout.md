# 布局

CSS 常用布局

1. 单列布局
  - 定宽
  - 不定宽
2. 多列布局
  - float + margin
  - Position + margin
  - 经典三列布局
    - 圣杯布局（float + position + 负margin + padding）
    - 双飞翼布局（float + 负margin）
3. 居中布局
  - 水平居中
  - 垂直居中



## position

> css 的 position 属性有哪些取值， 它们的行为是什么？

position 属性的常用的取值有 static/relative/absolute/fixed/sticky等
- 默认值是static，没有定位。意味着是按照正常文档流进行排列，会忽略top/right/bottom/left/z-index声明
- relative生成相对定位元素，相对于正常位置进行定位
- absolute是相对于第一个已定位的父元素进行定位,如果没有就相对于 body 定位
- fixed是相对于浏览器窗口定位

## float

float 也是一种布局方式，它定义元素在哪个反向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，以达到图文混排的效果。不过在 CSS 中，任何元素都可以浮动，浮动元素会产生一个块级框，而不论它本身是何种元素。在布局过程中也经常用来使用 float 实现左右并排布局的效果。

本质上，float 属性允许我们把一个元素从正常文档流中移除出来，定位到父元素的左边或者右边。此外，页面上的其他将会围绕在被浮动的元素周围。

最初 float 属性是设计用来实现文字环绕图片效果的。给图片设置float属性，所有围绕图片的内容就会自然的环绕着它。尽管这个功能在图片中用起来很棒，但是 float 属性从来不是用于进行布局和定位的，这样做的的话会带来一些奇怪的问题。

https://learn.shayhowe.com/html-css/positioning-content/

## flex


## BFC — Block formatting context
## IFC — Inline formatting context
