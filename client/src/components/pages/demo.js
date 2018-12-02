import React, { Component } from "react";
import MessageForm from '../demoComponent/messageForm';
import MessageView from '../demoComponent/messageView';

class Demo extends Component {
  render() {
    return (
      <div className="Demo">
        <h1>Demo Content</h1>
        <section>
          <MessageForm />
          <MessageView />
        </section>
      </div>
    );
  }
}

export default Demo;
