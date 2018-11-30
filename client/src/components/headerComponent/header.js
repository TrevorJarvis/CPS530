import React, { Component } from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" exact activeClassName="active">
                Installation
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorial" exact activeClassName="active">
                Tutorial
              </NavLink>
            </li>
            <li>
              <NavLink to="/demo" exact activeClassName="active">
                Demo
              </NavLink>
            </li>
            <li>
              <NavLink to="/conclusion" exact activeClassName="active">
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
