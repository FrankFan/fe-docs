# FE-Playgroun

## setting up

基于 react + react-router + babel + webpack + webpack-dev-server 打造的 SPA 实验室。

```
|-src
  |-pages
    |-CSS
      -Center
      -BFC
      -Layout
    |-JS
      -Type
      -Closure
      -Array
|-build
webpack.config.js
```

## CSS

1. 居中问题
2. BFC问题
3. 布局问题

## JS



## 记录

**bundle** 是把所有相关的代码打包成一个单独的文件。

如果你不想要所有的代码打包到一个单独的文件中，可以把分割成多个 bundle， 这些 bundle 在 webpack 术语中就被称为 **chunk**。某些情况下需要你自己定义如何分割代码（使用 entry points 输出到多个文件，并且输出文件类似于： [name].[chunkHash:8].js），在另外一些情况下，webpack 会做这些事情（例如使用 CommonsChunkPlugin 插件）。

**webpack** 是一个高度可配置的现代JavaScript应用程序模块打包器（module bundler）。

Javascript 中的模块可以是 CommonJS 模块， 也可以是 ES6 模块。因为在 webpack 本身只会处理模块，所以所有非js的资源也会被包装成module。因此假如你想使用 .scss、.png 文件的话，你需要在js文件中导入（import、require）他们。


```js
JS: React, Redux, TypeScript/Flow, ES6/7
Styling/UI Libs: emotion, styled-components, inline styles
Testing: Enzyme, Mocha/Jasmine/Jest, Cypress
Build: Webpack, Yarn
Workflow/Styleguide: React Storybook
We also plan to use Relay (+ GraphQL) and React Native in the future.
```