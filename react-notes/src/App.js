import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Form from "./Form";
import fire from "./config/config";
import LoginForm from "./LoginForm";
import { Alert, Button } from "reactstrap";

class App extends Component {
  state = {
    email: "",
    password: "",
    user: null,
    card: [],
    newName: "",
    body: "",
    edittingCardId: "",
    isValid: true,
    showForm: false,
    showShowAddNewCardBtn: true,
    highlighted: false,
    showCardEditor: false,
    editting: false
  };

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        const itemsRef = fire
          .database()
          .ref("users/" + this.state.user.uid + "/cards");
        itemsRef.on("value", snapshot => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              name: items[item].name,
              info: items[item].info,
              date: items[item].date,
              expand: items[item].expand,
              cardInfo: items[item].cardInfo,
              highlight: items[item].highlight
            });
          }
          newState.reverse();
          this.setState({
            card: newState
          });
        });
      }
    });
  }

  isValid = () => {
    if (this.state.newName === "" || this.state.body === "") {
      return false;
    } else {
      return true;
    }
  };

  addCard = event => {
    event.preventDefault();
    if (this.isValid()) {
      //add to database
      const itemsRef = fire
        .database()
        .ref("users/" + this.state.user.uid + "/cards");
      const item = {
        name: this.state.newName,
        info: this.state.body,
        date: Date(),
        expand: "react-card",
        cardInfo: "card-info",
        highlight: false
      };
      itemsRef.push(item);
      this.showAllCards();
    } else {
      this.setState({
        isValid: false
      });
    }
  };

  addChanges = e => {
    e.preventDefault();
    //edit card in database
    fire
      .database()
      .ref(`/users/${this.state.user.uid}/cards/${this.state.edittingCardId}`)
      .update({
        name: this.state.newName,
        info: this.state.body,
        expand: "react-card",
        cardInfo: "card-info",
        highlight: false,
        date: Date()
      });
    this.showAllCards();
  };

  handleTextNameInput = name => {
    this.setState({
      newName: name.target.value
    });
  };

  handleTextBodyInput = body => {
    this.setState({
      body: body.target.value
    });
  };

  deleteCard = id => {
    //remove from database
    const itemRef = fire
      .database()
      .ref(`/users/${this.state.user.uid}/cards/${id}`);
    itemRef.remove();
    this.showAllCards();
  };

  editCard = id => {
    const itemsRef = fire
      .database()
      .ref("users/" + this.state.user.uid + "/cards");
    itemsRef.once("value", snapshot => {
      let items = snapshot.val();

      this.setState({
        newName: items[id].name,
        body: items[id].info,
        showCardEditor: true,
        showShowAddNewCardBtn: false,
        edittingCardId: id,
        showForm: false,
        editting: true
      });
    });
  };

  handleFormButton = () => {
    // e.preventDefault();
    this.setState({
      showForm: true,
      showShowAddNewCardBtn: false,
      editting: true
    });
  };

  toggleExpand = id => {
    var updatedCard = this.state.card.slice();
    if (updatedCard[id].expand === "react-card") {
      updatedCard[id].expand = "react-card-expanded";
      updatedCard[id].cardInfo = "card-info-expanded";
      updatedCard[id].highlight = true;
      this.setState({
        card: updatedCard,
        highlighted: true,
        edittingCardId: id
      });
    } else {
      updatedCard[id].expand = "react-card";
      updatedCard[id].cardInfo = "card-info";
      updatedCard[id].highlight = false;
      this.setState({
        card: updatedCard,
        highlighted: false
      });
    }
  };

  showAllCards = () => {
    this.setState({
      highlighted: false,
      newName: "",
      body: "",
      isValid: true,
      showForm: false,
      showShowAddNewCardBtn: true,
      editting: false,
      edittingCardId: "",
      showCardEditor: false
    });
  };

  logOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  };

  // getUserFromLoginForm = userFromLoginForm => {
  //   this.setState({
  //     user: userFromLoginForm
  //   });
  // };

  render() {
    //Validate input to require fields are used
    let validateMessage;
    if (this.state.isValid) {
      validateMessage = "";
    } else {
      validateMessage = (
        <Alert color="danger">Please enter both a name and body message</Alert>
      );
    }

    //hide/show button to add new cards
    let ShowAddNewCardBtn;
    if (this.state.showShowAddNewCardBtn) {
      ShowAddNewCardBtn = (
        <div className="btn-center">
          <Button color="primary" onClick={this.handleFormButton}>
            Add New Card
          </Button>
        </div>
      );
    } else {
      ShowAddNewCardBtn = "";
    }

    // Hide/Show Form when "add new card" button is clicked

    let form;
    if (!this.state.showForm) {
      form = "";
    } else {
      form = (
        <Form
          addCard={this.addCard}
          newName={this.state.newName}
          body={this.state.body}
          handleTextNameInput={this.handleTextNameInput}
          handleTextBodyInput={this.handleTextBodyInput}
          formBtn="Add Card"
          cancelForm={this.showAllCards}
          formTitle="ADDING NEW CARD"
        />
      );
    }

    //Edit exisiting card
    let editCard;
    if (!this.state.showCardEditor) {
      editCard = "";
    } else {
      editCard = (
        <Form
          addCard={this.addChanges}
          newName={this.state.newName}
          body={this.state.body}
          handleTextNameInput={this.handleTextNameInput}
          handleTextBodyInput={this.handleTextBodyInput}
          formBtn="Add Changes"
          cancelForm={this.showAllCards}
          formTitle="EDITTING CARD"
        />
      );
    }

    return (
      <div className="App">
        {this.state.user ? (
          <React.Fragment>
            <header>
              <h1>Lets make some notecards!</h1>
              <div className="text-center">
                <Button
                  className="float-center"
                  color="danger"
                  // size="lg"
                  onClick={this.logOut}
                >
                  Logout
                </Button>
              </div>

              {ShowAddNewCardBtn}
              {form}
              {validateMessage}
              {editCard}
            </header>
            <div
              className={
                this.state.editting
                  ? "hide"
                  : this.state.highlighted
                    ? "highlighted-card-area"
                    : "card-area"
              }
            >
              {this.state.card.map(card => (
                <Card
                  makeBig={
                    this.state.card[
                      this.state.card.findIndex(i => i.id === card.id)
                    ].expand +
                    (this.state.highlighted
                      ? this.state.card[
                          this.state.card.findIndex(i => i.id === card.id)
                        ].highlight
                        ? ""
                        : " hide"
                      : "")
                  }
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  body={card.info}
                  deleteCard={() => this.deleteCard(card.id)}
                  editCard={() => this.editCard(card.id)}
                  date={card.date}
                  expand={() =>
                    this.toggleExpand(
                      this.state.card.findIndex(i => i.id === card.id)
                    )
                  }
                  cardInfo={
                    this.state.card[
                      this.state.card.findIndex(i => i.id === card.id)
                    ].cardInfo
                  }
                />
              ))}
            </div>
          </React.Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    );
  }
}

export default App;
