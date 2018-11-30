import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import Header from "./components/headerComponent/header";
import Homepage from "./components/pages/homePage";
import Tutorial from "./components/pages/tutorial";
import Installation from "./components/pages/installation";
import Conclusion from "./components/pages/conclusion";
import Credits from "./components/pages/credits";
import Demo from "./components/pages/demo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/Installation" component={Installation} />
          <Route exact path="/Tutorial" component={Tutorial} />
          <Route exact path="/Demo" component={Demo} />
          <Route exact path="/Conclusion" component={Conclusion} />
          <Route exact path="/Credits" component={Credits} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
