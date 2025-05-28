// src/components/linked-list/FurtherReadings.js
import React from 'react';
import './linkedlist.css';
const LinkedListFurtherReadings = () => {
    return (
        <div className="content-box">
            <h2>Further Readings/References</h2>
            <p><i>Additional resources and references for further reading on linked lists.</i></p>
            <ul>
                <li>
                    <a href="https://www.geeksforgeeks.org/linked-list-data-structure/" target="_blank" rel="noopener noreferrer">
                        GeeksforGeeks: Linkedlist Data Structure
                    </a>
                </li>
                <li>
                    <a href="https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm" target="_blank" rel="noopener noreferrer">
                        Tutorialspoint: Linkedlist Data Structure
                    </a>
                </li></ul>
        </div>
    );
};

export default LinkedListFurtherReadings;
