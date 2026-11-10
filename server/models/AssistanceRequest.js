import mongoose from 'mongoose';
const requestSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
  type:{type:String,enum:['Grocery','Medicine','Transport'],required:true},
  description:{type:String,required:true,trim:true},
  location:{type:String,required:true,trim:true},
  preferredDate:{type:String,required:true},
  preferredTime:{type:String,required:true},
  status:{type:String,enum:['Pending','In Progress','Completed','Cancelled'],default:'Pending'},
  volunteerName:{type:String,default:''},
  volunteerPhone:{type:String,default:''}
},{timestamps:true});
export default mongoose.model('AssistanceRequest',requestSchema);
