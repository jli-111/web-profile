import React, { useState } from 'react';
import { services } from '../data/content';
export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedService = services[activeIndex];
  return (
    <section id="services" className="services section">
      <div className="section-head">
        <div>
          <div className="section-label">02 / 我们的服务</div>
          <h2>从想法到影响力。</h2>
        </div>
        <p>
          每一项能力，服务于同一个目标：
          <br />
          让你的品牌，向前一步。
        </p>
      </div>
      <div className="service-layout">
        <div className="tabs" role="tablist" aria-label="服务类别">
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
