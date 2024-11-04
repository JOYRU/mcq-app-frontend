// frontend/src/App.js
import React from 'react';
import {BrowserRouter as  Router,Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import QuestionForm from './components/Question/QuestionForm';
import ExamForm from './components/Exam/CreateExam';
import './index.css'
import Dashboard from './components/pages/Dashboard';
import ExamCard from './components/Dashboard/ExamCard';
import ExamDetails from './components/Exam/ExamDetails';


const App = () => {
  return (
    <Router>
       <Routes>
       <Route path="/" element={<Navigate to="/dashboard"/>}></Route>
         <Route path="dashboard/questions/add" element={<QuestionForm/>}></Route>
          <Route path="dashboard/exam/create" element={<ExamForm />}></Route>
          <Route path="exam/:id" element={<ExamDetails />}></Route>
         <Route path="/dashboard" element={  
              <Dashboard /> }>
        </Route>
        <Route path="/dashboard" element={<ExamCard />}></Route>
        
       </Routes>
       
    </Router>   
 
    
    
  );
};

export default App;

/*

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    {/* Add more routes as needed 
                    </Routes>
                    </Router>
                </AuthProvider>
            );
        }
        
        export default App;
        

*/