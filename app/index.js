import GRADES from "./GRADES.js";

import express from "express";
const app = express();
const STUDENTS = [
  {
    id: 1,
    name: "Mark West",
    grades: [
      {
        id: 1,
        type: "HW",
        score: 80,
      },
      {
        id: 2,
        type: "Quiz",
        score: 90,
      },
      {
        id: 3,
        type: "Test",
        score: 80,
      },
      {
        id: 4,
        type: "HW",
        score: 70,
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    grades: [
      {
        id: 1,
        type: "HW",
        score: 99,
      },
      {
        id: 2,
        type: "Quiz",
        score: 91,
      },
      {
        id: 3,
        type: "Test",
        score: 83,
      },
      {
        id: 4,
        type: "HW",
        score: 74,
      },
    ],
  },
  {
    id: 3,
    name: "Jane Doe",
    grades: [
      {
        id: 1,
        type: "HW",
        score: 98,
      },
      {
        id: 2,
        type: "Quiz",
        score: 92,
      },
      {
        id: 3,
        type: "Test",
        score: 84,
      },
      {
        id: 4,
        type: "HW",
        score: 75,
      },
    ],
  },
  {
    id: 4,
    name: "John Smith",
    grades: [
      {
        id: 1,
        type: "HW",
        score: 97,
      },
      {
        id: 2,
        type: "Quiz",
        score: 93,
      },
      {
        id: 3,
        type: "Test",
        score: 85,
      },
      {
        id: 4,
        type: "HW",
        score: 76,
      },
    ],
  },
  {
    id: 5,
    name: "Jane Smith",
    grades: [
      {
        id: 1,
        type: "HW",
        score: 96,
      },
      {
        id: 2,
        type: "Quiz",
        score: 94,
      },
      {
        id: 3,
        type: "Test",
        score: 86,
      },
      {
        id: 4,
        type: "HW",
        score: 77,
      },
    ],
  },
  {
    id: 6,
    name: "John West",
    grades: [
      {
        id: 1,
        type: "HW",
        score: 95,
      },
      {
        id: 2,
        type: "Quiz",
        score: 95,
      },
      {
        id: 3,
        type: "Test",
        score: 87,
      },
      {
        id: 4,
        type: "HW",
        score: 78,
      },
    ],
  },
  {
    name: "NEW STUDENT",
    grades: [],
    id: 7,
  },
];

app.get("/api/students", (_, response) => {
  response.json(STUDENTS);
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
