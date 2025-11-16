import mongoose from "mongoose";

const publicationSchema= new mongoose.Schema(
    {
        title: { type: String, required:true},
        summary: { type: String},
        pdfurl: {type:String},
        content: {type:String},
        publishedDate: {type:Date, default:Date.now}
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Publication",publicationSchema);