const http = require('http');
const url = require('url');
const queryString = require('querystring');

const data = {'data':'hello'};
const port = 5000;

// https://github.com/huruji/blog/issues/9


http.createServer(function(req, res) {
  const params = url.parse(req.url);
  if (params.query && queryString.parse(params.query).callback) {
    console.log(params.query);
    const str = queryString.parse(params.query).callback + '(' + JSON.stringify(data) + ')';
    res.end(str);
  }
  res.end(JSON.stringify(data));
}).listen(port);

console.log(`run at http://localhost:${port}/ \r\n`);
