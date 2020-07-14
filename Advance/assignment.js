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

const notDoneTodo = todos.filter(todo => {
  if (todo.isDone === false) {
    console.log(todo.title)
  }
})

// using for each loop

// notDoneTodo.forEach(element => console.log(element.title))

console.log(notDoneTodo)
