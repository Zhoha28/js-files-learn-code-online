const myTodos = {
  day: 'Monday',
  meetings: 0,
  meetDone: 0,

  addMeeting: function (num = 0) {
    this.meetings = this.meetings + num
  },
  meetingDone: function (num = 0) {
    this.meetDone = this.meetDone + num
  },

  summary: function () {
    return ` You Have ${this.meetings - this.meetDone} meetings today`
  },
  resetDay: function () {
    this.meetings = 0
    this.meetDone = 0
  }

}

myTodos.addMeeting(4)

myTodos.meetingDone(2)
console.log(myTodos.summary())

myTodos.resetDay()
console.log(`After resetting your day${myTodos.summary()}`)
