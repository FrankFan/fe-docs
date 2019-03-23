# React.js

## 声明 React 组件的三种方式

React Component 有3种定义方式，分别是 `React.Component`、`React.PureComponent`和`Stateless Functional Component`。推荐尽量使用最后一种，保持简洁和无状态。这是函数，不是Object，没有`this`作用域，是 `pure function`。

比如定义 `App Componet`。

```js
function App(props) {
  function handleClick() {
    props.dispatch({ type: 'app/create' });
  }
  return <div onClick={handleClick}>${props.name}</div>;
}
```

等同于：

```js
class App extends React.Component {
  function handleClick() {
    props.dispatch({ type: 'app/create' });
  }
  return <div onClick={handleClick}>${props.name}</div>;
}
```

## JSX

### Component 嵌套

类似 HTML，JSX 里可以给组件添加子组件。

```js
<App>
  <Header />
  <MainContent />
  <Footer />
</App>
```

### className

`class` 是保留词，所以添加样式时，需用 `className` 代替 `class` 。

```js
<h1 className="test">Hello</h1>
```


### JavaScript 表达式

JavaScript 表达式需要用 {} 括起来，会执行并返回结果。

比如：

```js
<h1>{ this.props.title }</h1>
```

### Mapping Array to JSX

可以把数组映射为 JSX 元素列表。

```js
<ul>
  { this.props.todos.map((todo, i) => <li key={i}>{todo}</li>) }
</ul>
```

### 注释

尽量别用 `//` 做单行注释。

```js
<h1>
  {/* multiline comment */}
  {/*
    multi
    line
    comment
    */}
  {
    // single line
  }
  Hello
</h1>
```

## Props 属性

数据处理在 React 中是非常重要的概念之一，分别可以通过 props、state和 context 来处理数据。

### propTypes

JavaScript 是弱类型语言，所以请尽量声明 propTypes 对 props 进行校验，以减少不必要的问题。

```js
function App(props) {
  function handleClick() {
    props.dispatch({ type: 'app/create' });
  }
  return <div onClick={handleClick}>${props.name}</div>;
}

App.propsTypes = {
  name: React.PropTypes.string.isRequied,
};
```

React 内置的 prop type 有：

- PropTypes.bool
- PropTypes.string
- PropTypes.number
- PropTypes.object
- PropTypes.array
- PropTypes.func

