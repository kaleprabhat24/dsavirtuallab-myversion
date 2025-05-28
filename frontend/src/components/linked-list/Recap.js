// src/components/linked-list/Recap.js
import React from 'react';
import './linkedlist.css';
const LinkedListRecap = () => {
    return (
        <div className="content-box">
            <h2>Recap</h2>
            <p><i>A summary of key concepts related to linked lists covered in this experiment.</i></p>
            <h3>Singly Linked List</h3>
            <p>
                A singly linked list is a linear data structure that consists of a sequence of elements, called nodes. 
                Each node contains two components: the data (value) and a reference (or pointer) to the next node in the sequence. 
                This allows for efficient insertion and deletion of elements, as these operations do not require shifting elements as in an array.
            </p>
            <p>
                Key features of singly linked lists include:
            </p>
            <ul>
                <li><strong>Dynamic Size:</strong> Unlike arrays, linked lists do not have a fixed size, allowing for dynamic memory allocation.</li>
                <li><strong>Efficient Insertions/Deletions:</strong> Inserting or deleting nodes can be done in constant time (O(1)), given a reference to the node.</li>
                <li><strong>Sequential Access:</strong> Nodes can only be accessed sequentially starting from the head of the list, making random access inefficient.</li>
                <li><strong>Head and Tail:</strong> The first node is called the head, and the last node points to null, indicating the end of the list.</li>
            </ul>
            <p>
                Overall, singly linked lists are useful for implementing various data structures, such as stacks and queues, 
                and are fundamental to understanding more complex data structures.
            </p>
        </div>
    );
};

export default LinkedListRecap;

