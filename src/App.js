import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BalloonPic from './Balloon.js';
import Clock from './Clock.js';
import Toggle from './Toggle.js';
import Greeting from './Greeting.js';
import Blog from './Blog.js';
import Form from './Form.js';

class App extends Component {
  render() {
    var url = "http://www.planwallpaper.com/static/images/Desktop-Wallpaper-HD2.jpg";
    var url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKbcCy9DvZNVZLOxgfwXRXBZPIgeTkAmTwgIW22T-HDUH4jiwZg"
    var url3 = "https://www.dollartree.com/assets/product_images_2016/styles/alternate_large/174788.jpg"
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'},
      {id: 3, title: 'React to this', content: 'wth is going on.'}
    ];
    return (
      <div className="App">
        <h1>Hi!!!</h1>
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
        <Clock />
        <Toggle/>
        <Greeting isLoggedIn={true}/>
        <Blog posts={posts} />
        <Form />
      </div>
    );
  }
}

export default App;
