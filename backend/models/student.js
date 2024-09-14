import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema=new Schema({
    name: {
        type: String,
        required:true
    },
    suc: {
        type:String
    } ,
    year: {
        type:String
    } ,
    email: {
        type:String
    }

})

export default mongoose.model("students", studentSchema);