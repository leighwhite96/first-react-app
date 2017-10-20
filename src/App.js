import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BalloonPic from './Balloon.js'

class App extends Component {
  render() {
    var url = "http://www.planwallpaper.com/static/images/Desktop-Wallpaper-HD2.jpg";
    var url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKbcCy9DvZNVZLOxgfwXRXBZPIgeTkAmTwgIW22T-HDUH4jiwZg"
    var url3 = "https://www.dollartree.com/assets/product_images_2016/styles/alternate_large/174788.jpg"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BalloonPic title="Balloons" url={url}/>
        <BalloonPic title="Balons" url={url2}/>
        <BalloonPic title="One Balon" url={url3}/>
      </div>
    );
  }
}

export default App;
