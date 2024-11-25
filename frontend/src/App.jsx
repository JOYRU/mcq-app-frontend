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
import UnauthorizedPage from './components/UnauthorizedPage';
import EditExam from './components/Exam/EditExam';
import ExamResultTeacher from './components/Exam/ExamResultTeacher';
import ExamResultExamId from './components/Exam/ExamResultExamId';
import ExamResultStudent from './components/Exam/ExamResultStudent';


function App() {


  return (

<AuthProvider>
  <BrowserRouter>
    <div className="app-container">
      <div className="content-area">
        {/* Teacher Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                element={Layout}
                allowedRoles={['teacher','student']}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="dashboard/questions/add"
              element={<PrivateRoute element={QuestionForm} allowedRoles={['teacher']} />}
            />
            <Route
              path="dashboard/exam/create"
              element={<PrivateRoute element={ExamForm} allowedRoles={['teacher']} />}
            />

            <Route
              path="dashboard/exam/update/:id"
              element={<PrivateRoute element={EditExam} allowedRoles={['teacher']} />}
            />

            <Route
              path="dashboard/exam/result"
              element={<PrivateRoute element={ExamResultTeacher} allowedRoles={['teacher']} />}
            />
             <Route
              path="dashboard/exam/result/:id"
              element={<PrivateRoute element={ExamResultExamId} allowedRoles={['teacher']} />}
            />

              <Route
              path="dashboard/exam/previous-result"
              element={<PrivateRoute element={ExamResultStudent}  allowedRoles={['student']} />}
            />

            {/* <Route path="/exam/edit/:id" element={<EditExam/>} /> */}

            <Route path="dashboard/exam/:id" element={<ExamDetails />} />
            <Route path="dashboard/archive-exam-list" element={<ArchiveExam />} />
            <Route path="dashboard/archive-exam-list/:id" element={<ArchiveExamDetails />} />
            <Route path="dashboard/subject-list" element={<SubjectList />} />
            <Route path="dashboard/subject-list/:subject" element={<SubjectQuestions />} />
          </Route>

          {/* Non-Teacher Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
</AuthProvider>


  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute'; // Import the new PrivateRoute
// import Dashboard from './components/pages/Dashboard';
// import QuestionForm from './components/Question/QuestionForm';
// import ExamForm from './components/Exam/CreateExam';
// import ExamDetails from './components/Exam/ExamDetails';
// import Register from './components/Authentication/Register';
// import Login from './components/Authentication/Login';
// import ForgotPassword from './components/Authentication/ForgetPassword';
// import ArchiveExam from './components/Exam/ArchiveExam';
// import ArchiveExamDetails from './components/Exam/ArchiveExamDetails';
// import SubjectList from './components/SubjectList';
// import SubjectQuestions from './components/SujectQuestions';
// import Layout from './components/pages/Layout';
// import UnauthorizedPage from './components/UnauthorizedPage'; // Import UnauthorizedPage

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="app-container">
//           <div className="content-area">
//             <Routes>
//               {/* Public routes */}
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/forget-password" element={<ForgotPassword />} />
//               <Route path="/unauthorized" element={<UnauthorizedPage />} />

//               {/* Protected routes */}
//               <Route path="/" element={<Navigate to="/login" />} />
              
//               {/* Protected Layout route */}
//               <Route path="/" element={<PrivateRoute allowedRoles={['teacher', 'student']} element={<Layout />} />}>
                
//                 {/* Teacher-only routes */}
//                 <Route path="dashboard" element={<PrivateRoute allowedRoles={['teacher']} element={<Dashboard />} />} />
//                 <Route path="dashboard/questions/add" element={<PrivateRoute allowedRoles={['teacher']} element={<QuestionForm />} />} />
//                 <Route path="dashboard/exam/create" element={<PrivateRoute allowedRoles={['teacher']} element={<ExamForm />} />} />

//                 {/* Student-only routes */}
//                 <Route path="dashboard/exam/:id" element={<PrivateRoute allowedRoles={['student']} element={<ExamDetails />} />} />
//                 <Route path="dashboard/archive-exam-list" element={<PrivateRoute allowedRoles={['student']} element={<ArchiveExam />} />} />
//                 <Route path="dashboard/archive-exam-list/:id" element={<PrivateRoute allowedRoles={['student']} element={<ArchiveExamDetails />} />} />

//                 {/* Both Teacher and Student routes */}
//                 <Route path="dashboard/subject-list" element={<PrivateRoute allowedRoles={['teacher', 'student']} element={<SubjectList />} />} />
//                 <Route path="dashboard/subject-list/:subject" element={<PrivateRoute allowedRoles={['teacher', 'student']} element={<SubjectQuestions />} />} />
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;




