import React, { useState, useEffect } from 'react';
import './linkedlist.css'; // Import the shared CSS file for posttest styling

const Posttest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions

    // Define a pool of questions and answers for linked lists
    const questionPool = [
        {
            id: 'q1',
            question: 'What is a singly linked list?',
            options: [
                { value: 'A', text: 'A data structure that consists of nodes where each node points to the next node' },
                { value: 'B', text: 'A collection of arrays' },
                { value: 'C', text: 'A data structure that allows random access to its elements' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A singly linked list consists of nodes, each containing a value and a pointer to the next node.",
                incorrect: "B) This describes an array, not a singly linked list.",
            }
        },
        {
            id: 'q2',
            question: 'Which of the following is a disadvantage of a singly linked list?',
            options: [
                { value: 'A', text: 'It can be traversed in reverse order easily' },
                { value: 'B', text: 'Memory allocation is not contiguous' },
                { value: 'C', text: 'It uses less memory than arrays' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A singly linked list does not have contiguous memory allocation, which can lead to fragmentation.",
                incorrect: "A) A singly linked list cannot be traversed in reverse order without extra effort.",
            }
        },
        {
            id: 'q3',
            question: 'What is the time complexity of inserting an element at the beginning of a singly linked list?',
            options: [
                { value: 'A', text: 'O(1)' },
                { value: 'B', text: 'O(n)' },
                { value: 'C', text: 'O(log n)' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Inserting at the beginning of a singly linked list is O(1) because it only involves adjusting pointers.",
                incorrect: "B) O(n) is the time complexity for searching for a position in a linked list.",
            }
        },
        {
            id: 'q4',
            question: 'Which pointer do you use to access the first element of a singly linked list?',
            options: [
                { value: 'A', text: 'Tail pointer' },
                { value: 'B', text: 'Head pointer' },
                { value: 'C', text: 'Next pointer' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The head pointer points to the first element of a singly linked list.",
                incorrect: "A) The tail pointer points to the last element, not the first.",
            }
        },
        {
            id: 'q5',
            question: 'What happens if you lose the head pointer of a singly linked list?',
            options: [
                { value: 'A', text: 'You can still access all the elements' },
                { value: 'B', text: 'You lose access to the entire list' },
                { value: 'C', text: 'The list automatically deletes itself' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) If you lose the head pointer, you lose access to the entire list.",
                incorrect: "A) Without the head pointer, there's no way to access the nodes in the list.",
            }
        },
        {
            id: 'q6',
            question: 'How can you reverse a singly linked list?',
            options: [
                { value: 'A', text: 'By changing the direction of the pointers' },
                { value: 'B', text: 'By copying the elements to an array and then reversing the array' },
                { value: 'C', text: 'You cannot reverse a singly linked list' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) You can reverse a singly linked list by iterating through the list and changing the direction of the pointers.",
                incorrect: "B) While you can use an array, it is not necessary; you can reverse the list in place.",
            }
        },
        {
            id: 'q7',
            question: 'Which of the following operations has the highest time complexity for a singly linked list?',
            options: [
                { value: 'A', text: 'Inserting at the end' },
                { value: 'B', text: 'Finding an element' },
                { value: 'C', text: 'Deleting the first element' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Finding an element has the highest time complexity, which is O(n) in a singly linked list.",
                incorrect: "A) Inserting at the end is O(n) if you need to traverse the list to find the last node.",
            }
        },
        {
            id: 'q8',
            question: 'What is the primary characteristic of a node in a singly linked list?',
            options: [
                { value: 'A', text: 'It contains a value and a pointer to the previous node' },
                { value: 'B', text: 'It contains a value and a pointer to the next node' },
                { value: 'C', text: 'It contains a value, a pointer to the next node, and a pointer to the previous node' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Each node contains a value and a pointer to the next node.",
                incorrect: "A) A singly linked list does not maintain a pointer to the previous node.",
            }
        },
        {
            id: 'q9',
            question: 'Which of the following is NOT a valid operation for a singly linked list?',
            options: [
                { value: 'A', text: 'Insertion' },
                { value: 'B', text: 'Traversal' },
                { value: 'C', text: 'Random access' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Random access is not valid for a singly linked list as it does not support indexing.",
                incorrect: "A) Insertion is a valid operation for singly linked lists.",
            }
        },
        {
            id: 'q10',
            question: 'In a singly linked list, what does the last node’s next pointer point to?',
            options: [
                { value: 'A', text: 'The first node' },
                { value: 'B', text: 'null' },
                { value: 'C', text: 'It depends on the implementation' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The last node's next pointer points to null, indicating the end of the list.",
                incorrect: "A) This describes a circular linked list, not a singly linked list.",
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

            feedbackArray.push(feedbackDetail);
            if (userAnswer === correctAnswer) {
                scoreCount++;
            }
        });

        setScore(scoreCount);
        setFeedback(feedbackArray);
    };

    const handleRetry = () => {
        setSubmitted(false);
        setResponses({});
        setScore(null);
        setFeedback([]);
        setErrors({});
        const randomQuestions = generateRandomQuestions(3); // Pick 3 new random questions
        setQuestions(randomQuestions);
    };

    return (
        <div className="content-box">
            <h1>Linked List Posttest</h1>
            {submitted ? (
                <div className="results-container">
                    <h2>Your Score: {score} / {questions.length}</h2>
                    <button onClick={handleRetry}>Retry</button>
                    <div className="feedback-container">
                        {feedback.map((item, index) => (
                            <div key={index} className="feedback-item">
                                <p><strong>Question:</strong> {item.question}</p>
                                <p><strong>Your Answer:</strong> {item.userAnswer}</p>
                                <p><strong>Correct Answer:</strong> {item.correctAnswer}</p>
                                <p><strong>Explanation:</strong> {item.explanation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {questions.map((q) => (
                        <div key={q.id} className="question-container">
                            <p>{q.question}</p>
                            {q.options.map((option) => (
                                <label key={option.value}>
                                    <input
                                        type="radio"
                                        name={q.id}
                                        value={option.value}
                                        checked={responses[q.id] === option.value}
                                        onChange={handleChange}
                                    />
                                    {option.text}
                                </label>
                            ))}
                            {errors[q.id] && <p className="error">{errors[q.id]}</p>}
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Posttest;
