import React from 'react';
import ImageSlider from './ImageSlider'; // Import the image slider

const Home = () => {
    // Array of image URLs for the slider
    const images = [
        './images/1.png', // Replace with your actual image paths
        './images/2.png',
        './images/3.jpg',
        './images/4.jpg',
        './images/5.jpg',
        // Add more images as needed
    ];

    // Lab objectives
    const labObjectives = [
        "Understand fundamental data structures such as arrays, linked lists, stacks, and queues.",
        "Learn algorithms for searching and sorting data.",
        "Gain hands-on experience with algorithm design and implementation.",
        "Develop skills for analyzing the efficiency of algorithms.",
        "Apply learned concepts to solve real-world problems."
    ];

    return (
        <div className="home-container"> {/* Unique container for Home component */}
            {/* Header */}
            <header className="home-header">
                <h1>Welcome to Our Website</h1>
                <p>Your go-to platform for learning data structures and algorithms!</p>
            </header>
            <br />
            {/* Image Slider */}
            <ImageSlider images={images} /> {/* Pass images to the slider */}
            <br />
            {/* Intro Video Section */}
            <section className="video-section">
                <h2>Introductory Video</h2>
                <div className="video-container">
                    <div className="video-text">
                        <h3>About the Virtual Lab</h3>
                        <p>This virtual lab is developed by students of AIML at Ramdeobaba University, Nagpur. It focuses on data structures and algorithms, providing an interactive learning experience.</p>
                    </div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QUoqiQzhfWk"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="video-text">
                        <h3>Explore the Lab</h3>
                        <p>Join us in enhancing your understanding of essential algorithms and data structures through engaging tutorials and hands-on practice.</p>
                    </div>
                </div>
            </section>
            <br />
            {/* Lab Objectives Section */}
            <section className="lab-objectives">
                <h2>Lab Objectives</h2>
                <ul>
                    {labObjectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
            </section>
            <br />
            {/* Total Participants Section */}
            <section className="total-participants">
                <h2>Total Participants</h2>
                <p>We currently have over 150 participants actively engaged in the lab.</p>
            </section>
            <br />
            {/* Footer */}
            <footer className="home-footer">
                <p>Get in touch with us</p>
            </footer>
        </div>
    );
};

export default Home;
