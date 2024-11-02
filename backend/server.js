
import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import questionRouter from "./src/router/QuestionRouter.js";
import examRouter from "./src/router/ExamRouter.js";


const app = express();
// const PORT = process.env.PORT || 5010;
const PORT = 5000 ;
app.use(cors());
app.use(bodyParser.json());

 const mongodbURL = process.env.mongodbURL ; 

 app.use('/questions',questionRouter)
 app.use('/exams',examRouter)

 
 // connect to db and run server 
 app.listen(PORT,async()=>{   
    // console.log('server is running on port') ; 
     console.log(`Server is running on http://localhost:${PORT}`);   
     await mongoose.connect(mongodbURL) ; 
    //connectDB() ; 
     console.log('Connection to db Successfully established') ;
 })

