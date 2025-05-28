import React, { useState, useEffect } from 'react';
import './BFS.css'; // Import the shared CSS file for BFS styling

const BFSQuiz = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions
    const [quizStarted, setQuizStarted] = useState(false); // State to track if quiz has started

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
            question: 'Which traversal method uses a queue to explore nodes in a breadth-first manner?',
            options: [
                { value: 'A', text: 'Pre-order' },
                { value: 'B', text: 'Level-order' },
                { value: 'C', text: 'Post-order' },
                { value: 'D', text: 'In-order' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Level-order traversal processes nodes level by level using a queue.",
                incorrect: "A) Pre-order traversal is depth-first and does not use a queue.",
            }
        },
        {
            id: 'q3',
            question: 'In BFS, how do you handle cycles in a graph?',
            options: [
                { value: 'A', text: 'Ignore cycles completely' },
                { value: 'B', text: 'Use a visited set to track explored nodes' },
                { value: 'C', text: 'Mark cycles as valid paths' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A visited set ensures nodes are not processed multiple times, preventing infinite loops.",
                incorrect: "A) Ignoring cycles can lead to incorrect results.",
            }
        },
        {
            id: 'q4',
            question: 'What is the main advantage of BFS over DFS?',
            options: [
                { value: 'A', text: 'BFS uses less memory' },
                { value: 'B', text: 'BFS can find the shortest path in unweighted graphs' },
                { value: 'C', text: 'BFS is faster' },
                { value: 'D', text: 'BFS is easier to implement' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) BFS guarantees the shortest path in unweighted graphs, unlike DFS.",
                incorrect: "A) BFS often requires more memory due to the queue.",
            }
        },
        {
            id: 'q5',
            question: 'If a complete binary tree has n nodes, how many leaves does it have?',
            options: [
                { value: 'A', text: 'n/2' },
                { value: 'B', text: 'n/3' },
                { value: 'C', text: 'n/4' },
                { value: 'D', text: 'n/2 + 1' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) In a complete binary tree, about half of the nodes are leaves.",
                incorrect: "B) n/3 is not a valid calculation for leaves in a complete binary tree.",
            }
        },
        {
            id: 'q6',
            question: 'What happens if you try to perform BFS on a disconnected graph?',
            options: [
                { value: 'A', text: 'Only the first component is processed' },
                { value: 'B', text: 'The algorithm fails' },
                { value: 'C', text: 'All nodes are processed in a single traversal' },
                { value: 'D', text: 'You need to restart BFS for each component' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) BFS will only traverse the component of the graph that contains the starting node.",
                incorrect: "C) Not all nodes are reachable in a disconnected graph with a single BFS call.",
            }
        },
        {
            id: 'q7',
            question: 'Which of the following scenarios would be most suitable for using BFS?',
            options: [
                { value: 'A', text: 'Finding the shortest path in a maze' },
                { value: 'B', text: 'Searching for a node in a sorted binary tree' },
                { value: 'C', text: 'Finding the deepest node in a tree' },
                { value: 'D', text: 'Finding all nodes with a specific property' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) BFS is ideal for finding the shortest path in unweighted graphs, like a maze.",
                incorrect: "B) Searching in a sorted binary tree is more efficient with DFS.",
            }
        },
        {
            id: 'q8',
            question: 'What is the space complexity of BFS in a worst-case scenario?',
            options: [
                { value: 'A', text: 'O(1)' },
                { value: 'B', text: 'O(V)' },
                { value: 'C', text: 'O(E)' },
                { value: 'D', text: 'O(V + E)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) In the worst case, BFS can require O(V) space due to the queue.",
                incorrect: "C) O(E) is incorrect as it doesn’t account for the vertex storage.",
            }
        },
        {
            id: 'q9',
            question: 'In which case would BFS not be the best choice?',
            options: [
                { value: 'A', text: 'When the graph is weighted' },
                { value: 'B', text: 'When the graph is unweighted' },
                { value: 'C', text: 'When finding the longest path' },
                { value: 'D', text: 'When all paths have the same weight' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) BFS does not handle weighted graphs effectively; Dijkstra’s is preferred.",
                incorrect: "B) BFS is optimal for unweighted graphs.",
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
            <h2>BFS Posttest</h2>
            <p>Posttest questions to evaluate your understanding of Breadth-First Search (BFS) after completing the experiment.</p>
            
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

export default BFSQuiz;
