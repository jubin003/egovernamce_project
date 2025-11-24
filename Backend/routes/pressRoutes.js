import express from "express";
import Press from "../models/Press.js";
import { verifyToken } from "../controllers/middleware/auth.js";
import multer from "multer";


const router = express.Router();
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploadpdf/");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+ "-"+file.originalname);
    },
});
const upload = multer({storage});

router.post("/add",verifyToken,upload.single("pdf_url"),async(req,res)=>{
    try{
        const{ title,description,category,department,content ,publisheddate}= req.body;
        const pdfurl= req.file ? req.file.path :"";


        const newPress= new Press({title,description,category,department, pdfurl,content ,publisheddate});
        await newPress.save();

        res.status(201).json({message: "press published", newPress});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get("/",async(req,res)=>{
    try{
        const presses = await Press.find();
        res.json(presses);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        const presses = await Press.find();
        res.json(presses);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

export default router;