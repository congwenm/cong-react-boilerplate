import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

// statics
import logo from './logo.svg';
import './App.css';

// actions
import Actions from './actions/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
          Tally: {this.props.tally}
          <button onClick={this.props.increment}>increment</button>
        </h2>
      </div>
    );
  }
}

export default connect(
  state => state,
  Actions
)(App)
