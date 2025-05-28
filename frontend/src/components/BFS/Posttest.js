import React, { useState, useEffect } from 'react';
import './BFS.css'; // Import the shared CSS file for BFS styling

const BFSPosttest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions

    // Define a pool of 10 advanced-level questions and answers for the BFS posttest
    const questionPool = [
        {
            id: 'q1',
            question: 'What is the primary data structure used in BFS?',
            options: [
                { value: 'A', text: 'Stack' },
                { value: 'B', text: 'Queue' },
                { value: 'C', text: 'Array' },
                { value: 'D', text: 'Linked List' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) BFS uses a queue to keep track of nodes to be explored next.",
                incorrect: "A) A stack is used in Depth-First Search (DFS), not BFS.",
            }
        },
        {
            id: 'q2',
            question: 'In which traversal method do you visit all the nodes at the present depth level before moving on to the nodes at the next depth level?',
            options: [
                { value: 'A', text: 'Pre-order' },
                { value: 'B', text: 'In-order' },
                { value: 'C', text: 'Level-order' },
                { value: 'D', text: 'Post-order' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Level-order traversal visits nodes by depth levels.",
                incorrect: "A) Pre-order visits nodes before their children.",
            }
        },
        {
            id: 'q3',
            question: 'What is the time complexity of BFS for a graph with V vertices and E edges?',
            options: [
                { value: 'A', text: 'O(V + E)' },
                { value: 'B', text: 'O(V * E)' },
                { value: 'C', text: 'O(V^2)' },
                { value: 'D', text: 'O(E)' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) BFS has a time complexity of O(V + E) as it explores each vertex and edge once.",
                incorrect: "B) O(V * E) is not applicable for BFS.",
            }
        },
        {
            id: 'q4',
            question: 'Which of the following algorithms uses BFS for finding the shortest path in an unweighted graph?',
            options: [
                { value: 'A', text: 'Dijkstra\'s Algorithm' },
                { value: 'B', text: 'A* Search Algorithm' },
                { value: 'C', text: 'Bellman-Ford Algorithm' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'D',
            explanations: {
                correct: "D) BFS finds the shortest path in an unweighted graph; the others are for weighted graphs.",
                incorrect: "A) Dijkstra's algorithm is for weighted graphs, not unweighted ones.",
            }
        },
        {
            id: 'q5',
            question: 'If a tree has n nodes, how many edges does it have?',
            options: [
                { value: 'A', text: 'n - 1' },
                { value: 'B', text: 'n + 1' },
                { value: 'C', text: '2n' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A tree with n nodes always has n - 1 edges.",
                incorrect: "B) n + 1 edges would imply there are cycles.",
            }
        },
        {
            id: 'q6',
            question: 'What is the main disadvantage of using BFS?',
            options: [
                { value: 'A', text: 'Space complexity' },
                { value: 'B', text: 'Time complexity' },
                { value: 'C', text: 'Algorithmic complexity' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) BFS can consume a lot of memory, especially for wide trees or graphs.",
                incorrect: "B) Time complexity is generally linear with respect to the number of vertices and edges.",
            }
        },
        {
            id: 'q7',
            question: 'In a BFS traversal, which node is processed first?',
            options: [
                { value: 'A', text: 'Root node' },
                { value: 'B', text: 'Leaf node' },
                { value: 'C', text: 'Any random node' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) BFS starts from the root node or any arbitrary node and processes it first.",
                incorrect: "B) Leaf nodes are only processed after all their parent nodes are processed.",
            }
        },
        {
            id: 'q8',
            question: 'Which of the following can be used to implement BFS?',
            options: [
                { value: 'A', text: 'Linked List' },
                { value: 'B', text: 'Stack' },
                { value: 'C', text: 'Queue' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) A queue is used to implement BFS as it processes nodes in a first-in, first-out manner.",
                incorrect: "B) A stack is used for depth-first traversal, not breadth-first.",
            }
        },
        {
            id: 'q9',
            question: 'What is the output of BFS on the following tree: (1 (2 (4) (5)) (3))?',
            options: [
                { value: 'A', text: '1, 2, 3, 4, 5' },
                { value: 'B', text: '1, 3, 2, 4, 5' },
                { value: 'C', text: '1, 2, 4, 5, 3' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) BFS visits nodes level by level, hence the order is 1, 2, 3, 4, 5.",
                incorrect: "B) This order does not represent BFS traversal.",
            }
        },
        {
            id: 'q10',
            question: 'Which of the following properties is true for BFS?',
            options: [
                { value: 'A', text: 'BFS can be implemented using recursion' },
                { value: 'B', text: 'BFS guarantees the shortest path in weighted graphs' },
                { value: 'C', text: 'BFS explores all neighbors of a vertex before moving on' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) BFS explores all neighbors of a vertex before moving to the next level.",
                incorrect: "A) BFS is typically implemented using a queue, not recursion.",
            }
        },
    ];

    // Function to shuffle and pick a random subset of questions
    const generateRandomQuestions = (numQuestions) => {
        const shuffled = questionPool.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    };

    // Generate random questions when component mounts
    useEffect(() => {
        const randomQuestions = generateRandomQuestions(3); // Pick 3 random questions
        setQuestions(randomQuestions);

        // Reset responses for the selected questions
        const initialResponses = randomQuestions.reduce((acc, question) => {
            acc[question.id] = ''; // Empty response for each question
            return acc;
        }, {});
        setResponses(initialResponses);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses({
            ...responses,
            [name]: value
        });
    };

    const validate = () => {
        let validationErrors = {};
        questions.forEach((q) => {
            if (!responses[q.id]) {
                validationErrors[q.id] = 'This question is required.';
            }
        });
        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            calculateScore();
            setSubmitted(true);
        } else {
            setErrors(validationErrors);
        }
    };

    const calculateScore = () => {
        let scoreCount = 0;
        const feedbackArray = [];

        questions.forEach((q) => {
            const userAnswer = responses[q.id];
            const correctAnswer = q.correctAnswer;
            const feedbackDetail = {
                question: q.question,
                userAnswer,
                correctAnswer,
                explanation: userAnswer === correctAnswer ? q.explanations.correct : q.explanations.incorrect
            };

            if (userAnswer === correctAnswer) {
                scoreCount++;
            }

            feedbackArray.push(feedbackDetail);
        });

        setScore(scoreCount);
        setFeedback(feedbackArray);
    };

    return (
        <div className="content-box">
            <h2>BFS Posttest</h2>
            <p>Posttest questions to evaluate your understanding of Breadth-First Search (BFS) after completing the experiment.</p>
            <form onSubmit={handleSubmit} className="posttest-form">
                {questions.map((q) => (
                    <div key={q.id} className="question">
                        <label>{q.question}</label>
                        {q.options.map((option) => (
                            <div key={option.value}>
                                <input
                                    type="radio"
                                    name={q.id}
                                    value={option.value}
                                    checked={responses[q.id] === option.value}
                                    onChange={handleChange}
                                /> {option.text}
                            </div>
                        ))}
                        {errors[q.id] && <div className="error-message">{errors[q.id]}</div>}
                    </div>
                ))}

                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div className="results">
                    <h3>Your Score: {score} out of {questions.length}</h3>
                    <p>{score === questions.length ? "Excellent! You answered all questions correctly." : "Review your answers and try again!"}</p>

                    <h4>Feedback:</h4>
                    <ul>
                        {feedback.map((item, index) => (
                            <li key={index}>
                                <strong>Question:</strong> {item.question} <br />
                                <strong>Your answer:</strong> {item.userAnswer} | <strong>Correct answer:</strong> {item.correctAnswer} <br />
                                <span>{item.explanation}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BFSPosttest;
