import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import moment from "moment";

const ExamResultExamId = () => {


const { id } = useParams(); // Get exam ID from URL
const [result,setResult] = useState({}) ;
const [exam, setExam] = useState({});
const [questions, setQuestions] = useState([]);
const [loading, setLoading] = useState(true);
const [showAnswers, setShowAnswers] = useState({}); // Track which answers are visible
const [showExplanations, setShowExplanations] = useState({});

useEffect(() => {
  const fetchExamDetails = async () => {
    try {
      // Fetch exam details and questions from the API
      const examResult = await axios.get(`http://localhost:5000/exams/exam-result-teacher/${id}`);

    //   const questionsResponse = await axios.get(`http://localhost:5000/questions/${id}`);
    console.log(examResult) ; 
      
    //   if (examResponse.data.success && questionsResponse.data.success) {
    //     setExam(examResponse.data.exam);
    //     setQuestions(questionsResponse.data.questions);
    //   }
    } catch (error) {
      console.error('Error fetching exam details:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchExamDetails();
}, [id]);


if (loading) {
  return <p>Loading exam details...</p>;
}

return (
  <div className="max-w-3xl mx-auto p-4">
    
  </div>
);
};

export default ExamResultExamId;
