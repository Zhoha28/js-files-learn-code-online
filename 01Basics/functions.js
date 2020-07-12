// console.log('John doe');

// let sayHello
// sayHello = function(firstName, secondName){
//     console.log('Greetings');
//     console.log(`Hey, welcome aboard, ${firstName} ${secondName}`);
    
// };

// // console.log(sayHello);
// sayHello('John','Doe')


let addition = function (n1, n2) { 
    return n1+n2
}
// let result = addition(4,2)
console.log('addition is ' + addition(4,2));

//setting default params - that come only when you don't pass anything
let guestUser = function(name='unknown user', courseCount=0){
    return 'Hello' + ' '+name +', your course count is '+courseCount;
}
console.log(guestUser('John',0))
//always try to reduce the lOCs as much as possible