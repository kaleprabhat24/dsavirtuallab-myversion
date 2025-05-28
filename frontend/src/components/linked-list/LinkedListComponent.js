// src/components/LinkedListComponent.js
import React, { useState } from 'react';
import SinglyLinkedList from './Simulation'; // Import the linked list class
import './linkedlist.css'; // Import your CSS styles

const LinkedListComponent = () => {
    const [list] = useState(new SinglyLinkedList());
    const [nodes, setNodes] = useState([]);
    const [value, setValue] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState(null);

    const updateNodes = () => {
        setNodes(list.toArray()); // Ensure nodes are updated visually
    };

    const handleInsertAtHead = () => {
        if (!value) return;
        list.insertAtHead(value);
        updateNodes();
        setValue('');
    };

    const handleInsertAtTail = () => {
        if (!value) return;
        list.insertAtTail(value);
        updateNodes();
        setValue('');
    };

    const handleInsertAtPosition = () => {
        const pos = parseInt(position);
        if (isNaN(pos) || pos < 0) return;
        list.insertAtPosition(value, pos);
        updateNodes();
        setValue('');
        setPosition('');
    };

    const handleDeleteFromHead = () => {
        list.deleteFromHead();
        updateNodes();
    };

    const handleDeleteFromTail = () => {
        list.deleteFromTail();
        updateNodes();
    };

    const handleDeleteFromPosition = () => {
        const pos = parseInt(position);
        if (isNaN(pos) || pos < 0) return;
        list.deleteFromPosition(pos);
        updateNodes();
        setPosition('');
    };

    return (
        <div className="container">
            <h1>Singly Linked List Simulation</h1>
            <div className="error-message">{error}</div>

            {/* Input for inserting nodes */}
            <div className="input-group">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Node Value"
                    className="input-field"
                />
                <button onClick={handleInsertAtHead} className="action-button">Insert at Head</button>
                <button onClick={handleInsertAtTail} className="action-button">Insert at Tail</button>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Position"
                    className="input-field"
                />
                <button onClick={handleInsertAtPosition} className="action-button">Insert at Position</button>
            </div>
            <div className="input-group">
                <button onClick={handleDeleteFromHead} className="action-button">Delete from Head</button>
                <button onClick={handleDeleteFromTail} className="action-button">Delete from Tail</button>
                <button onClick={handleDeleteFromPosition} className="action-button">Delete from Position</button>
            </div>

            {/* Linked List Visualization */}
            <div className="linked-list-container">
                {nodes.map((node, index) => (
                    <div key={node} className="node">
                        {node}
                        {index < nodes.length - 1 && <span className="arrow">→</span>}
                    </div>
                ))}
                <div className="node">Null</div>
            </div>
        </div>
    );
};

export default LinkedListComponent; 