import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Talk to us</h3>
      <div className="form-row">
        <label>
          Full Name
          <input required name="name" autoComplete="name" placeholder="Your full name" />
        </label>
        <label>
          Company Name
          <input
            required
            name="company"
            autoComplete="organization"
            placeholder="Your company or team"
          />
        </label>
      </div>
      <label>
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="name@company.com"
        />
      </label>
      <label>
        Where do you want to start?
        <select name="service">
          <option>Brand Strategy & Positioning</option>
          <option>Corporate Website & Digital Experience</option>
          <option>Content & Growth Marketing</option>
          <option>I'd like to chat first</option>
        </select>
      </label>
      <label>
        Tell us about your project
        <textarea
          required
          name="message"
          rows="3"
          placeholder="Share a little about your goals, needs, or plans..."
        />
      </label>
      <button className="button dark" type="submit">
        Send inquiry <span>↗</span>
      </button>
      <p className="form-note" role="status">
        {submitted
          ? '✓ Form validated. This demo does not send or store your information.'
          : 'Demo form: your information will not be sent or stored.'}
      </p>
    </form>
  );
}
