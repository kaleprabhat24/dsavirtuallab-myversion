// src/components/linked-list/Overview.js
// import React from 'react';

// const BFSOverview = () => {
//     return (
//         <div>
//             <h2>Overview</h2>
//             <p>This section provides an overview of linked lists, their types, and their applications.</p>
//             <p>1. Traversing a linked list</p>
//             <p>2. Insertion in linked list</p>
//             <p>3. Deletion in linked list</p>
            
//             <h3>Video Tutorial</h3>
//             <video width="600" controls>
//                 <source src="C:\Users\Pragati Kesharwani\Downloads\Linked List Data Structure _ Insert, Traverse and Delete Nodes in a Linked List _ DSA-One Course #36.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// };

// export default BFSOverview;

import React from 'react';
import './BFS.css';
const BFSExperiment = () => {
  return (
    <div className="content-box" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Title */}
      <h1>Breadth First Search Experiment</h1>

      {/* YouTube Video Embed */}
      <div style={{ marginBottom: '20px' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CiuiygE3LHo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: '100%' }}
        ></iframe>
      </div>

      {/* Prerequisites */}
      <section>
        <h2>Prerequisites of the Experiment</h2>
        <p>This experiment requires you to have basic knowledge about:</p>
        <ul>
          <li>Arrays</li>
          <li>Queues</li>
          <li>Graphs (Directed and Undirected) and Trees</li>
          <li>And above all, a curiosity to learn and explore!</li>
        </ul>
      </section>

      {/* Overview */}
      <section>
        <h2>Overview of the Experiment</h2>
        <p>
          The experiment features a series of modules with video lectures, hands-on practice exercises and quizzes for self analysis.
        </p>
      </section>

      {/* Experiment Modules */}
      <section>
        <h2>Experiment Modules &amp; their Weightage</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Module</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Weightage</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Expectation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Pre-Test</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>15%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Solve all questions</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>BFS</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>35%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Understand all operations</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Analysis</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>25%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Understand the time and space complexity</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Post-test</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>25%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Solve all questions</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default BFSExperiment;
