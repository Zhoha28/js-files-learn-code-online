const myYoutubeVideo = {
  title: 'Loos in JS',
  videoLength: '15',
  videoDescription: 'This is a video about JavaScript'
}

console.log(` ${myYoutubeVideo.title} by ${myYoutubeVideo.videoLength}`)
// check difference between array and objects

// assignment object author name, price, desc

const locCourse = {
  author: 'Hitesh',
  courseName: 'JS all new',
  coursePrice: 599,
  courseDescription: 'This is a brand new course'
}
locCourse.author = 'Zhoha'

console.log(`Hey guys, check out the new course ${locCourse.courseName} by author ${locCourse.author}. It is available at Rs. ${locCourse.coursePrice} only`)
