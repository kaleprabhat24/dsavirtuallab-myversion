// src/components/DataStructures.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DataStructures.css';

const DataStructures = () => {
    const menuItems = [
        { title: "Sorting 📊", description: "A variety of sorting algorithms explained", link: "/data-structures/sorting" },
        { title: "Linked Lists 🔗", description: "Understanding the linked list structure", link: "/data-structures/linked-list/aim" },
        { title: "Breadth First Search 🌐", description: "A classic graph traversal technique", link: "/data-structures/bfs" },
        { title: "Hashing 🔒", description: "Learn about hash functions and tables", link: "/data-structures/hashing/aim" },
        { title: "Tree 🌳", description: "Explore binary trees and their operations", link: "/data-structures/tree/aim" },
    ];

    return (
        <div className="data-structures-container">
            <h2>Data Structures - I</h2>
            <div className="menu">
                {menuItems.map((item, index) => (
                    <Link to={item.link} className="menu-item" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DataStructures;
