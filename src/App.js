import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ExampleLearn from './views/learn';
import ExampleChallenge from './views/challenge';
import Home from './views';
import './App.css';

function App() {
  return (

    <div className="App">

      <hr />
      <Router forceRefresh>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<ExampleLearn />} />
          <Route path="/challenge" element={<ExampleChallenge />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
