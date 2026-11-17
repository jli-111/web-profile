import React from 'react';
import Logo from './Logo';
import { brand } from '../data/content';
export default function Footer() {
  return (
    <footer>
      <Logo />
      <span>{brand.tagline}</span>
      <a href="#">回到顶部 ↑</a>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.name} · 品牌网站设计示例
        </span>
        <span>THINK FORWARD. GROW TOGETHER.</span>
      </div>
    </footer>
  );
}
