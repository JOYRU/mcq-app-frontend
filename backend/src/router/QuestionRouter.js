import express from 'express'

import { addQuestion } from '../controller/QuestionController.js';


const questionRouter = express.Router() ;
questionRouter.post('/add',addQuestion)
// deparmentRouter.get('/',getDepartments)
// deparmentRouter.get('/:id',getDepartment)
// deparmentRouter.put('/:id',editDepartment)
// deparmentRouter.delete('/:id',deleteDepartment)

export default questionRouter