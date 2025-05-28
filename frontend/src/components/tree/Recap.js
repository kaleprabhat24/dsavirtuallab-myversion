// src/components/tree/TreeRecap.js
import React from 'react';
import './tree.css'; // Shared CSS file for tree styling

const TreeRecap = () => {
    return (
        <div className="content-box">
            <h2>Recap</h2>
            <p>A summary of key concepts related to trees covered in this experiment.</p>
            <h3>Tree Data Structure</h3>
            <p>
                A tree is a hierarchical data structure that consists of nodes connected by edges. It is widely used in various applications, including databases, file systems, and network protocols.
                The top node is called the root, and each node can have zero or more child nodes.
            </p>
            <p>
                Key features of tree structures include:
            </p>
            <ul>
                <li><strong>Root:</strong> The top node in a tree is called the root, and it serves as the starting point for traversal.</li>
                <li><strong>Nodes and Edges:</strong> A tree is made up of nodes, each containing data, and edges that connect parent nodes to child nodes.</li>
                <li><strong>Leaves:</strong> Nodes with no children are called leaves, representing the end points of the tree.</li>
                <li><strong>Height and Depth:</strong> The height of a tree is the length of the longest path from the root to a leaf, while depth is the distance from the root to a specific node.</li>
                <li><strong>Subtrees:</strong> Every node in a tree can serve as the root of its own subtree, making trees recursive structures.</li>
                <li><strong>Balanced Trees:</strong> A balanced tree ensures that the height difference between the left and right subtrees of any node is minimized, which improves efficiency in operations like searching and inserting data.</li>
            </ul>
            <p>
                Trees are foundational structures in computer science and are used in many areas, including sorting and searching algorithms, decision-making processes, and memory management.
            </p>
        </div>
    );
};

export default TreeRecap;
