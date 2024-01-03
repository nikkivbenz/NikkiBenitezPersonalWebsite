import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
import { Home, NavigationBar, Footer } from "./pages";
import { Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App" > 
      <Row>
        <Col md={2} className="sidebar">
          <NavigationBar /> 
        </Col>
        <Col md={10}>
        <Routes> 
            <Route path="/" element={<Home />} />
          </Routes> 
        </Col>
      </Row>
      <Footer /> 
    </div>
  );
}

export default App;
