import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

function NavBar() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/learn">Learn Example</Link>
          </li>
          <li>
            <Link to="/challenge">Challenge Example</Link>
          </li>
        </ul>

      </div>
    </Router>

  );
}

export default NavBar;
