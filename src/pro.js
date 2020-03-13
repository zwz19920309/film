function MyPromise(fn) {
  let  callbacks = []  //callbacks为数组，因为可能同时有很多个回调
  this.then = function (onFulfilled) {
    callbacks.push(onFulfilled)
  }
  function resolve(value) {
    // callbacks.forEach(function (callback) {
    //   callback(value)
    // })
    setTimeout(function() {
      callbacks.forEach(function (callback) {
        callback(value)
      })
    }, 0)
  }
  fn(resolve)
}

let my = new MyPromise(function(resolve) {
  let k = 100
  resolve(k)
})

my.then(function(data){
  console.log('@@@data: ', data)
}).then(function(data1){
  console.log('@@@data1: ', data1)  
})