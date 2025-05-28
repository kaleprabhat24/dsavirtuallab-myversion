import React, { useState, useEffect } from 'react';
import VisualisationComponent from './VisualisationComponent';
import './InsertionSort.css';

const InsertionVisualisation = () => {
  const initialArray = [45, 12, 35, 27, 63, 18]; // Initial random array
  const [array, setArray] = useState(initialArray);
  const [iterations, setIterations] = useState([initialArray]); // Store each iteration
  const [currentIndex, setCurrentIndex] = useState(1);
  const [sorted, setSorted] = useState(false);
  const [step, setStep] = useState(1); // Track the current step

  useEffect(() => {
    if (!sorted && currentIndex < array.length) {
      const timeout = setTimeout(() => {
        performInsertionSortStep(currentIndex);
        setCurrentIndex(currentIndex + 1);
        setStep(step + 1); // Increase the step count with each iteration
      }, 1000); // Adjust delay for smoother simulation

      return () => clearTimeout(timeout);
    } else if (currentIndex >= array.length) {
      setSorted(true); // Sorting is complete
      setTimeout(() => {
        resetSorting(); // Restart the process after a brief delay
      }, 1000); // Delay before restarting the sorting
    }
  }, [array, currentIndex, sorted]);

  const performInsertionSortStep = (i) => {
    let newArray = [...array];
    let key = newArray[i];
    let j = i - 1;

    while (j >= 0 && newArray[j] > key) {
      newArray[j + 1] = newArray[j];
      j--;
    }
    newArray[j + 1] = key;
    setArray(newArray); // Update the array state
    setIterations([...iterations, [...newArray]]); // Store this step for visualization
  };

  const resetSorting = () => {
    setArray([...initialArray]); // Reset the array to its initial unsorted state
    setIterations([initialArray]); // Reset the steps
    setCurrentIndex(1);          // Restart from the second element
    setSorted(false);            // Mark sorting as not yet complete
    setStep(1);                  // Reset the step count
  };

  return (
    <div className="visualizer">
      <h2>Step-by-Step Insertion Sort</h2> {/* Display the title */}
      {iterations.map((arr, idx) => (
        <div key={idx} className="step-box">
          <h3>Step {idx}</h3>
          <VisualisationComponent array={arr} currentIndex={currentIndex - 1} />
        </div>
      ))}
    </div>
  );
};

export default InsertionVisualisation;
