// //datatype = Array


const superHeroes = [
    'Peter Parker',
   'Kiddo',
   'Spiderman'

]
console.log(superHeroes);
console.log(superHeroes[0]);//first value

console.log(superHeroes[superHeroes.length - 1]);//last value - length of value


// //'' "" `` three ways...
// console.log(`We have ${superHeroes.length} super heroes`);


const numbers = ['one', 'two', 'four' , 'five' , 'six']
numbers[1] = 'something'
console.log(numbers[1]);//replace

// start
//number shift - It removes the first element from the array.
console.log(numbers.shift())//returns what it is going to shift / delete
console.log(numbers);

//unshift - adds something or some value at the start i.e array[0]
numbers.unshift('what?')
console.log(numbers);

//last, push pop

//middle - splice


numbers.splice(1,0, 'different')
console.log(numbers);




