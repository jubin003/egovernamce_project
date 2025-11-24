import express from "express";
import Publication from "../models/Publication.js";

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
        const{ title,type,year,month}= req.body;
        const pdfurl= req.file ? req.file.path :"";


        const newPublication= new Publication({title,type,year,month,pdfurl});
        await newPublication.save();

        res.status(201).json({message: "published reports", newPublication});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get("/",async(req,res)=>{
    try{
        const publishes = await Publication.find();
        res.json(publishes);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        const pobs = await Publication.find();
        res.json(pobs);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

export default router;