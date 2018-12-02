import React, { Component } from 'react';
import axios from 'axios';
import { BlockPicker } from 'react-color';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: '',
      textColor: '#000000',
      backgroundColor: 'ffffff'
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
  }

  submitForm() {
    var message = this.state;
    axios.post('/api/messages/', message)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleTextColorChange(color) {
    this.setState({
      textColor: color.hex
    });
  }

  handleBackgroundColorChange(color) {
    this.setState({
      backgroundColor: color.hex
    });
  }

  render() {
    return(
      <form className="card m-3">
        <input className="form-control" type="text" name="content" id="content" placeholder="Write something!" required value={this.state.content} onChange={this.handleChange}/>
        <input className="form-control" type="text" name="author" id="name" placeholder="Anonymous" value={this.state.author} onChange={this.handleChange}/>
        <div className="row" align="center">
          <div className="col">
            <label for="textColor">Choose color for your text</label>
            <BlockPicker triangle="hide" name="textColor" color={this.state.textColor} onChange={this.handleTextColorChange}/>
          </div>
          <div className="col">
            <label for="backgroundColor">Choose color for your background</label>
            <BlockPicker triangle="hide" name="backgroundColor" color={this.state.backgroundColor} onChange={this.handleBackgroundColorChange}/>
          </div>
        </div>
        
        <button className="btn btn-primary" type="button" onClick={this.submitForm}>Send</button>
      </form>
    );
  }
}

export default MessageForm;