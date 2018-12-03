import React, { Component } from "react";

class Tutorial extends Component {
  render() {
    return (
      <div className="tutorial">
        <h1>Tutorial</h1>
        <p>
          We are going to be creating that is similar to an online messaging
          system. We will be using ReactJS for the frontend, to take input and
          display UI, and we will be using ExpressJS for the backend to send and
          store the information.
        </p>
        <br />
        <ol>
          <li>
            Ensure you have ReactJS and ExpressJS installed before following
            these steps. Refer to the Installation page for assistance with
            that.
          </li>
          <li>
            We will need two libraries in the future. Axios, and React-Color. To
            install those type the following into your console where your app is
            located.
            <p>
              <code>npm install axios --save</code>
            </p>
            <p>
              <code>npm install react-color --save</code>
            </p>
          </li>
          <br />
          <li>
            To begin, create a new file named <code>messageForm.js</code>.
            <ul>
              <li>
                At the top of this file we need to import a few libraries.
                <textarea
                  className="form-control bg-dark text-info"
                  readOnly={true}
                  rows="3"
                  value={`import React, { Component } from 'react';
import axios from 'axios';
import { BlockPicker } from 'react-color';`}
                />
              </li>
            </ul>
          </li>
          <br />
          <br />
          <li>
            In order to collect the user input, we need to have a textbox where
            the user will be able to input information. Within our class we must
            create a form that will take input. To do this we do the following:
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="9"
              value={` render() {
                  return(
                    <form>
                      <input type="text" name="content" id="content" placeholder="Write something!" required value={this.state.content} onChange={this.handleChange}/>
                      <input type="text" name="author" id="name" placeholder="Anonymous" value={this.state.author} onChange={this.handleChange} defaultValue="Anonymous"/>
                    </form>
                  )}`}
            />
            <br />
            <p>
              <b>
                Note: Please ensure that all of the code below, that is posted
                within the render block is enclosed between the form tag.
              </b>
            </p>
          </li>
          <br />
          <li>
            Now that we will be expecting change, we need to know how to handle
            it.
            <ul>
              <li>
                The value that we are passing is contained with an event.
                Therefore, we need to pass it.
              </li>
              <textarea
                className="form-control bg-dark text-info"
                readOnly={true}
                rows="6"
                value={`this.handleChange = this.handleChange.bind(this);
handleChange(event) {
                this.setState({
                  [event.target.name]: event.target.value
                });
}`}
              />
            </ul>
          </li>
          <br />
          <br />
          <details>
            <summary>
              <b>
                For aesthetic purposes, we can allow the user to select the
                color of their text and the color of the background it displays
                on. This is not necessary for the application to work.
              </b>
            </summary>
            <br />
            <p>First we must create two methods before the render block.</p>
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="11"
              value={`handleTextColorChange(color) {
                this.setState({
                  textColor: color.hex
                });
}
            
handleBackgroundColorChange(color) {
                this.setState({
                  backgroundColor: color.hex
                });
}`}
            />
            <br />
            <p>
              After creating these two methods above, within our render block,
              below where we take user input we can display the color picker.
            </p>
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="6"
              value={`<label for="textColor">Choose color for your text</label>
<BlockPicker triangle="hide" name="textColor" color={this.state.textColor} onChange={this.handleTextColorChange}/>

<label for="backgroundColor">Choose color for your background</label>
<BlockPicker triangle="hide" name="backgroundColor" color={this.state.backgroundColor} onChange={this.handleBackgroundColorChange}/>`}
            />
          </details>
          <br />
          <li>
            After taking the users' input, we must submit it to the database.
          </li>
          <ul>
            <li>
              Outside the render block, create the class <code>submitForm</code>
              .
              <textarea
                className="form-control bg-dark text-info"
                readOnly={true}
                rows="4"
                value={`submitForm() {
                var message = this.state;
                axios.post('/api/messages/', message)
}`}
              />
            </li>
            <li>
              And within the render block we will create a button so the user is
              able to submit the information.
            </li>
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="1"
              value={`<button type="button" onClick={this.submitForm}>Send</button>`}
            />
          </ul>
          <br />
          <li>
            Create a new file named <code>messageModel.js</code>.
          </li>
          <br />
          <li>
            First we must import all our data that the user gave us in the
            constructor. We create the constructor outside the render block.
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="11"
              value={`constructor(props) {
                  super(props);
                  const now = new Date(props.date);
                  this.state = {
                    content: props.content,
                    author: props.author,
                    textColor: props.textColor,
                    backgroundColor: props.backgroundColor,
                    date: now.toLocaleString()
                  };
}`}
            />
          </li>
          <br />
          <li>
            Next, if the user has selected a color for their text and background
            we import those within the render block.
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="4"
              value={`const style = {
                backgroundColor: this.state.backgroundColor,
                color: this.state.textColor
};`}
            />
          </li>
          <br />
          <li>
            Finally, we populate our card with all of our data and get ready
            draw it. Below the color selection but still within the render
            block.
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="3"
              value={`<h5><strong>{this.state.author}</strong></h5>
<span style={{ display: "block" }}>{this.state.content}</span>
<em>Posted {this.state.date.toString()}.</em>`}
            />
          </li>
          <br />
          <li>
            We now create one more file called <code>messageView.js</code>.
            <ul>
              At the top of this file we must import:
              <textarea
                className="form-control bg-dark text-info"
                readOnly={true}
                rows="3"
                value={`import React, { Component } from "react";
import axios from "axios";
import MessageModel from "./messageModel";`}
              />
            </ul>
          </li>
          <br />
          <li>
            We imported <code>messageModel</code> because it is currently
            storing the data that our message card will contain. We need to
            create a constructor and some methods to retrieve that information.
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="21"
              value={`constructor(props) {
                  super(props);
                  this.state = { messages: null };
                  this.getMessages = this.getMessages.bind(this);
}
              
componentDidMount() {
                  this.getMessages();
}
              
getMessages() {
                  axios
                    .get("/api/messages")
                    .then(res => {
                      var data = res.data;
                      this.setState({ messages: data });
                    })
                    .catch(err => {
                      alert(err);
                    });
}`}
            />
          </li>
          <br />
          <li>
            Lastly, we must now display the message cards onto the page. Within
            the render method we must output our data.
            <textarea
              className="form-control bg-dark text-info"
              readOnly={true}
              rows="18"
              value={`return (
                  <ul>
                    {this.state.messages &&
                      this.state.messages.map((message, i) => {
                        return (
                          <li key={i}>
                            <MessageModel
                              content={message.content}
                              author={message.author}
                              date={message.date}
                              textColor={message.textColor}
                              backgroundColor={message.backgroundColor}
                            />
                          </li>
                        );
                      })}
                  </ul>
);`}
            />
          </li>
        </ol>
        <br />
        <p>
          After following these steps, you will have a webpage similar to what
          is display in Demo.
        </p>
        <br />
      </div>
    );
  }
}

export default Tutorial;
