// src/components/SortingSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Ensure the CSS is imported

const SortingSidebar = ({ progress }) => {
  return (
    <div className="sidebar">
      <h3>Data Structures I</h3> {/* Sidebar title */}
      <div className="progress-container">
        <h4>Course Progress</h4>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>{progress}%</div>
        </div>
        <p>Estimated Time: 1 hour</p>
      </div>

      <h4>Sorting Navigation</h4>
      <ul>
        {/* Navigate directly to the "Aim" section of Insertion Sort */}
        <li><Link to="/data-structures/sorting/insertionsort/aim">Insertion Sort</Link></li>
       
      </ul>
    </div>
  );
};

export default SortingSidebar;
