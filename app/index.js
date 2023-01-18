import express from "express";
const app = express();
import STUDENTS from "./GRADES.js";

app.get("/api/students", (_, response) => {
  response.json(STUDENTS);
});

app.get("/api/students/attendance", (_, res) => {
  res.json(STUDENTS.map((student) => student.name));
});

app.listen(3000, () => {
  console.info("server is running on port 3000");
});

app.get("/api/contacts/:id", (request, response) => {
  const { id } = request.params;

  const foundStudent = STUDENTS.find((student) => student.id === Number(id));

  if (foundStudent) {
    response.json(foundStudent);
  } else {
    response.status(404).json({ message: "Student not found" });
  }
});
app.delete("/api/contacts/:id", (request, response) => {
  const id2Delete = request.params.id;

  // Filter out the contact with the id to delete
  const updatedContacts = STUDENTS.filter(
    (student) => student.id !== Number(id2Delete)
  );

  response.json({
    message: `Student deleted successfully with id: ${id2Delete}`,
    updatedContacts,
  });
});
