import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["annual", "monthly"],
      required: true
    },
    year: { type: Number, required: true },
    month: { type: String }, 
    pdfurl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Publication", publicationSchema);