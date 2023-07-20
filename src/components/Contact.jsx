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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError(''); // Clear the email error if email is valid

    // Handle form submission logic here
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    const response = await fetch('https://formspree.io/f/xnqyaqak', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.status === 200) {
      alert('Form submitted succesfully! Christian will respond shortly');
      setEmail('');
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
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
    </div>
  );
};

export default ContactForm;
