import Exam from "../models/Exam.js";
import Question from "../models/Question.js";
import Result from "../models/Result.js";
import jwt from 'jsonwebtoken'
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

const updatedExamData = async(req,res,next)=>{



  try {
    const { id } = req.params;
    const { title, start_time, time_duration, subject, questions } = req.body;

    // Update the Exam document
    let exam = await Exam.findById(id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
 

    // Update Exam properties
    exam.title = title;
    exam.start_time = start_time;
    exam.time_duration = time_duration;
    exam.subject = subject;
    //console.log(questions)

    // Update each question inside the questions array
    for (const question of questions) {
      // Find the question by its ID
     
      let existingQuestion = await Question.findById(question._id);
      console.log(existingQuestion)
      if (existingQuestion) {
       
        existingQuestion.title = question.title;
        existingQuestion.options[0].option1 = question.option1;
        existingQuestion.options[0].option2 = question.option2;
        existingQuestion.options[0].option3 = question.option3;
        existingQuestion.options[0].option4 = question.option4;
      

        existingQuestion.correctAnswer = question.correctAnswer;

        // Save the updated question
        await existingQuestion.save();
      } else {
        // If the question doesn't exist, you might want to create a new one
        const newQuestion = new Question({
          title: question.updatedTitle,
          options: question.updatedOptions,
          correctAnswer: question.correctAnswer,
        });

        // Save the new question and add its ID to the exam
        await newQuestion.save();
        exam.questions.push(newQuestion._id);
      }
    }

    // Save the updated exam
    await exam.save();

    res.status(200).json({ message: 'Exam updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating exam', error });
  }



}

const examResult = async(req,res,next)=>{

  const {score,id} = req.body ; 
  //console.log(id) ; 
  const  JWT_SECRET_KEY= 'secretKeyMustHave Value' ; 
  
   

  const token = req.headers['authorization'].split(' ')[1] ; 
  if(!token){
    return res.status(401).json({message: 'Token missing or invalid'}) ; 
  }

  const decoded = jwt.verify(token,JWT_SECRET_KEY) ; 
  const userId = decoded.id ; 
  

  try{
    
       const newResult = new Result({userId,examId:id,score});
       await newResult.save();
       res.status(201).json(newResult);

  }catch(error){
    //console.error('Error saving exam:', error);
      res.status(500).json({ message: 'Failed to save Result' });
  }

  

  
//  res.status(201).json({message:'succesfully update data in result sheet'}) ; 

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
 // console.log(subject) ; 

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



export {addExam,updatedExamData,getExams,getExam,examResult,generateQuestion}