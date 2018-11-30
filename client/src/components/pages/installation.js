import React, { Component } from "react";

class Installation extends Component {

  render() {
    return (
      <div className="Installation m-3">
        <h1>Installation Tutorial</h1>
        <div className="expressjs">
          <h2>ExpressJS Tutorial</h2>
          <hr />
          <h3>Prerequisite</h3>
          <ul>
            <li>NodeJS and npm installed on the system.</li>
          </ul>
          <h3>Procedures</h3>
          <ol>
            <li>Open the terminal on your system.</li>
            <li>Create your project directory by using <code>mkdir ${'{'}PROJECT_NAME}</code> - replace <code>${'{'}PROJECT_NAME}</code> with your project name.</li>
            <li>Navigate to the created directory by using <code>cd ${'{'}PROJECT_NAME}</code>.</li>
            <li>Create <code>package.json</code> by using <code>npm init</code>code> and follow the onscreen instruction.</li>
            <li>Add <code>expressJS</code> to the project by using <code>npm i --save express</code>.</li>
            <li>Create a file <code>index.js</code> in the root of the directory. This <code>index.js</code> is the main entry point of your ExpressJS app. This is the minimal code to setup the app.
              <br/>
              <textarea class="form-control">{`// File index.js
                const express = require("express");
                const path = require('path');
                const app = express();
                const port = 5000;
                // To serve static routes
                // The app will serve files from static folder at the url /static
                app.use('/static', express.static(path.join(__dirname, 'static')));
                // Main app routing
                // The app will serve index.html at the url /
                app.get('/', (req, res, next) => {
                res.sendFile(path.join(__dirname, 'index.html'));
              });
              // Run the app
                app.listen(port, () => {
                console.log(\`The app is listening on port {port}\`);
              });`}
              </textarea>
            </li>
            <li>Design your app in <code>index.html</code>. You can use any front-end framework to design it such as ReactJS.</li>
            <li>Run your app using <code>npm start</code>. The app can now be access on <code>http://localhost:5000</code>.</li>
          </ol>
          <h3>Port Forwarding</h3>
          <ul>
            <li>(Recommended) Set the Raspberry Pi to a static IP in your router.</li>
            <li>Configure the router to port forward the IP address of the Raspberry Pi along with the port of the ExpressJS app.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Installation;
