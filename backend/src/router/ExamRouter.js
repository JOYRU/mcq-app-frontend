import express from 'express'
import { addExam , getExams} from '../controller/ExamController.js';

const examRouter = express.Router() ;
examRouter.post('/add',addExam)
examRouter.get('/',getExams)

export default examRouter