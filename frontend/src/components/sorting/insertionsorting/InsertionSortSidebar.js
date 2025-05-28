import React from 'react';
import { Link } from 'react-router-dom';
import '../../Sidebar.css'; // Ensure the CSS is imported

const InsertionSortSidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="aim">Aim</Link></li>  {/* Relative path to aim */}
                <li><Link to="overview">Overview</Link></li>  {/* Relative path to overview */}
                
                <li><Link to="pretest">Pretest</Link></li>  {/* Relative path to pretest */}
                <li><Link to="InsertionVisualisation">Visualisation</Link></li>
                
                <li><Link to="optimizedinsertionsort">Optimised Insertion Sort</Link></li>  {/* Relative path to pretest */}
                <li><Link to="Quiz">Insertion Sort Quiz</Link></li>  {/* Relative path to pretest */}
                <li><Link to="analysis">Analysis</Link></li>  {/* Relative path to pretest */}
                <li><Link to="reallifeapplications">Real life Applications</Link></li>
                <li><Link to="Simulation">Exercise</Link></li>
                <li><Link to="handsonpractice">Hands on Practice</Link></li>
                <li><Link to="recap">Recap</Link></li>  {/* Relative path to recap */}
                
                
                <li><Link to="posttest">Posttest</Link></li>  {/* Relative path to pretest */}
                
                <li><Link to="furtherreadings">Further Readings</Link></li>
                
                <li><Link to="feedback">Feedback</Link></li>
                
                  {/* Relative path to feedback */}
            </ul>
        </div>
    );
};

export default InsertionSortSidebar;
