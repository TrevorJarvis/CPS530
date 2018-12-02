import React, { Component } from "react";
import MessageForm from '../demoComponent/messageForm';
import MessageView from '../demoComponent/messageView';

class Demo extends Component {
  render() {
    return (
      <div className="Demo">
        <h1>Demo</h1>
        <h2 className="text-center">Message platform</h2>
        <h5 className="text-center">This page use frontend ReactJS to send API call to backend ExpressJS.</h5>
        <h5 className="text-center">Messages are stored in remote MongoDB.</h5>
        <section>
          <MessageForm />
          <MessageView />
        </section>
      </div>
    );
  }
}

export default Demo;
