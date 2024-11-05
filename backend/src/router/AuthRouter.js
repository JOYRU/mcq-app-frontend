import express from 'express'
import { forgetPassword, Login, Register } from '../controller/AuthController.js';
//import { addExam , getExams , getExam} from '../controller/ExamController.js';

const authRouter = express.Router() ;
authRouter.post('/register',Register)
authRouter.post('/login',Login)
authRouter.post('/forget-password',forgetPassword)

export default authRouter