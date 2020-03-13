const co = require('co')
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const { promisify } = require('util')
// co(function *(){
//   const res = yield fetch('https://api.douban.com/v2/movie/1291843')
//   const movie = yield res.json()
//   console.log('summary: ', movie)
// })


function run (generator) {
  const iterator = generator()
  const it = iterator.next()
  const promise = it.value
 
  promise.then(data => {
    const it2 = iterator.next(data)
    const promise2 = it2.value
    promise2.then(data2=>{
      iterator.next(data2)
    })
  })
}

// run(function *(){
//   console.log('first---')
//   const res = yield fetch('https://api.douban.com/v2/movie/1291843')
//   console.log('@@test:---')
//   const movie = yield res.json()
//   console.log('summary: ', movie)
// })


function *test(){
  console.log('first---')
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  console.log('@@test:---')
  const movie = yield res.json()
  console.log('summary: ', movie)
}

const it = test()
let res1 = it.next()
// console.log('res1: ', res1)


// function test() {
//   let stat = promisify(fs.stat)
//   let filePath = path.resolve(__dirname, 'iterator.js')
//   console.log('@@filePath: ', filePath)
//   stat(filePath).then(function(data){
//     console.log(data)
//     return data
//   })
// }

// let res = test()
// console.log('@@@res: ', res)
