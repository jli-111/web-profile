import React, { useState } from 'react';
import Logo from './Logo';
import { navigation } from '../data/content';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <Logo />
      <button
        className="mobile"
        aria-label="切换导航"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        {navigation.map(({ id, label }) => (
          <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          聊聊你的项目 ↗
        </a>
      </nav>
    </header>
  );
}
