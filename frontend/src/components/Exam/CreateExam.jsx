import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExamForm = () => {
const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [examId, setExamId] = useState('');
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const examData = {
        title:title,
      start_time: startTime,
      time_duration: timeDuration,
    };

    try {
      const response = await axios.post('http://localhost:5000/exams/add', examData);
      setExamId(response.data._id); // Assuming the API returns the created exam with an ID
      startCountdown(timeDuration);
    } catch (error) {
      console.error('Error creating exam:', error);
    }
  };

  const startCountdown = (duration) => {
    setTimeLeft(duration * 60); // Convert minutes to seconds

    if (timer) clearInterval(timer); // Clear existing timer

    const newTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(newTimer);
          return 0; // Stop the timer
        }
        return prev - 1;
      });
    }, 1000);
    
    setTimer(newTimer);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create an Exam</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Exam Name:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Time:</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Time Duration (minutes):</label>
          <input
            type="number"
            value={timeDuration}
            onChange={(e) => setTimeDuration(e.target.value)}
            className="block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-black font-bold py-2 rounded hover:bg-blue-800">
          Create Exam
        </button>
      </form>
      {examId && (
        <div className="mt-4">
          <h3 className="font-medium">Exam ID: {examId}</h3>
          <h4 className="mt-2">Time Remaining: {formatTime(timeLeft)}</h4>
        </div>
      )}
    </div>
  );
};

export default ExamForm;
// create a project forntend react vite and backend node and database mongodb