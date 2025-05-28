// src/components/insertion-sort/Posttest.js

import React, { useState, useEffect } from 'react';
import './InsertionSort.css'; // Adjust if needed to match the insertion sort styling

const InsertionPosttest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [questions, setQuestions] = useState([]); // Store selected questions

    // Define a pool of 10 questions and answers for insertion sort
    const questionPool = [
        {
            id: 'q1',
            question: 'What is the time complexity of the insertion sort algorithm in the worst case?',
            options: [
                { value: 'A', text: 'O(n)' },
                { value: 'B', text: 'O(log n)' },
                { value: 'C', text: 'O(n^2)' },
                { value: 'D', text: 'O(n log n)' }
            ],
            correctAnswer: 'C'
        },
        {
            id: 'q2',
            question: 'What is the best case time complexity for insertion sort?',
            options: [
                { value: 'A', text: 'O(n)' },
                { value: 'B', text: 'O(log n)' },
                { value: 'C', text: 'O(n^2)' },
                { value: 'D', text: 'O(1)' }
            ],
            correctAnswer: 'A'
        },
        {
            id: 'q3',
            question: 'Insertion sort is an example of which type of sorting algorithm?',
            options: [
                { value: 'A', text: 'Divide and conquer' },
                { value: 'B', text: 'Comparison-based' },
                { value: 'C', text: 'Non-comparison-based' },
                { value: 'D', text: 'Heap-based' }
            ],
            correctAnswer: 'B'
        },
        {
            id: 'q4',
            question: 'Which of the following is true about insertion sort?',
            options: [
                { value: 'A', text: 'It is a stable sorting algorithm' },
                { value: 'B', text: 'It is not an in-place sorting algorithm' },
                { value: 'C', text: 'It requires additional space proportional to n' },
                { value: 'D', text: 'It does not handle small datasets efficiently' }
            ],
            correctAnswer: 'A'
        },
        {
            id: 'q5',
            question: 'What is the primary advantage of insertion sort over more complex algorithms like quicksort or merge sort?',
            options: [
                { value: 'A', text: 'It has better time complexity in all cases' },
                { value: 'B', text: 'It performs better on small datasets' },
                { value: 'C', text: 'It requires less additional memory' },
                { value: 'D', text: 'Both B and C' }
            ],
            correctAnswer: 'D'
        },
        {
            id: 'q6',
            question: 'In which of the following cases is insertion sort most efficient?',
            options: [
                { value: 'A', text: 'When the input is sorted in reverse order' },
                { value: 'B', text: 'When the input is already sorted' },
                { value: 'C', text: 'When the input is randomly ordered' },
                { value: 'D', text: 'It performs equally in all cases' }
            ],
            correctAnswer: 'B'
        },
        {
            id: 'q7',
            question: 'What is the space complexity of insertion sort?',
            options: [
                { value: 'A', text: 'O(1)' },
                { value: 'B', text: 'O(n)' },
                { value: 'C', text: 'O(log n)' },
                { value: 'D', text: 'O(n^2)' }
            ],
            correctAnswer: 'A'
        },
        {
            id: 'q8',
            question: 'Which of the following best describes the insertion sort algorithm?',
            options: [
                { value: 'A', text: 'It divides the array into sorted and unsorted parts and iteratively inserts elements from the unsorted part into the sorted part' },
                { value: 'B', text: 'It uses a pivot to partition the array and sort subarrays' },
                { value: 'C', text: 'It merges smaller sorted arrays into larger ones' },
                { value: 'D', text: 'It builds a heap and performs heapification' }
            ],
            correctAnswer: 'A'
        },
        {
            id: 'q9',
            question: 'What type of input does insertion sort handle best?',
            options: [
                { value: 'A', text: 'Large datasets' },
                { value: 'B', text: 'Randomly ordered data' },
                { value: 'C', text: 'Almost sorted data' },
                { value: 'D', text: 'Data with many duplicates' }
            ],
            correctAnswer: 'C'
        },
        {
            id: 'q10',
            question: 'Which of the following statements about insertion sort is false?',
            options: [
                { value: 'A', text: 'It is adaptive and efficient for nearly sorted arrays' },
                { value: 'B', text: 'It is an in-place algorithm' },
                { value: 'C', text: 'It works well for large datasets' },
                { value: 'D', text: 'It maintains the relative order of equal elements' }
            ],
            correctAnswer: 'C'
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
            console.log('User Responses:', responses);
            setSubmitted(true);
            // Handle further form submission here, like sending data to a server
        } else {
            setErrors(validationErrors);
        }
    };

    if (submitted) {
        return <div>Thank you for completing the posttest on insertion sort!</div>;
    }

    return (
        <div className="content-box">
            <h2>Posttest on Insertion Sort</h2>
            <p>Answer the following questions to assess your understanding of the insertion sort algorithm.</p>
            <form className="posttest-form" onSubmit={handleSubmit}>
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

                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
};




export default InsertionPosttest;
