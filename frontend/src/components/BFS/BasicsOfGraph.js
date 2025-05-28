import React from 'react';
import './BFS.css';

const GraphsDefinition = () => {
  return (
    <div className="content-box" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Title */}
      <h1>Graphs Definition</h1>

      {/* Graph Definition */}
      <section>
        <p>
          A graph is a pictorial representation of a set of objects where some pairs of objects are connected by links.
          The interconnected objects are represented by points termed as vertices, and the links that connect the vertices
          are called edges.
        </p>
      </section>

      {/* Pictorial Representation of Graph */}
      <section style={{ margin: '20px 0' }}>
        <h2>Pictorial Representation of Graph</h2>
        {/* Placeholder for Graph Image */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <img
            src="https://miro.medium.com/v2/resize:fit:491/1*_ZLmV0IH7_j8eQUrlG76hg.png"  // Example Graph Image
            alt="Pictorial Representation of Graph"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
      </section>

      

      {/* Types of Graphs */}
      <section>
        <h2>Types of Graphs</h2>
        <ul>
          <li>Undirected Graph</li>
          <li>Directed Graph</li>
        </ul>
      </section>

      {/* Pictorial Representation of Undirected Graph */}
      <section style={{ margin: '20px 0' }}>
        <h3>Pictorial Representation of Undirected Graph</h3>
        {/* Placeholder for Undirected Graph Image */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <img
            src="https://cdn.codechef.com/images/learning/graphs-trees/undirected-graph-with-7-nodes-and-7-edges.png"  // Undirected Graph Image
            alt="Pictorial Representation of Undirected Graph"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Pictorial Representation of Directed Graph */}
      <section style={{ margin: '20px 0' }}>
        <h3>Pictorial Representation of Directed Graph</h3>
        {/* Placeholder for Directed Graph Image */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <img
            src="https://ucarecdn.com/ffb13a20-0f30-4e6a-91af-995333fba69e/"  // Directed Graph Image
            alt="Pictorial Representation of Directed Graph"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
      </section>

      {/* YouTube Video Section */}
      
    </div>
  );
}

export default GraphsDefinition;
