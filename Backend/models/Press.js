import mongoose from "mongoose";

const pressreleaseSchema= new mongoose.Schema(
    {
        title: {type: String, required: true},
        summary: { type: String},
        pdfurl: { type:String},
        content: {type:String},
        publisheddate: { type:Date, default:Date.now}
    
    },

    {
        timestamps: true
    }
);

export default mongoose.model("Press",pressreleaseSchema);