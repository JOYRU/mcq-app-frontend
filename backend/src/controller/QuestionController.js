//import Department from "../models/Department.js";
//import successResponse from "./responseController.js";
import Question from "../models/Question.js";

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
      res.status(201).json(newQuestion);
    } catch (error) {
      console.error('Error saving question:', error);
      res.status(500).json({ message: 'Failed to save question' });
    }
   
}

// const getDepartments =async(req,res,next)=>{
   
//     try{
//         const departments = await Department.find()
//         return res.status(200).json({
//             success:true,
//             departments
//         })
       
//     }catch(error){
//        alert(error) 
//        return res.status(500).json({success:false,error:"get department sever error"})
//     }
   
// }

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

export {addQuestion}