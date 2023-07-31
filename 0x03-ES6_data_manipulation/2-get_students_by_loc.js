export default function getStudentsLocation(studentList, city) {
  return studentList.filter((student) => student.location === city);
}
