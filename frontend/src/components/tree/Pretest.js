import React, { useState, useEffect } from 'react';
import './tree.css'; // Import the shared CSS file for tree styling

const TreePretest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions

    // Define a pool of 10 beginner-level questions and answers for the pretest
    const questionPool = [
        {
            id: 'q1',
            question: 'What is a tree data structure?',
            options: [
                { value: 'A', text: 'A collection of nodes connected by edges' },
                { value: 'B', text: 'A linear list of items' },
                { value: 'C', text: 'A type of graph with circular connections' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A tree is a collection of nodes connected by edges, forming a hierarchical structure.",
                incorrect: "B) A linear list of items is not a tree; it's a list or array.",
            }
        },
        {
            id: 'q2',
            question: 'What is the root of a tree?',
            options: [
                { value: 'A', text: 'The top node in a tree' },
                { value: 'B', text: 'The bottom node in a tree' },
                { value: 'C', text: 'Any node in the tree' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) The root is the top node in a tree, serving as the starting point for traversal.",
                incorrect: "B) The bottom node is typically referred to as a leaf node, not the root.",
            }
        },
        {
            id: 'q3',
            question: 'What is a leaf node in a tree?',
            options: [
                { value: 'A', text: 'A node with no children' },
                { value: 'B', text: 'A node with two children' },
                { value: 'C', text: 'The highest node in the tree' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A leaf node is a node that has no children, making it a terminal node.",
                incorrect: "B) A node with two children is not necessarily a leaf node.",
            }
        },
        {
            id: 'q4',
            question: 'Which of the following is a tree traversal method?',
            options: [
                { value: 'A', text: 'In-order' },
                { value: 'B', text: 'Linear search' },
                { value: 'C', text: 'Stack overflow' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) In-order is a method of traversing a tree where the left child is visited first, then the root, and finally the right child.",
                incorrect: "B) Linear search is not a traversal method for trees; it's used for lists.",
            }
        },
        {
            id: 'q5',
            question: 'In a binary tree, how many children can a node have?',
            options: [
                { value: 'A', text: '0, 1, or 2' },
                { value: 'B', text: 'Only 2' },
                { value: 'C', text: 'More than 2' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A node in a binary tree can have 0, 1, or 2 children.",
                incorrect: "B) Nodes can have less than or more than 2 children.",
            }
        },
        {
            id: 'q6',
            question: 'What does the term "height" of a tree refer to?',
            options: [
                { value: 'A', text: 'The number of nodes in the tree' },
                { value: 'B', text: 'The number of edges on the longest path from the root to a leaf' },
                { value: 'C', text: 'The maximum number of children any node has' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The height of a tree is the number of edges on the longest path from the root to a leaf node.",
                incorrect: "A) The number of nodes is not the definition of height.",
            }
        },
        {
            id: 'q7',
            question: 'What is a binary search tree?',
            options: [
                { value: 'A', text: 'A tree where each node has exactly two children' },
                { value: 'B', text: 'A tree that allows searching for values efficiently' },
                { value: 'C', text: 'A tree that is always balanced' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A binary search tree is a data structure that allows efficient searching based on node values.",
                incorrect: "A) A binary search tree does not require each node to have two children.",
            }
        },
        {
            id: 'q8',
            question: 'Which traversal method visits the root node first?',
            options: [
                { value: 'A', text: 'Pre-order' },
                { value: 'B', text: 'Post-order' },
                { value: 'C', text: 'In-order' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) In pre-order traversal, the root node is visited before its children.",
                incorrect: "B) In post-order, the root is visited last.",
            }
        },
        {
            id: 'q9',
            question: 'What type of structure is a binary tree?',
            options: [
                { value: 'A', text: 'Hierarchical' },
                { value: 'B', text: 'Linear' },
                { value: 'C', text: 'Circular' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A binary tree is a hierarchical data structure.",
                incorrect: "B) A linear structure connects elements in a straight line, unlike a binary tree.",
            }
        },
        {
            id: 'q10',
            question: 'What is the main characteristic of a complete binary tree?',
            options: [
                { value: 'A', text: 'All levels are fully filled except possibly the last level' },
                { value: 'B', text: 'Every parent node has two children' },
                { value: 'C', text: 'Only leaf nodes are filled' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A complete binary tree is characterized by being fully filled at all levels except possibly the last level.",
                incorrect: "B) Not every parent node must have two children in a complete binary tree.",
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
            <h2>Pretest</h2>
            <p>Pretest questions to evaluate your understanding of tree data structures before starting the experiment.</p>
            <form onSubmit={handleSubmit} className="pretest-form">
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

export default TreePretest;
