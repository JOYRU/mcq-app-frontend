import express from 'express'
import { addExam , getExams , getExam, generateQuestion} from '../controller/ExamController.js';

const examRouter = express.Router() ;
examRouter.post('/add',addExam)
examRouter.get('/',getExams)
examRouter.get('/:id',getExam)
examRouter.get('/generate-questions',generateQuestion)

export default examRouter