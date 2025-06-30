import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
// @ts-ignore
import Contact from './components/Contact';
// @ts-ignore
import Navbar from './components/Navbar.jsx';
// @ts-ignore
import Hero from './components/Hero.jsx';
// @ts-ignore
import ProjectsSection from './components/Projects.jsx';
// @ts-ignore
import AboutComponent from './components/About.jsx';
// @ts-ignore
import TechStack from './components/TechStack.jsx';
// @ts-ignore
import Footer from './components/Footer.jsx';

const heroText = 'Abhinay Portfolio';
const subtitle = 'Futuristic Developer & Designer';

function TypingEffect({ text }: { text: string }) {
  const [displayed, setDisplayed] = React.useState('');
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className="text-accent font-futuristic text-4xl md:text-6xl tracking-widest">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function App() {
  return (
    <>
      
      <Navbar />
      <main>
        <Hero />
        <AboutComponent />
        <ProjectsSection />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}