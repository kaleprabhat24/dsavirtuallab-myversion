// src/components/tree/TreeOverview.js
import React from 'react';
import './tree.css'; // Make sure to rename or adjust the CSS file if needed

const TreeOverview = () => {
    return (
        <div className="content-box">
            <h2>Overview</h2>
            <div className="iframe-container">
        
         <iframe width="560" 
         height="315" 
         src="https://www.youtube.com/embed/jAfejPMPR6E?si=ve-sfM76rf3HKpTM" 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen></iframe>
            </div>
            

            <p>This section provides an overview of tree data structures.</p>
            <p>1. Traversing a tree (Pre-order, In-order, Post-order)</p>
            <p>2. Insertion in tree structures</p>
            <p>3. Deletion in tree structures</p>
            <p>4. Tree balancing techniques (e.g., AVL, Red-Black Trees)</p>
        </div>
    );
};

export default TreeOverview;
