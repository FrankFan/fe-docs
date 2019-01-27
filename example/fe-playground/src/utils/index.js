// Event loop 详解

// setTimeout(() => {
//   console.log(1);
// }, 0);
// new Promise(function(a,b){
//   console.log(2);
//   for(var i = 0; i < 10; i++) {
//     i === 9 && a();
//   }
//   console.log(3);
// }).then(function(){
//   console.log(4);
// })
// console.log(5);

// 2
// 3
// 5
// 4
// 1


console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
process.nextTick(() => {
  console.log(3);
})
new Promise((a) => {
  console.log(4);
  a();
}).then(() => {
  console.log(5);
})

// 1
// 4
// 3
// 5
// 2
