import { promisify } from 'util'
import { resolve as r } from 'path'
import { readFile, writeFileSync as wfs } from 'fs'
import * as qs from 'querystring'

async function init() {
   let data = await promisify(readFile)(r(__dirname, '../package.json'))
   console.log('@init-data: ', data.toString())
}

function tail(i) {
  if (i > 3) return i
  console.log('@@修改前: ', i) 
  tail(i+1)
  console.log('@@@修改后: ', i)
}

// tail(0)

function test() {
   let a =[1,2]
   let c = a[2]
   console.log(a[1])
}
// init()
test()
