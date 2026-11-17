import React from 'react';
import { processSteps } from '../data/content';
export default function Approach() {
  return (
    <section id="approach" className="process section">
      <div className="section-label">03 / OUR APPROACH</div>
      <div className="section-head">
        <h2>
          Great work starts
          <br />
          in the same direction.
        </h2>
        <p>
          Clear communication. An open process.
          <br />
          Thoughtful progress at every step.
        </p>
      </div>
      <div className="steps">
        {processSteps.map(({ title, description }, index) => (
          <article key={title}>
            <div className="step-num">
              0{index + 1}
              <span>↗</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
