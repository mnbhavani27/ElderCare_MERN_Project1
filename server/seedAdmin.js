import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
await mongoose.connect(process.env.MONGO_URI);
const email="admin@gmail.com";
const existing=await User.findOne({email});
if(existing){console.log('Admin already exists:',email);}
else{await User.create({name:'ElderCare Admin',email,phone:'9999999999',password:await bcrypt.hash('admin123',10),role:'admin'});console.log('Admin created. Email: admin@eldercare.com Password: admin123');}
await mongoose.disconnect();
