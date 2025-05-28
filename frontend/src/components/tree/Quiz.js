// src/components/TreeQuiz.js
import React, { useState } from 'react';
import './tree.css'; // Import the shared CSS file for styling

const TreeQuiz = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions
    const [quizStarted, setQuizStarted] = useState(false); // State to track if quiz has started

    // Define a pool of tree questions
    const questionPool = [
        {
            id: 'q1',
            question: 'What is a binary tree?',
            options: [
                { value: 'A', text: 'A tree where each node has at most two children' },
                { value: 'B', text: 'A tree with a single child' },
                { value: 'C', text: 'A tree with no nodes' },
                { value: 'D', text: 'A tree with only leaf nodes' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A binary tree is defined as a tree where each node has at most two children.",
                incorrect: "B) A tree with a single child is not a binary tree, as it does not follow the definition."
            }
        },
        {
            id: 'q2',
            question: 'What is the height of a tree?',
            options: [
                { value: 'A', text: 'Number of nodes in the tree' },
                { value: 'B', text: 'Number of edges in the longest path from root to leaf' },
                { value: 'C', text: 'Number of leaf nodes' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The height of a tree is defined as the number of edges in the longest path from the root to a leaf node.",
                incorrect: "A) The number of nodes in a tree does not define its height."
            }
        },
        {
            id: 'q3',
            question: 'Which of the following is a balanced tree?',
            options: [
                { value: 'A', text: 'Binary Search Tree' },
                { value: 'B', text: 'AVL Tree' },
                { value: 'C', text: 'Red-Black Tree' },
                { value: 'D', text: 'All of the above' }
            ],
            correctAnswer: 'D',
            explanations: {
                correct: "D) All of the options are types of balanced trees.",
                incorrect: "A) A Binary Search Tree may not necessarily be balanced."
            }
        },
        {
            id: 'q4',
            question: 'What is a leaf node in a tree?',
            options: [
                { value: 'A', text: 'A node with only one child' },
                { value: 'B', text: 'A node with two children' },
                { value: 'C', text: 'A node with no children' },
                { value: 'D', text: 'A node at the root level' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) A leaf node is defined as a node with no children.",
                incorrect: "A) A node with one child is not a leaf; it has at least one child."
            }
        },
        {
            id: 'q5',
            question: 'In which tree does each node maintain a reference to its parent?',
            options: [
                { value: 'A', text: 'Binary Tree' },
                { value: 'B', text: 'Binary Search Tree' },
                { value: 'C', text: 'Threaded Binary Tree' },
                { value: 'D', text: 'N-ary Tree' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) A Threaded Binary Tree maintains references to its parent nodes.",
                incorrect: "B) Binary Search Trees do not inherently maintain references to parent nodes."
            }
        },
        // Add more questions as needed...
    ];

    // Function to shuffle and pick a random subset of questions
    const generateRandomQuestions = (numQuestions) => {
        const shuffled = questionPool.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    };

    // Function to start the quiz
    const startQuiz = () => {
        const randomQuestions = generateRandomQuestions(3); // Pick 3 random questions
        setQuestions(randomQuestions);

        // Reset responses for the selected questions
        const initialResponses = randomQuestions.reduce((acc, question) => {
            acc[question.id] = ''; // Empty response for each question
            return acc;
        }, {});
        setResponses(initialResponses);

        setQuizStarted(true); // Set quiz as started
        setSubmitted(false);   // Reset submitted state
        setScore(null);        // Reset score
        setFeedback([]);       // Reset feedback
        setErrors({});         // Reset errors
    };

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
            <h2>Tree Quiz</h2>
            <p>Test your understanding of trees with this quiz.</p>
            
            {!quizStarted ? (
                <button onClick={startQuiz} className="start-quiz-button">Start Quiz</button>
            ) : (
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
            )}

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

export default TreeQuiz;
