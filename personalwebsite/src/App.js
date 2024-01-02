import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
import { Home, NavigationBar, Footer } from "./pages";

function App() {
  return (
    <div className="App"> 
      <NavigationBar /> 
      <Routes> 
        <Route path="/" element={<Home />} />
        

      </Routes> 
      <Footer /> 
    </div>
  );
}

export default App;
