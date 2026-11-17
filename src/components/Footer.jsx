import React from 'react';
import Logo from './Logo';
export default function Footer() {
  return (
    <footer>
      <Logo />
      <span>Build a brand people understand, remember, and choose.</span>
      <a href="#top">Back to top ↑</a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} · Brand website concept</span>
        <span>THINK FORWARD. GROW TOGETHER.</span>
      </div>
    </footer>
  );
}
