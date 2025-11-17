import express from "express";
import Press from "../models/Press.js";


const router = express.Router();

router.post("/add",async(req,res)=>{
    try{
        const{ title,summary, pdfurl,content ,publisheddate}= req.body;

        const newPress= new Press({title,summary, pdfurl,content ,publisheddate});
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

export default router;