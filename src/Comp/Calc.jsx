import React, { useState } from 'react';
import '../index.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('');
      }
    } else if (value === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button id='b' onClick={() => handleButtonClick('=')}>=</button>
        </div>
        <div className="row">
          <button id='c' onClick={() => handleButtonClick('C')}>C</button>
        </div>
      </div>
    </div>
  );
};


export default Calculator;
