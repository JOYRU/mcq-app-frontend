// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
const mongodbURL = "mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/mcq-app" 


// MongoDB connection
// mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(mongodbURL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const questionsRouter = require('./routes/questions');
app.use('/api/questions', questionsRouter);

