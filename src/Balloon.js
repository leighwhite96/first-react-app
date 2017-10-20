import React, { Component } from 'react';
import './App.css';

class BalloonPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render(){
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h3>Count: {this.state.count}</h3>
        <img src={this.props.url} alt="Balloon" class="balloons"/>
      </div>
    )
  }
};

export default BalloonPic;
