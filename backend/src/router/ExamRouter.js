import express from 'express'
import { addExam , getExams , getExam, generateQuestion, examResult} from '../controller/ExamController.js';

const examRouter = express.Router() ;
examRouter.post('/add',addExam)
examRouter.get('/',getExams)
examRouter.get('/:id',getExam)
examRouter.post('/exam-result',examResult)
examRouter.get('/generate-questions',generateQuestion)

export default examRouter