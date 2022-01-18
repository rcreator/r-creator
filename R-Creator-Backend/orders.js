import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  papersize: String,
  papernumber: Number,
  booknumber: Number,
  frontimg: String,
  backimg: String,
});

export default mongoose.model("orders", orderSchema);
