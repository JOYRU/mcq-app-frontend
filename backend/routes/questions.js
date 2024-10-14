// backend/routes/questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Create a question
router.post('/', async (req, res) => {
  const newQuestion = new Question(req.body);
  try {
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
