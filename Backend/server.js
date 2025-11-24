import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import noticeRoutes from "./routes/noticeRoutes.js";
import pressRoutes from "./routes/pressRoutes.js";
import publicationRoutes from "./routes/publicationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => res.send("api are running"));


app.use("/api/notice",noticeRoutes);
app.use("/api/press",pressRoutes);
app.use("/api/publication",publicationRoutes);
app.use("/api/user",userRoutes);
app.use("/api/admin",adminRoutes)








mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("MONGO DB is connected yeeeeeeeee"))
    .catch((err)=>console.log("NO conneection: ",err));

const PORT =process.env.PORT;
app.listen(PORT,()=>console.log('server running on port ${PORT}'));