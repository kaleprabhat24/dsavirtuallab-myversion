// // src/components/linked-list/Recap.js
// import React from 'react';

// const BFSRecap = () => {
//     return (
//         <div>
//             <h2>Recap</h2>
//             <p>A summary of key concepts related to linked lists covered in this experiment.</p>
//         </div>
//     );
// };

// export default BFSRecap;
// src/components/bfs/Recap.js
import React from 'react';
import './BFS.css';
const BFSRecap = () => {
    return (
        <div className="content-box">
            <h2>Recap of Breadth First Search (BFS)</h2>
            <p>A summary of key concepts related to Breadth First Search covered in this experiment:</p>
            <ul>
                <li><strong>Definition:</strong> BFS is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node) and explores all of the neighbor nodes at the present depth before moving on to nodes at the next depth level.</li>
                <li><strong>Traversal Technique:</strong> BFS uses a queue data structure to keep track of the nodes that need to be explored next, ensuring that nodes are processed in the order they were discovered.</li>
                <li><strong>Applications:</strong> Commonly used in various applications such as finding the shortest path in graphs, web crawling, social networking, and more.</li>
                <li><strong>Time Complexity:</strong> The time complexity of BFS is O(|V| + |E|), where |V| is the number of vertices and |E| is the number of edges.</li>
                <li><strong>Space Complexity:</strong> The space complexity is O(|V|) due to the storage of the queue and the visited nodes.</li>
                <li><strong>Visited Array:</strong> An additional data structure, often called the 'visited' array, is used to keep track of which nodes have already been explored to prevent cycles and redundant processing.</li>
            </ul>
        </div>
    );
};

export default BFSRecap;
