import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import tree from "../../Tree.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      picUrl: props.picUrl ? props.picUrl : tree,
      desc: props.desc
    };
  }

  render() {
    return (
      <header>
        <nav>
          <img className="logo" src={this.state.picUrl} alt={this.state.name} />
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
              <NavLink to="/credits" exact activeClassName="active">
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
