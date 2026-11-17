import React from 'react';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section-label">01 / 关于远见</div>
      <div>
        <h2>
          不止于被看见。
          <br />
          <span>更在于被理解、被选择。</span>
        </h2>
        <div className="about-bottom">
          <p>
            每一个品牌，都有值得被发现的独特之处。
            <br />
            我们从理解你的业务开始，用清晰的策略和有温度的设计，让复杂的价值变得简单，让品牌与人建立更深的连接。
          </p>
          <a className="round-link" href="#approach" aria-label="了解合作方式">
            ↗
          </a>
        </div>
      </div>
    </section>
  );
}
