// src/components/linked-list/Queues.js
import React from 'react';
import './BFS.css';

const Queues = () => {
    return (
        <div className="content-box">
            <h2>Queues Definition</h2>
            <p>
                A Queue is a linear structure that follows a particular order in which operations are performed.
            </p>
            <p>
                The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.
            </p>

            <h3>Pictorial Representation of Queue</h3>
            <img 
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726165642/Queue-Data-structure1.png" 
                alt="Pictorial Representation of Queue" 
                style={{ width: '100%', maxWidth: '600px', margin: '20px 0' }} 
            />

            <h3>Pictorial Representation of Enqueue and Dequeue Operation</h3>
            <img 
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221209094646/Queue-768.png" 
                alt="Pictorial Representation of Enqueue and Dequeue Operation" 
                style={{ width: '60%', maxWidth: '600px', margin: '20px 0' }} 
            />

            <h3>Pictorial Representation of Circular Queue using Arrays</h3>
            <img 
                src="https://media.geeksforgeeks.org/wp-content/uploads/Circular-queue_1.png" 
                alt="Pictorial Representation of Circular Queue using Arrays" 
                style={{ width: '100%', maxWidth: '600px', margin: '20px 0' }} 
            />
        </div>
    );
};

export default Queues;
