// frontend/src/App.js
import React from 'react';
import {BrowserRouter as  Router,Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import QuestionForm from './components/Question/QuestionForm';
import ExamForm from './components/Exam/CreateExam';
import './index.css'
import Dashboard from './components/pages/Dashboard';


const App = () => {
  return (
    <Router>
       <Routes>
       <Route path="/" element={<Navigate to="/dashboard"/>}></Route>
         <Route path="/questions/add" element={<QuestionForm/>}></Route>
          <Route path="/exam/create" element={<ExamForm />}></Route>
          <Route path="/exam/:id" element={<ExamForm />}></Route>
         <Route path="/dashboard" element={  
              <Dashboard /> }>
        </Route>
       </Routes>
       
    </Router>   
 
    
    
  );
};

export default App;
