import mongoose from "mongoose";
const Schema = mongoose.Schema;

const attendanceSchema=new Schema({
    dateattn: {
        type: String,
        required:true
    },
    suc: {
        type:String
    } 

})

export default mongoose.model("attendances", attendanceSchema);