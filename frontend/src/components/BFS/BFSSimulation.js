import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Graph from './Graph'; // Import the Graph class from a shared file

const BFSVisualization = () => {
    const [graph] = useState(new Graph());
    const [nodeInput, setNodeInput] = useState('');
    const [sourceNode, setSourceNode] = useState('');
    const [targetNode, setTargetNode] = useState('');
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [bfsPath, setBfsPath] = useState([]);
    const [currentStep, setCurrentStep] = useState(-1);
    const [visited, setVisited] = useState(new Set());

    const addNode = () => {
        if (nodeInput && !graph.nodes.has(nodeInput)) {
            graph.addNode(nodeInput);
            setNodes([...graph.toArray()]);
            setNodeInput('');
        }
    };

    const addEdge = () => {
        if (sourceNode && targetNode && sourceNode !== targetNode) {
            graph.addEdge(sourceNode, targetNode);
            const newEdges = Array.from(graph.edges());
            setEdges(newEdges);
            setSourceNode('');
            setTargetNode('');
        }
    };

    const startBFS = () => {
        if (nodes.length > 0) {
            const path = graph.bfs(nodes[0]);
            setBfsPath(path);
            setCurrentStep(0);
            setVisited(new Set([path[0]]));
        }
    };

    const reset = () => {
        setCurrentStep(-1);
        setVisited(new Set());
        setBfsPath([]);
    };

    return (
        <Card className="w-full max-w-4xl">
            <CardHeader>
                <CardTitle>Graph BFS Visualization</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            value={nodeInput}
                            onChange={(e) => setNodeInput(e.target.value)}
                            placeholder="Enter node name"
                            className="w-48"
                        />
                        <Button onClick={addNode}>Add Node</Button>
                    </div>

                    <div className="flex gap-2">
                        <select value={sourceNode} onChange={(e) => setSourceNode(e.target.value)} className="p-2 border rounded w-32">
                            <option value="">Source Node</option>
                            {nodes.map(node => <option key={`source-${node}`} value={node}>{node}</option>)}
                        </select>
                        <select value={targetNode} onChange={(e) => setTargetNode(e.target.value)} className="p-2 border rounded w-32">
                            <option value="">Target Node</option>
                            {nodes.map(node => <option key={`target-${node}`} value={node}>{node}</option>)}
                        </select>
                        <Button onClick={addEdge}>Add Edge</Button>
                    </div>

                    <div className="flex gap-2">
                        <Button onClick={startBFS}>Start BFS</Button>
                        <Button onClick={reset}>Reset</Button>
                    </div>

                    {/* BFS Path Visualization */}
                    {bfsPath.length > 0 && (
                        <div className="text-sm">
                            BFS Path: {bfsPath.slice(0, currentStep + 1).join(' → ')}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
export default BFSVisualization;
