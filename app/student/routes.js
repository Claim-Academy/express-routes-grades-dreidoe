import { Router } from "express";
import { STUDENTS } from "../GRADES.js";

const router = new Router();
// api/students
// * Don't repeat 'api/students' - it is already in app/index.js
router.get("/", (_, res) => {
  res.json(STUDENTS);
});
export default router;
