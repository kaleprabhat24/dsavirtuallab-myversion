// src/components/linked-list/VisualisationComponent.js
import React from 'react';
import './linkedlist.css';

const VisualisationComponent = ({ list }) => {
  return (
    <div className="Visualisation">
      {list.map((value, index) => (
        <React.Fragment key={index}>
          <div className="Node">{value}</div>
          {index < list.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
      {list.length === 0 && <div className="Node">Null</div>}
    </div>
  );
};

export default VisualisationComponent;
