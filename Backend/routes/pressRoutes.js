import express from "express";
import Press from "../models/Press.js";
import { verifyToken } from "../controllers/middleware/auth.js";


const router = express.Router();

router.post("/add",verifyToken,async(req,res)=>{
    try{
        const{ title,summary,category,department, pdfurl,content ,publisheddate}= req.body;

        const newPress= new Press({title,summary,category,department, pdfurl,content ,publisheddate});
        await newPress.save();

        res.status(201).json({message: "press published", newPress});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get("/",verifyToken,async(req,res)=>{
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