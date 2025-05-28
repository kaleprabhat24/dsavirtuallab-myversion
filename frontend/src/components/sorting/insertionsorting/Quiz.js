// src/components/InsertionSortQuiz.js
import React, { useState } from 'react';
import './InsertionSort.css'; // Import the shared CSS file for styling

const InsertionSortQuiz = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions
    const [quizStarted, setQuizStarted] = useState(false); // State to track if quiz has started

    // Define a pool of 10 insertion sort questions and answers
    const questionPool = [
        {
            id: 'q1',
            question: 'What is the average time complexity of the insertion sort algorithm?',
            options: [
                { value: 'A', text: 'O(n)' },
                { value: 'B', text: 'O(n^2)' },
                { value: 'C', text: 'O(n log n)' },
                { value: 'D', text: 'O(1)' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The average case time complexity of insertion sort is O(n^2).",
                incorrect: "A) O(n) is the best case when the array is already sorted.",
            }
        },
        {
            id: 'q2',
            question: 'Which of the following is true about insertion sort?',
            options: [
                { value: 'A', text: 'It is not a stable sort.' },
                { value: 'B', text: 'It is an in-place sorting algorithm.' },
                { value: 'C', text: 'It uses a divide and conquer approach.' },
                { value: 'D', text: 'It is always faster than bubble sort.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Insertion sort is an in-place sorting algorithm, meaning it doesn't require extra space for another array.",
                incorrect: "A) Insertion sort is stable; equal elements retain their original relative order.",
            }
        },
        {
            id: 'q3',
            question: 'What is the best-case time complexity for insertion sort?',
            options: [
                { value: 'A', text: 'O(n^2)' },
                { value: 'B', text: 'O(n log n)' },
                { value: 'C', text: 'O(n)' },
                { value: 'D', text: 'O(1)' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) The best-case time complexity is O(n) when the array is already sorted.",
                incorrect: "A) O(n^2) is the worst-case time complexity.",
            }
        },
        {
            id: 'q4',
            question: 'Insertion sort is best suited for which type of data?',
            options: [
                { value: 'A', text: 'Large datasets' },
                { value: 'B', text: 'Small datasets' },
                { value: 'C', text: 'Sorted datasets' },
                { value: 'D', text: 'All of the above' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Insertion sort is best suited for sorted or nearly sorted datasets.",
                incorrect: "D) While it can handle small datasets, it performs poorly on large unsorted datasets.",
            }
        },
        {
            id: 'q5',
            question: 'How does insertion sort work?',
            options: [
                { value: 'A', text: 'It divides the array and sorts the halves.' },
                { value: 'B', text: 'It builds a sorted array one element at a time.' },
                { value: 'C', text: 'It repeatedly swaps adjacent elements.' },
                { value: 'D', text: 'It selects the minimum element and moves it to the front.' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Insertion sort builds a sorted array by taking one element at a time and placing it in the correct position.",
                incorrect: "D) This describes selection sort, not insertion sort.",
            }
        },
        {
            id: 'q6',
            question: 'What is the worst-case time complexity of insertion sort?',
            options: [
                { value: 'A', text: 'O(n log n)' },
                { value: 'B', text: 'O(n)' },
                { value: 'C', text: 'O(n^2)' },
                { value: 'D', text: 'O(log n)' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) The worst-case time complexity is O(n^2), which occurs when the array is sorted in reverse order.",
                incorrect: "B) O(n) is the best-case time complexity when the array is already sorted.",
            }
        },
        {
            id: 'q7',
            question: 'What is a key feature of insertion sort?',
            options: [
                { value: 'A', text: 'It requires additional memory.' },
                { value: 'B', text: 'It is adaptive.' },
                { value: 'C', text: 'It is not efficient for large data.' },
                { value: 'D', text: 'Both B and C' }
            ],
            correctAnswer: 'D',
            explanations: {
                correct: "D) Insertion sort is adaptive (it performs better on already sorted data) and is not efficient for large datasets.",
                incorrect: "C) While it is adaptive, it is not efficient for large datasets due to its O(n^2) time complexity.",
            }
        },
        {
            id: 'q8',
            question: 'Which sorting algorithm is similar to insertion sort?',
            options: [
                { value: 'A', text: 'Bubble Sort' },
                { value: 'B', text: 'Selection Sort' },
                { value: 'C', text: 'Merge Sort' },
                { value: 'D', text: 'Quick Sort' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Bubble sort is similar in that it is also a simple comparison-based sort.",
                incorrect: "D) Quick sort is a more efficient divide-and-conquer algorithm.",
            }
        },
        {
            id: 'q9',
            question: 'How does insertion sort handle an element being out of order?',
            options: [
                { value: 'A', text: 'It ignores it.' },
                { value: 'B', text: 'It moves it to the end of the array.' },
                { value: 'C', text: 'It places it in the correct position in the sorted section.' },
                { value: 'D', text: 'It swaps it with the next element.' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Insertion sort places the out-of-order element in the correct position in the sorted section.",
                incorrect: "B) It does not move elements to the end; it reorders them.",
            }
        },
        {
            id: 'q10',
            question: 'When is insertion sort preferred over other algorithms?',
            options: [
                { value: 'A', text: 'For large datasets.' },
                { value: 'B', text: 'When memory usage is a concern.' },
                { value: 'C', text: 'For nearly sorted data.' },
                { value: 'D', text: 'When the data is random.' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Insertion sort is preferred for nearly sorted data as it has better performance in this scenario.",
                incorrect: "A) It is not suitable for large datasets compared to more efficient algorithms like quicksort or mergesort.",
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
            <h2>Insertion Sort Quiz</h2>
            <p>Test your understanding of insertion sort with this quiz.</p>
            
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

export default InsertionSortQuiz;
