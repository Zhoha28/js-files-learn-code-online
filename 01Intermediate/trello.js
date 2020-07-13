const myTodos = []

myTodos.push('Learn Javascript')
myTodos.push('learn React')
myTodos.push('Do something')

myTodos.forEach(function (todo, index) {
  console.log(index + 1 + ' ' + myTodos[index])
})

console.log('Now the assignment method')
for (let i = 0; i < myTodos.length; i++) {
  console.log(`${i + 1} ${myTodos[i]}`)
}
