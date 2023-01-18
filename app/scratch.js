import STUDENTS from "./app/GRADES.js";
const studentsWithoutIds = STUDENTS.map((student) => {
  const { id, ...rest } = student;
  return rest;
});
