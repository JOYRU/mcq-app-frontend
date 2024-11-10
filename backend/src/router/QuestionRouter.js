import express from 'express'

import { addQuestion, getQuestions, getQuestionsSubject, RandomlySetQuestions } from '../controller/QuestionController.js';


const questionRouter = express.Router() ;
questionRouter.post('/add',addQuestion)
questionRouter.get('/:id',getQuestions)
questionRouter.get('/random/questions',RandomlySetQuestions) ; 
questionRouter.get('/suject',getQuestionsSubject)

// deparmentRouter.get('/:id',getDepartment)
// deparmentRouter.put('/:id',editDepartment)
// deparmentRouter.delete('/:id',deleteDepartment)

export default questionRouter