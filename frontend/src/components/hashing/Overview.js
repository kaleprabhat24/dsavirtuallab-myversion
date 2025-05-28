// src/components/hashing/Overview.js
import React from 'react';
import './Hashing.css';

const HashingOverview = () => {
    return (
        <div className="content-box">
            <h2>Overview</h2>

            <div className="iframe-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/oeMReiyOnyg"  // Correct embed URL
                    title="Hashing Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <p>This section provides an overview of hashing concepts:</p>
            <p>1. Understanding Hash Functions</p>
            <p>2. Hashing Techniques like Linear Probing, Quadratic Probing, and Double Hashing</p>
            <p>3. Handling Collisions in Hash Tables</p>

            <h3>Prerequisites of the Experiment</h3>
            <p>This experiment requires basic knowledge about:</p>
            <ul>
                <li>Arrays</li>
                <li>Linked Lists</li>
                <li>Time and Space Complexity</li>
                <li>Curiosity to learn hashing techniques!</li>
            </ul>
        </div>
    );
};

export default HashingOverview;
