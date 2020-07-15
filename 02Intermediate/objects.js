const myYoutubeVideo = {
  title: 'Loos in JS',
  videoLength: '15',
  videoDescription: 'This is a video about JavaScript'
}

console.log(` ${myYoutubeVideo.title} by ${myYoutubeVideo.videoLength}`)
// check difference between array and objects

// assignment object author name, price, desc

// const locCourse = {
//   title: 'Loos in JS2',
//   videoLength: '10',
//   videoDescription: 'This is a video about JavaScript2'
// }
// locCourse.author = 'Zhoha'

// console.log(`Hey g/uys, check out the new course ${locCourse.courseName} by author ${locCourse.author}. It is available at Rs. ${locCourse.coursePrice} only`)

const changeVideoMinutes = function (myObject) {
  return {
    formatOne: `the time of this video is ${myObject.videoLength + 5} `,
    formatTwo: `the time of this video is ${myObject.videoLength} `

  }
}

const addone = changeVideoMinutes(myYoutubeVideo)
console.log(addone.formatOne)
