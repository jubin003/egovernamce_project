import express from "express";
import Notice from "../models/Notice.js";


const router = express.Router();

router.post("/add",async(req,res)=>{
    try{
        const{ title,description, pdfurl, publisheddate}= req.body;

        const newNotice= new Notice({title,description, pdfurl, publisheddate});
        await newNotice.save();

        res.status(201).json({message: "notice published", newNotice});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get("/",async(req,res)=>{
    try{
        const notices = await Notice.find();
        res.json(notices);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

export default router;