import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a>
        <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS</a>
      </nav>
    </footer>
  );
}

export default Footer;