import React, { useState } from 'react';
// import { evaluate } from 'mathjs'; 
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = window.Math.evaluate(display); // Use evaluate function directly
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <p>evaluate not working</p>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className={button === '=' ? 'equal' : button === 'C' ? 'clear' : ''}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;