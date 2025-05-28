// src/components/tree/OptimizedTree.js
import React from 'react';
import './tree.css'; // You can rename this file to `tree.css` if desired

const OptimizedTree = () => {
    return (
        <div className="content-box">
            <h2>Optimized Trees</h2>
            <p>
                Trees are a fundamental data structure used to represent hierarchical relationships in data. They consist of nodes connected by edges, where each node may contain a value and links to other nodes (children). Different types of trees serve various purposes, including binary trees, AVL trees, and B-trees. This section focuses on optimizations and enhancements specifically for binary trees and their operations.
            </p>

            <h3>1. Balanced Trees:</h3>
            <ul>
                <li>
                    <strong>AVL Trees:</strong> Automatically balance themselves after every insertion and deletion to ensure that the tree's height remains logarithmic, improving search, insertion, and deletion operations to O(log n).
                    <br />
                    <img src="https://learnersbucket.com/wp-content/uploads/2021/03/AVL-Tree-in-Javascript.png" alt="AVL Tree Example" style={{ width: '300px', margin: '10px 0' }} />
                </li>
                <li>
                    <strong>Red-Black Trees:</strong> Another self-balancing tree that ensures the tree remains balanced with a height of O(log n), providing efficient search, insertion, and deletion operations.
                    <br />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg" alt="Red-Black Tree Example" style={{ width: '300px', margin: '10px 0' }} />
                </li>
                <li>
                    <strong>Splay Trees:</strong> These trees adjust their structure after every access, moving frequently accessed elements closer to the root, optimizing for scenarios where certain elements are accessed more frequently.
                    <br />
                    <img src="https://images.javatpoint.com/ds/images/splay-tree.png" alt="Splay Tree Example" style={{ width: '300px', margin: '10px 0' }} />
                </li>
            </ul>

            <h3>2. Optimized Traversal:</h3>
            <p>Tree traversal methods are crucial for accessing the nodes in a tree structure. Below are three primary methods used for traversing binary trees:</p>

            <h4>Inorder Traversal</h4>
            <p>
                Inorder traversal visits nodes in the following order: <strong>Left Subtree → Root → Right Subtree</strong>. For binary search trees, this traversal method results in visiting nodes in non-decreasing order.
            </p>
            <p>Example:</p>
            <br />
           
            <pre>
                {`                 4
               /   \\
              2     5
             / \\
            1   3`}
            </pre>
            <p>Inorder Traversal Result: <strong>1, 2, 3, 4, 5</strong></p>

            <h4>Preorder Traversal</h4>
            <p>
                Preorder traversal visits nodes in the following order: <strong>Root → Left Subtree → Right Subtree</strong>. This method is useful for copying the tree structure.
            </p>
            <br />
          
            <pre>
                {`                 4
               /   \\
              2     5
             / \\
            1   3`}
            </pre>
            <p>Preorder Traversal Result: <strong>4, 2, 1, 3, 5</strong></p>

            <h4>Postorder Traversal</h4>
            <p>
                Postorder traversal visits nodes in the following order: <strong>Left Subtree → Right Subtree → Root</strong>. This method is useful for deleting the tree.
            </p>
            <br />
          
            <pre>
                {`                 4
               /   \\
              2     5
             / \\
            1   3`}
            </pre>
            <p>Postorder Traversal Result: <strong>1, 3, 2, 5, 4</strong></p>

            <h3>3. Space Optimization:</h3>
            <ul>
                <li>
                    <strong>Compressed Tries:</strong> Use compressed trie structures like Patricia tries to save space by merging nodes with a single child, reducing the memory footprint in tries.
                    <br />
                  
                </li>
                <li>
                    <strong>B-Trees:</strong> Designed for storage systems that read and write large blocks of data, B-trees minimize disk reads/writes by maximizing the branching factor (number of children per node), reducing the height of the tree.
                    <br />
                 
                </li>
            </ul>

            <h3>4. Efficient Search:</h3>
            <ul>
                <li>
                    <strong>Binary Search in BST:</strong> In Binary Search Trees (BST), ensuring that the tree remains balanced is crucial for maintaining the O(log n) search time. Using self-balancing techniques (like AVL or Red-Black Trees) ensures efficient searches.
                    <br />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png" alt="BST Search Example" style={{ width: '300px', margin: '10px 0' }} />
                </li>
                <li>
                    <strong>Heuristic Search with Splay Trees:</strong> In cases where specific nodes are accessed frequently, splay trees optimize search times by moving accessed nodes to the root.
                    <br />
                    
                </li>
            </ul>
        </div>
    );
};

export default OptimizedTree;
