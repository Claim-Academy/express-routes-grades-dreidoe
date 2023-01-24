import { model, Schema } from "mongoose";

export default model(
  "Student",
  new Schema({
    name: String,
    required: true,
  })
);
