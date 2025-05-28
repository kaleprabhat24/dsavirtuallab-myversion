// import React, { useState } from 'react';
// import Graph from './Graph'; // Import the Graph class from Graph.js

// const GraphComponent = () => {
//     const [graph] = useState(new Graph());
//     const [nodes, setNodes] = useState([]);
//     const [edges, setEdges] = useState([]);
//     const [nodeValue, setNodeValue] = useState('');
//     const [edgeNode1, setEdgeNode1] = useState('');
//     const [edgeNode2, setEdgeNode2] = useState('');
//     const [highlightedNode, setHighlightedNode] = useState(null);

//     const updateGraph = () => {
//         setNodes(graph.getNodes());
//         setEdges(graph.getEdges());
//     };

//     const handleAddNode = () => {
//         if (!nodeValue) return;
//         graph.addNode(Number(nodeValue));
//         updateGraph();
//         setNodeValue('');
//         setHighlightedNode(Number(nodeValue)); // Highlight newly added node
//         setTimeout(() => setHighlightedNode(null), 1000);
//     };

//     const handleAddEdge = () => {
//         if (!edgeNode1 || !edgeNode2) return;
//         graph.addEdge(Number(edgeNode1), Number(edgeNode2));
//         updateGraph();
//         setEdgeNode1('');
//         setEdgeNode2('');
//     };

//     const handleBFS = async () => {
//         await graph.bfs(Number(nodeValue), setHighlightedNode);
//         setHighlightedNode(null);  // Clear highlight after BFS
//     };

//     return (
//         <div className="container">
//             <h1>Graph BFS Visualization</h1>

//             <div className="input-group">
//                 {/* Add node section */}
//                 <input
//                     type="text"
//                     value={nodeValue}
//                     onChange={(e) => setNodeValue(e.target.value)}
//                     placeholder="Node Value"
//                     className="input-field"
//                 />
//                 <button onClick={handleAddNode} className="action-button">Add Node</button>
//             </div>

//             <div className="input-group">
//                 {/* Add edge section */}
//                 <input
//                     type="text"
//                     value={edgeNode1}
//                     onChange={(e) => setEdgeNode1(e.target.value)}
//                     placeholder="Node 1"
//                     className="input-field"
//                 />
//                 <input
//                     type="text"
//                     value={edgeNode2}
//                     onChange={(e) => setEdgeNode2(e.target.value)}
//                     placeholder="Node 2"
//                     className="input-field"
//                 />
//                 <button onClick={handleAddEdge} className="action-button">Add Edge</button>
//             </div>
//             <button onClick={handleBFS} className="bfs-button">Perform BFS</button>

//             <div className="graph-container">
//                 <svg viewBox="0 0 100 100" className="graph-svg">
//                     {edges.map((edge, i) => {
//                         const node1 = nodes.find(n => n.value === edge.node1);
//                         const node2 = nodes.find(n => n.value === edge.node2);
//                         return (
//                             <line
//                                 key={`edge-${i}`}
//                                 x1={node1.x}
//                                 y1={node1.y}
//                                 x2={node2.x}
//                                 y2={node2.y}
//                                 stroke="gray"
//                                 strokeWidth="0.5"
//                             />
//                         );
//                     })}
//                     {nodes.map((node, i) => (
//                         <React.Fragment key={`node-${i}`}>
//                             <circle
//                                 cx={node.x}
//                                 cy={node.y}
//                                 r="3.5"
//                                 fill={node.value === highlightedNode ? '#f472b6' : node.color}
//                                 stroke="white"
//                                 strokeWidth="0.5"
//                             />
//                             <text
//                                 x={node.x}
//                                 y={node.y}
//                                 textAnchor="middle"
//                                 dominantBaseline="middle"
//                                 fontSize="2.5"
//                                 fill="white"
//                                 fontWeight="bold"
//                             >
//                                 {node.value}
//                             </text>
//                         </React.Fragment>
//                     ))}
//                 </svg>
//             </div>
//         </div>
//     );
// };

// export default GraphComponent;

import React, { useState } from 'react';
import Graph from './Graph'; // Import the graph class

const GraphComponent = () => {
    const [graph] = useState(new Graph());
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [nodeValue, setNodeValue] = useState('');
    const [edgeNode1, setEdgeNode1] = useState('');
    const [edgeNode2, setEdgeNode2] = useState('');
    const [highlightedNode, setHighlightedNode] = useState(null);

    const updateGraphDisplay = () => {
        setNodes([...graph.getNodes()]);
        setEdges([...graph.getEdges()]);
    };

    const handleAddNode = () => {
        if (!nodeValue) return;
        graph.addNode(Number(nodeValue));
        updateGraphDisplay();
        setNodeValue('');
    };

    const handleAddEdge = () => {
        if (!edgeNode1 || !edgeNode2) return;
        graph.addEdge(Number(edgeNode1), Number(edgeNode2));
        updateGraphDisplay();
        setEdgeNode1('');
        setEdgeNode2('');
    };

    const handleBFS = async () => {
        await graph.bfs(Number(nodeValue), setHighlightedNode);
        setHighlightedNode(null);  // Clear highlight after BFS
        updateGraphDisplay(); // Update graph display to reflect color changes
    };

    return (
        <div className="container">
            <h1>Graph BFS Simulation</h1>

            <div className="input-group">
                <input
                    type="text"
                    value={nodeValue}
                    onChange={(e) => setNodeValue(e.target.value)}
                    placeholder="Node Value"
                    className="input-field"
                />
                <button onClick={handleAddNode} className="action-button">Add Node</button>
            </div>

            <div className="input-group">
                <input
                    type="text"
                    value={edgeNode1}
                    onChange={(e) => setEdgeNode1(e.target.value)}
                    placeholder="Node 1"
                    className="input-field"
                />
                <input
                    type="text"
                    value={edgeNode2}
                    onChange={(e) => setEdgeNode2(e.target.value)}
                    placeholder="Node 2"
                    className="input-field"
                />
                <button onClick={handleAddEdge} className="action-button">Add Edge</button>
            </div>

            <button onClick={handleBFS} className="bfs-button">Perform BFS</button>

            <div className="graph-container">
                <svg viewBox="0 0 100 100" className="graph-svg">
                    {edges.map((edge, i) => {
                        const node1 = nodes.find(node => node.value === edge.node1);
                        const node2 = nodes.find(node => node.value === edge.node2);
                        return (
                            <line
                                key={`edge-${i}`}
                                x1={node1.x}
                                y1={node1.y}
                                x2={node2.x}
                                y2={node2.y}
                                stroke="gray"
                                strokeWidth="0.5"
                            />
                        );
                    })}
                    {nodes.map((node, i) => (
                        <React.Fragment key={`node-${i}`}>
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r="3.5"
                                fill={node.color} // Use the color from the node object
                                stroke="white"
                                strokeWidth="0.5"
                            />
                            <text
                                x={node.x}
                                y={node.y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="2.5"
                                fill="white"
                                fontWeight="bold"
                            >
                                {node.value}
                            </text>
                        </React.Fragment>
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default GraphComponent;
