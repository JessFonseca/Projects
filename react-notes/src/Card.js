import React from "react";

function Card(props) {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className={props.makeBig} onClick={props.expand}>
          <h2 className="card-title">Name:</h2>
          <br />
          <h2 className="card-name">{props.name}</h2>
          <hr className="card-line" />
          <p className={props.cardInfo}>{props.body}</p>
          <p className="card-date">
            <i>Date Created: {props.date}</i>
          </p>
        </div>
        <button className="btn-del" onClick={props.deleteCard}>
          X
        </button>
        <button className="btn-edit" onClick={props.editCard}>
          Edit
        </button>
      </div>
    </React.Fragment>
  );
}

export default Card;
