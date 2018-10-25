import React from "react";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import fire from "./config/config";

export default class Example extends React.Component {
  state = {
    email: "",
    password: "",
    loginError: "",
    signupError: ""
  };

  handleEmailInput = email => {
    email.preventDefault();
    this.setState({
      email: email.target.value
    });
  };

  handlePasswordInput = password => {
    password.preventDefault();
    this.setState({
      password: password.target.value
    });
  };

  login = e => {
    e.preventDefault();
    const that = this;
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        that.setState({
          loginError: true,
          signupError: false
        });

        // ...
        // console.log(errorCode, errorMessage);
      });
  };

  signup = e => {
    e.preventDefault();
    const that = this;
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (that.state.password === "" || that.state.email === "") {
          that.setState({
            signupError: "You must enter an email and password",
            loginError: ""
          });
        } else {
          that.setState({
            signupError: errorMessage,
            loginError: ""
          });
        }

        // console.log(errorCode, errorMessage);
        // ...
      });
  };
  render() {
    return (
      <React.Fragment>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={{ size: 2, offset: 2 }}>
              Email
            </Label>
            <Col md="4">
              <Input
                autoFocus
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
                onChange={this.handleEmailInput}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={{ size: 2, offset: 2 }}>
              Password
            </Label>
            <Col md="4">
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
                onChange={this.handlePasswordInput}
              />
            </Col>
          </FormGroup>
          <Button onClick={this.login} color="primary">
            Login
          </Button>{" "}
          <Button onClick={this.signup}>Sign Up</Button>
        </Form>
        {this.state.loginError ? (
          <Alert className="text-center" color="danger">
            Email or Password is wrong
          </Alert>
        ) : null}
        {this.state.signupError ? (
          <Alert className="text-center" color="danger">
            {this.state.signupError}
          </Alert>
        ) : null}
      </React.Fragment>
    );
  }
}
