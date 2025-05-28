import React from 'react';
import './Hashing.css'; // Add styles for display

const VisualisationComponent = ({ hashTable }) => {
  return (
    <div className="hash-table">
      {hashTable.map((value, index) => (
        <div key={index} className="hash-slot">
          <div className="slot-index">{index}</div>
          <div className="slot-value">{value || 'Empty'}</div>
        </div>
      ))}
    </div>
  );
};

export default VisualisationComponent;
