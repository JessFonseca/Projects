import React from "react";
import { Button } from "reactstrap";

function Form(props) {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="react-card-expanded">
          <form onSubmit={props.addCard}>
            <h2>{props.formTitle}</h2>
            <br />
            <input
              autoFocus
              className="edit-card-title"
              type="text"
              value={props.newName}
              onChange={props.handleTextNameInput}
              placeholder="Enter Name Here"
            />
            <hr className="card-line" />
            <textarea
              className="edit-card-info"
              type="text"
              value={props.body}
              onChange={props.handleTextBodyInput}
              placeholder="Enter Info Here"
            />
            <br />
            <Button color="primary" className="btn" type="submit">
              {props.formBtn}
            </Button>{" "}
            <Button className="btn" onClick={props.cancelForm}>
              Cancel
            </Button>
          </form>
        </div>
      </div>
      {/* <Card
        makeBig="react-card-expanded"
        key="1"
        id="1"
        name={props.newName}
        body={props.body}
        deleteCard=""
        date=""
        expand=""
        cardInfo=""
      /> */}
    </React.Fragment>
  );
}

export default Form;
