// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <div> 
      <h3> Nikki Benitez</h3>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="https://www.linkedin.com/in/nikkivbenitez/" target="_blank" rel="noopener noreferrer" >Linkedin</a></li>
        <li><a href="https://github.com/nikkivbenz" target="_blank" rel="noopener noreferrer" >Github</a></li>

      </ul>
    </div> 
  );
}

export default NavigationBar;