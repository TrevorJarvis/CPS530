import React, { Component } from 'react';
import placeholder from '../../placeholder.svg';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': props.name,
      'picUrl': props.picUrl ? props.picUrl : placeholder,
      'desc': props.desc
    }
  }

  render() {
    return (
    <div className="profile card" style={{width: "20rem"}}>
      <img className="card-img-top" src={this.state.picUrl} alt={this.state.name}/>
      <div className="card-body">
        <h4 className="mt-0">{this.state.name}</h4>
        <em>{this.state.desc}</em>
      </div>
    </div>
  )}
}

export default Profile;