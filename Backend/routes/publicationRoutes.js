import express from "express";
import Publication from "../models/Publication.js";

import { verifyToken } from "../controllers/middleware/auth.js";


const router = express.Router();

router.post("/add",verifyToken,async(req,res)=>{
    try{
        const{ title,type,year,month,pdf}= req.body;

        const newPublication= new Publication({title,type,year,month,pdf});
        await newPublication.save();

        res.status(201).json({message: "published reports", newPublication});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get("/",verifyToken,async(req,res)=>{
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