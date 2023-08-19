import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import Hotels from "./pages/Hotels/Hotels";
import Hotel from "./pages/Hotel/Hotel";

function App() {
  return (
    
    <div className='App'>
      <Router>
      <Routes>
        <Route path ="/" element = {<Home />}></Route>
        <Route path ="/Hotels" element = {<Hotels />}></Route>
        <Route path ="/Hotel/id" element = {<Hotel />}></Route>
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
