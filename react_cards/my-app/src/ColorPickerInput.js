import React, { Component } from 'react';

class ColorPickerInput extends Component {
  render() {
    return (
      <div className={`container ${this.props.charNumber}`}>
          <h2>{this.props.charName}</h2>

          <ul>
            <li className="faction">Faction: {this.props.faction}</li>
            <li className="portrait"><img src={this.props.portrait} /></li>
            <li className="important">Is this character important? {this.props.important}</li>
            
          </ul>
          {/* <br/>
          <form onSubmit={this.props.typedSubmit}>
            <input placeholder="Example: #FFFFFF" type="text" value={this.props.initialBGColor} onChange={this.props.bgColor} />
          </form> */}
      </div>
    );
  }
}

export default ColorPickerInput;
