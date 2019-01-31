## ES5 Inherit


JS 是一种面向对象语言。object 是对象， array 是对象， function 也是对象
JS 不是 一种基于class的语言。 你可以说：“我在 ES6 中见过 class 和 extends 关键字”， 但是那只是一种语法糖而已。
JS 不像 Java 一样基于 class， 而是基于 prototype 的。

使用 ES5 语法的话，有两种方式创建「类」

* 对象字面量方式
* 通过构造函数的方式

使用字面量对象的话，你的class看起来是这样的:

```js
var myClass = {
  myAttribute: 'foo',
  myMethod: function() {
    return 'bar';
  }
};

```

使用构造函数的话， 你的class看起来像这样：

```js
function MyClass() {
  this.myAttribute = 'foo';
  this.myMethod = function() {
    return 'bar';
  }
}

```

当然，这2种方式有一些区别。使用对象字面量的方式，你会得到一个单例的对象，在某种程度上所有的属性都是静态的。
使用构造函数的话，你可以生成对象实例，实例的属性通过this关键字传入。例如：

```js
var myInstance = new MyClass();
console.log(myInstance);
console.log(myInstance instanceof MyClass);
```

这个实例在它自己的属性上有"myAttribute"和"myMethod"属性。这意味着这些属性是和实例绑定在一起的。
如果你想调用这个方法，你可以这样做：

```js
myInstance.myMethod();
```

so far so good. 但是，使用我们刚才写的代码会有一些问题。对于每个 instance ， `this.myMethod` 将会被创建一次又一次，并且每次都是相同的。一种更好的方式来处理这个问题就是把method放到`prototype`中，这样的话method就可以被多个实例共享了。

```js
function MyClass() {
  this.myAttribute = 'foo';
}

MyClass.prototype.myMethod = function () {
  return 'bar';
}
```

这样就好多了！但是`myMethod`还是和`MyClass`的实例绑定在一起了。

现在我们希望创建一些静态方法。静态方法就是和class绑定、而不是和instance绑定的方法。

```js
MyClass.myStaticMethod = function() {
  return 'baz';
}
```

Nice. 这里我想验证一下是否可以在静态方法中调用实例方法，代码如下：

```js
MyClass.myStaticMethod = function() {
  myMethod();
}
```

很显然，这样会有问题。实际上`myMethod`不在当前的作用域，也不在外层作用域。 因为 `myMethod` 被声明在另外一个函数的里面（构造函数）并且没有被返回，所以该方法对外不可见。除此之外，该方法被放在了 MyClass 的 prototype中。 这意味着该方法对于全局不可用，只对 MyClass 的实例可访问。当你学会这样思考以后，就会觉得日常开发中的一些操作很有道理。比如，你想调用数组的方法（存在于Array.prototype上），这样调用是不对的：

```js
push('test);
reverse();
includes('a');
```

必须在数组的实例上调用这些方法：

```js
[].push('test');
['foo', 'bar', 'baz'].reverse();
['a', 'b'].includes('a');
```








完整代码如下：

```js
function MyClass() {
  this.myAttribute = 'foo';
}

MyClass.prototype.myMethod = function () {
  return 'bar';
}

MyClass.myStaticMethod = function() {
  return 'baz';
}


// MyClass.myMethod(); // TypeError: MyClass.myMethod is not a function

var instance = new MyClass();

// 实例属性
console.log(instance.myAttribute); // foo

// 实例方法
console.log(instance.myMethod()); // bar

// 静态方法
console.log(MyClass.myStaticMethod()); // baz
```

[https://stackoverflow.com/questions/43474967/call-es5-class-method-from-static-method](https://stackoverflow.com/questions/43474967/call-es5-class-method-from-static-method)