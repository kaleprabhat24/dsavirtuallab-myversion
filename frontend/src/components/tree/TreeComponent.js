import React, { useState } from 'react';
import BinaryTree from './Simulation'; // Import the binary tree class from simulation.js
import './tree.css'; // Import your CSS styles

const TreeComponent = () => {
    const [tree] = useState(new BinaryTree());
    const [nodes, setNodes] = useState([]);
    const [value, setValue] = useState('');
    const [highlightedNode, setHighlightedNode] = useState(null);

    const updateNodes = () => {
        setNodes(tree.toArray());
    };

    const handleInsert = () => {
        if (!value) return;
        tree.insert(Number(value));
        updateNodes();
        setValue('');
        setHighlightedNode(Number(value)); // Highlight newly inserted node
        setTimeout(() => setHighlightedNode(null), 1000);
    };

    const handleDelete = () => {
        if (!value) return;
        tree.delete(Number(value));
        updateNodes();
        setValue('');
    };

    return (
        <div className="container">
            <h1>Binary Tree Simulation</h1>

            <div className="input-group">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Node Value"
                    className="input-field"
                />
                <button onClick={handleInsert} className="action-button">Insert Node</button>
                <button onClick={handleDelete} className="action-button">Delete Node</button>
            </div>

            <div className="binary-tree-container">
                <svg viewBox="0 0 100 100" className="tree-svg">
                    {nodes.map((node, i) => {
                        // Find parent node for line drawing
                        const parentNode = nodes.find(n => n.value === node.parentValue);
                        return (
                            <React.Fragment key={`node-${i}`}>
                                {/* Draw lines between parent and child */}
                                {parentNode && (
                                    <line
                                        x1={parentNode.x}
                                        y1={parentNode.y}
                                        x2={node.x}
                                        y2={node.y}
                                        stroke="gray"
                                        strokeWidth="0.5"
                                    />
                                )}
                                {/* Draw the node circle */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="3.5"
                                    fill={node.value === highlightedNode ? '#f472b6' : node.color}
                                    stroke="white"
                                    strokeWidth="0.5"
                                />
                                {/* Node value text */}
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
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default TreeComponent;
