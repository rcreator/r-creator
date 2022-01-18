import mongoose from "mongoose";

const emailSchema = mongoose.Schema({
  email: String,
});

export default mongoose.model("emails", emailSchema);
