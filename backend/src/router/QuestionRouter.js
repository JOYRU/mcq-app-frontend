import express from 'express'

import { addQuestion, getQuestions } from '../controller/QuestionController.js';


const questionRouter = express.Router() ;
questionRouter.post('/add',addQuestion)
questionRouter.get('/:id',getQuestions)
// deparmentRouter.get('/:id',getDepartment)
// deparmentRouter.put('/:id',editDepartment)
// deparmentRouter.delete('/:id',deleteDepartment)

export default questionRouter