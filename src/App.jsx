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
// 这里负责页面顺序；具体区块分别在 sections 中维护。
export default function App() {
  return (
    <>
      <div className="demo">{brand.demoNotice}</div>
      <Header />
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
