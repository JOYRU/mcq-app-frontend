import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
     userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true},
     examId:{type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required:true},
     score:{type:String,required:true}
})

const Result = mongoose.model('Result', resultSchema);
export default Result