//kings problem to understand scope

// let king = 'John'
//supposed to be global

if(true){
    // let king = 'Sam'
    if(true){
        king = 'Ram'    // this is a global variable as you did not specify the scope
        //should not do this, this is dangerous -_-
        console.log(king)
    }
}
if (true) {
 console.log(`i am second part ${king}`)   
}

//ALWAYS USE LET OR VAR