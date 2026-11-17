import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <i /> 思考更远，让改变发生
        </div>
        <h1>
          让好品牌，
          <br />
          被更多人<span className="under">看见。</span>
        </h1>
        <p>
          我们连接策略、设计与数字体验，
          <br />
          帮助有想法的企业，把独特价值变成品牌影响力。
        </p>
        <div className="actions">
          <a className="button dark" href="#contact">
            一起开启下一步 <span>↗</span>
          </a>
          <a className="text-link" href="#services">
            探索我们的服务 <span>↓</span>
          </a>
        </div>
        <div className="hero-bottom">
          <span>STRATEGY. DESIGN. GROWTH.</span>
          <span>向前，不止一步 ↗</span>
        </div>
      </div>
      <div className="hero-art" aria-label="象征品牌生长的抽象轨道设计">
        <div className="art-grid" />
        <div className="orbit one" />
        <div className="orbit two" />
        <div className="orbit three" />
        <div className="sphere" />
        <span className="art-label">A NEW PERSPECTIVE.</span>
        <span className="art-plus">＋</span>
        <div className="art-card">
          <span>
            从一个想法
            <br />
            到更多可能
          </span>
          <b>↗</b>
        </div>
        <span className="art-caption">BUILT TO MOVE YOU FORWARD — NOVA</span>
      </div>
    </section>
  );
}
