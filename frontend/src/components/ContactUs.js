// ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      
      {/* Contact Information */}
      <div className="contact-info">
        <p><strong> Virtual Lab</strong></p>
        <p>  Prabhat Kale || Email - kaleprabhat24@gmail.com</p>
        <p>  Ramdeobaba University Nagpur</p>
        <p> Ramdeo Tekdi, Katol Road, Nagpur - 440 013 (M.S.) (India)</p>
      </div>

      <div 
  className="map-container" 
  style={{
    display: 'flex',                // Use flexbox to center the content
    justifyContent: 'center',       // Center horizontally
    alignItems: 'center',           // Center vertically
    height: '100vh',                // Full height of the viewport
    margin: '0',                    // Remove default margin
    padding: '20px'                 // Optional: padding around the container
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3989272793765!2d79.05856167471835!3d21.176305882695576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1006cc78ce9%3A0x37afa03de75a8708!2sRamdeobaba%20University%20(RBU)!5e0!3m2!1sen!2sin!4v1727721294221!5m2!1sen!2sin"
    width="800"                     // Fixed width for the iframe
    height="450"                    // Fixed height
    style={{
      border: '2px solid #007BFF',  // Add a blue border
      borderRadius: '8px',           // Optional: rounded corners
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' // Optional: add shadow
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
};

export default ContactUs;
