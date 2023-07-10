import React, { useState } from 'react';

const DoubtSubmissionPage = ({ onDoubtSubmit }) => {
  const [doubt, setDoubt] = useState('');

  const handleInputChange = (event) => {
    setDoubt(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (doubt.trim() !== '') {
      onDoubtSubmit(doubt);
      setDoubt('');
    }
  };

  return (
    <div>
      <h1>Doubt Submission</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={doubt}
          onChange={handleInputChange}
          placeholder="Enter your doubt"
        />
        <button type="submit">Submit Doubt</button>
      </form>
    </div>
  );
};

export default DoubtSubmissionPage;
