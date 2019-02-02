// https://abdulapopoola.com/2013/03/12/design-patterns-pub-sub-explained/
// https://idiotwu.me/going-async-with-javascript/
// https://mp.weixin.qq.com/s/wNyRqy6xMn5rWwodYXZfYg

var makePubSub = function() {
  var callbacks = {};

  var publish = function() {
    // convert arguments object into real array
    var args = Array.prototype.slice.call(arguments, 0);
    // extract the first event name
    var ev = args.shift();

    if(!callbacks[ev]) return;
    var list = callbacks[ev];

    for (var i = 0; i < list.length; i++) {
      list[i].apply(this, arguments);
    }
    return this;
  };

  var subscribe = function(ev, callback) {
    // check if ev is already registered
    // if not then create an array entry for it
    if (!callbacks[ev]) {
      callbacks[ev] = [];
    }
    callbacks[ev].push(callback);
    return this;
  };

  return {
    pub: publish,
    sub: subscribe,
  }
};

var event = makePubSub();
event.sub('alert', function() {
  console.log('hello');
});
event.sub('alert', function() {
  console.log('world');
});

event.pub('alert');