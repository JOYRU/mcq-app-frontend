//import Department from "../models/Department.js";
//import successResponse from "./responseController.js";
import Question from "../models/Question.js";
import Exam from "../models/Exam.js";

const addQuestion =async(req,res,next)=>{
   


    const { title, options, correctAnswer, exam_id, subject } = req.body;
    try {
      const newQuestion = new Question({
        title,
        options,
        correctAnswer,
        exam_id,
        subject,
      });
      await newQuestion.save();

      const updatedExam = await Exam.findByIdAndUpdate(
        exam_id,
        { $push: { questions: {newQuestion} } },  // Add fetched questions to the exam document
        { new: true }  // Return updated exam
      );



      res.status(201).json(newQuestion);
    } catch (error) {
      console.error('Error saving question:', error);
      res.status(500).json({ message: 'Failed to save question' });
    }
   
}

const getQuestions =async(req,res,next)=>{
      
  const {id} = req.params ;  
  //console.log(id)
    try{
        const questions = await Question.find({exam_id:id})
       // console.log(questions);
        return res.status(200).json({
            success:true,
            questions
        })
       
    }catch(error){
       alert(error) 
       return res.status(500).json({success:false,error:"get questions sever error"})
    }
   
}


const RandomlySetQuestions =async(req,res,next)=>{
  console.log("JOY") ;
  // const { subject, quantity } = req.query;

  // try {
  //   const questions = await Question.find({ subject: subject })
  //     .limit(Number(quantity))  // Limit the number of questions based on the quantity parameter
  //     .exec();
    
  //   res.json(questions);
  // } catch (error) {
  //   res.status(500).json({ message: 'Error fetching questions' });
  // }
  const { subject, quantity, examId } = req.query;

  // Validation
  if (!subject || !quantity || !examId) {
    return res.status(400).json({ message: 'Subject, quantity, and examId are required' });
  }

  try {
    // Fetch random questions based on subject and quantity
    const questions = await Question.aggregate([
      { $match: { subject: subject } },  // Match questions with the subject
      { $sample: { size: Number(quantity) } }  // Get random questions
    ]);

    if (questions.length === 0) {
      return res.status(404).json({ message: `No questions found for subject: ${subject}` });
    }

    // Update the exam with the fetched questions by examId
    const updatedExam = await Exam.findByIdAndUpdate(
      examId,
      { $push: { questions: { $each: questions } } },  // Add fetched questions to the exam document
      { new: true }  // Return updated exam
    );
    console.log(updatedExam) ;
    res.json(updatedExam); 
     // Send the updated exam with questions
  } catch (error) {
    console.error('Error fetching random questions and updating exam:', error);
    res.status(500).json({ message: 'Error fetching random questions and updating exam' });
  }
};




// const getDepartment=async(req,res)=>{
//     try{
//         const {id} = req.params ; 
//         const department= await Department.findById({_id:id}) ;
//         return res.status(200).json({success:true,department})

//     }catch(error){
//         alert(error)
//     }
// }


// const editDepartment=async(req,res)=>{
//     try{
//         const {id} = req.params ; 
//         console.log(id) ; 
//         const{dept_name,description} = req.body ; 
//          const updataDept = await Department.findByIdAndUpdate({_id: id},{
//             dept_name,
//             description
//          }) ; 

//      // res.status(201).send('User department create successfully');
//       return res.status(200).json({success:true,department:updataDept})

//     }catch(error){
//        console.log(error)
//     }
// }

// const deleteDepartment=async(req,res)=>{
//     try{
//         const {id} = req.params ; 
//         console.log(id);
     
    
//          const deleteDept = await Department.findByIdAndDelete({_id: id}) ; 

//      // res.status(201).send('User department create successfully');
//       return res.status(200).json({success:true,department:deleteDept})

//     }catch(error){
//        console.log(error)
//     }
// }


// export  {addQuestion,getDepartments,getDepartment,editDepartment,deleteDepartment}

export {addQuestion,getQuestions,RandomlySetQuestions }