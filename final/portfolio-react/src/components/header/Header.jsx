

import React, { useState, useEffect } from 'react';
import './Header.css';
import navMenu from '../helpers/json/menu.json';


const Header = ({ darkMode, toggleTheme, changePage }) => {
  const [cssClass, setCSSClass] = useState('header');
  useEffect(() => {
    setCSSClass(() => {
      const existingClass = 'header';
      const newClass = darkMode ? existingClass + ' dark' : existingClass + ' light';
      return newClass;
    });
  }, [darkMode]);

  const [showMenu, setShowMenu] = useState(false);

  const handleItemClick = (name) => {
    changePage(name);
    setShowMenu(false);
  };

  const list = Object.entries(navMenu).map(([id, name]) => (
    <li key={id}>
      <a href="#" onClick={() => handleItemClick(name)} className="underline-link">
        {name}
      </a>
    </li>
  ));

  return (
    <>
      {/* <SkipLink darkMode={darkMode}/> */}
      <header id="header" className={cssClass}>
        <a href="/">
          <h4 className="logo-text">VK</h4>
        </a>
        <a href="#content" className="skip-to-main-content-link">Skip to main content</a>
        <nav className="menu-bar">
          <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
            <i className="fa-solid fa-bars"></i> Menu
          </button>
          <ul className={`menu-list ${showMenu ? '' : 'menu-list__hidden'}`}>
            {list}
          </ul>
        </nav>
        <button className='toggle' onClick={toggleTheme}>Toggle Dark Mode</button>
      </header>
    </>

  );
};

export default Header;
