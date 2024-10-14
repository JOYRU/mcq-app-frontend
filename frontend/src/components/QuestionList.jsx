// frontend/src/components/QuestionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get('http://localhost:5000/api/questions');
      setQuestions(response.data);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          <ul>
            {q.options.map((option, i) => <li key={i}>{option}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
