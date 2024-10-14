// frontend/src/App.js
import React from 'react';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';

const App = () => {
  return (
    <div>
      <h1>MCQ Management</h1>
      <QuestionForm />
      <QuestionList />
    </div>
  );
};

export default App;
