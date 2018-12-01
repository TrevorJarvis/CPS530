import React, { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <div className="Summary m-3">
        <h1>Summary</h1>
        <div className="reactSummary">
          <h2>ReactJS</h2>
          <hr />
          <br />
          <h3>Populary/Strengths</h3>
          <p>
            Very easy to use and very easy to learn. Being based on JavaScript,
            anyone with a moderate amount of understanding of how JavaScript
            works will be able to pick up react in a few days.{" "}
          </p>
          <p>
            Provides a good UI library to the already useful JavaScript
            language.
          </p>
          <p>
            With a quickly growing community, there is no shortage of tutorials,
            books and forum posts to answer almost any question you have.{" "}
          </p>
          <p>
            What makes React so great is how it’s based on components.
            Components allow for your programming to be more modular and
            reusable. Due to the reusable nature of react, code becomes a lot
            easier to develop off of and maintain.
          </p>
          <br />
          <h3>Weaknesses</h3>
          <p>
            Prone to convoluted code with the reliance on many helper functions.
            In the long run, too many helper functions can make your code hard
            to read and understand.{" "}
          </p>
          <p>
            Is a UI only library, other libraries will have to be used to handle
            other parts of your website.
          </p>
          <p>
            React is mainly written with JSX, ES6, Babel, Webpack and npm. All
            these are much more difficult to understand and would require a lot
            of time to grasp. If you don’t learn the inner workings of these
            dependencies, errors that arise from them will be much more
            difficult to troubleshoot.{" "}
          </p>
          <p>
            The open source community is relatively new and therefore small in
            comparison to some other communities.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
