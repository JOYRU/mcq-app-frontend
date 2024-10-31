import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { fetchDepartments } from '../../utils/EmployeeHelper';
const CreateQuestion = () => {
   // const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    // const [departments,setDepartments] = useState([]) ;
  
  
    
    const handleChange= (e)=>{
      const{name,value}= e.target 
     
          setFormData((prevData)=> ({...prevData,[name]:value}))
     
        
       
      
    }
    // useEffect(()=>{
    //             const fetchDepartments = async()=>{
    //               try{
    //                 // const response = await axios.get('http://localhost:5000/api/departments',{
    //                 //   headers: {
    //                 //     "Authorization" : 'Bearer '+localStorage.getItem('token')
    //                 //   }
    //                 // })
    //                  // const response = await axios.get('http://localhost:5000/api/departments')
                      
               
    //                 //   if(response.data.success){
    //                 //    // console.log(response.data.departments)
    //                 //     setDepartments(response.data.departments) 
                     
    //                 //    }        
                             
    //               }
    //                 catch(error){
    //                alert(error)
    //                }

    //               }
    //       fetchDepartments() ;
    //  },[])



    const handleSubmit =async (e)=>{
        e.preventDefault() ; 
        //let formData = new FormData();
        // Object.keys(inputData).forEach(fieldName => {
        //   console.log(fieldName, inputData[fieldName]);
        //   formData.append(fieldName, inputData[fieldName]);
        // })
        //console.log(formData)

        let formDataObj = new FormData();
        Object.keys(formData).forEach(key=>{
         // console.log(key,formData[key]) ;
          formDataObj.append(key,formData[key])
        })

       // console.log(formDataObj)
    
        try{
         
          const response = await axios.post('http://localhost:5000/questions/add', formData);
    
          if(response){
            console.log(response)
          }
            // if(response){
            //    navigate("/admin-dashboard/employees")
            // }
    
        }catch(error){
          if(error.response && !error.response.data.success)
           alert(error)
        }

    }
  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-7 rounded-md shadow-md w-96'>
    <h3 className='text-2xl font-bold mb-6'>Add Question</h3>
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title" className='text-sm font-medium text-gray-700'>Emp Name</label>
            <input type="text" placeholder='Enter Emp Name'
            // value={employee_name}             
             name="title"     
             onChange={handleChange}
            className='mt-1 w-full p-2 border boder-gray-300 rounded-md'  required/>
        </div>
        {/*employee id*/}
        <div>
            <label htmlFor="option1">Option 1</label>
            <input type="text" placeholder='Employee Id' 
             name="option1"
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>
        <div>
            <label htmlFor="option2">Option 2</label>
            <input type="text" placeholder='Employee Id' 
             name="option2"
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>
        <div>
            <label htmlFor="option3">Option 3</label>
            <input type="text" placeholder='Option 3' 
             name="option3"
          
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>
        <div>
            <label htmlFor="option4">Option 4</label>
            <input type="text" placeholder='Option 4' 
             name="option4"
         
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>

        <div>
            <label htmlFor="correctAnswer">correct answer</label>
            <input type="text" placeholder='Correct Ans' 
             name="correctAnswer"
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>


       
        <div>
            <label htmlFor="examId" className="block text-sm font-medium text-gray-700">examId</label>
            <input type="string" placeholder='examId' 
             name="examId"
             //value={email}
             onChange={handleChange}
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
        </div>

        <div>
            <label htmlFor="subject">Subject</label>
             <select name="subject"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
              >
              <option value="">Select Subject</option>
              <option value="bangla">Bangla</option>
              <option value="english">English</option>
              <option value="othemahr">math</option>

             </select>
        </div>
        
        {/* <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">department</label>
            <select name="department" 
               onChange={handleChange}
            
             className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            >
              <option value="">Select Department</option>

               {
                departments.map((dep)=>(

                 
                  //  <option key={dep._id} value={dep._id} >{dep.dept_name}</option>
                  <option key={dep._id} >{dep.dept_name}</option>
                  
                ))
               }    
           
            </select>
        </div> */}
      

        <button type="submit" className='w-full mt-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'>Add Question</button>
    </form>
  </div>
  )
}

export default CreateQuestion ; 