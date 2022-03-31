// callback function
const updateStudents = students.map(student => {
  student.role = 'student';
  return student;
});
console.log('updateStudents', updateStudents);

const highScores = students.filter(student => student.score >= 50);
console.log('highScores', highScores);

const specificID = students.find(student => student.id === 1);
console.log('specificID', specificID);

const averageScore = students.reduce(
  (acc, stu, i, arr) => acc + stu.score / arr.length,
  0
);
console.log('averageScore', averageScore);

const survey = students.reduce((acc, student) => {
  const favCourse = student.favoriteCourse;
  //   console.log(favCourse);
  if (acc[favCourse]) {
    acc[favCourse] = acc[favCourse] + 1;
  } else {
    acc[favCourse] = 1;
  }
  return acc;
}, {});
console.log('survey', survey);
