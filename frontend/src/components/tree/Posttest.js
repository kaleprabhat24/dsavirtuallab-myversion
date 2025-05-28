import React, { useState, useEffect } from 'react';
import './tree.css'; // Import the shared CSS file for tree styling

const TreePosttest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions

    // Define a pool of 10 advanced-level questions and answers for the posttest
    const questionPool = [
        {
            id: 'q1',
            question: 'In a binary search tree, which traversal method gives nodes in non-decreasing order?',
            options: [
                { value: 'A', text: 'Pre-order' },
                { value: 'B', text: 'In-order' },
                { value: 'C', text: 'Post-order' },
                { value: 'D', text: 'Level-order' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) In-order traversal visits nodes in non-decreasing order.",
                incorrect: "A) Pre-order traversal does not guarantee sorted order.",
            }
        },
        {
            id: 'q2',
            question: 'What is the time complexity for searching an element in a balanced binary search tree (BST)?',
            options: [
                { value: 'A', text: 'O(n)' },
                { value: 'B', text: 'O(log n)' },
                { value: 'C', text: 'O(n log n)' },
                { value: 'D', text: 'O(1)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Searching in a balanced BST has a time complexity of O(log n).",
                incorrect: "A) O(n) is the time complexity for an unbalanced tree.",
            }
        },
        {
            id: 'q3',
            question: 'Which of the following is a self-balancing binary search tree?',
            options: [
                { value: 'A', text: 'AVL Tree' },
                { value: 'B', text: 'Red-Black Tree' },
                { value: 'C', text: 'Both A and B' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Both AVL and Red-Black trees are self-balancing.",
                incorrect: "A) An AVL tree is just one type of self-balancing BST.",
            }
        },
        {
            id: 'q4',
            question: 'What is a complete binary tree?',
            options: [
                { value: 'A', text: 'All levels are fully filled except possibly the last level' },
                { value: 'B', text: 'All nodes have two children except the leaf nodes' },
                { value: 'C', text: 'Every parent has exactly two children' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A complete binary tree has all levels fully filled except possibly the last.",
                incorrect: "B) Not every parent needs to have two children in a complete binary tree.",
            }
        },
        {
            id: 'q5',
            question: 'What is the maximum number of nodes in a binary tree of height h?',
            options: [
                { value: 'A', text: 'h' },
                { value: 'B', text: '2^h - 1' },
                { value: 'C', text: '2h' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The maximum number of nodes is 2^h - 1.",
                incorrect: "A) Height does not directly correspond to the number of nodes.",
            }
        },
        {
            id: 'q6',
            question: 'What type of traversal is depth-first traversal?',
            options: [
                { value: 'A', text: 'Pre-order, in-order, post-order' },
                { value: 'B', text: 'Level-order' },
                { value: 'C', text: 'Breadth-first' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Depth-first traversal includes pre-order, in-order, and post-order.",
                incorrect: "B) Level-order is a breadth-first traversal method.",
            }
        },
        {
            id: 'q7',
            question: 'What is the time complexity of inserting an element in an AVL tree?',
            options: [
                { value: 'A', text: 'O(n)' },
                { value: 'B', text: 'O(log n)' },
                { value: 'C', text: 'O(n log n)' },
                { value: 'D', text: 'O(1)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Insertion in an AVL tree has a time complexity of O(log n).",
                incorrect: "A) O(n) is for unbalanced trees.",
            }
        },
        {
            id: 'q8',
            question: 'Which of the following is a valid application of a tree data structure?',
            options: [
                { value: 'A', text: 'File system organization' },
                { value: 'B', text: 'Database indexing' },
                { value: 'C', text: 'All of the above' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Trees are used for both file system organization and database indexing.",
                incorrect: "A) Trees serve multiple purposes beyond just file organization.",
            }
        },
        {
            id: 'q9',
            question: 'What is the balance factor of a node in an AVL tree?',
            options: [
                { value: 'A', text: 'Height of left subtree - Height of right subtree' },
                { value: 'B', text: 'Height of right subtree - Height of left subtree' },
                { value: 'C', text: 'Sum of heights of both subtrees' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) The balance factor is defined as the height of the left subtree minus the height of the right subtree.",
                incorrect: "B) This would be the opposite definition.",
            }
        },
        {
            id: 'q10',
            question: 'In which case does a binary tree become a binary search tree?',
            options: [
                { value: 'A', text: 'When it is complete' },
                { value: 'B', text: 'When it is balanced' },
                { value: 'C', text: 'When all left descendants are less and all right descendants are greater' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) A binary tree is a BST if all left descendants are smaller and all right descendants are larger than the node.",
                incorrect: "A) Completeness is not a requirement for being a BST.",
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
            <h2>Posttest</h2>
            <p>Posttest questions to evaluate your understanding of tree data structures after completing the experiment.</p>
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

export default TreePosttest;
