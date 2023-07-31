export default function getStudentIdsSum(studentList) {
  const ids = studentList.map((student) => student.id);
  const idsSum = ids.reduce((total, num) => total + num);
  return idsSum;
}
