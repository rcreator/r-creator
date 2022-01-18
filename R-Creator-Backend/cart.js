import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  papersize: String,
  papernumber: Number,
  booknumber: Number,
  frontimg: String,
  backimg: String,
});

export default mongoose.model("cart", cartSchema);
