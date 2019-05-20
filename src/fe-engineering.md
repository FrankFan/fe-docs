# 前端工程化

# npm scripts

`npm scripts`语法的规则如下：
`npm run <command> [-- <args>]`

注意`--`不可以省略，因为它用来区分传给`npm`的参数还是传给脚本的参数。

比如你有如下`package.json`文件：

```js
"scripts": {
    "grunt": "grunt",
    "server": "node server.js"
}
```

以下命令是相同的效果：

`grunt task:target` => `npm run grunt -- task:target`

`node server.js --port=3000` => `npm run serve -- --port=3000`

`node.js`通过`process.argv`全局对象对外提供了获取命令行参数的方式，但这是一个`low-level`的API，使用起来不是很方便。

为了获取命令行参数，可以通过[yargs](https://github.com/yargs/yargs)、[minimist](https://github.com/substack/minimist)等`parser`命令行参数的工具方便得到。



### 参考

- [Node.js 命令行程序开发教程
](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)

- [npm scripts 使用指南
](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

- [2018 年了，你还是只会 npm install 吗](https://segmentfault.com/a/1190000013962514)

