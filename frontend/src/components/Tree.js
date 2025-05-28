// src/components/Tree.js
import React from 'react';
import TreeSidebar from './TreeSidebar'; // Ensure you have a TreeSidebar component
import { Outlet } from 'react-router-dom';

const Tree = () => {
    return (
        <div className="tree-container">
            <TreeSidebar />
            <div className="tree-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Tree;
