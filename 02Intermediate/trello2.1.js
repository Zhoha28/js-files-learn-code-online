const myTodo = {
  day: 'Sunday',
  numberOfMeetingsForTheDay: 0,
  meetingsDone: 0
}

const addMeetingForTheDay = function (myTodos, numberOfMeetings = 0) {
  myTodos.numberOfMeetingsForTheDay = myTodos.numberOfMeetingsForTheDay + numberOfMeetings
}

const meetDone = function (mytodo, meets = 0) {
  mytodo.meetingsDone = mytodo.meetingsDone - meets
}

const reportSummaryForTheDay = function (mytodo) {
  const meetLeft = mytodo.numberOfMeetingsForTheDay + mytodo.meetingsDone
  return `You have only ${meetLeft} tasks left for the day.`
}
const resetDay = function (mytodolist) {
  mytodolist.meetingsDone = 0
  mytodolist.numberOfMeetingsForTheDay = 0
}
addMeetingForTheDay(myTodo, 8)
meetDone(myTodo, 1)
const reports = reportSummaryForTheDay(myTodo)

console.log(myTodo)
console.log(reports)
resetDay(myTodo)
console.log(myTodo)
