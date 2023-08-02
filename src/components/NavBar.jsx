/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
      <div>
          <nav>
              <ul>
                  <li>
                      <NavLink to="/">Home</NavLink>
                  </li>

                  <li>
                      <NavLink to="/signup">SignUp</NavLink>
                  </li>
              </ul>
          </nav>
    </div>
  )
}

export default NavBar;