// backend/models/Question.js

import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  options: [{ 
          option1:{type:String,required:true},
          option2:{type:String,required:true},
          option3:{type:String,required:true},
          option4:{type:String,required:true},
  }],

  correctAnswer: { type: String, required: true },
  exam_id:{type:String},
  subject:{type:String}
});

const Question= mongoose.model('Question', questionSchema);
export default Question
