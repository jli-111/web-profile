import React from 'react';
import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-copy">
        <div className="section-label">LET’S MAKE WHAT’S NEXT.</div>
        <h2>
          What's next
          <br />
          starts here.
        </h2>
        <p>
          A new idea. A fresh start.
          <br />
          Tell us what you're working toward. Let's make it happen.
        </p>
        <span className="contact-star" aria-hidden="true">
          ✳
        </span>
      </div>
      <ContactForm />
    </section>
  );
}
