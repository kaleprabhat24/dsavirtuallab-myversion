import React, { useState } from 'react';
import HashingSimulation from './HashingSimulation';
import './Hashing.css';

const HashingComponent = () => {
  const [sizeInput, setSizeInput] = useState('');
  const [hashTableSize, setHashTableSize] = useState(null);
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [error, setError] = useState(null);

  const handleSetSize = () => {
    const size = parseInt(sizeInput);
    if (isNaN(size) || size <= 0) {
      setError("Please enter a valid positive number for the hash table size.");
      return;
    }
    setHashTableSize(size);
    setSizeInput('');
    setError(null);
  };

  const handleAddValue = () => {
    if (!inputValue || isNaN(parseInt(inputValue))) {
      setError("Please enter a valid number.");
      return;
    }
    if (array.length >= hashTableSize) {
      setError(`You can only add up to ${hashTableSize} elements.`);
      return;
    }
    setArray((prevArray) => [...prevArray, parseInt(inputValue)]);
    setInputValue('');
    setError(null);
  };

  const handleStartHashing = () => {
    if (array.length === 0) {
      setError("Array is empty. Please add some values first.");
      return;
    }
    try {
      const hasher = new HashingSimulation();
      hasher.setTable(hashTableSize);
      array.forEach((value) => hasher.insert(value));
      setSteps(hasher.getSteps());
      setCurrentStepIndex(0);
      setError(null);
    } catch (err) {
      setError(err.message); // Display overflow error message
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    setHashTableSize(null);
    setSizeInput('');
    setArray([]);
    setSteps([]);
    setCurrentStepIndex(0);
    setError(null);
  };

  return (
    <div className="container">
      <h1>Double Hashing Simulation</h1>
      {error && <div className="error-message">{error}</div>}

      {hashTableSize === null && (
        <div className="input-group">
          <input
            type="text"
            value={sizeInput}
            onChange={(e) => setSizeInput(e.target.value)}
            placeholder="Enter hash table size"
            className="input-field"
          />
          <button onClick={handleSetSize} className="action-button">Set Table Size</button>
        </div>
      )}

      {hashTableSize !== null && (
        <>
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter number"
              className="input-field"
              disabled={array.length >= hashTableSize}
            />
            <button onClick={handleAddValue} className="action-button" disabled={array.length >= hashTableSize}>
              Add Value
            </button>
          </div>

          <div className="input-group">
            <button onClick={handleStartHashing} className="action-button">Start Hashing</button>
            <button onClick={handleReset} className="action-button">Reset</button>
          </div>

          <div className="input-group">
            <button onClick={handlePrevStep} className="action-button">Previous Step</button>
            <button onClick={handleNextStep} className="action-button">Next Step</button>
          </div>

          <div className="array-visualization">
            {steps.length > 0 && steps[currentStepIndex].map((value, index) => (
              <div key={index} className="array-element">
                {value !== null ? value : 'NULL'}
              </div>
            ))}
            {steps.length === 0 && <div className="array-placeholder">Array: {array.join(', ')}</div>}
          </div>

          <div className="step-counter">
            Step {currentStepIndex + 1} of {steps.length}
          </div>
        </>
      )}
    </div>
  );
};

export default HashingComponent;
