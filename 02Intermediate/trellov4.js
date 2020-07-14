// const myTodos = ['Buy Bread', 'Go to Gym', 'Learn Javascript']
// console.log(myTodos.indexOf('Buy Bread'))

const newTodos = [{
  title: 'Buy Bread',
  isDone: false
},
{
  title: 'Buy books',
  isDone: false
},
{
  title: 'Buy Course',
  isDone: true
}]

// const index = newTodos.findIndex(function (todo, index) {
//   return todo.title === 'Buy Bread'
// })

// console.log(index)

// method one
// const findTodo = function (todos, title) {
//   const index = newTodos.findIndex(function (todo, index) {
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })

//   return todos[index]
// }

// const printMe = findTodo(newTodos, 'Buy course')
// console.log(printMe)

// method two
const findTodo = function (todo, title) {
  const titleReturned = todo.find(function (todos, index) {
    return todos.title.toLowerCase() === title.toLowerCase()
  })
  return titleReturned
}
const printMe = findTodo(newTodos, 'Buy Books')
console.log(printMe)
