import './App.css';
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import CardFooter from './components/CardFooter.js';
import UnitControl from './components/UnitControl.js';
import UnitConverter from './components/UnitConverter.js';

library.add(fab, fas, far);

function App() {

  const [inputValue, setInputValue] = useState(0)
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  }

  return (
    <div>
      <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <UnitControl />
          <UnitConverter
            inputValue={inputValue}
            handleInputChange={handleInputChange} />
        </div>
        {/* Step1 傳入CardFooter的data 透過 key={value} 傳入 */}
        <CardFooter inputValue={inputValue} />
      </div>
    </div>
  )
}

export default App