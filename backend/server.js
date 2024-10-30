// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());
// const mongodbURL = "mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/mcq-app" 


// // MongoDB connection
// // mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect(mongodbURL)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// const questionsRouter = require('./routes/questions');
// app.use('/api/questions', questionsRouter);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
 const mongodbURL = "mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/mcq-app" 

mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define Question schema and model
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String,
});

const Question = mongoose.model('Question', questionSchema);

// Endpoint to get questions
app.get('/api/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Endpoint to add a new question
app.post('/api/questions', async (req, res) => {
    const { question, options, answer } = req.body;

    const newQuestion = new Question({
        question,
        options,
        answer,
    });

    try {
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


