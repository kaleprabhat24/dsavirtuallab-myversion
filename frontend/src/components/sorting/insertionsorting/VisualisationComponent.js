import React from 'react';
import './InsertionSort.css';

const VisualisationComponent = ({ array, currentIndex }) => {
  return (
    <div className="array-visualization">
      {array.map((value, index) => (
        <div
          key={index}
          className={`square 
            ${index < currentIndex ? 'green' : ''} 
            ${index === currentIndex ? 'red' : ''} 
            ${index > currentIndex ? 'blue' : ''}`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default VisualisationComponent;
