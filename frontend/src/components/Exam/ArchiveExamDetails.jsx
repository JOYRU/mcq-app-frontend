import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const ArchiveExamDetails = () => {
//   const { id } = useParams(); // Get the exam ID from the URL
//   const [exam, setExam] = useState({});
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch exam details
//     const fetchExamDetails = async () => {
//       try {
//         // Fetch exam details by ID
//         const examResponse = await axios.get(`http://localhost:5000/exams/${id}`);
//         const questionsResponse = await axios.get(`http://localhost:5000/questions/${id}`);
        
//         if (examResponse.data.success && questionsResponse.data.success) {
//           setExam(examResponse.data.exam);
//           setQuestions(questionsResponse.data.questions);
//         }
//       } catch (error) {
//         console.error("Error fetching exam details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExamDetails();
//   }, [id]); // Re-run effect when exam ID changes

//   if (loading) {
//     return <p>Loading exam details...</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">{exam.title}</h1>
      
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Questions</h2>
//         {questions.map((question) => (
//           <div key={question._id} className="mb-4 p-4 border rounded shadow-md bg-white">
//             <h3 className="font-semibold">{question.title}</h3>
//             <div className="mt-2">
//               {/* Render options */}
//               {Object.keys(question.options[0]).map((key) => {
//                 if (key === "_id") return null; // Skip the _id key
//                 return (
//                   <div key={key} className="flex items-center mb-2">
//                     <input
//                       type="radio"
//                       className="mr-2"
//                       disabled
//                       checked={question.correctAnswer === question.options[0][key]} // Disable options and check the correct answer
//                     />
//                     <span>{question.options[0][key]}</span>
//                   </div>
//                 );
//               })}
//             </div>
//             <p className="mt-2 text-sm text-gray-500">
//               Correct Answer: <strong>{question.correctAnswer}</strong>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const { id } = useParams(); // Get exam ID from URL
const [exam, setExam] = useState({});
const [questions, setQuestions] = useState([]);
const [loading, setLoading] = useState(true);
const [showAnswers, setShowAnswers] = useState({}); // Track which answers are visible
const [showExplanations, setShowExplanations] = useState({});

useEffect(() => {
  const fetchExamDetails = async () => {
    try {
      // Fetch exam details and questions from the API
      const examResponse = await axios.get(`http://localhost:5000/exams/${id}`);
      const questionsResponse = await axios.get(`http://localhost:5000/questions/${id}`);
      
      if (examResponse.data.success && questionsResponse.data.success) {
        setExam(examResponse.data.exam);
        setQuestions(questionsResponse.data.questions);
      }
    } catch (error) {
      console.error('Error fetching exam details:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchExamDetails();
}, [id]);

// Toggle function to show/hide the correct answer
const handleShowAnswer = (questionId) => {
  setShowAnswers(prevState => ({
    ...prevState,
    [questionId]: !prevState[questionId] // Toggle visibility of the correct answer
  }));
};

const handleShowExplanation = (questionId) => {
    setShowExplanations((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId],
    }));
  };

if (loading) {
  return <p>Loading exam details...</p>;
}

return (
  <div className="max-w-3xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">{exam.title}</h1>
    <h2 className="text-xl font-semibold mb-4">Questions</h2>

    {questions.map((question) => (
      <div key={question._id} className="mb-6 p-4 border rounded shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
        
        <div className="flex flex-col">
          {Object.keys(question.options[0]).map((key) => {
            if (key === "_id") return null; // Skip the "_id" key

            return (
              <label key={key} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={question._id}
                  value={key}
                  disabled
                  className="mr-2"
                />
                {question.options[0][key]}
              </label>
            );
          })}
        </div>

        <button
          onClick={() => handleShowAnswer(question._id)}
          className="mt-2 text-blue-600 hover:underline"
        >
          {showAnswers[question._id] ? 'Hide Correct Answer' : 'Show Correct Answer'}
        </button>

        {showAnswers[question._id] && (
          <p className="mt-2 text-sm text-green-600">
            Correct Answer: {question.correctAnswer}
          </p>
        )}
       {question.explanation && (
                    <>
                      <button
                        onClick={() => handleShowExplanation(question._id)}
                        className="mt-2 text-blue-600 hover:underline"
                      >
                        {showExplanations[question._id]
                          ? 'Hide Explanation'
                          : 'Show Explanation'}
                      </button>
                      {showExplanations[question._id] && (
                        <p className="mt-2 text-sm text-gray-600">
                          Explanation: {question.explanation}
                        </p>
                      )}
                      </>
                  )}
      </div>
    ))}
  </div>
);
};

export default ArchiveExamDetails;
