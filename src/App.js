import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
    this.events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ];
    
    for (var i in this.events) {
      window.addEventListener(this.events[i], this.resetTimeout);
    }

    this.setTimeout();
  }
  clearTimeout=()=> {
    if (this.warnTimeout) clearTimeout(this.warnTimeout);

    if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
  }

  setTimeout=()=> {
    this.warnTimeout = setTimeout(this.warn, 19 * 60 * 1000);

    this.logoutTimeout = setTimeout(this.logout, 24 * 60 * 1000);
  }
  resetTimeout=()=> {
    this.clearTimeout();
    this.setTimeout();
  }

  warn=()=> {
    console.log('It comes after 19 minutes of inactivity. you are logged out in 5 minutes');
  }

  logout=()=> {
    // Send a logout request to the API
    console.log('log out method after 24 minutes of inactivity');
    console.log("Sending a logout request to the API...");
    this.setState({ logginStatus: false });
    this.destroy(); // Cleanup
  }

  destroy=()=> {
    this.clearTimeout();

    for (var i in this.events) {
      window.removeEventListener(this.events[i], this.resetTimeout);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
