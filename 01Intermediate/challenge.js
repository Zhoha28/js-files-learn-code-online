const grade = function (earnedMarks, totalMarks) {

  const percentageMarks = (earnedMarks / totalMarks) * 100
  let grade = ''

  if (percentageMarks > 90) {
    console.log('you got an A')
  } else if (percentageMarks >= 80) {
    console.log('you got a B')
  } else if (percentageMarks >= 70) {
    console.log('you got a C')
  } else if (percentageMarks >= 60) {
    console.log('you got a D')
  } else if (percentageMarks >= 50) {
    console.log('you got a E')
  } else {
    console.log('You Failed!')
  }
  return `your grade is ${grade} and precentage is ${percentageMarks}`
}
console.log(grade('ssaa', 500));


