// Content.js
import React from 'react';
import { useState, useEffect } from 'react';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

import './Content.css'

function Content({ darkMode, pageName }) {
  const [cssClass, setCSSClass] = useState('content');
  useEffect(() => {
    setCSSClass(() => {
      const existingClass = "content"
      const newClass = darkMode ? existingClass + ' dark' : existingClass + ' light';
      return newClass;
    });
  }, [darkMode]);

  return <div id="content" className={cssClass}>
    {(pageName === "Home") && <Home />}
    {(pageName === "About") && <About />}
    {(pageName === "Experience") && <Experience />}
    {(pageName === "Portfolio") && <Portfolio />}
    {(pageName === "Contact") && <Contact />}
  </div>;
}

export default Content;