// src/components/tree/TreeExperiment.js
import React from 'react';
import './tree.css';

const TreeAim = () => {
    return (
        <div className="content-box">
            <h2>AIM</h2>
            
            {/* A beautiful image to start off the topic */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img
                    src="https://files.codingninjas.in/article_images/introduction-to-tree-data-structure-24567.webp"
                    alt="Tree Data Structure"
                    style={{ width: '800px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                />
            </div>

            <p>
                Trees are a hierarchical data structure where nodes are connected by edges. The following interactive visualization helps you better understand how trees are structured and how various operations are performed:
            </p>
   

       
            <p>
                The aim of this experiment is to understand and implement both basic and advanced tree operations. We will delve into the concepts behind trees, learn different traversal methods, and analyze the performance of trees compared to other data structures.
            </p>

            <h4>Estimated Time: 1.5 hours</h4>

            <h3>Objective</h3>
            <ul>
                <li>
                    <strong>Understand Tree Concepts:</strong> Comprehend the fundamental principles of trees, including nodes, root, children, leaves, and depth.
                </li>

                <li>
                    <strong>Implement Basic Tree Operations:</strong> Ensure the implementation of tree traversal techniques such as in-order, pre-order, and post-order.
                </li>

                <li>
                    <strong>Analyze Performance:</strong> Compare the performance of trees with other data structures like arrays and linked lists, particularly in terms of time complexity for insertion, deletion, and traversal operations.
                </li>
            </ul>
        </div>
    );
};

export default TreeAim;
