import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
    {
        title: { type :String, required: true },
        category:{type: String, required: true},
        description: {type: String},
        pdfurl: { type: String, required: true},
        publisheddate: { type: Date, default: Date.now}
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Notice", noticeSchema);
