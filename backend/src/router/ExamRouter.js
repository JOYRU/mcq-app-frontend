import express from 'express'
import { addExam , getExams , getExam, examResult, updatedExamData, examResultTeacher , studentExamResult} from '../controller/ExamController.js';

const examRouter = express.Router() ;
examRouter.post('/add',addExam)
examRouter.get('/',getExams)
examRouter.get('/:id',getExam)
examRouter.put('/update/:id',updatedExamData)
examRouter.post('/exam-result',examResult)
examRouter.get('/exam-result-teacher/:id',examResultTeacher)
examRouter.get('/generate/result',studentExamResult)

export default examRouter