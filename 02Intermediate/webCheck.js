const userEmail = 'gmail123'
const password = '123assasa4'

const userChecker = function (myString) {
  if ((myString.includes(123)) && (myString.length > 6)) {
    return true
  }
  return false
}

const passCheccker = function (myString) {
  if ((myString.includes(123)) && (myString.length > 6)) {
    console.log('You cannot have 123')
  }
}
passCheccker(password)
