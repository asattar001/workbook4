let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

let less50 = "\n---Courses $50 or less---\n";
let room1 = "---Courses in Classroom 1--- \n";

for (let course of courses) {
  if (course.CourseId == "PROG200") {
    console.log(`${course.CourseId}: Start Date: ${course.StartDate} \n`);
  }

  if (course.CourseId == "PROJ500") {
    console.log(`${course.CourseId}: Course Title: ${course.Title}`);
  }

  if (course.Fee <= 50) {
    less50 += course.Title + "\n";
  }

  if (course.Location == "Classroom 1") {
    room1 += course.Title + "\n";
  }
}

console.log(less50);
console.log(room1);
