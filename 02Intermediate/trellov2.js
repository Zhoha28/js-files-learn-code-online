const myTodos = {
  day: 'Monday',
  meetings: 0,
  meetDone: 0
}

const addMeetings = function (todo, meetings = 0) {
  todo.meetings = todo.meetings + meetings
}

const meetDone = function (todo, meet = 0) {
  todo.meetDone = todo.meetDone - meet
}

const resetDay = function (todo) {
  todo.meetDone = 0
  todo.meetings = 0
}

const getSummaryOfDay = function (todo) {
  const meetLeft = todo.meetings + todo.meetDone
  return `You have ${meetLeft} meetings today`
}
addMeetings(myTodos, 2)
addMeetings(myTodos, 4)
addMeetings(myTodos, 3)

meetDone(myTodos, 2)
console.log(myTodos)

const result = getSummaryOfDay(myTodos)
// resetDay(myTodos)
console.log(result)
