import React, { Component } from "react";

class Card extends Component {
  state = {
    editName: "",
    editInfo: ""
  };

  render() {
    return (
      <React.Fragment>
        <div className="card-container">
          <div className={this.props.makeBig} onClick={this.props.expand}>
            <h2 className="card-title">Name:</h2>
            <br />
            <h2 className="card-name">{this.props.name}</h2>
            {/* <h2>ID: {this.props.id}</h2> */}
            <hr className="card-line" />
            <p className={this.props.cardInfo}>{this.props.body}</p>
            <p className="card-date">
              <i>Date Created: {this.props.date}</i>
            </p>
          </div>
          <button className="btn-del" onClick={this.props.deleteCard}>
            X
          </button>
          <button className="btn-edit" onClick={this.props.editCard}>
            Edit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
