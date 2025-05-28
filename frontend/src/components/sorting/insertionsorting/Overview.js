import React from 'react';
import './InsertionSort.css';

const InsertionOverview = () => {
    return (
        <div className="content-box"> {/* Added content-box for styling */}
            <h1>Insertion Sort</h1>
            
            {/* Insertion Sort Introduction Video */}
            <div className="iframe-container">
    <iframe 
        width="700" 
        height="400" 
        src="https://www.youtube.com/embed/nwJGP0eFktg" 
        title="Insertion Sort Introduction" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
    </iframe>
</div>

            {/* Prerequisites Section */}
            <h2>Prerequisites of the Experiment</h2>
            <p>This experiment requires you to have basic knowledge about:</p>
            <ul>
                <li>The Notion of Sorting</li>
                <li>Concept of Arrays and Indexing</li>
                <li>Basics of Time Complexity</li>
            </ul>
            <p>And above all, a curiosity to learn and explore...!</p>

            {/* Overview of the Experiment */}
            <h2>Overview of the Experiment</h2>
            <p>
                The aim of this experiment is to understand the Insertion Sort algorithm, its time and space complexity, and how it compares to other sorting algorithms.
                This experiment includes video lectures, interactive demonstrations, hands-on exercises, and self-assessment quizzes to practice and learn the algorithm effectively.
            </p>

            {/* Experiment Modules and Weightage */}
            <h2>Experiment Modules and their Weightage</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Weightage</th>
                        <th>Expectation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pre-Test</td>
                        <td>10%</td>
                        <td>Solve All Questions</td>
                    </tr>
                    <tr>
                        <td>Insertion Logic</td>
                        <td>20%</td>
                        <td>Practice how to insert elements in sorted order</td>
                    </tr>
                    <tr>
                        <td>Shifting Elements</td>
                        <td>20%</td>
                        <td>Understand how to shift elements efficiently</td>
                    </tr>
                    <tr>
                        <td>Complete Algorithm</td>
                        <td>30%</td>
                        <td>Practice the full algorithm on larger datasets</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InsertionOverview;
