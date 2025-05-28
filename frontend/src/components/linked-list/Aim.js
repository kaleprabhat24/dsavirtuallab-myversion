import React from 'react';
import './linkedlist.css';

const LinkedListAim = () => {
    const aims = [
        {
            text: "Understand Linked List Concepts:",
            detail: "Comprehend the fundamental principles of linked lists, including nodes, head, tail, and pointers."
        },
        {
            text: "Implement Basic Operations:",
            detail: "Ensure the implementation handles edge cases (e.g., inserting into an empty list, deleting the last element)."
        },
        {
            text: "Analyze Performance:",
            detail: "Compare the performance of linked lists with other data structures like arrays, particularly in terms of time complexity for various operations."
        }
    ];

    return (
        <div className="content-box">
            <h2>Aim</h2>
            <p>Estimated Time: <strong>1 hour</strong></p>
            <p><i>The aim of this experiment is to understand and implement basic and advanced linked list operations.</i></p>
            <ul>
                {aims.map((aim, index) => (
                    <li key={index}>
                        {aim.text}<br />{aim.detail}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LinkedListAim;
