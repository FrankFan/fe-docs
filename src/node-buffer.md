# Buffer in Node.js

```js
// buffer 构造方法
new Buffer('Hello 你好');
new Buffer([1,2,3,4])
new Buffer('12345678')
new Buffer(8)


// buffer 实例方法
buffer[index]
buffer.length
buffer.write(string, offset=0, encoding='utf-8')
buffer.toString(encoding, start=0, end=buffer.length)
buffer.copy(target, tStart, sStart, sEnd=buffer.length)
buffer.slice(start, end)
buffer.compare(otherBuffer)
buffer.equals(otherBuffer)
buffer.fill(value, offset, end)

// 静态方法
buffer.isBuffer(buf)
buffer.compare(target, srouce)
```

## Stream

```js
// cat *.js | grep http

```