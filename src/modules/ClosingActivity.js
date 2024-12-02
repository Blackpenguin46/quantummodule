import React, { useState } from 'react';



const ClosingActivity = () => {
  const [reflection, setReflection] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Closing Activity</h1>
      <p>
        Reflect on what you've learned throughout this module. Please write your thoughts below.
      </p>
      {!isSubmitted ? (
        <div>
          <textarea
            value={reflection}
            onChange={handleReflectionChange}
            placeholder="Write your reflection here"
          ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <p>Thank you for your reflection!</p>
      )}
    </div>
  );
};

export default ClosingActivity;
