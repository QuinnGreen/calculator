import React, { useState} from 'react';
// import { evaluate } from 'mathjs'; 
import './App.css';

const App = () => {
  const [sum, setSum] = useState("");


  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = math.evaluate(sum); 
        setSum(result);
      } catch (error) {
        setSum('Error');
      }
    } else if (value === 'C') {
      setSum("");
    } else {
      setSum((sum) => sum + value);
    }
  };

  const buttons = ['7', '8', '9', '/','4', '5', '6', '*','1', '2', '3', '-','0', '.', '=', '+','C'];

  return (
    <div className="calculator">
        
      <div className="display">{sum}</div>
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