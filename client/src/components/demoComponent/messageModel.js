import React, { Component } from 'react';

class MessageModel extends Component {
  constructor(props) {
    super(props);
    const now = new Date(props.date);
    this.state = {
      content: props.content,
      author: props.author,
      textColor: props.textColor,
      backgroundColor: props.backgroundColor,
      date: now.toLocaleString()
    }
  }

  render() {
    const style = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.textColor
    }
    return(
      <div className="message card m-3"
        style={style}>
        <div className="card-body">
          <h5><strong>{this.state.author}</strong></h5>
          <span style={{display: 'block'}}>{this.state.content}</span>
          <div className="text-right"><em>Posted {this.state.date.toString()}.</em></div>
        </div>
      </div>
    )
  }
}
export default MessageModel;