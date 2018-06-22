// var course = new Object();
//
// var course = {
//     title: "JavaScript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function() {
//         return ++course.views;
//     }
// }
//
// console.log(course);


function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  }
}
var courses = [
  new Course("Javascript Essential Training", "Morten Rand-Hendriksen", 1, true, 0),
  new Course("Up and Running with ES6", "Eve Porcello", 1, true, 12345)
];
console.log(courses[1].updateViews());
