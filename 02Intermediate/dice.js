// generate random number, basically will be helpful when you want to add something like roll a dice kind of thing

// const numOne = 20.0
// const numTwo = 7

// const result = 22 / 7
// console.log(result.toFixed(2))
// let floatResult = result.toFixed(2)
// console.log(Math.ceil(floatResult))

// console.log(Math.floor(Math.random() * 5 + 4))
// specify the lower and upper limit
let upper = 10
let lower = 5

// we generalise the formula here
let myRandomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower

console.log(myRandomNumber)
