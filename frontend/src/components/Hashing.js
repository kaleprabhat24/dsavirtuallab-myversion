// src/components/Hashing.js
// src/components/Hashing.js
import React from 'react';
import HashingSidebar from './HashingSideBar'; // Ensure the correct path
import { Outlet } from 'react-router-dom';

const Hashing = () => {
    return (
        <div className="hashing-container">
            <HashingSidebar />
            <div className="hashing-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Hashing;
