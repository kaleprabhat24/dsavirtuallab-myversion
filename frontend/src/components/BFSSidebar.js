// src/components/LinkedListSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure the CSS is imported

const BFSSidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/data-structures/BFS/aim">Aim</Link></li>
                <li><Link to="/data-structures/BFS/overview">Overview</Link></li>
                <li><Link to="/data-structures/BFS/pretest">Pretest</Link></li>
                <li><Link to="/data-structures/BFS/basicsofgraph">Basics Of Graph</Link></li>
                <li><Link to="/data-structures/BFS/basicsofqueue">Basics of Queue</Link></li>
                <li><Link to="/data-structures/BFS/graphtraversal">Graph Traversal</Link></li>
                <li><Link to="/data-structures/BFS/quiz">BFS Quiz</Link></li>
                <li><Link to="/data-structures/BFS/analysis">Analysis</Link></li>
                <li><Link to="/data-structures/BFS/bfssimulation">BFS Simulation</Link></li>
                <li><Link to="/data-structures/BFS/posttest">Posttest</Link></li>
                <li><Link to="/data-structures/BFS/reallifeapplications">Real Life Applications</Link></li>
                <li><Link to="/data-structures/BFS/recap">Recap</Link></li>
                <li><Link to="/data-structures/BFS/furtherreadings">FurtherReadings</Link></li>
                <li><Link to="/data-structures/BFS/Feedback">Feedback</Link></li>
            </ul>
        </div>
    );
};

export default BFSSidebar;
