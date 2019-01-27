

// https://github.com/nodejh/nodejh.github.io/issues/23
// 校验 promise.all

// const p1 = Promise.resolve(3);
// const p2 = Promise.reject(2);
// const p3 = new Promise((a, b) => {
//   setTimeout(() => {
//     a();
//   }, 0, 'foo');
// });

// function testAll() {
//   Promise.all([p1, p2, p3])
//   .then((values) => {
//     console.log(values); // 永远不会走到这里
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }


function testRace() {
  Promise.race([p1, p2, p3])
    .then(values => {
      console.log(values);
    })
    .catch(err => {
      console.log(err);
    });
}

// testAll(); // 2
// testRace();


// testAllCatch()

// function testAllCatch() {
//   const p1 = Promise.resolve(3).catch(err => {
//     return err;
//   });
//   const p2 = Promise.reject('error').catch(err => {
//     console.log(err);
//     return err;
//   });
//   const p3 = new Promise((a, b) => {
//     setTimeout(a, 100, 'foo');
//   }).catch(err => {
//     return err;
//   });
//   return Promise.all([p1, p2, p3])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }



// https://blog.csdn.net/chaos_hf/article/details/80150911
// https://www.jianshu.com/p/b4d8085e84bd

var data = [{
  id: 100,
  name: '上海',
  children: [{
    id: 101,
    name: '浦东',
  },{
    id: 102,
    name: '长宁',
  }]
},{
  id: 200,
  name: '杭州',
  children: [{
    id: 201,
    name: '西溪',
  },{
    id: 202,
    name: '西湖',
  }]
}]


function find(data, id) {
  data.forEach(item => {
    if (item.id === id) {
      return item.name;
    }
    item.children.forEach(item2 => {
      if (item2.id === id) {
        return item2.name;
      }
    })
  })
}

// var a = find(data, 202);
// console.log(a);

/**
 * 深度优先遍历 递归实现
 * @param {array} tree
 */
function deepSearch(tree) {
  tree.forEach(item => {
    console.log(item.id);
    if (item.children && item.children.length > 0) {
      deepSearch(item.children);
    }
  });
}

/**
 * 深度优先遍历 非递归实现
 * @param {array} tree
 */
function deepSearch2(tree) {
  var stack = [];
  stack = stack.concat(tree);

  while (stack.length) {
    var tmp = stack.shift();
    if (tmp.children) {
      // 当前节点有子节点时，将子节点放到当前的栈的前面
      stack = tmp.children.concat(stack);
    }
    console.log(tmp);
  }
}

// deepSearch(data);
// deepSearch2(data);


// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// new Promise(a => {
//   console.log('promise inner');
//   a();
// }).then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');




function testEventLoop() {
  async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");

}
async  function async2() {
   console.log( 'async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
},0);
async1();
new Promise(function (a) {
    console.log("promise1");
    a();
}).then(function () {
    console.log("promise2");
});
console.log('script end');

}

testEventLoop();