import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sucaddSchema=new Schema({
    a: {
        type:String,
       
    },
    suc: {
        type:String
    } 

})

export default mongoose.model("qrcodes", sucaddSchema);