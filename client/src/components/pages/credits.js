import React, { Component } from "react";
import Profile from '../creditsComponent/profile';

class Credits extends Component {
  render() {
    return (
      <div className="Credits">
        <h1>Credits</h1>
        <div className="container">
          <div className="row mb-3">
            <div className="col" align="center">
              <Profile name="Matthew Salvati" desc="Researched and implemented frontend with ReactJS."/>
            </div>
            <div className="col" align="center">
              <Profile name="Trevor Jarvis" desc="Researched and implemented frontend with ReactJS."/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col" align="center">
              <Profile name="Kevin Duong" desc="Researched on the popularity, strengths, weaknesses and relevant information on ExpressJS framework."/>
            </div>
            <div className="col" align="center">
              <Profile name="Phuoc Tran" desc="Implemented the backend with ExpressJS."/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Credits;
