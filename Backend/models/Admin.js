import mongoose from "mongoose";

const adminSchema= new mongoose.Schema(
    {
        email:{type: String, default: "admin@gmail.com"},
        password:{type: String, default:"admin123"},
    },
);

export default mongoose.model("Admin", adminSchema)