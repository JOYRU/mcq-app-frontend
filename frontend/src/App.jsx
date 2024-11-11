// frontend/src/App.js
import React from 'react';
// import {BrowserRouter as  Router,Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route,Navigate, BrowserRouter , useLocation} from 'react-router-dom'
import QuestionForm from './components/Question/QuestionForm';
import ExamForm from './components/Exam/CreateExam';
import './index.css'
import Dashboard from './components/pages/Dashboard';
import ExamCard from './components/Dashboard/ExamCard';
import ExamDetails from './components/Exam/ExamDetails';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgetPassword';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ArchiveExam from './components/Exam/ArchiveExam';
import ArchiveExamDetails from './components/Exam/ArchiveExamDetails';
import Sidebar from './components/Dashboard/Sidebar';
import Navbar from './components/Dashboard/Navbar';
import Layout from './components/pages/Layout';
import SubjectList from './components/SubjectList';
import ExamCreator from './components/Exam/ExamCreator';
import SubjectQuestions from './components/SujectQuestions';


function App() {


  return (
   <AuthProvider>
    <BrowserRouter>

       <div className="app-container">
           <div className="content-area">
           <Routes>
           {/* Layout start */}         
              {/* <Route path="/" element={<Layout />}> */}
              <Route path="/"  element={         
                  <PrivateRoute>
                     <Layout />
                  </PrivateRoute>
                  }  
              >               
              {/* <Route path="/dashboard" element={         
              <Dashboard />}  />  */}
              <Route path="/dashboard" element={         
              <Dashboard />} />

              <Route path="dashboard/questions/add" element={<QuestionForm/>}></Route>
              <Route path="dashboard/exam/create" element={<ExamForm />}></Route>
              <Route path="exam/:id" element={<ExamDetails />}></Route>
              
              <Route path="dashboard/archive-exam-list" element={<ArchiveExam/>}></Route>
              <Route path="dashboard/archive-exam-list/:id" element={<ArchiveExamDetails/>}></Route>
              <Route path="dashboard/subject-list" element={<SubjectList/>}></Route>
              <Route path="dashboard/subject-list/:subject" element={<SubjectQuestions/>}></Route>

              {/* <Route path="dashboard/subject-list/:subject" element={SubjectQuestions}> </Route> */}
              <Route path="dashboard/generate-question" element={<ExamCreator/>}></Route>
           </Route>
            {/* Layout end */}




          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgotPassword />} />

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
     
           </div>
       </div>
        
 
    </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
        

