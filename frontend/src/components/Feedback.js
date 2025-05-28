import React, { useState } from 'react';
import './Feedback.css';

function FeedbackForm() {
  // State management for form fields
  const [formData, setFormData] = useState({
    name: '',
    institute: '',
    email: '',
    role: 'select',
    experimentsPerformed: '',
    feedback: {
      simulationFeel: '',
      materialHelpfulness: '',
      existingResults: '',
      expectations: '',
      clearProcedure: '',
      contentOrganization: '',
      resultAccuracy: '',
      relevance: '',
      quickSection: '',
      preferVirtualLabs: '',
      usefulTips: ''
    },
    difficulties: '',
    interestingThings: '',
    suggestions: ''
  });

  // Handling input change
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData({
        ...formData,
        feedback: {
          ...formData.feedback,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    try {
      const response = await fetch('http://localhost:5000/feedback', {  // Change this to your Flask server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert('Feedback submitted successfully!');
        handleReset();  // Reset the form after successful submission
      } else {
        throw new Error('Error submitting feedback');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  // Handling form reset
  const handleReset = () => {
    setFormData({
      name: '',
      institute: '',
      email: '',
      role: 'select',
      experimentsPerformed: '',
      feedback: {
        simulationFeel: '',
        materialHelpfulness: '',
        existingResults: '',
        expectations: '',
        clearProcedure: '',
        contentOrganization: '',
        resultAccuracy: '',
        relevance: '',
        quickSection: '',
        preferVirtualLabs: '',
        usefulTips: ''
      },
      difficulties: '',
      interestingThings: '',
      suggestions: ''
    });
  };

  return (
    <div className="container">
      <h1>Welcome to Virtual Labs Feedback Page</h1><br />
      
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />

        <label>Select Name of the Institute</label>
        <select name="institute" value={formData.institute} onChange={handleChange}>
          <option value="">--Select Institute--</option>
          <option value="Shri Ramdeobaba University">Shri Ramdeobaba University</option>
        </select><br />

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Faculty">Faculty</option>
          <option value="Student">Student</option>
        </select><br />

        <label>No. of Experiments Performed</label>
        <input
          type="text"
          name="experimentsPerformed"
          value={formData.experimentsPerformed}
          onChange={handleChange}
          required
        /><br />

        <h3>Questionnaire:</h3>

        <div className="questionnaire">
          <label>Feel of simulated labs over actual lab environment simulated</label>
          <div className="radio-group">
            <label><input type="radio" name="simulationFeel" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="simulationFeel" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="simulationFeel" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="simulationFeel" value="Poor" onChange={handleChange} /> Poor</label>
          </div><br />

          <label>Manual provided was helpful</label>
          <div className="radio-group">
            <label><input type="radio" name="materialHelpfulness" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="materialHelpfulness" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="materialHelpfulness" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="materialHelpfulness" value="Poor" onChange={handleChange} /> Poor</label>
          </div><br />

          <label>Getting results after every experiment.</label>
          <div className="radio-group">
            <label><input type="radio" name="existingResults" value="Excellent" onChange={handleChange} /> Excellent</label>
            <label><input type="radio" name="existingResults" value="Good" onChange={handleChange} /> Good</label>
            <label><input type="radio" name="existingResults" value="Fair" onChange={handleChange} /> Fair</label>
            <label><input type="radio" name="existingResults" value="Poor" onChange={handleChange} /> Poor</label>
          </div><br />

          <label>Simulation meets the expectations.</label>
          <div className="radio-group">
            <label><input type="radio" name="expectations" value="Yes" onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="expectations" value="No" onChange={handleChange} /> No</label>
          </div><br />
        </div><br />

        <label>Problems/Difficulties faced while performing the experiments</label>
        <textarea
          name="difficulties"
          value={formData.difficulties}
          onChange={handleChange}
        ></textarea><br />

        <label>Interesting things about the experiments</label>
        <textarea
          name="interestingThings"
          value={formData.interestingThings}
          onChange={handleChange}
        ></textarea><br />

        <label>Suggestions (if any)</label>
        <textarea
          name="suggestions"
          value={formData.suggestions}
          onChange={handleChange}
        ></textarea><br />

        <div className="submit-group">
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset Form" onClick={handleReset} />
        </div><br />
      </form>
    </div>
  );
}

export default FeedbackForm;
