import React, { useState } from 'react';
import DoubtSubmissionPage from './Doubtsubmit';
import './Doubt.css';

const DoubtSection = () => {
  const [doubts, setDoubts] = useState([]);

  const addDoubt = (doubt) => {
    setDoubts([...doubts, { doubt, answers: [] }]);
  };

  const addAnswer = (doubtIndex, answer) => {
    setDoubts((prevDoubts) => {
      const updatedDoubts = [...prevDoubts];
      updatedDoubts[doubtIndex].answers.push(answer);
      return updatedDoubts;
    });
  };

  return (
    <div className="doubt-section">
      <h1 className="doubt-section__title">Doubt Section</h1>
      <DoubtSubmissionPage onDoubtSubmit={addDoubt} />
      <div className="doubt-list">
        {doubts.map((doubt, index) => (
          <DoubtItem key={index} doubt={doubt} onAnswerSubmit={(answer) => addAnswer(index, answer)} />
        ))}
      </div>
    </div>
  );
};

// const DoubtSubmissionPage = ({ onDoubtSubmit }) => {
//   const [doubt, setDoubt] = useState('');

//   const handleInputChange = (event) => {
//     setDoubt(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (doubt.trim() !== '') {
//       onDoubtSubmit(doubt);
//       setDoubt('');
//     }
//   };

//   return (
//     <div>
//       <h2>Doubt Submission</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={doubt}
//           onChange={handleInputChange}
//           placeholder="Enter your doubt"
//         />
//         <button type="submit">Submit Doubt</button>
//       </form>
//     </div>
//   );
// };

const DoubtItem = ({ doubt, onAnswerSubmit }) => {
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');

  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const handleInputChange = (event) => {
    setNewAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newAnswer.trim() !== '') {
      addAnswer(newAnswer);
      onAnswerSubmit(newAnswer);
      setNewAnswer('');
    }
  };

  return (
    <div className="doubt-item">
      <div className="doubt-item__content">
        <h3 className="doubt-item__title">Doubt:</h3>
        <p className="doubt-item__text">{doubt.doubt}</p>
      </div>
      <div className="doubt-item__answers">
        <h3 className="doubt-item__title">Answers:</h3>
        <div className="doubt-item__answer-list">
          {doubt.answers.map((answer, index) => (
            <div key={index} className="doubt-item__answer">
              {answer}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="doubt-item__form">
          <input
            type="text"
            value={newAnswer}
            onChange={handleInputChange}
            className="doubt-item__input"
            placeholder="Enter your answer"
          />
          <button type="submit" className="doubt-item__button">
            Add Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoubtSection;
