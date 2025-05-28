// document.addEventListener('DOMContentLoaded', () => {
//     // Select the content div where content will be injected
//     const content = document.getElementById('content');

//     // Create and append the main title for Breadth First Search
//     const title = document.createElement('h1');
//     title.textContent = 'Breadth First Search';
//     content.appendChild(title);

//     // Create and append the section for Theory of Graph Traversal Techniques
//     const theoryHeading = document.createElement('h2');
//     theoryHeading.textContent = 'Theory of Graph Traversal Techniques';
//     content.appendChild(theoryHeading);

//     const theoryText = document.createElement('p');
//     theoryText.textContent = 'In computer science, graph traversal (also known as graph search) refers to the process of visiting (checking and/or updating) each vertex in a graph. Such traversals are classified by the order in which the vertices are visited. Tree traversal is a special case of graph traversal.';
//     content.appendChild(theoryText);

//     // Create and append the Techniques of Graph Traversal section
//     const techniquesHeading = document.createElement('h2');
//     techniquesHeading.textContent = 'Techniques of Graph Traversal';
//     content.appendChild(techniquesHeading);

//     // Add DFS Section
//     const dfsHeading = document.createElement('h3');
//     dfsHeading.textContent = 'DFS - Depth First Search';
//     content.appendChild(dfsHeading);

//     const dfsText = document.createElement('p');
//     dfsText.textContent = 'A depth-first search (DFS) is an algorithm for traversing a finite graph. DFS visits the child vertices before visiting the sibling vertices; that is, it traverses the depth of any particular path before exploring its breadth. A stack (often the program\'s call stack via recursion) is generally used when implementing the algorithm.';
//     content.appendChild(dfsText);

//     // Add BFS Section
//     const bfsHeading = document.createElement('h3');
//     bfsHeading.textContent = 'BFS - Breadth First Search';
//     content.appendChild(bfsHeading);

//     const bfsText = document.createElement('p');
//     bfsText.textContent = 'A breadth-first search (BFS) is another technique for traversing a finite graph. BFS visits the neighbor vertices before visiting the child vertices, and a queue is used in the search process. This algorithm is often used to find the shortest path from one vertex to another.';
//     content.appendChild(bfsText);
// });
import React from 'react';
import './BFS.css';

const GraphTraversal = () => {
  return (
    <div className="content-box">
      <h1>Breadth First Search</h1>
      
      <h2>Theory of Graph Traversal Techniques</h2>
      <p>
        In computer science, graph traversal (also known as graph search) refers to the process of visiting (checking and/or updating) each vertex in a graph. Such traversals are classified by the order in which the vertices are visited. Tree traversal is a special case of graph traversal.
      </p>

      <h2>Techniques of Graph Traversal</h2>
      
      <h3>DFS - Depth First Search</h3>
      <p>
        A depth-first search (DFS) is an algorithm for traversing a finite graph. DFS visits the child vertices before visiting the sibling vertices; that is, it traverses the depth of any particular path before exploring its breadth. A stack (often the program's call stack via recursion) is generally used when implementing the algorithm.
      </p>

      <h3>BFS - Breadth First Search</h3>
      <section style={{ margin: '20px 0' }}>
       
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Gb4jOYK838M?si=9InScmPR7IC-JX2y" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            style={{ maxWidth: '70%', height: '400px'}}
          ></iframe>
        </div>
      </section>
      <p>
        A breadth-first search (BFS) is another technique for traversing a finite graph. BFS visits the neighbor vertices before visiting the child vertices, and a queue is used in the search process. This algorithm is often used to find the shortest path from one vertex to another.
      </p>
    </div>
  );
};

export default GraphTraversal;
