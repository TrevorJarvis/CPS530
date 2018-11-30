import React, { Component } from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/Homepage" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Installation" exact activeClassName="active">
                Installation
              </NavLink>
            </li>
            <li>
              <NavLink to="/Tutorial" exact activeClassName="active">
                Tutorial
              </NavLink>
            </li>
            <li>
              <NavLink to="/Demo" exact activeClassName="active">
                Demo
              </NavLink>
            </li>
            <li>
              <NavLink to="/Conclusion" exact activeClassName="active">
                Conclusion
              </NavLink>
            </li>
            <li>
              <NavLink to="/Credits" exact activeClassName="active">
                Credits
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
