import React, { useState } from 'react';

const InsertionFeedback = () => {
    const [feedback, setFeedback] = useState({
        experience: '',
        understanding: '',
        resources: [],
        satisfaction: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFeedback(prevState => ({
                ...prevState,
                resources: checked
                    ? [...prevState.resources, value]
                    : prevState.resources.filter(item => item !== value)
            }));
        } else {
            setFeedback(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/insertion_sort_feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(feedback)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setFeedback({
                experience: '',
                understanding: '',
                resources: [],
                satisfaction: '',
                comments: ''
            });

            alert('Feedback submitted successfully!');
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Insertion Sort Feedback</h2>
            <form onSubmit={handleSubmit}>
                {/* Experience Section */}
                <h3>1. Experiment Experience</h3>
                <label>
                    How was your experience with the experiment?
                    <textarea
                        name="experience"
                        value={feedback.experience}
                        onChange={handleChange}
                        placeholder="Share your experience here..."
                        required
                        style={styles.textarea}
                    />
                </label>

                {/* Understanding Section */}
                <h3>2. Concept Understanding</h3>
                <label>
                    Did you understand the core concepts of Insertion Sort?
                    <textarea
                        name="understanding"
                        value={feedback.understanding}
                        onChange={handleChange}
                        placeholder="Share your understanding or difficulties here..."
                        required
                        style={styles.textarea}
                    />
                </label>

                {/* Resources Section */}
                <h3>3. Additional Resources</h3>
                <p>Would you like more resources on the topic?</p>
                <label>
                    <input
                        type="checkbox"
                        name="resources"
                        value="videos"
                        onChange={handleChange}
                    />
                    Videos
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="resources"
                        value="quizzes"
                        onChange={handleChange}
                    />
                    Quizzes
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="resources"
                        value="reading_material"
                        onChange={handleChange}
                    />
                    Additional Reading Material
                </label>

                {/* Satisfaction Section */}
                <h3>4. Overall Satisfaction</h3>
                <p>How satisfied are you with the experiment? (1 being the least, 5 being the most)</p>
                {[1, 2, 3, 4, 5].map((value) => (
                    <label key={value}>
                        <input
                            type="radio"
                            name="satisfaction"
                            value={value}
                            onChange={handleChange}
                        /> {value}
                    </label>
                ))}

                {/* Additional Comments Section */}
                <h3>5. Additional Comments</h3>
                <label>
                    <textarea
                        name="comments"
                        value={feedback.comments}
                        onChange={handleChange}
                        placeholder="Any suggestions for improvement?"
                        style={styles.textarea}
                    />
                </label>

                <br /><br />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

// Styles for the container and text areas
const styles = {
    container: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    textarea: {
        width: '100%',
        height: '100px',
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        resize: 'none',
    }
};

export default InsertionFeedback;
