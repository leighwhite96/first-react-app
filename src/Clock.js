import React, { Component } from 'react';
import './App.css';
import ShowTime from './ShowTime';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }
  //lifecycle methods
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  /* this doesn't go well with asynchronous requests.

  tick() {
    this.setState({
      date: new Date()
    });

  */

 tick() {
   this.setState((prevState,props) => ({
     date: new Date()

   }));
 }

  render(){
    return (
      <div>
        <h1>It is: </h1>
        <ShowTime time={this.state.date.toLocaleTimeString()}/>
      </div>
    )
  }
}

export default Clock;
