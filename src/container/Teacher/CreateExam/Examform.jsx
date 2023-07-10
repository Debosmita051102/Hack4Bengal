import React, { useState } from 'react';
import './Exam.css'; // Import the CSS file for the exam form

function ExamForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // For example, you can send the form data to a server or display it in the console
    console.log('Name:', name);
    console.log('Subject:', subject);
    console.log('Score:', score);
    console.log('Number of Questions:', numQuestions);
    console.log('Questions:', questions);

    // Reset form fields
    setName('');
    setSubject('');
    setScore('');
    setNumQuestions(0);
    setQuestions([]);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = {
      ...newQuestions[index],
      question: value,
      showOptions: newQuestions[index]?.showOptions || false,
    };
    setQuestions(newQuestions);
  };

  const handleToggleOptions = (index) => {
    const newQuestions = [...questions];
    newQuestions[index] = {
      ...newQuestions[index],
      showOptions: !newQuestions[index]?.showOptions,
    };
    setQuestions(newQuestions);
  };

  return (
    <div className="exam-form-container">
      <h1 className="exam-form-heading">EXAM FORM</h1>
      <form onSubmit={handleSubmit} className="exam-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter the subject"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Score:</label>
          <input
            type="text"
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="numQuestions">Number of Questions:</label>
          <input
            type="number"
            id="numQuestions"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="input-field"
          />
        </div>
        {Array.from({ length: numQuestions }, (_, index) => (
          <div className="form-group question-container" key={index}>
            <label htmlFor={`question-${index + 1}`}>Question {index + 1}:</label>
            <input
              type="text"
              id={`question-${index + 1}`}
              value={questions[index]?.question || ''}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              placeholder={`Enter question ${index + 1}`}
              className="input-field"
            />
            <button
              type="button"
              onClick={() => handleToggleOptions(index)}
              className={`toggle-options-button ${questions[index]?.showOptions ? 'active' : ''}`}
            >
              {questions[index]?.showOptions ? 'Hide Options' : 'Show Options'}
            </button>
            {questions[index]?.showOptions && (
              <div className="options-container">
                <input
                  type="text"
                  value={questions[index]?.options?.[0] || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index] = {
                      ...newQuestions[index],
                      options: [e.target.value, newQuestions[index]?.options?.[1], newQuestions[index]?.options?.[2], newQuestions[index]?.options?.[3]],
                    };
                    setQuestions(newQuestions);
                  }}
                  placeholder="Option A"
                  className="input-field option-field"
                />
                <input
                  type="text"
                  value={questions[index]?.options?.[1] || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index] = {
                      ...newQuestions[index],
                      options: [newQuestions[index]?.options?.[0], e.target.value, newQuestions[index]?.options?.[2], newQuestions[index]?.options?.[3]],
                    };
                    setQuestions(newQuestions);
                  }}
                  placeholder="Option B"
                  className="input-field option-field"
                />
                <input
                  type="text"
                  value={questions[index]?.options?.[2] || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index] = {
                      ...newQuestions[index],
                      options: [newQuestions[index]?.options?.[0], newQuestions[index]?.options?.[1], e.target.value, newQuestions[index]?.options?.[3]],
                    };
                    setQuestions(newQuestions);
                  }}
                  placeholder="Option C"
                  className="input-field option-field"
                />
                <input
                  type="text"
                  value={questions[index]?.options?.[3] || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index] = {
                      ...newQuestions[index],
                      options: [newQuestions[index]?.options?.[0], newQuestions[index]?.options?.[1], newQuestions[index]?.options?.[2], e.target.value],
                    };
                    setQuestions(newQuestions);
                  }}
                  placeholder="Option D"
                  className="input-field option-field"
                />
              </div>
            )}
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ExamForm;