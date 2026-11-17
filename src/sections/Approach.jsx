import React from 'react';
import { processSteps } from '../data/content';
export default function Approach() {
  return (
    <section id="approach" className="process section">
      <div className="section-label">03 / 合作方式</div>
      <div className="section-head">
        <h2>
          好的合作，
          <br />
          从同一个方向开始。
        </h2>
        <p>
          保持沟通，让过程透明。
          <br />
          把每一步，都走得更扎实。
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
