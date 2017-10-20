import React, { Component } from 'react';
import './App.css';

class ShowTime extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.time}</h3>
      </div>
    )
  }
}
//this is the same as above (something to do with stateless components - its just a render function)
//const ShowTime = (props) => <h1>{props.time}</h1>;

export default ShowTime;
