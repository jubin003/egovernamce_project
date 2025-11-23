import express from "express";
import User from "../models/User.js";


const router = express.Router();

router.post("/add",async(req,res)=>{
    try{
        const{name,email,subject,message}= req.body;

        const newUser= new User({name,email,subject,message});
        await newUser.save();

        res.status(201).json({message: "message sent", newUser});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});


export default router;