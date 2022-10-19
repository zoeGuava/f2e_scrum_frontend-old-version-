import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ExampleLearn from './views/learn';
import ExampleChallenge from './views/challenge';
import IndexPage from './views';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <hr />
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/learn" element={<ExampleLearn />} />
          <Route path="/challenge" element={<ExampleChallenge />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
