// src/components/HashingSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const HashingSideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                
            <li><Link to="/data-structures/hashing/aim">Aim</Link></li>
                <li><Link to="/data-structures/hashing/overview">Overview</Link></li>
                <li><Link to="/data-structures/hashing/recap">Recap</Link></li>
                <li><Link to="/data-structures/hashing/pretest">Pretest</Link></li>
              
                <li><Link to="/data-structures/hashing/doublehashing"> Hashing</Link></li>
                <li><Link to="/data-structures/hashing/analysis">Visualisation</Link></li>
                <li><Link to="/data-structures/hashing/quiz">Hashing Quiz</Link></li>
               
                <li><Link to="/data-structures/hashing/optimizedHashing">Optimized Hashing</Link></li>
                <li><Link to="/data-structures/hashing/simulation">Exercise</Link></li>
                <li><Link to="/data-structures/hashing/handsonpractice">Hands On Practice</Link></li>
                <li><Link to="/data-structures/hashing/RealLifeApplication">Real Life Applications</Link></li>
                
                
                <li><Link to="/data-structures/hashing/posttest">Posttest</Link></li>
                <li><Link to="/data-structures/hashing/FurtherReading">Further Readings/References</Link></li>
             
                <li><Link to="/data-structures/hashing/Feedback">Feedback</Link></li>
            
            </ul>
        </div>
    );
};

export default HashingSideBar;
