import '../CSS/contact.css';
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError(''); // Clear the email error if email is valid

    // Handle form submission logic here

    // Clear form fields if submission is successful
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Reach out</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        {emailError && <p style={{ color: 'red', marginBottom: '20px' }}>{emailError}</p>}
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
