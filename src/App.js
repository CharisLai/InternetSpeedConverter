import React, { useState } from 'react';
import './App.css';
import CardFooter from './components/CardFooter.js';
import UnitControl from './components/UnitControl.js';

const App = () => {
  const [inputValue, setInputValue] = useState(0)
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  }

  const UnitConverter = () => (
    <div className="converter">
      <div className="flex-1">
        <div className="converter-title">Set</div>
        <input type="number" className="input-number" min="0" onChange={handleInputChange} value={inputValue} />
      </div>
      <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
        <i className="fas fa-angle-right" ></i>
      </span>
      <div className="text-right flex-1">
        <div className="converter-title">Show</div>
        <input type="text" className="input-number text-right" disabled value={inputValue / 8} />
      </div>
    </div>
  )

  return (
    <div>
      <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <UnitControl />
          <UnitConverter />
        </div>
        <CardFooter />
      </div>
    </div>
  )
}

export default App