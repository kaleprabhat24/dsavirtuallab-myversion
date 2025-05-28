
import React from 'react';
import './linkedlist.css'; // Ensure the path is correct for your CSS
import insertion from './insertion.png'; // Ensure the correct path for your image
import deletion from './deletion.png';
const LinkedListExplanation = () => {
    return (
        <div className="content-box">
            <h2>Singly Linked List</h2>
            <div className="iframe-container">
            <iframe width="560"
            height="315"
            src="https://www.youtube.com/embed/-P1yggjQxOw?si=BVaaNL09OyuAMImQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
            </div>
            <p>
                A <strong>singly linked list</strong> is a linear data structure where each element is a separate object called a node. Each node contains two parts:
            </p>
            <ul>
                <li><strong>Data field:</strong> This holds the actual data.</li>
                <li><strong>Next field:</strong> This contains a reference (or pointer) to the next node in the sequence.</li>
            </ul>
            <p>
                The first node in the list is referred to as the <strong>head</strong>, and the last node’s next field points to <code>NULL</code>, indicating the end of the list. The list is traversed starting from the head and following the references (pointers) until the end is reached.
            </p>
           


            <h2>Properties of a Singly Linked List</h2>
            <ul>
                <li><strong>Dynamic Size:</strong> Singly linked lists are dynamic, allowing them to grow or shrink as needed at runtime.</li>
                <li><strong>Efficient Insertion/Deletion:</strong> Inserting or deleting a node is efficient since no elements need to be shifted, unlike arrays.</li>
                <li><strong>Sequential Access:</strong> Linked lists do not provide direct access to elements like arrays; you must traverse the list to reach a particular node.</li>
                <li><strong>Memory Utilization:</strong> Each node stores a pointer to the next node, so linked lists use slightly more memory than arrays.</li>
            </ul>


            <h2>Operations on Singly Linked List</h2>
            <ul>
                <li><strong>Insertion:</strong> Nodes can be inserted at the beginning, at the end, or after a specific node.</li>
                <img src={insertion} alt="Insertion" />
                <li><strong>Deletion:</strong> Nodes can be deleted from the beginning, the end, or from a specific position.</li>
                <img src={deletion} alt="Deletion" />
                <li><strong>Traversal:</strong> To traverse a singly linked list, start from the head node and visit each node in sequence by following the next pointers.</li>
                <li><strong>Searching:</strong> Searching for a particular node requires linear traversal as linked lists do not support direct indexing like arrays.</li>
            </ul>


            <h2>Advantages of Singly Linked List</h2>
            <ul>
                <li><strong>Efficient Memory Usage:</strong> The list can grow and shrink dynamically, which optimizes memory usage.</li>
                <li><strong>No Pre-allocation of Memory:</strong> Unlike arrays, linked lists do not require a predefined size, making memory management more flexible.</li>
                <li><strong>Ease of Insertion and Deletion:</strong> Particularly efficient at the start or middle of the list, as no element shifting is required.</li>
            </ul>


            <h2>Disadvantages of Singly Linked List</h2>
            <ul>
                <li><strong>Sequential Access:</strong> Accessing an element by index is less efficient (O(n)) compared to arrays, which provide O(1) access.</li>
                <li><strong>Extra Memory:</strong> Additional memory is required to store pointers to the next node.</li>
                <li><strong>Difficult to Reverse:</strong> Since pointers only move forward, reversing or backward traversal is difficult. This limitation is addressed in doubly linked lists.</li>
            </ul>
        </div>
    );
};


export default LinkedListExplanation;
