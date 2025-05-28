// src/components/insertion-sort/Analysis.js
import React from 'react';
import './InsertionSort.css';

const InsertionAnalysis = () => {
    return (
        <div className="content-box">
            <h2 className="analysis-title">Analysis</h2>

            <div className="iframe-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/9UL7pPR-4VA" 
                    title="YouTube video" 
                    frameBorder="0" 
                    allowFullScreen 
                ></iframe>
            </div>

            <p>In this section, we analyze the performance and complexity of Insertion Sort.</p>

            <h3 className="analysis-subtitle">Time Complexity</h3>
            <ul>
                <li><strong>Best Case:</strong> O(n) - occurs when the array is already sorted.</li>
                <li><strong>Average Case:</strong> O(n<sup>2</sup>) - when elements are in a random order.</li>
                <li><strong>Worst Case:</strong> O(n<sup>2</sup>) - when the array is sorted in reverse order.</li>
            </ul>

            <h3 className="analysis-subtitle">Space Complexity</h3>
            <p>Insertion Sort has a space complexity of O(1) since it requires only a constant amount of additional memory space.</p>

            <h3 className="analysis-subtitle">Stability</h3>
            <p>Insertion Sort is a stable sorting algorithm because it preserves the relative order of equal elements.</p>

            <h3 className="analysis-subtitle">Applications</h3>
            <ul>
                <li>Efficient for small or nearly sorted datasets.</li>
                <li>Used in hybrid algorithms like Timsort.</li>
            </ul>
        </div>
    );
};

export default InsertionAnalysis;
