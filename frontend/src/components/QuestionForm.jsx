// frontend/src/components/QuestionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/questions', {
      question,
      options,
      correctAnswer,
    });
    // Reset form or handle success
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[index] = e.target.value;
            setOptions(newOptions);
          }}
          placeholder={`Option ${index + 1}`}
        />
      ))}
      <input type="text" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} placeholder="Correct Answer" />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;
