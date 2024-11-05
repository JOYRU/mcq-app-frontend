import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
     userId:{type:String,required:true},
     examId:{type:String, required:true},
     score:{type:String,required:true}
})

const Result = mongoose.model('Result', resultSchema);
export default Result