// src/components/tree/TreeFurtherReadings.js

import React from 'react';
import './tree.css'; // You can rename this CSS file if needed
const TreeFurtherReadings = () => {
    return (
        <div className="content-box">
            <h2>Further Readings/References</h2>
            <p>Additional resources and references for further reading on trees and related concepts.</p>
            <ul>
                <li>
                    <a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank" rel="noopener noreferrer">
                        GeeksforGeeks: Binary Tree Data Structure
                    </a>
                </li>
                <li>
                    <a href="https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm" target="_blank" rel="noopener noreferrer">
                        Tutorialspoint: Tree Data Structure
                    </a>
                </li>
                <li>
                    <a href="https://www.programiz.com/dsa/trees" target="_blank" rel="noopener noreferrer">
                        Programiz: Tree Data Structure
                    </a>
                </li>
                <li>
                    <a href="https://www.javatpoint.com/tree-data-structure" target="_blank" rel="noopener noreferrer">
                        Javatpoint: Tree Data Structure
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default TreeFurtherReadings;
