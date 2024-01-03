import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: '#CCCCFF' }}>
        © {new Date().getFullYear()} Nikki Benitez 

      <div className="text-center p-3">
        <a href="https://www.linkedin.com/in/nikkivbenitez/" className="me-4">
          LinkedIn
        </a>
        <a href="https://github.com/nikkivbenz" className="me-4">
          GitHub
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
