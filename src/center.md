# CSS中如何居中


http://www.cnblogs.com/myzhibie/p/4392947.html


## 对于行内元素来说

水平居中：

`text-align: center`

或：

`margin: 0 auto;`

## 将已知高度的元素垂直居中：

line-height 和 height 设置成一样即可


## 绝对居中方法（水平+垂直居中）



```css
/* 要求元素本身设置高度 */
.absolute-center {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* 位置高度水平垂直居中 一、 局对定位 */
.transform-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 位置高度水平垂直居中 一、 flex box */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```



# css 居中

优先使用flex布局，解决居中问题简单又好用。

```css
.flex-hrz {
  display: flex;
  flex-flow: row wrap;
}

.flex-full {
  flex: 1;
}

.flex-init {
  flex: initial;
}
```

`justify-content` 属性用来指定flex项目在flex容器沿着主轴在当前行的对齐方式。

`align-items`
Flex项目在容器侧轴对齐方式，类似于 `justify-content`，只不过不是水平方向，而是纵向。这个属性可以设置所有flex项目对齐方式，并且包括匿名元素。

参考：
http://www.w3cplus.com/css3/a-visual-guide-to-css3-flexbox-properties.html

## 行内元素水平居中

行内元素（`<span>、<a>、<img>`）要实现水平居中，在行内元素外面包在一个块级元素（`<div>、<li>、<p>`）中，然后在父级元素中的CSS中设置：
```css
#container {
  text-align: center;
}
```


## 块级元素水平居中
想让块级元素（display: block）水平居中，只需将它的左右外边距(margin-left、margin-right)分别设置为`auto`，即可实现块级元素水平居中：
```css
#center {
  margin: 0 auto;
}
```


## 多个块级元素水平居中

要实现多个水平排列的块状元素的水平居中，传统的方法是将要水平排列的块状元素设为display:inline-block，然后在父级元素上设置text-align:center，达到与上面的行内元素的水平居中一样的效果。


```css
#container{
  text-align:center;
}

#center{
  display:inline-block;
}
```

## flex 水平居中
flex布局简单又强大，只需在父级元素上设置：

```css
#container{
  display:flex;
  justify-content:center;
  align-items: center;
}
```

## transform 居中
利用Css3的transform，可以轻松的在未知元素的高宽的情况下实现元素的垂直居中。

核心代码如下：
```css
#container{
    position:relative;
}

#center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```



参考：http://www.cnblogs.com/coco1s/p/4444383.html


