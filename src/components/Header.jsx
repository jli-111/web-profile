import React, { useState } from 'react';
import Logo from './Logo';
import { navigation } from '../data/content';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="top">
      <Logo />
      <button
        className="mobile"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        {navigation.map(({ id, label }) => (
          <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
