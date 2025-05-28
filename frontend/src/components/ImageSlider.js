import React from 'react';
import './ImageSlider.css'; // Import CSS file for styling

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    componentDidMount() {
        // Set interval for automatic slide transition
        this.interval = setInterval(this.nextSlide, 3000); // Change slide every 5 seconds
    }

    componentWillUnmount() {
        // Clear interval on component unmount
        clearInterval(this.interval);
    }

    // Method to go to the next slide
    nextSlide = () => {
        const { currentIndex } = this.state;
        const { images } = this.props; // Get images from props
        const newIndex = (currentIndex + 1) % images.length; // Loop back to first slide
        this.setState({ currentIndex: newIndex });
    };

    render() {
        const { images } = this.props; // Get images from props
        const { currentIndex } = this.state;

        return (
            <div className="slider">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
        );
    }
}

export default ImageSlider;
