import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { backResponse: "" };
  }

  callBack() {
    fetch("http://localhost:9000/testBack")
        .then(res => res.text())
        .then(res => this.setState({ backResponse: res }));
  }

  componentWillMount() {
    this.callBack();
  }

  render(){
    return  (
      <div  className="App">
            <header  className="App-header">
                <img  src={logo}  className="App-logo"  alt="logo"  />
                <p>
                    Edit  <code>src/App.js</code>  and  save  to  rel2oad.
                </p>
                <p className="App-intro">;{this.state.backResponse}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener  noreferrer"
                >
                    Learn  React
                </a>
            </header>
        </div>
    );
  }
}

export default App;
