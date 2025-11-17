import express from "express";
import Publication from "../models/Publication.js";


const router = express.Router();

router.post("/add",async(req,res)=>{
    try{
        const{ title,type,year,month,pdf}= req.body;

        const newPublication= new Publication({title,type,year,month,pdf});
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

export default router;