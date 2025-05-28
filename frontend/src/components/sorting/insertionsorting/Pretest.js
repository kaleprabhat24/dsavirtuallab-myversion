
import React, { useState, useEffect } from 'react';
import './InsertionSort.css'; // Import the shared CSS file for sort styling

const InsertionSortPretest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]);

    // Define a pool of 10 questions and answers for Insertion Sort
    const questionPool = [
        {
            id: 'q1',
            question: 'What is the time complexity of insertion sort in the worst case?',
            options: [
                { value: 'A', text: 'O(n)' },
                { value: 'B', text: 'O(n^2)' },
                { value: 'C', text: 'O(log n)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) In the worst case, insertion sort has a time complexity of O(n^2) due to comparisons and shifts.",
                incorrect: "A) O(n) is incorrect as it applies to the best case when the array is already sorted."
            }
        },
        {
            id: 'q2',
            question: 'In which scenario does insertion sort have the best performance?',
            options: [
                { value: 'A', text: 'When the array is reverse sorted' },
                { value: 'B', text: 'When the array is already sorted' },
                { value: 'C', text: 'For large random data' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Insertion sort performs best (O(n)) when the array is already sorted.",
                incorrect: "A) Reverse sorted arrays lead to worst case performance (O(n^2))."
            }
        },
        {
            id: 'q3',
            question: 'How does insertion sort algorithm work?',
            options: [
                { value: 'A', text: 'It repeatedly finds the minimum element and places it at the beginning.' },
                { value: 'B', text: 'It builds the final sorted array one element at a time by inserting each element into its proper place.' },
                { value: 'C', text: 'It divides the array into two halves, then merges them after sorting.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Insertion sort builds the sorted array by inserting each element into its correct position one by one.",
                incorrect: "A) This describes the selection sort algorithm."
            }
        },
        {
            id: 'q4',
            question: 'What is the space complexity of insertion sort?',
            options: [
                { value: 'A', text: 'O(1)' },
                { value: 'B', text: 'O(n)' },
                { value: 'C', text: 'O(log n)' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Insertion sort has a space complexity of O(1) since it sorts in place.",
                incorrect: "B) O(n) space complexity would apply if an additional array were used, which is not the case in insertion sort."
            }
        },
        {
            id: 'q5',
            question: 'What type of sorting algorithm is insertion sort?',
            options: [
                { value: 'A', text: 'Divide and conquer' },
                { value: 'B', text: 'Comparison-based' },
                { value: 'C', text: 'Non-comparison-based' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Insertion sort is a comparison-based sorting algorithm as it repeatedly compares and inserts elements.",
                incorrect: "A) Divide and conquer techniques are used in algorithms like merge sort, not insertion sort."
            }
        },
        // Add more questions as needed...
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
            <p>Pretest questions to evaluate your understanding of insertion sort before starting the experiment.</p>
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




export default InsertionSortPretest;
