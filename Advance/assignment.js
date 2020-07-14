const todos = [{
  title: 'Buy Bread',
  isDone: true
}, {
  title: 'Go to Gym',
  isDone: true
}, {
  title: 'Buy course',
  isDone: true
},
{
  title: 'Go to jk',
  isDone: false
},
{
  title: 'school',
  isDone: false
},
{
  title: 'learn React',
  isDone: false
}
]
const todoNotDone = todos.filter((todo) => todo.isDone === false)

todoNotDone.forEach(todoNotDone => console.log(todoNotDone.title))
// console.log(todoNotDone)
