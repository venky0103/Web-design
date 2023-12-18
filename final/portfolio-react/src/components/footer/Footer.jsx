// Content.js
import React from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faE, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.css'

const Footer = ({ darkMode }) => {

  const [cssClass, setCSSClass] = useState('footer');
  useEffect(() => {
    setCSSClass(() => {
      const existingClass = "footer"
      const newClass = darkMode ? existingClass + ' dark' : existingClass + ' light';
      return newClass;
    });
  }, [darkMode]);

  const socialLinks = [
    { "id": "1", "icon": faLinkedin, "url": "https://www.linkedin.com/in/venky0103/" },
    { "id": "2", "icon": faEnvelope, "url": "mailto:venkyvenkatesh0101@gmail.com" },
    { "id": "3", "icon": faGithub, "url": "https://github.com/venky0103" }
  ];

  return <>
    <footer id="footer" className={cssClass}>
      <ul className="footer-container">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} className='footer-icon' />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  </>;
}

export default Footer;