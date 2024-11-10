import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// const questions = 
//  [
//     { question: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
//     { question: 'What is the capital of Mathland?', options: ['MathCity', 'Mathopolis'], correctAnswer: 'MathCity' }
//   ]


const SubjectQuestions = () => {
   const { subject } = useParams();
   const [questions, setQuestions] = useState([]);
   const [loading,setLoading] = useState(false)

   useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch exam details and questions from the API
        console.log("hellofromfetchQuestionsPage") ; 
        const response = await axios.get(`http://localhost:5000/questions/subject`,{
          params: {
            subject: subject
           
          }

        });
       
        console.log(response.data) ; 
        if (response.data.success) {
         
          setQuestions(response.data.questions);
        }
      } catch (error) {
        console.error('Error fetching Question details:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchQuestions();
 
  }, [subject]);
  

   return (
    <div>
      <h1>{subject} Questions</h1>
      <ul>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <li key={index}>
              <p>{question.question}</p>
              <ul>
                {question.options.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No questions available for this subject.</p>
        )}
      </ul>
    </div>

  );
};

export default SubjectQuestions;
