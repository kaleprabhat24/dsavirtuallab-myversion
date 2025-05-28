// src/components/linked-list/Overview.js
import React from 'react';
import './linkedlist.css';
const LinkedListOverview = () => {
    return (
        <div className="content-box">
             <h2>Overview</h2>
            <div className="iframe-container">
            <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/woJF83ZEa3c?si=qbkXopSM0Bi4-LE2" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
            </div>
           
            <p><i>This section provides an overview of linked lists</i></p>
            <p>1. Traversing a linked list</p>
            <p>2. Insertion in linked list</p>
            <p>3. Deletion in linked list</p>
        </div>
    );
};

export default LinkedListOverview;


