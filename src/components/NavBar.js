import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import ExampleLearn from '../views/examplelearn';
import ExampleChallenge from '../views/examplechallenge';
import IndexPage from '../views';

function NavBar() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ExampleLearn">Learn Example</Link>
          </li>
          <li>
            <Link to="/ExampleChallenge">Challenge Example</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/ExampleLearn" element={<ExampleLearn />} />
          <Route path="/ExampleChallenge" element={<ExampleChallenge />} />
        </Routes>

      </div>
    </Router>

  );
}

export default NavBar;
