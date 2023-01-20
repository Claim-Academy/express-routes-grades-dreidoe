import config from "../config.js";
import mongoose from "mongoose";
import Student from "./Student.js";

// connect to the database
mongoose
  .connect(config.getDbConn("students"))
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

export default {
  getStudents() {
    return Student.find();
  },
};
