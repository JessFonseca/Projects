import React, { Component } from 'react';
import ColorPickerInput from './ColorPickerInput';
import './App.css';
import ColorPickerList from './ColorPickerList';

class App extends Component {
  state = {
    bgColor: "white",
  }

  changeColorHandler = (color) => {
    this.setState({
      bgColor: color.target.value,
    })
  }

  submitHandler = (event) => {
    var body = document.querySelector('body');
    body.style.background = this.state.bgColor;
    event.preventDefault();

  }
  
  render() {
    return (
      <div className="App">
          <h1 id="header">Hello</h1>
          <div className='choices'>

          <ColorPickerInput initalbgColor={this.state.bgColor} bgColor={this.changeColorHandler} typedSubmit={this.submitHandler}/>
          <ColorPickerList initialBGColor={this.state.bgColor} bgColor={this.changeColorHandler} listSubmit={this.submitHandler}/>
          </div>
     </div>
    );
  }
}

export default App;
