import { Router } from "express";

import studentController from "./controller.js";

const router = new Router();

// /api/student
// * DON'T REPEAT '/api/students' - it's already in app/index.js
router.get("/", (_, res) => {
  studentController
    .getStudents()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/attendance", (_, res) => {
  studentController.getAttendance().then((attendance) => {
    res.json(attendance);
  });
});
router.get("/:id", (req, res) => {
  studentController
    .getStudentById(req.params.id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  studentController
    .createStudent(req.body)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.put("/:id/grades", (req, res) => {
  studentController
    .updateStudentGrades(req.params.id, req.body)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.delete("/:id", (req, res) => {
  studentController
    .deleteStudent(req.params.id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

export default router;
