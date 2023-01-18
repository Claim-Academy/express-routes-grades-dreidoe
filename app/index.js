import express from "express";

import studentRoutes from "./student/routes.js";

// * This is a middleware
// Tell express to parse the request body as JSON
// Without this, req.body will be undefined
app.use(express.json());

const app = express();
// this is a middleware
// any request that starts with /api/students will be handled by studentRoutes
app.use("/api/students", studentRoutes);

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
