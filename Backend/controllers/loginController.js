import Admin from "../models/Admin.js";

import jwt from "jsonwebtoken";

export const loginAdmin= async(req, res)=>{
    const{email, password}= req.body;

    
        const admin= await Admin.findOne({email});
        if(!admin) return res.status(404).json({msg:"wrong email"});
    
        const ismatch= await compare(password, admin.password);
        if(!ismatch) return res.status(404).json({msg:"wrong password"});

        const token = jwt.sign({id: admin._id},process.env.JWT_SECRET,{expiresIn:"7d"});

        res.json({token});
}

export default loginAdmin;