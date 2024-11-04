import express from 'express'
import { addExam , getExams , getExam} from '../controller/ExamController.js';

const examRouter = express.Router() ;
examRouter.post('/register',addExam)
examRouter.get('/',getExams)
examRouter.get('/:id',getExam)

export default examRouter