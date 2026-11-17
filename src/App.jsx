import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { brand } from './data/content';
import Hero from './sections/Hero';
import BrandStrip from './sections/BrandStrip';
import About from './sections/About';
import Services from './sections/Services';
import Approach from './sections/Approach';
import Contact from './sections/Contact';
// Page order lives here; each section is maintained separately.
export default function App() {
  return (
    <>
      <Header />
      <div className="header-spacer" aria-hidden="true" />
      <div className="demo">{brand.demoNotice}</div>
      <main>
        <Hero />
        <BrandStrip />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
