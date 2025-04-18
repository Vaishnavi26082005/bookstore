import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email:email});
        if(user){
            return res.status(400).json({message:"User already exist"});

        }
        const hashPassword=await bcryptjs.hash(password,10);

        const createdUser=await new User({
            fullname:fullname,
            email:email,
            password:hashPassword   
        })
        createdUser.save();
        return res.status(200).json({message:"User created successfully"});
        
    }
    catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const isMatch=await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        return res.status(200).json({message:"Login successful",user:{
            id:user._id,
           fullname: user.fullname,
            email:user.email
        }});
        
    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}