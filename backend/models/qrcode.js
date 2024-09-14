import mongoose from "mongoose";
const Schema = mongoose.Schema;

const QrcodeSchema=new Schema({
  
    suc: {
        type:String
    } 
   
})

export default mongoose.model("Qrcodes", QrcodeSchema);