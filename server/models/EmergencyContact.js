import mongoose from 'mongoose';
const contactSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
  name:{type:String,required:true,trim:true},
  relationship:{type:String,required:true,trim:true},
  phone:{type:String,required:true,trim:true}
},{timestamps:true});
export default mongoose.model('EmergencyContact',contactSchema);
