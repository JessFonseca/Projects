import React, { Component } from 'react';

class ColorPickerList extends Component{

    render(){
    return (
      <div className="ColorPickerList" style={{bordercolor: 'black'}}>
      <form className="List" onSubmit={this.props.listSubmit}>
      <h2>Choose a color from the list: </h2>

      <select  onChange={this.props.bgColor}>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="teal">Teal</option>
          <option value="green">Green</option>
          <option value="#42f4ee">Mint</option>
        </select>
        <input className="button" type="submit" value="Submit"/>
        </form>
      </div>
    );
}
}

export default ColorPickerList;
