import config from "./config.js";
import mongoose from "mongoose";

// connect to the database
mongoose
  .connect(config.dbConn)
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
