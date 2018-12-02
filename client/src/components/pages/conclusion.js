import React, { Component } from "react";

class Conclusion extends Component {
  render() {
    return (
      <div className="Conclusion m-3">
        <h1>Conclusion</h1>
        <div className="expressjs">
          <h2 id="conclusionp1">ReactJS</h2>
          <hr />
          <ul>
            <li>
              <p>
                We enjoyed our use of ReactJS as our choice for the frontend.
              </p>
            </li>
            <li>
              <p>
                The framework is easy to use, and fairly quick to learn for
                someone that hasn't worked with it before.
              </p>
              <ul>
                <li>
                  <p>
                    There are a lot of tutorials and documentation online to
                    assist with any problems that arrise.
                  </p>
                </li>
              </ul>
              <li>
                <p>
                  React provided a good UI library to the Javascript language
                  allowing us to dive further into CSS.
                </p>
              </li>
            </li>
            <li>
              <p>
                It is easy to troubleshoot with React. The error reporting is
                straightforward and easy to understand.
              </p>
            </li>
            <li>
              <p>
                Although the framework is not that difficult to begin with, the
                middlewares are complex and may take awhile to understand if you
                are not fairly well-versed in the languages.
              </p>
            </li>
            <li>
              <p>
                Overall, incorporating the libraries that we chose into ReactJS
                showed us that the experience is customizable and one that we
                enjoyed.
              </p>
            </li>
          </ul>
          <br />
          <h2 id="conclusion">ExpressJS</h2>
          <hr />
          <ul>
            <li>
              <p>
                Overall, we had a good experience using ExpressJS as our choice
                of backend.
              </p>
            </li>
            <li>
              <p>The framework meets our expectation.</p>
              <ul>
                <li>It is a versatile and flexible framework.</li>
                <li>
                  Middlewares can used to add a lot of functionality to the
                  server (e.g. logging, http body parser, etc.).
                </li>
              </ul>
            </li>
            <li>
              <p>It is easy to serve webpages with ExpressJS.</p>
              <ul>
                <li>
                  ExpressJS can serve static HTML/CSS/Javascript webpages on
                  request.
                </li>
                <li>
                  It can also use template engines such as Pug to dynamically
                  render static templates.
                </li>
              </ul>
            </li>
            <li>
              <p>The learning curve with ExpressJS is can be a bit steep.</p>
              <ul>
                <li>
                  It is easy to get started with NodeJS since it is just
                  Javascript.
                </li>
                <li>It is also easy to serve static HTML/CSS/Javascript.</li>
                <li>
                  However, it requires more understanding to take advantage of
                  ExpressJS' middleware extension.
                </li>
              </ul>
            </li>
            <li>
              <p>
                In retrospect, we would spend more time to learn and take full
                advantage of extending ExpressJS capabilities with middlewares.
              </p>
            </li>
            <li>
              <p>
                We don't regret our choice of using ExpressJS as our back-end
                framework.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Conclusion;
