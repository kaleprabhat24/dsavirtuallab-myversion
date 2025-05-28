import React, { useState, useEffect } from 'react';
import './linkedlist.css'; // Import the shared CSS file for linked list styling

const Pretest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]);

    // Define a pool of 10 questions and answers for singly linked lists
    const questionPool = [
        {
            id: 'q1',
            question: 'What is a singly linked list?',
            options: [
                { value: 'A', text: 'A data structure where each node has two pointers' },
                { value: 'B', text: 'A data structure where each node points to the next node' },
                { value: 'C', text: 'A circular data structure' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A singly linked list is a data structure where each node points to the next node.",
                incorrect: "A) A data structure where each node has two pointers is a doubly linked list."
            }
        },
        {
            id: 'q2',
            question: 'How do you find the length of a singly linked list?',
            options: [
                { value: 'A', text: 'Iterate through the list until the end and count the nodes' },
                { value: 'B', text: 'Use a length property of the linked list' },
                { value: 'C', text: 'Check the last node' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) To find the length of a singly linked list, you need to iterate through the list and count the nodes.",
                incorrect: "B) Singly linked lists do not have a length property."
            }
        },
        {
            id: 'q3',
            question: 'What is the time complexity of searching for an element in a singly linked list?',
            options: [
                { value: 'A', text: 'O(1)' },
                { value: 'B', text: 'O(n)' },
                { value: 'C', text: 'O(log n)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The time complexity of searching for an element in a singly linked list is O(n).",
                incorrect: "A) O(1) is the time complexity for accessing an element in an array by index."
            }
        },
        {
            id: 'q4',
            question: 'How do you insert a new node at the beginning of a singly linked list?',
            options: [
                { value: 'A', text: 'Set the new node’s next pointer to the current head and then update the head to the new node' },
                { value: 'B', text: 'Update the next pointer of the last node to point to the new node' },
                { value: 'C', text: 'Update the head to point to the new node without changing any pointers' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) To insert a new node at the beginning, set the new node’s next pointer to the current head and then update the head to the new node.",
                incorrect: "B) This option describes appending a node at the end of the list."
            }
        },
        {
            id: 'q5',
            question: 'What is the purpose of a dummy head node in a singly linked list?',
            options: [
                { value: 'A', text: 'To make the list circular' },
                { value: 'B', text: 'To simplify the insertion and deletion at the head of the list' },
                { value: 'C', text: 'To increase the complexity of the list' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A dummy head node simplifies the insertion and deletion at the head of the list by providing a consistent starting point.",
                incorrect: "A) The dummy head node does not make the list circular."
            }
        },
        {
            id: 'q6',
            question: 'How do you delete a node in the middle of a singly linked list?',
            options: [
                { value: 'A', text: 'Update the previous node’s next pointer to skip the node to be deleted' },
                { value: 'B', text: 'Directly delete the node without updating any pointers' },
                { value: 'C', text: 'Update the next pointer of the node to be deleted to point to the next node' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) To delete a node in the middle, update the previous node’s next pointer to skip the node to be deleted.",
                incorrect: "B) This would leave dangling pointers and create a memory leak."
            }
        },
        {
            id: 'q7',
            question: 'What happens when you try to access an element at an invalid index in a singly linked list?',
            options: [
                { value: 'A', text: 'The program crashes' },
                { value: 'B', text: 'You get an error message' },
                { value: 'C', text: 'The behavior is undefined and depends on the implementation' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Accessing an element at an invalid index leads to undefined behavior depending on the implementation.",
                incorrect: "B) There is no built-in error message for invalid access in a basic singly linked list."
            }
        },
        {
            id: 'q8',
            question: 'How do you reverse a singly linked list?',
            options: [
                { value: 'A', text: 'Iterate through the list and reverse the pointers of each node' },
                { value: 'B', text: 'Use a stack to reverse the elements' },
                { value: 'C', text: 'You cannot reverse a singly linked list' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) To reverse a singly linked list, iterate through the list and reverse the pointers of each node.",
                incorrect: "B) While using a stack can help, it involves extra space. The primary method is pointer reversal."
            }
        },
        {
            id: 'q9',
            question: 'What is the main advantage of a singly linked list over an array?',
            options: [
                { value: 'A', text: 'Constant time element access' },
                { value: 'B', text: 'Dynamic size adjustment' },
                { value: 'C', text: 'Better memory usage' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The main advantage of a singly linked list over an array is dynamic size adjustment.",
                incorrect: "A) Arrays have constant time element access, not linked lists."
            }
        },
        {
            id: 'q10',
            question: 'What is the main disadvantage of a singly linked list compared to a doubly linked list?',
            options: [
                { value: 'A', text: 'Cannot traverse backward' },
                { value: 'B', text: 'More memory usage' },
                { value: 'C', text: 'Fixed size' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) The main disadvantage of a singly linked list compared to a doubly linked list is that it cannot traverse backward.",
                incorrect: "B) Singly linked lists actually use less memory than doubly linked lists."
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
            <p>Pretest questions to evaluate your understanding of singly linked lists before starting the experiment.</p>
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

export default Pretest;
