import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;