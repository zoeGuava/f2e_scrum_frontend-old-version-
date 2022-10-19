import React from 'react';
import {
  Link,
} from 'react-router-dom';

function NavBar() {
  return (
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

  );
}

export default NavBar;
