// src/components/linked-list/Node.js
import React from 'react';
import './linkedlist.css';

const Node = ({ value }) => {
  return (
    <div className="Node">
      {value}
    </div>
  );
};

export default Node;
