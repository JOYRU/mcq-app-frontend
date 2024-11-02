import { useEffect , useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExamCard = () => {



  const[exams,setExams] = useState('') ; 

  useEffect(()=>{
    const fetchExams = async()=>{
      try{
        // const response = await axios.get('http://localhost:5000/api/departments',{
        //   headers: {
        //     "Authorization" : 'Bearer '+localStorage.getItem('token')
        //   }
        // })
          const response = await axios.get('http://localhost:5000/exams')
          
   
          if(response.data.success){
           // console.log(response.data.departments)
            setExams(response.data.exams) 
         
           }        
                 
      }
        catch(error){
       alert(error)
       }

      }
fetchExams() ;
},[])

  return (
   
    <div className='rounded flex bg-white'>
  <div>
    {exams && exams.map((exm) => (
      <div key={exm._id} className='exam-item'>
       
       <Link to={'/exam/'+exm._id}>
          <h3>{exm.title}</h3>
        </Link>
        <p>{exm._id}</p>
        {/* Add more details about the exam as needed */}
      </div>
    ))}
  </div>
</div>

    //     {/* <div  className={'text-3xl flex justify-center items-center bg-teal-600 ${color} text-white px-4'}>
    //         {exams.title}
    //     </div>
    //     <div className='pl-4 py-1'>
    //         <p className='text-lg font-semibold'>
    //          eXAM ID
    //         </p>
    //         <p className='text-xl font-bold'>
    //         eXAM ID
    //         </p>
    //     </div> */}
    // </div>
    
  )
}

export default  ExamCard