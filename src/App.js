import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import './App.css';
import Sidebar from "./Sidebar";
import Canvas from './Canvas.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {canvasState: "Canvas State"};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page) {
        console.log(page);
        this.setState({canvasState: page});

    }

  render() {

        console.log(this.state.canvasState);
    return (
      <div className="App">
          <h1>
              {this.state.canvasState}
          </h1>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
        <div>
            <Header onHeaderClick={this.handleClick}/>
        </div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Canvas canvasState={this.state.canvasState}/>
        </div>
      </div>
    );
  }
}

export default App;
