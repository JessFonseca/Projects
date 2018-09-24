import React, { Component } from 'react';

class ColorPickerInput extends Component {
  render() {
    return (
      <div className="ColorPickerText">
          <h2>Please type a hex color number or type a name (hex must begin with '#'): </h2>
          <br/>
          <form onSubmit={this.props.typedSubmit}>
            <input placeholder="Example: #FFFFFF" type="text" value={this.props.initialBGColor} onChange={this.props.bgColor} />
          </form>
      </div>
    );
  }
}

export default ColorPickerInput;
