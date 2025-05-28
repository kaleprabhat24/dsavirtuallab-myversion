// src/components/Sorting.js
import React from 'react';
import SortingSidebar from './SortingSidebar';
import { Outlet } from 'react-router-dom';

const Sorting = () => {
    return (
        <div className="sorting-page">
            <SortingSidebar />  {/* Sidebar for sorting links */}
            <div className="sorting-content">
                <Outlet />  {/* This will render the content of the selected sorting algorithm */}
            </div>
        </div>
    );
};

export default Sorting;
