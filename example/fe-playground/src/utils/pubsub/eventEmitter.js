// Polyfill EventEmitter
// https://gist.github.com/mudge/5830382


var EventEmitter = function () {
  this.events = {};
}

EventEmitter.prototype.on = function (event, listener) {
  if (typeof this.events[event] != 'object') {
    this.events[event] = [];
  }
  this.events[event].push(listener);
};

EventEmitter.prototype.off = function (event, listener) {
  var idx;

  if (typeof this.events[event] === 'object') {
    idx = this.events[event].indexOf(listener);
    if (idx > -1) {
      this.events[event].splice(idx, 1);
    }
  }
};

EventEmitter.prototype.emit = function (event) {
  var i,
    listeners,
    length,
    args = [].slice.call(arguments, 1);

  if (typeof this.events[event] === 'object') {
    listeners = this.events[event].slice();
    length = listeners.length;

    for (i = 0; i < length; i++) {
      listeners[i].apply(this, args);
    }
  }
};

EventEmitter.prototype.once = function(event, listener) {
  this.on(event, function g() {
    this.off(event, g);
    listener.apply(this. arguments);
  })
};

// test

var em = new EventEmitter();

em.once('test', function() {
  console.log('1');
});

em.emit('test');
em.emit('test');
em.emit('test');
