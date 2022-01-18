import mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export default mongoose.model("users", messagesSchema);
