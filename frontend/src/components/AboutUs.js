// src/components/About.js
import React from 'react';

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Us</h1>
            <p style={styles.description}>
                We are a group of enthusiastic students from Ramedobaba College, specializing in Artificial Intelligence and Machine Learning (AIML). Our mission is to revolutionize education through our virtual lab.
            </p>
            <p style={styles.description}>
                At our core, we believe in making learning interactive and engaging. In the near future, we aim to implement more quizzes and questions to enhance the educational experience for students everywhere.
            </p>
            <h2 style={styles.subtitle}>Our Team</h2>
            <ul style={styles.teamList}>
                
                <li style={styles.teamMember}>Prabhat Kale - kaleprabhat24@gmail.com || Git username - kaleprabhat24</li>
                <li style={styles.teamMember}>Aryan Jaiswal</li>
                {/* Add more team members as needed */}
            </ul>
            <p style={styles.mission}>
                Together, we strive to innovate and create a platform that not only educates but inspires the next generation of learners!
            </p>
        </div>
    );
};

// Styles for the About component
const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center',
        color: '#333',
    },
    description: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
        margin: '10px 0',
    },
    subtitle: {
        color: '#007BFF',
        marginTop: '20px',
    },
    teamList: {
        listStyleType: 'none',
        padding: '0',
    },
    teamMember: {
        fontSize: '16px',
        color: '#333',
        borderBottom: '1px solid #ddd',
        padding: '8px 0',
    },
    mission: {
        fontSize: '16px',
        color: '#333',
        fontStyle: 'italic',
        marginTop: '20px',
    },
};

export default AboutUs;
