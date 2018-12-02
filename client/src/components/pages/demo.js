import React, { Component } from "react";
import axios from 'axios';

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      author: '',
      textColor: '',
      backgroundColor: ''
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <div className="Demo">
        <h1>Demo Content</h1>
        <section>
          <form>
            <input className="form-control" type="text" name="content" id="content" placeholder="Write something!" required value={this.state.content} onChange={this.handleChange}/>
            <input className="form-control" type="text" name="author" id="name" placeholder="Anonymous" value={this.state.author} onChange={this.handleChange}/>
            <input className="form-control" type="text" name="textColor" placeholder="Text color" value={this.state.textColor} onChange={this.handleChange}/>
            <input className="form-control" type="text" name="backgroundColor" placeholder="Background color" value={this.state.backgroundColor} onChange={this.handleChange}/>
            <button className="btn btn-primary" type="button" onClick={this.submitForm}>Send</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Demo;
