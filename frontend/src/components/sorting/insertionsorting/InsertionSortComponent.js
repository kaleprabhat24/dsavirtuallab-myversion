import React, { useState } from 'react';
import InsertionSort from './InsertionSortComponent'; // Import the Insertion Sort class
import './InsertionSort.css'; // Import your CSS styles
import InsertionSortSimulation from './Simulation';

const InsertionSortComponent = () => {
    const [array, setArray] = useState([]); // Array to be sorted
    const [inputValue, setInputValue] = useState(''); // Input value
    const [steps, setSteps] = useState([]); // Steps for visualization
    const [currentStepIndex, setCurrentStepIndex] = useState(0); // Track the current step index
    const [error, setError] = useState(null);

    const handleAddValue = () => {
        if (!inputValue || isNaN(parseInt(inputValue))) {
            setError("Please enter a valid number.");
            return;
        }
        setArray((prevArray) => [...prevArray, parseInt(inputValue)]);
        setInputValue('');
        setError(null); // Clear error
    };

    const handleStartSort = () => {
        if (array.length === 0) {
            setError("Array is empty. Please add some values first.");
            return;
        }
        const sorter = new InsertionSortSimulation();
        sorter.setArray([...array]); // Set array to be sorted
        sorter.sort(); // Perform the sort and collect steps
        setSteps(sorter.getSteps()); // Set the steps to be displayed
        setCurrentStepIndex(0); // Reset to first step
        setError(null);
    };

    const handleNextStep = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1); // Move to the next step
        }
    };

    const handlePrevStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1); // Move to the previous step
        }
    };

    const handleReset = () => {
        setArray([]); // Reset the array
        setSteps([]); // Clear the steps
        setCurrentStepIndex(0); // Reset step index
        setError(null); // Clear any error
    };

    return (
        <div className="container">
            <h1>Insertion Sort Simulation</h1>
            {error && <div className="error-message">{error}</div>}

            {/* Input for adding values */}
            <div className="input-group">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter number"
                    className="input-field"
                />
                <button onClick={handleAddValue} className="action-button">Add Value</button>
            </div>

            {/* Start Sorting Button */}
            <div className="input-group">
                <button onClick={handleStartSort} className="action-button">Start Sort</button>
                <button onClick={handleReset} className="action-button">Reset</button>
            </div>

            {/* Navigation for sorting steps */}
            <div className="input-group">
                <button onClick={handlePrevStep} className="action-button">Previous Step</button>
                <button onClick={handleNextStep} className="action-button">Next Step</button>
            </div>

            {/* Visualization of the current step */}
            <div className="array-visualization">
                {steps.length > 0 && steps[currentStepIndex].map((value, index) => (
                    <div key={index} className="array-element">
                        {value}
                        {index < steps[currentStepIndex].length - 1 && <span className="arrow">→</span>}
                    </div>
                ))}
                {steps.length === 0 && <div className="array-placeholder">Array: {array.join(', ')}</div>}
            </div>

            {/* Display current step */}
            <div className="step-counter">
                Step {currentStepIndex + 1} of {steps.length}
            </div>
        </div>
    );
};

export default InsertionSortComponent;