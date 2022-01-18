import mongoose from "mongoose";

const papersizeSchema = mongoose.Schema({
  name: String,
  dimension: String,
});

export default mongoose.model("papersize", papersizeSchema);
