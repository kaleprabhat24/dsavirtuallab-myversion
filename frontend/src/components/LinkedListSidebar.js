// src/components/LinkedListSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure the CSS is imported

const LinkedListSidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/data-structures/linked-list/aim">Aim</Link></li>
                <li><Link to="/data-structures/linked-list/overview">Overview</Link></li>
                <li><Link to="/data-structures/linked-list/pretest">Pretest</Link></li>
                <li><Link to="/data-structures/linked-list/LinkedListExplanation">Linked List</Link></li>
                <li><Link to="/data-structures/linked-list/visualisation">Visualisation</Link></li> {/* Correct path */}


                <li><Link to="/data-structures/linked-list/OptimizedLinkedList">Optimized Linked List</Link></li>
                <li><Link to="/data-structures/linked-list/quiz">Linked List Quiz</Link></li>
               <li><Link to="/data-structures/linked-list/Analysis">Analysis</Link></li>
               <li><Link to="/data-structures/linked-list/reallifeapplications">Real Life Applications</Link></li>
                <li><Link to="/data-structures/linked-list/Simulation">Exercise</Link></li>
                <li><Link to="/data-structures/linked-list/handsonpractice">Hands On Practice</Link></li>
                <li><Link to="/data-structures/linked-list/recap">Recap</Link></li>

                <li><Link to="/data-structures/linked-list/posttest">Posttest</Link></li>
                <li><Link to="/data-structures/linked-list/furtherreadings">Further Readings/References</Link></li>
                <li><Link to="/data-structures/linked-list/feedback">Feedback</Link></li>
            </ul>
        </div>
    );
};

export default LinkedListSidebar;
