import React, { useState } from 'react';
import { services } from '../data/content';
export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedService = services[activeIndex];
  return (
    <section id="service" className="services section">
      <div className="section-head">
        <div>
          <div className="section-label">02 / SERVICE</div>
          <h2>From idea to impact.</h2>
        </div>
        <p>
          Every capability serves one purpose:
          <br />
          moving your brand forward.
        </p>
      </div>
      <div className="service-layout">
        <div className="tabs" role="tablist" aria-label="Service categories">
          {services.map((service, index) => (
            <button
              id={'tab-' + index}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="service-panel"
              key={service.num}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? 'active' : ''}
            >
              <small>{service.num}</small>
              <span>
                {service.title}
                <em>{service.en}</em>
              </span>
              <b>↗</b>
            </button>
          ))}
        </div>
        <div
          className="service-panel"
          id="service-panel"
          role="tabpanel"
          aria-labelledby={'tab-' + activeIndex}
        >
          <div className={'service-symbol symbol-' + activeIndex} aria-hidden="true">
            {['✳', '◈', '↗'][activeIndex]}
          </div>
          <div className="service-content">
            <small>{selectedService.en}</small>
            <h3>{selectedService.lead}</h3>
            <p>{selectedService.text}</p>
            <div className="tags">
              {selectedService.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
