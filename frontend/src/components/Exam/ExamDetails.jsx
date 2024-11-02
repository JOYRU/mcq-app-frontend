
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExamDetails = () => {
       const {id} = useParams()  ;
       //console.log(id)

       const[questions,setQuestions] = useState('') ; 
       const [loading,setLoading] = useState(false) ; 
       const navigate = useNavigate()
       useEffect(()=>{

        const fetchEmployee=async() => {
           setLoading(true) ; 
         try{
            console.log(id)
             const response = await axios.get('http://localhost:5000/questions/'+id,) ; 
             console.log(response)
             if(response.data.success){
             //    setDepartment(response.data.department)
                 setQuestions(response.data.employee)
               
             }
     
           }catch(error){
             console.log(error)
           }finally{
             setLoading(false)
           }
        };
        fetchEmployee();
     
     },[])
    
  return (
    <div>ExamDetails</div>
  )
}

export default ExamDetails