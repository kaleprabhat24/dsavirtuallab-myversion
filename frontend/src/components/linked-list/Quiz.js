// src/components/LinkedListQuiz.js
import React, { useState } from 'react';
import './linkedlist.css';  // Import the shared CSS file for styling

const LinkedListQuiz = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions
    const [quizStarted, setQuizStarted] = useState(false); // State to track if quiz has started

    // Define a pool of 10 linked list questions and answers
    const questionPool = [
        {
            id: 'q1',
            question: 'What is a linked list?',
            options: [
                { value: 'A', text: 'A collection of data elements' },
                { value: 'B', text: 'A data structure consisting of nodes' },
                { value: 'C', text: 'A static array of items' },
                { value: 'D', text: 'A type of tree data structure' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A linked list is a data structure consisting of nodes that hold data and point to the next node.",
                incorrect: "A) A collection of data elements can refer to any data structure, not specifically linked lists.",
            }
        },
        {
            id: 'q2',
            question: 'What are the main advantages of linked lists over arrays?',
            options: [
                { value: 'A', text: 'Dynamic size and ease of insertions/deletions' },
                { value: 'B', text: 'Better memory usage' },
                { value: 'C', text: 'Faster access time' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Linked lists can grow and shrink dynamically and allow efficient insertions and deletions.",
                incorrect: "C) Access time is slower for linked lists compared to arrays due to sequential access.",
            }
        },
        {
            id: 'q3',
            question: 'In a singly linked list, how do you traverse from the head to the last node?',
            options: [
                { value: 'A', text: 'Directly access the last node' },
                { value: 'B', text: 'Follow the next pointers' },
                { value: 'C', text: 'Use a stack to store nodes' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) You follow the next pointers from the head to reach the last node.",
                incorrect: "A) You cannot directly access the last node without traversing.",
            }
        },
        {
            id: 'q4',
            question: 'What is the time complexity for inserting a node at the beginning of a linked list?',
            options: [
                { value: 'A', text: 'O(n)' },
                { value: 'B', text: 'O(1)' },
                { value: 'C', text: 'O(log n)' },
                { value: 'D', text: 'O(n log n)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Inserting at the beginning of a linked list is a constant-time operation, O(1).",
                incorrect: "A) Insertion at the beginning does not require traversal, so it is not O(n).",
            }
        },
        {
            id: 'q5',
            question: 'What is the space complexity of a linked list?',
            options: [
                { value: 'A', text: 'O(1)' },
                { value: 'B', text: 'O(n)' },
                { value: 'C', text: 'O(n log n)' },
                { value: 'D', text: 'O(log n)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The space complexity is O(n) because it grows linearly with the number of nodes.",
                incorrect: "A) O(1) would imply a constant space regardless of the number of nodes, which is incorrect.",
            }
        },
        {
            id: 'q6',
            question: 'What happens if you try to access an element at an index greater than the length of a linked list?',
            options: [
                { value: 'A', text: 'You get the last element' },
                { value: 'B', text: 'You get a null reference' },
                { value: 'C', text: 'You get an error' },
                { value: 'D', text: 'You get a random value' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Accessing an index greater than the length returns null or undefined.",
                incorrect: "C) Typically, you don't get an error; instead, you receive a null reference.",
            }
        },
        {
            id: 'q7',
            question: 'Which of the following is a disadvantage of linked lists?',
            options: [
                { value: 'A', text: 'Dynamic memory allocation' },
                { value: 'B', text: 'Random access is not possible' },
                { value: 'C', text: 'Requires more memory' },
                { value: 'D', text: 'All of the above' }
            ],
            correctAnswer: 'D',
            explanations: {
                correct: "D) All options are disadvantages: no random access, more memory per node, and dynamic memory allocation.",
                incorrect: "B) Random access limitation is a significant disadvantage of linked lists.",
            }
        },
        {
            id: 'q8',
            question: 'How do you reverse a singly linked list?',
            options: [
                { value: 'A', text: 'Reassign the next pointers in reverse' },
                { value: 'B', text: 'Use recursion to reverse' },
                { value: 'C', text: 'You cannot reverse it' },
                { value: 'D', text: 'Both A and B' }
            ],
            correctAnswer: 'D',
            explanations: {
                correct: "D) You can reverse it by either reassigning pointers or using recursion.",
                incorrect: "C) A linked list can be reversed, using either method mentioned.",
            }
        },
        {
            id: 'q9',
            question: 'In a doubly linked list, how many pointers does each node have?',
            options: [
                { value: 'A', text: 'One' },
                { value: 'B', text: 'Two' },
                { value: 'C', text: 'Three' },
                { value: 'D', text: 'Four' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Each node in a doubly linked list has two pointers: one to the next node and one to the previous node.",
                incorrect: "A) A single pointer is used in singly linked lists, not in doubly linked lists.",
            }
        },
        {
            id: 'q10',
            question: 'What is the typical use case for a linked list?',
            options: [
                { value: 'A', text: 'Implementing a stack or queue' },
                { value: 'B', text: 'Searching for elements' },
                { value: 'C', text: 'Sorting elements' },
                { value: 'D', text: 'Direct element access' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Linked lists are often used to implement stacks or queues due to their dynamic nature.",
                incorrect: "C) While linked lists can be sorted, they are not primarily used for this purpose.",
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
            <h2>Linked List Quiz</h2>
            <p>Test your understanding of linked lists with this quiz.</p>
            
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

export default LinkedListQuiz;
