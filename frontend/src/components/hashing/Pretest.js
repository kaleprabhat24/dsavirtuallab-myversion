import React, { useState, useEffect } from 'react';
import './Hashing.css'; // Import the shared CSS file for hashing styling

const HashingPretest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions

    // Define a pool of 10 questions and answers for hashing, including double hashing
    const questionPool = [
        {
            id: 'q1',
            question: 'What is hashing?',
            options: [
                { value: 'A', text: 'A technique to store data in a tree structure' },
                { value: 'B', text: 'A technique to convert a large range of data into a fixed-size value' },
                { value: 'C', text: 'A technique to arrange data sequentially' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Hashing is a technique used to convert a large range of data into a fixed-size value (hash).",
                incorrect: "A) Hashing is not about storing data in a tree structure; that's a tree data structure."
            }
        },
        {
            id: 'q2',
            question: 'Which problem does double hashing solve?',
            options: [
                { value: 'A', text: 'Data loss during hashing' },
                { value: 'B', text: 'Collisions during hashing' },
                { value: 'C', text: 'Slow search time' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Double hashing helps solve the problem of collisions during hashing by using a second hash function to probe for an empty slot.",
                incorrect: "A) Double hashing does not solve data loss but rather collisions."
            }
        },
        {
            id: 'q3',
            question: 'How does double hashing work?',
            options: [
                { value: 'A', text: 'By using two hash functions to determine probe sequence' },
                { value: 'B', text: 'By using a linked list to handle collisions' },
                { value: 'C', text: 'By resizing the hash table' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Double hashing works by using two hash functions to determine the probe sequence when a collision occurs.",
                incorrect: "B) Using a linked list for collision handling is known as chaining, not double hashing."
            }
        },
        {
            id: 'q4',
            question: 'What is the primary benefit of double hashing?',
            options: [
                { value: 'A', text: 'Reduces the chance of clustering' },
                { value: 'B', text: 'Improves search performance' },
                { value: 'C', text: 'Both A and B' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Double hashing reduces the chance of clustering and improves search performance, as the probe sequence is randomized.",
                incorrect: "A) While reducing clustering is important, the other benefit is improved search performance."
            }
        },
        {
            id: 'q5',
            question: 'What is a hash function?',
            options: [
                { value: 'A', text: 'A function that maps data to a large value' },
                { value: 'B', text: 'A function that computes a fixed-size value for any input data' },
                { value: 'C', text: 'A function that sorts data' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A hash function computes a fixed-size value for any input data, called a hash value.",
                incorrect: "A) A hash function maps data to a fixed-size value, not a large value."
            }
        },
        {
            id: 'q6',
            question: 'What is the purpose of a good hash function?',
            options: [
                { value: 'A', text: 'To maximize collisions' },
                { value: 'B', text: 'To minimize collisions and evenly distribute data' },
                { value: 'C', text: 'To compress data' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A good hash function minimizes collisions and evenly distributes data across the hash table.",
                incorrect: "A) A good hash function should minimize collisions, not maximize them."
            }
        },
        {
            id: 'q7',
            question: 'Which of the following is a disadvantage of linear probing?',
            options: [
                { value: 'A', text: 'High memory usage' },
                { value: 'B', text: 'Primary clustering' },
                { value: 'C', text: 'Slow hashing time' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Primary clustering is a major disadvantage of linear probing.",
                incorrect: "A) Linear probing is memory efficient, but clustering is its main issue."
            }
        },
        {
            id: 'q8',
            question: 'Which of the following is an example of a perfect hash function?',
            options: [
                { value: 'A', text: 'No collisions and unique hash values for inputs' },
                { value: 'B', text: 'Hash function that compresses data' },
                { value: 'C', text: 'Hash function with high collision rate' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) A perfect hash function has no collisions and assigns unique hash values to inputs.",
                incorrect: "B) Compression is not the focus of a perfect hash function."
            }
        },
        {
            id: 'q9',
            question: 'What is the primary issue with separate chaining?',
            options: [
                { value: 'A', text: 'High memory usage' },
                { value: 'B', text: 'Data loss' },
                { value: 'C', text: 'Increased search time in case of collisions' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) In separate chaining, search time increases when there are collisions as the linked list grows.",
                incorrect: "A) The main issue is the search time, not memory usage."
            }
        },
        {
            id: 'q10',
            question: 'What is the load factor in a hash table?',
            options: [
                { value: 'A', text: 'The ratio of the number of elements to the table size' },
                { value: 'B', text: 'The ratio of empty slots to the total slots' },
                { value: 'C', text: 'The ratio of collisions to the number of elements' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) The load factor is the ratio of the number of elements stored in the table to the total table size.",
                incorrect: "B) Load factor measures the usage of the table, not empty slots."
            }
        }
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
            <h2>Pretest on Hashing Concepts</h2>
            <p>Please answer the following questions based on hashing, including double hashing:</p>
            <form onSubmit={handleSubmit}>
                {questions.map((q, index) => (
                    <div key={q.id} className="question">
                        <h3>Question {index + 1}:</h3>
                        <p>{q.question}</p>
                        {q.options.map((option) => (
                            <label key={option.value}>
                                <input
                                    type="radio"
                                    name={q.id}
                                    value={option.value}
                                    onChange={handleChange}
                                    checked={responses[q.id] === option.value}
                                />
                                {option.text}
                            </label>
                        ))}
                        {errors[q.id] && <p className="error">{errors[q.id]}</p>}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div className="results">
                    <h3>Your score: {score}/{questions.length}</h3>
                    <h3>Feedback:</h3>
                    {feedback.map((fb, index) => (
                        <div key={index} className="feedback">
                            <p>
                                <strong>Question:</strong> {fb.question}
                                <br />
                                <strong>Your answer:</strong> {fb.userAnswer}
                                <br />
                                <strong>Correct answer:</strong> {fb.correctAnswer}
                                <br />
                                <strong>Explanation:</strong> {fb.explanation}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HashingPretest;
