
// const days = ['Mon','tue','wed','thu','fri','sat']

// days.forEach(
//     function(day, index){
//         console.log(`it is ${index}--- ${day}`);   
//     })
// console.log(days.length);

    // for loop
    // for (let i = days.length - 1 ; i >= 0; i--) {  
    //     console.log("The day is " +days[i]);
        
    // }

const myTodos = []

// myTodos.push('Buy bread')
// myTodos.push('Buy samosa')
// myTodos.push('go to gym')
// myTodos.push('Buy chicken')

// myTodos.forEach(function(todo, i) {
   
//     console.log('Your Task for the ' +(i+1) +" day is"+" "+todo);
    
// })

for (let i = myTodos.length - 1 ; i >= 0; i--) {
    myTodos.push('Buy bread')
    myTodos.push('Buy samosa')
    myTodos.push('go to gym')
    myTodos.push('Buy chicken')
    // const todo = myTodos[i];
    console.log("The day is " +myTodos[i]);
}
const todo = ['Eat', 'sleep', 'swim', 'run']
for (let index = 1; index &amp;lt;= todo.length; index++) {    console.log(`you have to ${index}: ${[todo]}`);    }