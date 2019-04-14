# CSS

CSS 的全称是  Cascading Style Sheet，中文名是级联样式表，也有叫做层叠样式表的，主要是用来控制网页的显示风格。


## CSS文档流

HTML的布局就是基于文档流模型，所谓的文档流，指的是页面在排版布局过程中，元素会按照从左到右、从上到下的顺序流式排列。脱离文档流就是元素打破了这个排列顺序，脱离了这个布局规则。

脱离文档流的方式有2种：浮动和定位。

float的值为left、right的元素脱离文档流，none的没有脱离文档流。
position的值为absolute、fixed的元素脱离文档流，static、relative没有脱离文档流。

HTML可以分为块级(block)元素和内联(inline)元素(也叫行内元素)2种：块级元素独占一行，内联元素不独占一行。

块级元素的特点：

1. 总是在新行上开始，占据一整行
2. 高度、行高以及内外边距都可以设置
3. 宽度始终与浏览器的宽度一致，与内容无关
4. 它可以容纳内联元素和其它块级元素
5. 常见的块级元素有 `div、h1~h6、ul、li`等

内联元素的特点：

1. 和其它的元素都在一行上
2. 高度、行高以及内外边距部分可改变，行内元素的margin和padding属性,水平方向的padding-left,padding-right,margin-left,margin- right都产生边距效果,但竖直方向的padding-top,padding-bottom,margin-top,margin-bottom却不会产生边距效果
3. 宽度只与内容有关，
4. 只能容纳文本或者其它内联元素
5. 不可以设置高度，其宽度随着内容增加，高度随着字体大小改变
6. 如果想让一个元素可以设置宽度高度，又让它以行内形式显示，我们可以设置display的值为inline-block
7. 常见的内联元素有 a、span、等


## CSS盒模型

- 以日常生活中见到的盒子作为比喻来举例——由内容(content)、内边距(padding)、边框(border)、外边距(margin)组成。
- CSS盒子模型就是在网页设计中经常用到的CSS技术所使用的一种思维模型。
- 盒子的宽高是根据border开始计算的，不是根据content计算的。推荐border-box `box-sizing: border-box|content-box`


## 布局

###  一行一列

宽度固定：margin: 0 auto;

宽度不固定（自适应）：width 百分比


### 一行两列

#### 一列定宽，一列不固定（自适应）

![](https://ws1.sinaimg.cn/large/006tNc79ly1fqdslgbmb1j30bk04q3yq.jpg)

1. position:absolute

   ```html
   <div class="layout">
     <div class="content">content: 正常文档流</div>
     <div class="nav">nav: absolute</div>
   </div>
   ```

   ```css
   @use postcss-nested;
   .layout {
     height: 500px;

     .content {
       height: 5000px;
       background: #cc9;
       margin-left: 200px; /* 换成padding-left 也可以 */
     }

     .nav {
       position: absolute;
       top: 0;
       left: 0;
       height: 5000px;
       width: 200px;
       background: #9c6;
     }
   }
   ```

2. float

   ```html
   <div class="layout">
     <div class="nav">nav</div>
     <div class="content">content</div>
   </div>
   ```

   ```css
   body {
     margin: 0; /* reset body agent style */
   }
   .layout {
     height: 600px; /* 为了好看 */
   }

   .layout .nav {
     height: 100%;
     width: 200px;
     background: #696;
     float: left;
   }

   .layout .content {
     height: 100%;
     background: #fc9;
   }
   ```

#### 2列宽度都不固定 width 百分比

#### 2列宽度都固定 直接width



### 一行三列

*** 1. 布局：三列结构布局， 要求左右2列宽度固定，中间列宽度自适应。

在2列的基础上进行变换，常见的形式有：

1）宽度固定，三列等分

- width:33.33333%

2）宽度不固定，第一列、第三列宽度固定，中间列自适应

- 双飞翼
- 圣杯布局












## BFC


### 定义

块级格式化上下文， Block Formatting Context，它会生成一个独立渲染区域，不影响这个区域外面的元素，同时也不受外面元素的影响。

### BFC布局规则

- 内部的Box会在垂直方向，一个接一个的放置
-





# CSS3动画

`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

animation-name  指定要绑定到选择器的关键帧的名称
animation-duration  动画指定需要多少秒或毫秒完成
animation-timing-function 设置动画将如何完成一个周期
animation-delay 设置动画在启动前的延迟间隔。
animation-iteration-count 定义动画的播放次数。
animation-direction 指定是否应该轮流反向播放动画。
animation-fill-mode 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
animation-play-state  指定动画是否正在运行或已暂停。



参考：
http://www.runoob.com/cssref/css3-pr-animation.html

如何让你的CSS3动画更具吸引力
https://webdesign.tutsplus.com/zh-hans/tutorials/adding-appeal-to-your-animations-on-the-web--cms-23649



# CSS Modules


1.关于margin和padding属性

1）若属性连起来写，则根据顺时针按上、右、下、左的顺序规则缩写；

2）当上和下、左和右的属性值一致时，可简写为：margin: 40px 50px;

3）当上下左右的属性值都一致时，可简写为：margin:60px;

4）当左右的属性值一致、上下的属性值不一致时，可简写为 margin: 40px 20px 50px;--->上 左右 下；


