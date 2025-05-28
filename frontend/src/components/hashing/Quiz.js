// src/components/DoubleHashingQuiz.js
import React, { useState } from 'react';
import './Hashing.css'; // Import the shared CSS file for styling
// Import the shared CSS file for hashing styling

const DoubleHashingQuiz = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions
    const [quizStarted, setQuizStarted] = useState(false); // State to track if quiz has started

    // Define a pool of 10 double hashing questions and answers
    const questionPool = [
        {
            id: 'q1',
            question: 'What is double hashing?',
            options: [
                { value: 'A', text: 'A method of collision resolution in hash tables.' },
                { value: 'B', text: 'A type of encryption technique.' },
                { value: 'C', text: 'A sorting algorithm.' },
                { value: 'D', text: 'A way to store data in a binary tree.' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Double hashing is a method used in hash tables to resolve collisions.",
                incorrect: "B) Double hashing is not related to encryption techniques.",
            }
        },
        {
            id: 'q2',
            question: 'What is the purpose of the second hash function in double hashing?',
            options: [
                { value: 'A', text: 'To generate a random index.' },
                { value: 'B', text: 'To calculate the probing step size.' },
                { value: 'C', text: 'To encrypt the key.' },
                { value: 'D', text: 'To find the minimum element.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The second hash function calculates the step size for probing during collisions.",
                incorrect: "C) The second hash function does not encrypt the key.",
            }
        },
        {
            id: 'q3',
            question: 'What is a potential problem with double hashing?',
            options: [
                { value: 'A', text: 'It can cause clustering.' },
                { value: 'B', text: 'It may require more memory than separate chaining.' },
                { value: 'C', text: 'It is slower than linear probing.' },
                { value: 'D', text: 'It can lead to infinite loops.' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Double hashing can still cause clustering, although it reduces the problem compared to linear probing.",
                incorrect: "C) Double hashing can be as fast or faster than linear probing depending on the situation.",
            }
        },
        {
            id: 'q4',
            question: 'In double hashing, how is the new index calculated after a collision?',
            options: [
                { value: 'A', text: 'Index = (hash1(key) + i * hash2(key)) mod table_size' },
                { value: 'B', text: 'Index = (hash1(key) * hash2(key)) mod table_size' },
                { value: 'C', text: 'Index = (hash1(key) - hash2(key)) mod table_size' },
                { value: 'D', text: 'Index = (hash2(key) - i) mod table_size' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) The new index is calculated using the first hash and a linear combination with the second hash.",
                incorrect: "B) This is incorrect; the second hash is used to calculate the step size, not multiplied.",
            }
        },
        {
            id: 'q5',
            question: 'What happens if the second hash function returns 0 in double hashing?',
            options: [
                { value: 'A', text: 'The algorithm fails.' },
                { value: 'B', text: 'The search may go into an infinite loop.' },
                { value: 'C', text: 'It causes a collision.' },
                { value: 'D', text: 'It means the key is not in the table.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) If the second hash function returns 0, the probing will not progress, possibly leading to an infinite loop.",
                incorrect: "A) The algorithm does not fail; however, it can get stuck if not handled properly.",
            }
        },
        {
            id: 'q6',
            question: 'What is an example of a good second hash function for double hashing?',
            options: [
                { value: 'A', text: 'hash2(key) = 1 + (key mod (table_size - 1))' },
                { value: 'B', text: 'hash2(key) = key mod table_size' },
                { value: 'C', text: 'hash2(key) = key / table_size' },
                { value: 'D', text: 'hash2(key) = key' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) This ensures the second hash function produces values that are less than table size and greater than 0.",
                incorrect: "B) This can lead to clustering since it may produce a 0 for certain keys.",
            }
        },
        {
            id: 'q7',
            question: 'How does double hashing compare to separate chaining?',
            options: [
                { value: 'A', text: 'Double hashing is always faster.' },
                { value: 'B', text: 'Separate chaining uses linked lists to handle collisions.' },
                { value: 'C', text: 'Double hashing uses more memory than separate chaining.' },
                { value: 'D', text: 'There is no difference.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Separate chaining uses linked lists (or other structures) at each index to handle collisions.",
                incorrect: "C) Double hashing can be more memory efficient than separate chaining in many cases.",
            }
        },
        {
            id: 'q8',
            question: 'What is a common application of double hashing?',
            options: [
                { value: 'A', text: 'Database indexing' },
                { value: 'B', text: 'Sorting algorithms' },
                { value: 'C', text: 'Memory management' },
                { value: 'D', text: 'Graph traversal' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Double hashing is often used in hash tables for database indexing.",
                incorrect: "B) It is not specifically a sorting algorithm, but rather a collision resolution method.",
            }
        },
        {
            id: 'q9',
            question: 'Which of the following is true about the performance of double hashing?',
            options: [
                { value: 'A', text: 'It has constant time complexity for insertions.' },
                { value: 'B', text: 'It degrades to O(n) in the worst case.' },
                { value: 'C', text: 'It is always faster than linear probing.' },
                { value: 'D', text: 'It cannot be implemented in a dynamic array.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) In the worst case, the time complexity can degrade to O(n) if the hash table is full.",
                incorrect: "A) The average case is O(1) under ideal circumstances, but it can degrade.",
            }
        },
        {
            id: 'q10',
            question: 'What is a key advantage of using double hashing?',
            options: [
                { value: 'A', text: 'It is simple to implement.' },
                { value: 'B', text: 'It reduces clustering more effectively than linear probing.' },
                { value: 'C', text: 'It requires less memory than other methods.' },
                { value: 'D', text: 'It can handle dynamic datasets.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Double hashing can reduce clustering significantly compared to linear probing.",
                incorrect: "C) It does not necessarily require less memory than other methods.",
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
            <h2>Double Hashing Quiz</h2>
            <p>Test your understanding of double hashing with this quiz.</p>
            
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

export default DoubleHashingQuiz;
