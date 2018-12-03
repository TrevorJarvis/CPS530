import React, { Component } from "react";
import Profile from '../creditsComponent/profile';

import ms from '../../ms.png';
import tj from '../../tj.png';
import kd from '../../kd.png';
import pt from '../../pt.png';

class Credits extends Component {
  render() {
    return (
      <div className="Credits">
        <h1>Credits</h1>
        <div className="container">
          <div className="row mb-3">
            <div className="col" align="center">
              <Profile name="Matthew Salvati" desc="Researched and implemented frontend with ReactJS. Wrote the tutorial for the demo page." picUrl={ms}/>
            </div>
            <div className="col" align="center">
              <Profile name="Trevor Jarvis" desc="Researched and implemented frontend with ReactJS. Wrote the tutorial for the demo page." picUrl={tj}/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col" align="center">
              <Profile name="Kevin Duong" desc="Researched on the popularity, strengths, weaknesses and relevant information on ExpressJS framework." picUrl={kd}/>
            </div>
            <div className="col" align="center">
              <Profile name="Phuoc Tran" desc="Wrote the tutorial covering the installation of ExpressJS on Raspberry Pi. Implemented the demo page." picUrl={pt}/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Credits;
