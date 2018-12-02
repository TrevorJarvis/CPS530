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
          <h3>Popularity/Strengths</h3>
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
		  <h2>ExpressJS</h2>
		  <hr />
		  <br />
		  <h3>Popularity</h3>
		  <p>
			Express.JS is framework built based on Node.JS. Express.JS is built to 
			assist on routing, creating a server, parsing, etc. It makes all these 
			tasks much more simple to do. It is also very versatile and allows ease
			of adding middlewares.
		  </p>
		  <p>
			Because of these features, Express.JS is the one most popular web 
			application framework of Node.JS.
		  </p>
		  <br />
		  <h3>Strengths</h3>
		  <p>
			As a framework of Node.JS, it offers on what Node.JS brings. It is very 
			easy to learn if the user already knows JavaScript which is also one of
			the most popular among programming languages.
		  </p>
		  <p>
			Express.JS has friendly integration of middleware and third party services.
			Express.JS is designed to integrate these middleware with ease and solve
			different development problems. The choice of middleware is very flexible
			and the user is able to choose which any they want to solve any problem.
		  </p>
		  <p>
			Express.JS is one the most mature Node.Js frameworks, so the open source
			community has a decent size.
		  </p>
		  <br />
		  <h3>Weaknesses</h3>
		  <p>
			Express.JS will also come with the disadvantages of Node.JS. Node.JS is a
			single threaded framework, so it is prone to "callback hell." This will
			cause some performance issues on heavy computation systems. If users
			decide on using heavy-computing apps, it is recommended to use other
			framework that does not rely on Node.JS.
		  </p>
		  <br />
        </div>		
      </div>
    );
  }
}

export default Homepage;
