import express from 'express';
import EmergencyContact from '../models/EmergencyContact.js';
import {auth,role} from '../middleware/authMiddleware.js';
const router=express.Router();
router.post('/',auth,role('senior'),async(req,res)=>{try{res.status(201).json(await EmergencyContact.create({...req.body,userId:req.user._id}));}catch(e){res.status(400).json({message:e.message});}});
router.get('/',auth,role('senior'),async(req,res)=>{try{res.json(await EmergencyContact.find({userId:req.user._id}).sort({createdAt:-1}));}catch(e){res.status(500).json({message:e.message});}});
router.delete('/:id',auth,role('senior'),async(req,res)=>{try{const r=await EmergencyContact.findOneAndDelete({_id:req.params.id,userId:req.user._id});if(!r)return res.status(404).json({message:'Contact not found'});res.json({message:'Contact deleted'});}catch(e){res.status(400).json({message:e.message});}});
export default router;
