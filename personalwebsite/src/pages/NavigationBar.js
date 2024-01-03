// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <div> 
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="https://www.linkedin.com/in/nikkivbenitez/">Linkedin</a></li>
        <li><a href="https://github.com/nikkivbenz">Github</a></li>

      </ul>
    </div> 
  );
}

export default NavigationBar;