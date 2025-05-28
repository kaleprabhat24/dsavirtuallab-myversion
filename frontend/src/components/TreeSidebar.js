
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure the CSS is imported

const TreeSidebar = () => {
    return (
        <div className="sidebar">
            <ul>
               
                <li><Link to="/data-structures/tree/aim">Aim</Link></li>
                <li><Link to="/data-structures/tree/overview">Overview</Link></li>
                <li><Link to="/data-structures/tree/pretest">Pretest</Link></li>
                <li><Link to="/data-structures/tree/TreeExplanation">Tree</Link></li>
                <li><Link to="/data-structures/tree/treevisualization">Tree Visualization</Link></li>
                <li><Link to="/data-structures/tree/OptimizedTree">Optimized Tree</Link></li>
                <li><Link to="/data-structures/tree/quiz">Tree Quiz</Link></li>
                <li><Link to="/data-structures/tree/Analysis">Analysis</Link></li>
                <li><Link to="/data-structures/tree/reallifeapplications">Real Life Applications</Link></li>
                <li><Link to="/data-structures/tree/Simulation">Exercise</Link></li>
                <li><Link to="/data-structures/tree/handsonpractice">Hands On Practice</Link></li>
                <li><Link to="/data-structures/tree/recap">Recap</Link></li>
                <li><Link to="/data-structures/tree/posttest">Posttest</Link></li>
                <li><Link to="/data-structures/tree/furtherreadings">Further Readings/References</Link></li>
                <li><Link to="/data-structures/tree/feedback">Feedback</Link></li>
               
             
            </ul>
        </div>
    );
};

export default TreeSidebar;
