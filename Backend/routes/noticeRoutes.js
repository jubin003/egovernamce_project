import express from "express";
import Notice from "../models/Notice.js";


const router = express.Router();


router.get("/",async(req,res)=>{
    try{
        

        const newNotice=  await Notice.find();
       

        res.json(newNotice);

    }catch(err){
        res.json({message:"no notices to show"});
    }
});

router.post("/add",async(req,res)=>{
    try{
        const{ title,description,department,category, pdfurl, publisheddate}= req.body;

        const newNotice= new Notice({title,description,department,category, pdfurl, publisheddate});
        await newNotice.save();

        res.status(201).json({message: "notice published", newNotice});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const notices = await Notice.find();
        res.json(notices);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});


export default router;