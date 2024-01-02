import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Nikki Benitez 

      <div className="text-center p-3">
        <a href="https://www.linkedin.com/in/nikkivbenitez/" className="me-4">
          LinkedIn
        </a>
        <a href="https://github.com/yourprofile" className="me-4">
          GitHub
        </a>
        <a href="https://twitter.com/yourprofile" className="me-4">
          Twitter
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
