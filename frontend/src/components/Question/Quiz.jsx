import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [newQuestion, setNewQuestion] = useState('');
    const [newOptions, setNewOptions] = useState(['', '', '', '']);
    const [newAnswer, setNewAnswer] = useState('');

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get('http://localhost:5000/api/questions');
            setQuestions(response.data);
        };
        fetchQuestions();
    }, []);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSelectedOption('');
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleAddQuestion = async (e) => {
        e.preventDefault();
        const options = newOptions.filter(opt => opt); // Filter out empty options
        const questionData = { question: newQuestion, options, answer: newAnswer };

        try {
            await axios.post('http://localhost:5000/api/questions', questionData);
            setNewQuestion('');
            setNewOptions(['', '', '', '']);
            setNewAnswer('');
            // Fetch updated questions
            const response = await axios.get('http://localhost:5000/api/questions');
            setQuestions(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Quiz App</h1>
            {currentQuestion < questions.length ? (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    <div>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleOptionSelect(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleSubmit}>Next</button>
                </div>
            ) : (
                <h2>Your score is {score}/{questions.length}</h2>
            )}

            <h2>Add a New Question</h2>
            <form onSubmit={handleAddQuestion}>
                <input
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Question"
                    required
                />
                {newOptions.map((opt, index) => (
                    <input
                        key={index}
                        type="text"
                        value={opt}
                        onChange={(e) => {
                            const optionsCopy = [...newOptions];
                            optionsCopy[index] = e.target.value;
                            setNewOptions(optionsCopy);
                        }}
                        placeholder={`Option ${index + 1}`}
                        required
                    />
                ))}
                <input
                    type="text"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Correct Answer"
                    required
                />
                <button type="submit">Add Question</button>
            </form>
        </div>
    );
};

export default Quiz;
