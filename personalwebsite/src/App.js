import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
import { Home, NavigationBar, Projects, Footer } from "./pages";
import { Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App" > 
      <Row>
        <Col md={2} id="navb" className="sidebar border-end border-dark">
          <NavigationBar /> 
        </Col>
        <Col md={10} id="content">
          <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes> 
        </Col>
      </Row>
      <Footer /> 
    </div>
  );
}

export default App;
