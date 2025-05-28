// src/components/tree/TreeAnalysis.js
import React from 'react';
import './tree.css';

const TreeAnalysis = () => {
    return (
        <div className="content-box">
            <h2>Analysis</h2>
            <p>Analysis of the performance and complexity of basic tree operations.</p>
            
            <h3>Time Complexity of Tree Operations</h3>
            <ul>
                <li>
                    <strong>Traversal:</strong> O(n)
                    <p>
                        Traversing a tree involves visiting each node exactly once, whether it's pre-order, in-order, or post-order traversal. The time complexity for any tree traversal is O(n), where n is the number of nodes.
                    </p>
                </li>
                <li>
                    <strong>Insertion:</strong> O(log n) for balanced trees, O(n) for skewed trees
                    <p>
                        - In a balanced binary search tree (BST), insertion involves navigating the tree from the root to the correct leaf position, resulting in a time complexity of O(log n).<br />
                        - In the worst-case scenario of a skewed tree (where all nodes are on one side), the insertion time complexity becomes O(n).
                    </p>
                </li>
                <li>
                    <strong>Deletion:</strong> O(log n) for balanced trees, O(n) for skewed trees
                    <p>
                        - Deleting a node from a balanced BST has a time complexity of O(log n) as it involves finding the node and adjusting the tree structure.<br />
                        - In the worst case of a skewed tree, deletion time complexity can be O(n).
                    </p>
                </li>
                <li>
                    <strong>Searching:</strong> O(log n) for balanced trees, O(n) for skewed trees
                    <p>
                        Similar to insertion and deletion, searching in a balanced binary search tree takes O(log n) time, but can degrade to O(n) in the case of a skewed tree.
                    </p>
                </li>
            </ul>

            <h3>Summary</h3>
            <p>
                The efficiency of tree operations depends on the balance of the tree. In a balanced binary tree (such as an AVL tree or a Red-Black tree), most operations take O(log n) time, providing efficient performance. 
                However, in an unbalanced or skewed tree, the time complexity can degrade to O(n), making the structure inefficient. 
                Therefore, ensuring the tree remains balanced is critical for optimal performance.
            </p>
        </div>
    );
};

export default TreeAnalysis;
