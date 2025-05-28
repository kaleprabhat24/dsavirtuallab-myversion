// src/components/linked-list/Analysis.js
import React from 'react';
import './linkedlist.css';
const LinkedListAnalysis = () => {
    return (
        <div className="content-box">
            <h2>Analysis</h2>
            <p><i>Analysis of the performance and complexity of linked list operations.</i></p>
            <h3>Time Complexity of Singly Linked List Operations</h3>
            <ul>
                <li>
                    <strong>Traversal:</strong> O(n)
                    <p>
                        To traverse the list, we need to visit each node starting from the head to the last node, making the time complexity linear, O(n), where n is the number of nodes in the list.
                    </p>
                </li>
                <li>
                    <strong>Insertion:</strong> O(1) for insertion at the head; O(n) for insertion at a specific position
                    <p>
                        - Inserting at the beginning (head) is a constant time operation, O(1), as it only involves adjusting the head pointer.
                        - Inserting at the end or a specific position requires traversal of the list, leading to a linear time complexity, O(n).
                    </p>
                </li>
                <li>
                    <strong>Deletion:</strong> O(1) for deletion from the head; O(n) for deletion of a specific node
                    <p>
                        - Deleting the head node is a constant time operation, O(1), since it involves changing the head pointer to the next node.
                        - To delete a specific node, we need to find it first, which requires traversal, resulting in a time complexity of O(n).
                    </p>
                </li>
            </ul>
            <h3>Summary</h3>
            <p>
                Overall, singly linked lists offer efficient insertions and deletions at the head, but operations that require traversal of the list exhibit linear time complexity. 
                Understanding these complexities helps in choosing the right data structure based on the needs of the application.
            </p>
        </div>
    );
};

export default LinkedListAnalysis;
