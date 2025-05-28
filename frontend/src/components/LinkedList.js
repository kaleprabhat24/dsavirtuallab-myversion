// src/components/LinkedList.js
import React from 'react';
import LinkedListSidebar from './LinkedListSidebar';
import { Outlet } from 'react-router-dom';

const LinkedList = () => {
    return (
        <div className="linked-list-container">
            <LinkedListSidebar />
            <div className="linked-list-content">
                <Outlet />
            </div>
        </div>
    );
};

export default LinkedList;
