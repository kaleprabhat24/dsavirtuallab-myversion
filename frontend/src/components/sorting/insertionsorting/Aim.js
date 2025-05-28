// src/components/insertion-sort/InsertionAim.js
import React from 'react';
import './InsertionSort.css'; // Ensure this path is correct

const InsertionAim = () => {
    return (
        <div className="content-box"> {/* Use content-box class for consistency */}
            <h2>Insertion Sort</h2>

            <h3>Estimated Time</h3>
            <p>1 hour</p>

            <h3>Learning Objectives of the Experiment</h3>
            <p>In this experiment, you will achieve the following learning objectives:</p>

            <ul>
                <li>Understand the incremental strategy and how it can be applied to solve sorting problems.</li>
                <li>Given an unsorted array of numbers, generate a sorted array by implementing the Insertion Sort algorithm.</li>
                <li>Learn the key operations of Insertion Sort: shifting and inserting elements, and analyze the time complexity for best, average, and worst-case scenarios.</li>
                <li>Demonstrate knowledge of time complexity by counting the number of comparisons and shifts involved during each insertion.</li>
                <li>Compare Insertion Sort with other sorting algorithms to understand its efficiency, particularly for small or nearly sorted datasets.</li>
                <li>Recognize Insertion Sort as a stable comparison sorting algorithm.</li>
            </ul>
        </div>
    );
};

export default InsertionAim;
