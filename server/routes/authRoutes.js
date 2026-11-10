import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const router=express.Router();
router.post('/register',async(req,res)=>{
  try{
    const {name,email,phone,password}=req.body;
    if(!name||!email||!phone||!password) return res.status(400).json({message:'All fields are required'});
    if(password.length<6) return res.status(400).json({message:'Password must be at least 6 characters'});
    if(await User.findOne({email:email.toLowerCase()})) return res.status(409).json({message:'Email already registered'});
    const user=await User.create({name,email:email.toLowerCase(),phone,password:await bcrypt.hash(password,10),role:'senior'});
    res.status(201).json({message:'Registration successful',user:{id:user._id,name:user.name,email:user.email,role:user.role}});
  }catch(e){res.status(500).json({message:'Registration failed',error:e.message});}
});
router.post('/login',async(req,res)=>{
  try{
    const {email,password,role}=req.body;
    const user=await User.findOne({email:email?.toLowerCase()});
    if(!user || !(await bcrypt.compare(password||'',user.password))) return res.status(401).json({message:'Invalid email or password'});
    if(role && user.role!==role) return res.status(403).json({message:`This account is not a ${role} account`});
    const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'});
    res.json({token,user:{id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role}});
  }catch(e){res.status(500).json({message:'Login failed',error:e.message});}
});
export default router;
