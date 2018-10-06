import React, { Component } from 'react';
import ColorPickerInput from './ColorPickerInput';
import './App.css';

class App extends Component {
  state = {

    id1: {
      name: "Hans Olo",
      faction: "Commoner",
      portrait: require('./Han.jpg'),
      important: "Yes",
      charNumber: "char1"},

      id2: {
        name: "Obi Wankanobi",
        faction: "Jedi",
        portrait: require('./Han.jpg'),
        important: "Yes",
        charNumber: "char2"},
  }

  // changeColorHandler = (color) => {
  //   this.setState({
  //     bgColor: color.target.value,
  //   })
  // }

  // submitHandler = (event) => {
  //   var body = document.querySelector('body');
  //   body.style.background = this.state.bgColor;
  //   event.preventDefault();

  // }



  render() {
    return (
      <div className="App">
          <h1 id="header">Hello</h1>
          <div className="cards">

          <ColorPickerInput charNumber="char1" portrait={this.state.id1.portrait} faction={this.state.id1.faction} important={this.state.id1.important} charName={this.state.id1.name} initalbgColor={this.state.bgColor} bgColor={this.changeColorHandler} typedSubmit={this.submitHandler}/>
          
          <ColorPickerInput charNumber="char2" portrait={this.state.id2.portrait} faction={this.state.id2.faction} important={this.state.id2.important} charName={this.state.id2.name} initalbgColor={this.state.bgColor} bgColor={this.changeColorHandler} typedSubmit={this.submitHandler}/>

          <ColorPickerInput charNumber="char3" portrait={this.state.id2.portrait} faction={this.state.id2.faction} important={this.state.id2.important} charName={this.state.id2.name} initalbgColor={this.state.bgColor} bgColor={this.changeColorHandler} typedSubmit={this.submitHandler}/>
     </div>
     </div>
    );
  }
}

export default App;
