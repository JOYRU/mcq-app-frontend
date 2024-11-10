import express from 'express'

import { addQuestion, getQuestions, getQuestionsDependOnSubject, getQuestionsSubject, RandomlySetQuestions } from '../controller/QuestionController.js';


const questionRouter = express.Router() ;
questionRouter.post('/add',addQuestion)
questionRouter.get('/:id',getQuestions)
questionRouter.get('/random/questions',RandomlySetQuestions) ; 
// questionRouter.get('/suject',getQuestionsSubject)

questionRouter.get('/subject/question',getQuestionsDependOnSubject) ; 

// deparmentRouter.get('/:id',getDepartment)
// deparmentRouter.put('/:id',editDepartment)
// deparmentRouter.delete('/:id',deleteDepartment)

export default questionRouter