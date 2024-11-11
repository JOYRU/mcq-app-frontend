import Exam from "../models/Exam.js";
import Question from "../models/Question.js";
const addExam =async(req,res,next)=>{

    const {title, start_time, time_duration } = req.body;
    try {
      const newExam = new Exam({title, start_time, time_duration });
      await newExam.save();
      res.status(201).json(newExam);
    } catch (error) {
      console.error('Error saving exam:', error);
      res.status(500).json({ message: 'Failed to save exam' });
    }

};

const examResult = async(req,res,next)=>{

  const {examId,score} = req.body ; 
  console.log(score)
  res.status(201).json(score) ; 

}
const getExams =async(req,res,next)=>{

    try{
                const exams = await Exam.find()
                return res.status(200).json({
                    success:true,
                    exams
                })
               
    }catch(error){
               alert(error) 
               return res.status(500).json({success:false,error:"get exam sever error"})
            }

};

const getExam =async(req,res,next)=>{
    
    const{id} = req.params ; 
    console.log("hello")

  try{
              const exam = await Exam.find({_id:id }).populate('questions')
              return res.status(200).json({
                  success:true,
                  exam
              })
             
  }catch(error){
             alert(error) 
             return res.status(500).json({success:false,error:"get exam sever error"})
          }

};

const generateQuestion = async(req,res,next)=>{

  const { subject, quantity } = req.query; // Subject and quantity of questions
  console.log(subject) ; 

  try {
    // const questions = await Question.aggregate([
    //   { $match: { subject } },  // Filter by subject
    //   { $sample: { size: parseInt(quantity) } }  // Randomly select 'quantity' questions
    // ]);
    //const questions = await Question.find({suject:subject})
    const questions = "" ; 
    
    res.json(questions);
    console.log(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
}



export {addExam,getExams,getExam,examResult,generateQuestion}