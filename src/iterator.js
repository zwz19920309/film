// 迭代器
function makeInterator(arr) {
  let index = 0  
  return {
    next: ()=> {
      if (index < arr.length) {
        return { value: arr[index++], done: false }
      } else {
        return { done: true }
      }
    }
  }
}
const arr = ['吃顿', '睡觉', '打豆豆']
const it = makeInterator(arr)
console.log('吃饭:', it.next().value)
console.log('睡觉:', it.next().value)
console.log('打豆豆:', it.next().value)
console.log('最后:', it.next().done)


function *makeInteratorTest(arr) {
  for(let n=0; n< arr.length; n++) {
    yield arr[n]
  } 
}

const gen = makeInteratorTest(arr)
console.log('吃饭:', gen.next().value)
console.log('睡觉:', gen.next().value)
console.log('打豆豆:', gen.next().value)
console.log('最后:', gen.next().done)