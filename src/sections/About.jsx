import React from 'react';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section-label">01 / ABOUT</div>
      <div>
        <h2>
          More than being seen.
          <br />
          <span>Be understood. Be chosen.</span>
        </h2>
        <div className="about-bottom">
          <p>
            Every brand has something distinctive worth discovering.
            <br />
            We start by understanding your business, then use clear strategy and thoughtful design to make your value easier to see and connect with.
          </p>
          <a className="round-link" href="#contact" aria-label="Contact us">
            ↗
          </a>
        </div>
      </div>
    </section>
  );
}
