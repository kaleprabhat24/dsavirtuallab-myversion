import React, { useState, useEffect } from 'react';
import './Hashing.css'; // Import the shared CSS file for hashing styling

const HashingPosttest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]);

    // Define a pool of posttest questions for hashing, including double hashing
    const postTestQuestionPool = [
        {
            id: 'q1',
            question: 'Which of the following statements is TRUE about double hashing?',
            options: [
                { value: 'A', text: 'It requires two different hash tables' },
                { value: 'B', text: 'It uses two different hash functions to reduce collisions' },
                { value: 'C', text: 'It is slower than linear probing' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Double hashing uses two different hash functions to reduce the chances of clustering and collisions.",
                incorrect: "A) Double hashing does not require two hash tables; it works within the same hash table using two functions."
            }
        },
        {
            id: 'q2',
            question: 'What is the expected time complexity of searching for an element in a hash table using double hashing?',
            options: [
                { value: 'A', text: 'O(1)' },
                { value: 'B', text: 'O(n)' },
                { value: 'C', text: 'O(log n)' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) The average time complexity for searching in a hash table with double hashing is O(1).",
                incorrect: "B) Searching in a hash table typically has O(1) average time complexity, not O(n)."
            }
        },
        {
            id: 'q3',
            question: 'Which of the following is NOT a method to handle collisions in hashing?',
            options: [
                { value: 'A', text: 'Separate chaining' },
                { value: 'B', text: 'Linear probing' },
                { value: 'C', text: 'Binary search' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Binary search is not used for handling collisions in hashing. Separate chaining and linear probing are common methods.",
                incorrect: "A) Separate chaining is a valid method for handling collisions."
            }
        },
        {
            id: 'q4',
            question: 'Why is a good hash function critical for the performance of a hash table?',
            options: [
                { value: 'A', text: 'It reduces memory usage' },
                { value: 'B', text: 'It reduces collisions and ensures even distribution' },
                { value: 'C', text: 'It increases the load factor' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A good hash function reduces collisions and ensures that the data is evenly distributed across the table.",
                incorrect: "A) The primary goal of a good hash function is not to reduce memory usage, but to improve performance through better distribution."
            }
        },
        {
            id: 'q5',
            question: 'Which of the following is true about the load factor in a hash table?',
            options: [
                { value: 'A', text: 'It is the ratio of used slots to total slots' },
                { value: 'B', text: 'It should always be above 1 for better performance' },
                { value: 'C', text: 'It is the ratio of empty slots to total slots' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) The load factor is the ratio of the number of used slots (occupied slots) to the total slots in the hash table.",
                incorrect: "B) A load factor should ideally be below 1 to avoid excessive collisions and maintain good performance."
            }
        },
        {
            id: 'q6',
            question: 'When using double hashing, what should the second hash function ensure?',
            options: [
                { value: 'A', text: 'It produces only even numbers' },
                { value: 'B', text: 'It never returns zero' },
                { value: 'C', text: 'It uses the same value as the first hash function' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) In double hashing, the second hash function should never return zero to ensure that the probe sequence moves forward.",
                incorrect: "A) The second hash function should not necessarily produce only even numbers, but should avoid returning zero."
            }
        },
        {
            id: 'q7',
            question: 'Which type of collision resolution strategy can cause clustering?',
            options: [
                { value: 'A', text: 'Double hashing' },
                { value: 'B', text: 'Quadratic probing' },
                { value: 'C', text: 'Linear probing' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) Linear probing can lead to primary clustering, where consecutive slots are filled, increasing the chance of collisions.",
                incorrect: "A) Double hashing reduces the likelihood of clustering by using a second hash function."
            }
        },
        {
            id: 'q8',
            question: 'Which collision resolution technique is most space efficient?',
            options: [
                { value: 'A', text: 'Separate chaining' },
                { value: 'B', text: 'Open addressing' },
                { value: 'C', text: 'Rehashing' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) Open addressing is more space efficient compared to separate chaining, which uses additional memory for linked lists.",
                incorrect: "A) Separate chaining requires extra space for linked lists, making it less space efficient."
            }
        },
        {
            id: 'q9',
            question: 'In a hash table, when is rehashing necessary?',
            options: [
                { value: 'A', text: 'When the load factor exceeds a threshold' },
                { value: 'B', text: 'When there are no collisions' },
                { value: 'C', text: 'When the hash function fails' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Rehashing is necessary when the load factor exceeds a certain threshold, usually around 0.75, to maintain performance.",
                incorrect: "B) Rehashing is triggered by an increase in the load factor, not the absence of collisions."
            }
        },
        {
            id: 'q10',
            question: 'How can the performance of double hashing be affected by the choice of the second hash function?',
            options: [
                { value: 'A', text: 'The second hash function should be a constant value' },
                { value: 'B', text: 'The second hash function should ensure independence from the first hash function' },
                { value: 'C', text: 'The second hash function should always return prime numbers' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) The second hash function should be independent of the first hash function to provide a better spread and reduce clustering.",
                incorrect: "A) A constant value for the second hash function would not help in resolving collisions efficiently."
            }
        }
    ];

    // Function to shuffle and pick a random subset of questions for the posttest
    const generateRandomQuestions = (numQuestions) => {
        const shuffled = postTestQuestionPool.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    };

    // Generate random posttest questions when component mounts
    useEffect(() => {
        const randomQuestions = generateRandomQuestions(3); // Pick 3 random questions for posttest
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
            <h2>Posttest on Hashing Concepts</h2>
            <p>Let's evaluate your understanding of hashing and double hashing concepts:</p>
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

export default HashingPosttest;
