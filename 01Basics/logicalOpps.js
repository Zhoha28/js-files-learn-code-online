var foodChoice = 'pizza'
// && - And operator both needs to be true
// || - OR operator either a or b, only one, not both. One side needs to true -_-
// ! not operator or reverse phsycology as said in bootcamp

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (!isVerified && isLoggedIn && hasPaymentToken) {
    console.log('you are verified sir and you have acess to paid course')
}
 else if (isGuest || isVerified)
{
    console.log('you can access previews as a guest')
}
else{
    console.log('Please contact admin, something went wrong')
}
