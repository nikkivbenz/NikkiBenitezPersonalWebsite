import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">

      <div className="text-center p-3" >
        © {new Date().getFullYear()} Nikki Benitez 
        <br/> 
        less is more
      </div>
    </footer>
  );
};

export default Footer;
