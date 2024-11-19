// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const EditExam = () => {
//   const [title, setTitle] = useState('');
//   const [startTime, setStartTime] = useState('');
//   const [timeDuration, setTimeDuration] = useState('');
//   const [subject, setSubject] = useState('');
//   const [examId, setExamId] = useState('');
//   const [loading, setLoading] = useState(true);
  
//   const { id } = useParams();  // Get the exam ID from the URL params
//   const navigate = useNavigate();

//   // Fetch the exam details from the backend using the exam ID
//   useEffect(() => {
//     const fetchExamData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/exams/${id}`);
//         const examData = response.data;
//         console.log(examData.exam[0].title) ; 
//         setTitle(examData.exam[0].title);
//         setStartTime(examData.exam[0].start_time);
//         setTimeDuration(examData.exam[0].time_duration);
//         setSubject(examData.exam[0].subject);
//         setExamId(examData.exam[0]._id);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching exam data:', error);
//         setLoading(false);
//       }
//     };

//     fetchExamData();
//   }, [id]);

//   // Handle form submission to update the exam data
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedExamData = {
//       title,
//       start_time: startTime,
//       time_duration: timeDuration,
//       subject,
//     };

//     try {
//       const response = await axios.put(`http://localhost:5000/exams/update/${examId}`, updatedExamData);
//       if (response.status === 200) {
//         alert('Exam updated successfully!');
//         navigate('/dashboard'); // Navigate to the dashboard after successful update
//       }
//     } catch (error) {
//       console.error('Error updating exam:', error);
//     }
//   };

//   // If the exam data is still loading, show a loading message
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Edit Exam</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Exam title, start time, and duration input fields */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Exam Name:</label>
//           <input
//             type="text"
//             name="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Start Time:</label>
//           <input
//             type="datetime-local"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Time Duration (minutes):</label>
//           <input
//             type="number"
//             value={timeDuration}
//             onChange={(e) => setTimeDuration(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           />
//         </div>

//         {/* Subject dropdown */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Select Subject:</label>
//           <select
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           >
//             <option value="">-- Select Subject --</option>
//             <option value="math">Math</option>
//             <option value="science">Science</option>
//             <option value="history">History</option>
//             {/* Add more subjects as needed */}
//           </select>
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-800">
//           Update Exam
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditExam;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const EditExam = () => {
//   const [title, setTitle] = useState('');
//   const [startTime, setStartTime] = useState('');
//   const [timeDuration, setTimeDuration] = useState('');
//   const [subject, setSubject] = useState('');
//   const [examId, setExamId] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { id } = useParams();  // Get the exam ID from the URL params
//   const navigate = useNavigate();

//   // Fetch the exam details from the backend using the exam ID
//   useEffect(() => {
//     const fetchExamData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/exams/${id}`);
//         const examData = response.data;
//         setTitle(examData.exam[0].title);
//         setStartTime(examData.exam[0].start_time);
//         setTimeDuration(examData.exam[0].time_duration);
//         setSubject(examData.exam[0].subject);
//         setExamId(examData.exam[0]._id);
//         setQuestions(examData.exam[0].questions); // Set questions
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching exam data:', error);
//         setLoading(false);
//       }
//     };

//     fetchExamData();
//   }, [id]);

//   // Handle form submission to update the exam data
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedExamData = {
//       title,
//       start_time: startTime,
//       time_duration: timeDuration,
//       subject,
//       questions, // Include the questions as part of the update
//     };

//     try {
//       const response = await axios.put(`http://localhost:5000/exams/update/${examId}`, updatedExamData);
//       if (response.status === 200) {
//         alert('Exam updated successfully!');
//         navigate('/dashboard'); // Navigate to the dashboard after successful update
//       }
//     } catch (error) {
//       console.error('Error updating exam:', error);
//     }
//   };

//   // Handle removing a question
//   const handleRemoveQuestion = async (questionId) => {
//     try {
//       const updatedQuestions = questions.filter(q => q._id !== questionId);
//       setQuestions(updatedQuestions);

//       // Optionally: make a request to update the exam's questions in the database after removal
//       await axios.put(`http://localhost:5000/exams/update/${examId}`, { questions: updatedQuestions });
//     } catch (error) {
//       console.error('Error removing question:', error);
//     }
//   };

//   // Handle editing a question
//   const handleEditQuestion = (questionId, newText) => {
//     const updatedQuestions = questions.map(q => 
//       q._id === questionId ? { ...q, text: newText } : q
//     );
//     setQuestions(updatedQuestions);
//   };

//   // If the exam data is still loading, show a loading message
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Edit Exam</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Exam title, start time, and duration input fields */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Exam Name:</label>
//           <input
//             type="text"
//             name="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Start Time:</label>
//           <input
//             type="datetime-local"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Time Duration (minutes):</label>
//           <input
//             type="number"
//             value={timeDuration}
//             onChange={(e) => setTimeDuration(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           />
//         </div>

//         {/* Subject dropdown */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Select Subject:</label>
//           <select
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="block w-full border border-gray-300 rounded p-2"
//             required
//           >
//             <option value="">-- Select Subject --</option>
//             <option value="math">Math</option>
//             <option value="science">Science</option>
//             <option value="history">History</option>
//             {/* Add more subjects as needed */}
//           </select>
//         </div>

//         {/* Display Questions */}
//         <div className="mb-4">
//           <h3 className="text-sm font-medium mb-2">Questions:</h3>
//           {questions && questions.map((question) => (
//             <div key={question._id} className="mb-2 flex justify-between items-center">
//               <input
//                 type="text"
//                 value={question.text}
//                 onChange={(e) => handleEditQuestion(question._id, e.target.value)}
//                 className="w-3/4 border border-gray-300 rounded p-2"
//               />
//               <button
//                 type="button"
//                 onClick={() => handleRemoveQuestion(question._id)}
//                 className="ml-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-800">
//           Update Exam
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditExam;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditExam = () => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [subject, setSubject] = useState('');
  const [examId, setExamId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();  // Get the exam ID from the URL params
  const navigate = useNavigate();

  // Fetch the exam details from the backend using the exam ID
  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/exams/${id}`);
        const examData = response.data;
        setTitle(examData.exam[0].title);
        setStartTime(examData.exam[0].start_time);
        setTimeDuration(examData.exam[0].time_duration);
        setSubject(examData.exam[0].subject);
        setExamId(examData.exam[0]._id);
        setQuestions(examData.exam[0].questions); // Set questions
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exam data:', error);
        setLoading(false);
      }
    };

    fetchExamData();
  }, [id]);

  // Handle form submission to update the exam data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedExamData = {
      title,
      start_time: startTime,
      time_duration: timeDuration,
      subject,
      questions, // Include the questions as part of the update
    };

    try {
      const response = await axios.put(`http://localhost:5000/exams/update/${examId}`, updatedExamData);
      if (response.status === 200) {
        alert('Exam updated successfully!');
        navigate('/dashboard'); // Navigate to the dashboard after successful update
      }
    } catch (error) {
      console.error('Error updating exam:', error);
    }
  };

  // Handle removing a question
  const handleRemoveQuestion = async (questionId) => {
    try {
      const updatedQuestions = questions.filter(q => q._id !== questionId);
      setQuestions(updatedQuestions);

      // Optionally: make a request to update the exam's questions in the database after removal
      await axios.put(`http://localhost:5000/exams/update/${examId}`, { questions: updatedQuestions });
    } catch (error) {
      console.error('Error removing question:', error);
    }
  };

  // Handle editing a question's fields (text, options, correct answer, subject)
//   const handleEditQuestion = (questionId, field, value) => {
//     const updatedQuestions = questions.map(q => 
//       q._id === questionId ? { ...q, [field]: value } : q
//     );
//     setQuestions(updatedQuestions);
//   };

const handleEditQuestion = (questionId, field, value, optionIndex = null) => {
    const updatedQuestions = questions.map(q => {
      if (q._id === questionId) {
        if (field === 'options' && optionIndex !== null) {
          // Update the specific option based on the index
          const updatedOptions = [...q.options];
          updatedOptions[optionIndex] = { ...updatedOptions[optionIndex], [field]: value };
          return { ...q, options: updatedOptions };
        } else {
          return { ...q, [field]: value };
        }
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  // If the exam data is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Edit Exam</h2>
      <form onSubmit={handleSubmit}>
        {/* Exam title, start time, and duration input fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Exam Name:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Time:</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Time Duration (minutes):</label>
          <input
            type="number"
            value={timeDuration}
            onChange={(e) => setTimeDuration(e.target.value)}
            className="block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        {/* Subject dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Subject:</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block w-full border border-gray-300 rounded p-2"
            required
          >
            <option value="">-- Select Subject --</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            {/* Add more subjects as needed */}
          </select>
        </div>

        {/* Display Questions */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Questions:</h3>
          {questions && questions.map((question) => (
            <div key={question._id} className="mb-4">
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Question Title:</label>
                <input
                  type="text"
                  value={question.title}
                  onChange={(e) => handleEditQuestion(question._id, 'title', e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              {/* <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Option 1:</label>
                <input
                  type="text"
                  value={question.options[0].option1}
                  onChange={(e) => handleEditQuestion(question._id, 'options', [
                    { ...question.options[0], option1: e.target.value },
                    question.options[1], question.options[2], question.options[3]
                  ])}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Option 2:</label>
                <input
                  type="text"
                  value={question.options[0].option2}
                  onChange={(e) => handleEditQuestion(question._id, 'options', [
                    question.options[0], 
                    { ...question.options[1], option2: e.target.value }, 
                    question.options[2], 
                    question.options[3]
                  ])}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Option 3:</label>
                <input
                  type="text"
                  value={question.options[0].option3}
                  onChange={(e) => handleEditQuestion(question._id, 'options', [
                    question.options[0], 
                    question.options[1], 
                    { ...question.options[2], option3: e.target.value }, 
                    question.options[3]
                  ])}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Option 4:</label>
                <input
                  type="text"
                  value={question.options[0].option4}
                  onChange={(e) => handleEditQuestion(question._id, 'options', [
                    question.options[0], 
                    question.options[1], 
                    question.options[2], 
                    { ...question.options[3], option4: e.target.value }
                  ])}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div> */}

<div className="mb-2">
  <label className="block text-sm font-medium mb-1">Option 1:</label>
  <input
    type="text"
    // value={question.options[0].option1}
    value={question.options.option1}
    onChange={(e) => handleEditQuestion(question._id, 'option1', e.target.value, 0)}  // Pass option index
    className="w-full border border-gray-300 rounded p-2"
  />
</div>

<div className="mb-2">
  <label className="block text-sm font-medium mb-1">Option 2:</label>
  <input
    type="text"
    // value={question.options[0].option2}
    value={question.options.option2}
    onChange={(e) => handleEditQuestion(question._id, 'option2', e.target.value, 1)}  // Pass option index
    className="w-full border border-gray-300 rounded p-2"
  />
</div>

<div className="mb-2">
  <label className="block text-sm font-medium mb-1">Option 3:</label>
  <input
    type="text"
    // value={question.options[0].option3}
    value={question.options.option3}
    onChange={(e) => handleEditQuestion(question._id, 'option3', e.target.value, 2)}  // Pass option index
    className="w-full border border-gray-300 rounded p-2"
  />
</div>

<div className="mb-2">
  <label className="block text-sm font-medium mb-1">Option 4:</label>
  <input
    type="text"
    // value={question.options[0].option4}
    value={question.options.option1}
    onChange={(e) => handleEditQuestion(question._id, 'option4', e.target.value, 3)}  // Pass option index
    className="w-full border border-gray-300 rounded p-2"
  />
</div>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Correct Answer:</label>
                <input
                  type="text"
                  value={question.correctAnswer}
                  onChange={(e) => handleEditQuestion(question._id, 'correctAnswer', e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => handleRemoveQuestion(question._id)}
                  className="ml-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-800">
          Update Exam
        </button>
      </form>
    </div>
  );
};

export default EditExam;

