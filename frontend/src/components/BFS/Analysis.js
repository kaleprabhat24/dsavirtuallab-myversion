
import React, { useState } from 'react';
import './BFS.css';

const BFSAnalysis = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({ q1: '', q2: '' });
    const [feedback, setFeedback] = useState({ q1: '', q2: '' });

    const handleOptionChange = (question, answer) => {
        setSelectedAnswers({ ...selectedAnswers, [question]: answer });
    };

    const checkAnswers = () => {
        const newFeedback = {};
        newFeedback.q1 = selectedAnswers.q1 === 'b' ? 'Correct!' : 'Wrong answer. The correct answer is b: 5.';
        newFeedback.q2 = selectedAnswers.q2 === 'b' ? 'Correct!' : 'Wrong answer. The correct answer is b: If the maximum height is greater than the maximum number of nodes in a single level.';
        setFeedback(newFeedback);
    };

    return (
        <div className="content-box">
            <h2>Breadth First Search</h2>
            <h3>Time and Space Complexity of BFS</h3>
            
            <h4>Time Complexity of BFS</h4>
            <p>
                In computer science, the time complexity is the computational complexity that describes the amount of time it takes to run an algorithm. 
                Since in the worst case, breadth-first search has to consider all paths to all possible nodes, the time complexity of breadth-first search is O(|E| + |V|) where |V| and |E| are the cardinality of the sets of vertices and edges, respectively. 
                The complexity is this since every vertex and every edge will be explored in the worst case.
            </p>

            <h4>Space Complexity of BFS</h4>
            <p>
                Space complexity is a measure of the amount of working storage an algorithm needs. 
                That means how much memory, in the worst case, is needed at any point in the algorithm. 
                Since all of the nodes of a level must be saved until their child nodes in the next level have been generated, the space complexity is proportional to the number of nodes at the deepest level. 
                The space complexity can also be expressed as O(|V|) where |V| is the cardinality of the set of vertices. 
                In the worst-case scenario, the graph has a depth of 1, and all vertices must be stored.
            </p>

            <h4>Differences Between BFS and DFS</h4>
            <p>Key Differences Between BFS and DFS:</p>
            <ul>
                <li>BFS is a vertex-based algorithm while DFS is an edge-based algorithm.</li>
                <li>Queue data structure is used in BFS, while DFS uses a stack or recursion.</li>
                <li>Memory space is efficiently utilized in DFS, while space utilization in BFS is not effective.</li>
                <li>BFS is an optimal algorithm while DFS is not optimal.</li>
                <li>DFS constructs narrow and long trees, whereas BFS constructs wide and short trees.</li>
            </ul>

            <h4>BFS Traversal on Example Graph</h4>
            <p>
                We have a graph whose vertices are A, B, C, D, E, F, G. Considering A as the starting point, the steps involved in the process are:
            </p>
            <ol>
                <li>Vertex A is expanded and stored in the queue.</li>
                <li>Vertices B, D, and G, as successors of A, are expanded and stored in the queue. Meanwhile, Vertex A is removed.</li>
                <li>Now B at the front end of the queue is removed along with storing its successor vertices E and F.</li>
                <li>Vertex D at the front end of the queue is removed, and its connected node F has already been visited.</li>
                <li>Vertex G is removed from the queue, and it has successor E which has already been visited.</li>
                <li>Now E and F are removed from the queue, and its successor vertex C is traversed and stored in the queue.</li>
                <li>At last, C is also removed, and the queue is now empty, which means we are done.</li>
            </ol>
            <p>The generated Output is – A, B, D, G, E, F, C.</p>

            <h4>DFS Traversal on Example Graph</h4>
            <p>
                Similar to BFS, let’s take the same graph for performing DFS operations. The steps involved in the process are:
            </p>
            <ol>
                <li>Considering A as the starting vertex which is explored and stored in the stack.</li>
                <li>B, the successor vertex of A, is stored in the stack.</li>
                <li>Vertex B has two successors E and F; among them, alphabetically E is explored first and stored in the stack.</li>
                <li>The successor of vertex E, i.e., G is stored in the stack.</li>
                <li>Vertex G has two connected vertices, and both have already been visited, so G is popped out from the stack.</li>
                <li>Similarly, E is also removed.</li>
                <li>Now vertex B is at the top of the stack; its other node (vertex) F is explored and stored in the stack.</li>
                <li>Vertex F has two successors C and D, between which C is traversed first and stored in the stack.</li>
                <li>Vertex C has only one predecessor which has already been visited, so it is removed from the stack.</li>
                <li>Now vertex D which is connected to F has already been visited and stored in the stack.</li>
                <li>Since vertex D does not have any unvisited nodes, D is therefore removed.</li>
                <li>Similarly, F, B, and A are also popped out from the stack.</li>
            </ol>
            <p>The generated output is – A, B, E, G, F, C, D.</p>

            <h4>Quiz</h4>
            <p>1. Consider the following graph:</p>
            <p>Vertices, V = [a, b, c, d, e, f]</p>
            <p>Edges, E = [[a, b], [a, c], [b, d], [b, e], [c, e], [c, f]]</p>
            <p>Where each array within E signifies an edge between the two mentioned vertices.</p>
            <p>How many iterations of the queue would it take for the algorithm to traverse this graph completely?</p>
            <div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q1" 
                            value="a" 
                            checked={selectedAnswers.q1 === 'a'} 
                            onChange={() => handleOptionChange('q1', 'a')} 
                        />
                        a: 3
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q1" 
                            value="b" 
                            checked={selectedAnswers.q1 === 'b'} 
                            onChange={() => handleOptionChange('q1', 'b')} 
                        />
                        b: 5
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q1" 
                            value="c" 
                            checked={selectedAnswers.q1 === 'c'} 
                            onChange={() => handleOptionChange('q1', 'c')} 
                        />
                        c: 6
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q1" 
                            value="d" 
                            checked={selectedAnswers.q1 === 'd'} 
                            onChange={() => handleOptionChange('q1', 'd')} 
                        />
                        d: 7
                    </label>
                </div>
            </div>
            <p>{feedback.q1}</p>

            <p>2. When will the space complexity of BFS be greater than DFS?</p>
            <p>Note that maximum height in the options refers to the longest thread of vertices from the root to a leaf or final non-repeating vertex.</p>
            <div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q2" 
                            value="a" 
                            checked={selectedAnswers.q2 === 'a'} 
                            onChange={() => handleOptionChange('q2', 'a')} 
                        />
                        a: If the maximum height is less than the maximum number of nodes in a single level
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q2" 
                            value="b" 
                            checked={selectedAnswers.q2 === 'b'} 
                            onChange={() => handleOptionChange('q2', 'b')} 
                        />
                        b: If the maximum height is greater than the maximum number of nodes in a single level
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q2" 
                            value="c" 
                            checked={selectedAnswers.q2 === 'c'} 
                            onChange={() => handleOptionChange('q2', 'c')} 
                        />
                        c: BFS and DFS have the same space complexity
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="q2" 
                            value="d" 
                            checked={selectedAnswers.q2 === 'd'} 
                            onChange={() => handleOptionChange('q2', 'd')} 
                        />
                        d: Space complexity of DFS is always greater than that of BFS
                    </label>
                </div>
            </div>
            <p>{feedback.q2}</p>
            <button onClick={checkAnswers}>Submit Answers</button>
        </div>
    );
};

export default BFSAnalysis;

