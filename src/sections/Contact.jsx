import React from 'react';
import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-copy">
        <div className="section-label">LET’S MAKE WHAT’S NEXT.</div>
        <h2>
          你的下一步，
          <br />
          我们一起。
        </h2>
        <p>
          一个新想法，一次新出发。
          <br />
          告诉我们你的目标，让对话成为改变的开始。
        </p>
        <span className="contact-star" aria-hidden="true">
          ✳
        </span>
      </div>
      <ContactForm />
    </section>
  );
}
