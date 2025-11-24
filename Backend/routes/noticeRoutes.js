import express from "express";
import Notice from "../models/Notice.js"
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

router.get("/",async(req,res)=>{
    try{
        

        const newNotice=  await Notice.find();
       

        res.json(newNotice);

    }catch(err){
        res.json({message:"no notices to show"});
    }
});

router.post("/add",verifyToken,upload.single("pdf_url"),async(req,res)=>{
    try{
        const{ title,description,department,category, publisheddate}= req.body;
        const pdfurl= req.file ? req.file.path :"";

        const newNotice= new Notice({title,description,department,category, pdfurl, publisheddate});
        await newNotice.save();

        res.status(201).json({message: "notice published", newNotice});

    }catch(err){
        res.status(500).json({error: err.message}); 
    }
});

router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        const notices = await Notice.find();
        res.json(notices);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});


export default router;