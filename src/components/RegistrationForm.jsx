import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxJUKVtxNfFI910A2AaRHasJZx7Mnb53vEdT8w7QSIjnGVrKUijiSc-7j3-WzroVOdEDw/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        branch: '',
      });

    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to submit form. Please try again.'
      });
    }
  };

  if (status.submitted) {
    return (
      <div className="registration-form">
        <div className="success-message">
          <h2>Registration Successful!</h2>
          <p>Thank you for registering for the AUTOMAX Workshop.</p>
          <p>We will contact you soon with further details.</p>
          <button 
            className="submit-btn"
            onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
          >
            Register Another Person
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      {status.error && <div className="error-message">{status.error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year of Study</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={status.submitting}
        >
          {status.submitting ? 'Submitting...' : 'Register Now'}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm; 