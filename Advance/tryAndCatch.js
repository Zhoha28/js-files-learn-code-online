<<<<<<< HEAD
const convertToRs = (dollar) => {
  if (typeof dollar === 'number') {
    return dollar * 75
  } else {
    throw Error('Amount needs to be a number')
  }
}

// try {
//   const myValue = convertToRs('five')

//   console.log(myValue)
// } catch (error) {
//   console.log(error)
// }

const myValue = convertToRs('five')

console.log('logme')

// by using try and catch block, the program continues even if any function throws and error, and it doesn't freeze
// there are promises that can be used too..
=======
const convertToRs = (dollar) => {
  if (typeof dollar === 'number') {
    return dollar * 75
  } else {
    throw Error('Amount needs to be a number')
  }
}

// try {
//   const myValue = convertToRs('five')

//   console.log(myValue)
// } catch (error) {
//   console.log(error)
// }

const myValue = convertToRs('five')

console.log('logme')

// by using try and catch block, the program continues even if any function throws and error, and it doesn't freeze
// there are promises that can be used too..
>>>>>>> aa11fa515b0c5262d4c467d602aebd6404c4d98a
