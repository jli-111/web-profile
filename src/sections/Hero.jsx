import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <i /> THINK FURTHER. MAKE CHANGE.
        </div>
        <h1>
          Make your brand
          <br />
          <span className="under">impossible</span> to ignore.
        </h1>
        <p>
          We bring strategy, design, and digital experience together
          <br />
          to turn what makes you different into lasting impact.
        </p>
        <div className="actions">
          <a className="button dark" href="#contact">
            Start a conversation <span>↗</span>
          </a>
          <a className="text-link" href="#service">
            Explore our service <span>↓</span>
          </a>
        </div>
        <div className="hero-bottom">
          <span>STRATEGY. DESIGN. GROWTH.</span>
          <span>MOVE FORWARD WITH INTENTION ↗</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Abstract orbital artwork representing brand growth">
        <div className="art-grid" />
        <div className="orbit one" />
        <div className="orbit two" />
        <div className="orbit three" />
        <div className="sphere" />
        <span className="art-label">A NEW PERSPECTIVE.</span>
        <span className="art-plus">＋</span>
        <div className="art-card">
          <span>
            From one idea
            <br />
            to what comes next
          </span>
          <b>↗</b>
        </div>
        <span className="art-caption">BUILT TO MOVE YOU FORWARD</span>
      </div>
    </section>
  );
}
