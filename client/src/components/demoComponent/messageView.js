import React, { Component } from "react";
import axios from "axios";
import MessageModel from "./messageModel";

class MessageView extends Component {
  constructor(props) {
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
  }

  render() {
    return (
      <div>
        <ul className="list-unstyled">
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
      </div>
    );
  }
}
export default MessageView;
