// src/components/tree/TreeExplanation.js
import React from 'react';
import './tree.css'; // Ensure the path is correct for your CSS

const TreeExplanation = () => {
    return (
        <div className="content-box">
            <h2>Tree Data Structure</h2>
            <p>
                A <strong>tree</strong> is a hierarchical data structure that consists of nodes connected by edges. Each node contains a value and may link to other nodes (children). The topmost node is called the <strong>root</strong>, and nodes with no children are called <strong>leaves</strong>.
            </p>
            <div className="iframe-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Zje1_PSL32o?si=mB3Wt0nUjGwsbsQT" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                />
            </div>
        
            <h2>Properties of a Tree</h2>
            <ul>
                <li><strong>Hierarchical Structure:</strong> Trees represent a hierarchical relationship, where nodes have parent-child relationships.</li>
                <li><strong>Dynamic Size:</strong> Trees can grow or shrink dynamically, allowing for flexible data management.</li>
                <li><strong>Nodes:</strong> Each node can have multiple children but only one parent (except the root).</li>
                <li><strong>Depth and Height:</strong> The depth of a node is the number of edges from the root to that node, while the height of a tree is the length of the longest path from the root to a leaf.</li>
            </ul>

            <h2>Operations on Trees</h2>
            <ul>
                <li><strong>Insertion:</strong> Nodes can be added at various positions based on specific rules (e.g., binary search trees).</li>
                <li><strong>Deletion:</strong> Nodes can be removed, which may require rearranging the tree to maintain properties.</li>
                <li><strong>Traversal:</strong> Trees can be traversed using various methods, including pre-order, in-order, post-order, and level-order traversal.</li>
                <li><strong>Searching:</strong> Searching for a specific node can be efficient in a balanced tree using algorithms like binary search.</li>
            </ul>

            <h2>Advantages of Trees</h2>
            <ul>
                <li><strong>Efficient Searching:</strong> Balanced trees can provide O(log n) time complexity for search operations.</li>
                <li><strong>Dynamic Memory Allocation:</strong> Trees can grow and shrink as needed, making them flexible for various applications.</li>
                <li><strong>Hierarchical Data Representation:</strong> Trees are excellent for representing data with hierarchical relationships, such as file systems and organizational structures.</li>
            </ul>

            <h2>Disadvantages of Trees</h2>
            <ul>
                <li><strong>Complexity:</strong> Implementing tree data structures can be more complex than arrays or linked lists, especially when balancing trees.</li>
                <li><strong>Memory Overhead:</strong> Trees require additional memory for pointers and potentially lead to inefficiencies in certain applications.</li>
                <li><strong>Unbalanced Trees:</strong> If not properly maintained, trees can become unbalanced, leading to inefficient operations (O(n) time complexity in the worst case).</li>
            </ul>
        </div>
    );
};

export default TreeExplanation;
