// const sayHello = function (name) {
//   return 'Hey there, I am here, ' + name + '.'
// }
// console.log(sayHello('sam'))
// backticks are called literals

// convert to arrow function

// 1. remove the funtion keyword and add arrow after parameter
const sayHello = (name) => {
  return `Hey there, I am here, ${name}.`
}
console.log(sayHello('sam'))

// convert to shorthand arrow function

// 1. remove the funtion keyword and add arrow after parameter
// 2. remove curly braces and the return keyword as well
// 3. everything should come on same line
const sayHello2 = (name) => `Hey there, I am here, ${name}.`
console.log(sayHello2('sam1'))

const todos = [{
  title: 'Buy Bread',
  isDone: false
}, {
  title: 'Go to Gym',
  isDone: true
}, {
  title: 'Buy course',
  isDone: false
}]

const todoDone = todos.filter((todo) => todo.isDone === true)
console.log(todoDone)

// assignment
// create a todolist with 3 true 3 false
// not done, filter, print only not done print its title only
