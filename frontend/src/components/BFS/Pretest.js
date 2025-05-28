// // src/components/linked-list/Pretest.js
// import React, { useState } from 'react';

// const BFSPretest = () => {
//     const [responses, setResponses] = useState({
//         q1: '',
//         q2: '',
//         q3: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setResponses({
//             ...responses,
//             [name]: value
//         });
//     };

//     const validate = () => {
//         let validationErrors = {};
//         if (!responses.q1) validationErrors.q1 = 'This question is required.';
//         if (!responses.q2) validationErrors.q2 = 'This question is required.';
//         if (!responses.q3) validationErrors.q3 = 'This question is required.';
//         return validationErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length === 0) {
//             console.log('User Responses:', responses);
//             setSubmitted(true);
//             // Handle further form submission here, like sending data to a server
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     if (submitted) {
//         return <div>Thank you for completing the pretest!</div>;
//     }

//     return (
//         <div>
//             <h2>Pretest</h2>
//             <p>Pretest questions to evaluate your understanding of linked lists before starting the experiment.</p>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>1. What is a linked list?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q1"
//                             value="A"
//                             checked={responses.q1 === 'A'}
//                             onChange={handleChange}
//                         /> A) A data structure consisting of nodes connected by pointers
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q1"
//                             value="B"
//                             checked={responses.q1 === 'B'}
//                             onChange={handleChange}
//                         /> B) A sequential collection of elements stored in contiguous memory locations
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q1"
//                             value="C"
//                             checked={responses.q1 === 'C'}
//                             onChange={handleChange}
//                         /> C) A type of algorithm used for sorting data
//                     </div>
//                     {errors.q1 && <div style={{ color: 'red' }}>{errors.q1}</div>}
//                 </div>
//                 <br />
//                 <div>
//                     <label>2. How do you traverse a linked list?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q2"
//                             value="A"
//                             checked={responses.q2 === 'A'}
//                             onChange={handleChange}
//                         /> A) By iterating through each node starting from the head node
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q2"
//                             value="B"
//                             checked={responses.q2 === 'B'}
//                             onChange={handleChange}
//                         /> B) By accessing elements using index values
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q2"
//                             value="C"
//                             checked={responses.q2 === 'C'}
//                             onChange={handleChange}
//                         /> C) By using a sorting algorithm
//                     </div>
//                     {errors.q2 && <div style={{ color: 'red' }}>{errors.q2}</div>}
//                 </div>
//                 <br />
//                 <div>
//                     <label>3. What are the advantages of using a linked list over an array?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q3"
//                             value="A"
//                             checked={responses.q3 === 'A'}
//                             onChange={handleChange}
//                         /> A) Dynamic size and ease of insertion/deletion
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q3"
//                             value="B"
//                             checked={responses.q3 === 'B'}
//                             onChange={handleChange}
//                         /> B) Fixed size and faster access time
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q3"
//                             value="C"
//                             checked={responses.q3 === 'C'}
//                             onChange={handleChange}
//                         /> C) Less memory usage
//                     </div>
//                     {errors.q3 && <div style={{ color: 'red' }}>{errors.q3}</div>}
//                 </div>
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default BFSPretest;



// import React, { useState } from 'react';
// import './BFS.css';
// const BFSPretest = () => {
//     const [responses, setResponses] = useState({
//         q1: '',
//         q2: '',
//         q3: '',
//         q4: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false);
//     const [result, setResult] = useState(null);

//     // Correct answers for validation
//     const correctAnswers = {
//         q1: 'a',
//         q2: 'b',
//         q3: 'b',
//         q4: 'c',
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setResponses({
//             ...responses,
//             [name]: value
//         });
//     };

//     const validate = () => {
//         let validationErrors = {};
//         if (!responses.q1) validationErrors.q1 = 'This question is required.';
//         if (!responses.q2) validationErrors.q2 = 'This question is required.';
//         if (!responses.q3) validationErrors.q3 = 'This question is required.';
//         if (!responses.q4) validationErrors.q4 = 'This question is required.';
//         return validationErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length === 0) {
//             setSubmitted(true);
//             checkAnswers();
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     const checkAnswers = () => {
//         let score = 0;
//         Object.keys(correctAnswers).forEach((key) => {
//             if (responses[key] === correctAnswers[key]) {
//                 score++;
//             }
//         });
//         setResult(score === Object.keys(correctAnswers).length ? 'All answers are correct!' : `You got ${score}/${Object.keys(correctAnswers).length} correct.`);
//     };

//     if (submitted) {
//         return <div>{result}</div>;
//     }

//     return (
//         <div className="content-box">
//             <h2>Pretest</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Question 1 */}
//                 <div>
//                     <label>1. Which of the following policies does a queue follow?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q1"
//                             value="a"
//                             checked={responses.q1 === 'a'}
//                             onChange={handleChange}
//                         /> a) FIFO - First In, First Out
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q1"
//                             value="b"
//                             checked={responses.q1 === 'b'}
//                             onChange={handleChange}
//                         /> b) LIFO - Last In, First Out
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q1"
//                             value="c"
//                             checked={responses.q1 === 'c'}
//                             onChange={handleChange}
//                         /> c) FILO - First In, Last Out
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q1"
//                             value="d"
//                             checked={responses.q1 === 'd'}
//                             onChange={handleChange}
//                         /> d) Random order
//                     </div>
//                     {errors.q1 && <div style={{ color: 'red' }}>{errors.q1}</div>}
//                 </div>
//                 <br />

//                 {/* Question 2 */}
//                 <div>
//                     <label>2. Which of the following describes a standard graph traversal algorithm?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q2"
//                             value="a"
//                             checked={responses.q2 === 'a'}
//                             onChange={handleChange}
//                         /> a) Visiting all the edges of the graph
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q2"
//                             value="b"
//                             checked={responses.q2 === 'b'}
//                             onChange={handleChange}
//                         /> b) Visiting all the vertices of the graph
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q2"
//                             value="c"
//                             checked={responses.q2 === 'c'}
//                             onChange={handleChange}
//                         /> c) Detecting all the cycles in the graph
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q2"
//                             value="d"
//                             checked={responses.q2 === 'd'}
//                             onChange={handleChange}
//                         /> d) None of the above
//                     </div>
//                     {errors.q2 && <div style={{ color: 'red' }}>{errors.q2}</div>}
//                 </div>
//                 <br />

//                 {/* Question 3 */}
//                 <div>
//                     <label>3. Consider the following undirected graph: Vertices, V = [1, 2, 3, 4, 5, 6] Edges, E = [[1, 2], [1, 3], [2, 4], [2, 5], [3, 5], [3, 6]]. Which of the following data structures is represented by the above graph?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q3"
//                             value="a"
//                             checked={responses.q3 === 'a'}
//                             onChange={handleChange}
//                         /> a) Tree
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q3"
//                             value="b"
//                             checked={responses.q3 === 'b'}
//                             onChange={handleChange}
//                         /> b) Cyclic graph
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q3"
//                             value="c"
//                             checked={responses.q3 === 'c'}
//                             onChange={handleChange}
//                         /> c) Disconnected Graph
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q3"
//                             value="d"
//                             checked={responses.q3 === 'd'}
//                             onChange={handleChange}
//                         /> d) Complete Graph
//                     </div>
//                     {errors.q3 && <div style={{ color: 'red' }}>{errors.q3}</div>}
//                 </div>
//                 <br />

//                 {/* Question 4 */}
//                 <div>
//                     <label>4. If we were to store this graph’s vertices in a queue in the order top to bottom and left to right with ‘a’ as the root, what index would vertex ‘e’ be stored at?</label>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q4"
//                             value="a"
//                             checked={responses.q4 === 'a'}
//                             onChange={handleChange}
//                         /> a) 2
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q4"
//                             value="b"
//                             checked={responses.q4 === 'b'}
//                             onChange={handleChange}
//                         /> b) 3
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q4"
//                             value="c"
//                             checked={responses.q4 === 'c'}
//                             onChange={handleChange}
//                         /> c) 4
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             name="q4"
//                             value="d"
//                             checked={responses.q4 === 'd'}
//                             onChange={handleChange}
//                         /> d) 5
//                     </div>
//                     {errors.q4 && <div style={{ color: 'red' }}>{errors.q4}</div>}
//                 </div>
//                 <br />

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default BFSPretest;
import React, { useState, useEffect } from 'react';
import './BFS.css'; // Import the shared CSS file for styling

const BFSPretest = () => {
    const [responses, setResponses] = useState({});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [questions, setQuestions] = useState([]); // Dynamically store questions

    // Define a pool of BFS pretest questions and answers
    const questionPool = [
        {
            id: 'q1',
            question: 'Which of the following policies does a queue follow?',
            options: [
                { value: 'A', text: 'FIFO - First In, First Out' },
                { value: 'B', text: 'LIFO - Last In, First Out' },
                { value: 'C', text: 'FILO - First In, Last Out' },
                { value: 'D', text: 'Random order' }
            ],
            correctAnswer: 'A',
            explanations: {
                correct: "A) Queue follows the FIFO principle, meaning the first element to enter is the first to exit.",
                incorrect: "Other options describe different or incorrect policies."
            }
        },
        {
            id: 'q2',
            question: 'Which of the following describes a standard graph traversal algorithm?',
            options: [
                { value: 'A', text: 'Visiting all the edges of the graph' },
                { value: 'B', text: 'Visiting all the vertices of the graph' },
                { value: 'C', text: 'Detecting all the cycles in the graph' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) A graph traversal algorithm like BFS or DFS focuses on visiting all the vertices of the graph.",
                incorrect: "Visiting all edges or detecting cycles are not the focus of BFS or DFS."
            }
        },
        {
            id: 'q3',
            question: 'Consider the following undirected graph: Vertices, V = [1, 2, 3, 4, 5, 6] Edges, E = [[1, 2], [1, 3], [2, 4], [2, 5], [3, 5], [3, 6]]. Which of the following data structures is represented by the above graph?',
            options: [
                { value: 'A', text: 'Tree' },
                { value: 'B', text: 'Cyclic graph' },
                { value: 'C', text: 'Disconnected Graph' },
                { value: 'D', text: 'Complete Graph' }
            ],
            correctAnswer: 'B',
            explanations: {
                correct: "B) This graph forms a cycle and therefore represents a cyclic graph.",
                incorrect: "Other types of graphs (like tree, disconnected, or complete) don't fit this structure."
            }
        },
        {
            id: 'q4',
            question: 'Which of the following graphs can BFS traversal be applied to?',
            options: [
                { value: 'A', text: 'Only directed graphs' },
                { value: 'B', text: 'Only undirected graphs' },
                { value: 'C', text: 'Both directed and undirected graphs' },
                { value: 'D', text: 'None of the above' }
            ],
            correctAnswer: 'C',
            explanations: {
                correct: "C) BFS can be applied to both directed and undirected graphs.",
                incorrect: "BFS is not restricted to a single type of graph structure."
            }
        }
    ];

    // Function to shuffle and pick random questions
    const generateRandomQuestions = (numQuestions) => {
        const shuffled = questionPool.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    };

    // Generate random questions on component mount
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
            <h2>BFS Pretest</h2>
            <p>Pretest questions to evaluate your understanding of BFS before starting the experiment.</p>
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

export default BFSPretest;
