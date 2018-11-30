import React, { Component } from "react";

class Conclusion extends Component {
  render() {
    return (
      <div className="Conclusion m-3">
        <h1>Conclusion</h1>
        <div className="expressjs">
          <h2 id="conclusion">ExpressJS</h2>
          <hr/>
          <ul>
            <li>
              <p>Overall, we had a good experience using ExpressJS as our choice of backend.</p>
            </li>
            <li>
              <p>The framework meets our expectation.</p>
              <p><ul>
                <li>It is a versatile and flexible framework.</li>
                <li>Middlewares can used to add a lot of functionality to the server (e.g. logging, http body parser, etc.).</li>
              </ul></p>
            </li>
            <li>
              <p>It is easy to serve webpages with ExpressJS.</p>
              <p><ul>
                <li>ExpressJS can serve static HTML/CSS/Javascript webpages on request.</li>
                <li>It can also use template engines such as Pug to dynamically render static templates.</li>
              </ul></p>
            </li>
            <li>
              <p>The learning curve with ExpressJS is can be a bit steep.</p>
              <p><ul>
                <li>It is easy to get started with NodeJS since it is just Javascript.</li>
                <li>It is also easy to serve static HTML/CSS/Javascript.</li>
                <li>However, it requires more understanding to take advantage of ExpressJS' middleware extension.</li>
              </ul></p>
            </li>
            <li>
              <p>In retrospect, we would spend more time to learn and take full advantage of extending ExpressJS capabilities with middlewares.</p>
            </li>
            <li>
              <p>We don't regret our choice of using ExpressJS as our back-end framework.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Conclusion;
