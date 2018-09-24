import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Calculator extends React.Component{


    state = {
      value: null,
      displayValue: '0',
      waitingForOperand: false,
      operator: null,
    }



  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state
    if(waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      })
      } else {
        this.setState({
          displayValue: displayValue === '0' ? String(digit) : displayValue + digit        })
      }
    }



  inputDot() {
    const { displayValue } = this.state;

    if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
      })
    }
  }

  toggleSign() {
    const { displayValue } = this.state
    const newValue = parseFloat(displayValue) * -1

    this.setState({
      displayValue: String(newValue)
    })
  }

  clearDisplay() {    
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      operation: null,
      })

  }

  performOperation(operation) {

    const calculatorOperations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    this.setState({
      waitingForOperand: true,
      operation: operation
    })

  }


  // equals(mathOperation) {
  //   const { value, displayValue, operation} = this.state;

  //   if(operation === '+'){
  //   this.setState({
  //     displayValue: value + parseFloat(displayValue),
  //     operator: true,

  //   })} else if(operation === '-'){
  //     this.setState({
  //       displayValue: value - parseFloat(displayValue),
  //       operator: true,
  //     })
  //   } else if (operation === '*') {
  //     this.setState({
  //       displayValue: value * parseFloat(displayValue),
  //       operator: true,
  //     })}
  //   else if (operation === '/') {
  //     this.setState({
  //       displayValue: (value / parseFloat(displayValue)).toFixed(1),
  //       operator: true,
  //     })
  //   }
  // }

    render() {
  return (
    <div>
      <div className="calculator">
        <div className="display-area">
          <div className="display-text">
          {this.state.displayValue}
          </div>
        </div>

        <div className="button-area">
          <button className="button-AC" onClick={() => this.clearDisplay()}>AC</button>
          <button className="button-+/-" onClick={() => this.toggleSign()}>+/-</button>
          <button className="button-%">%</button>
          <button className="button-operator button-divide" onClick={() => this.performOperation('/')}>/</button>
          <button className="button-7" onClick={() => this.inputDigit(7)}>7</button>
          <button className="button-8" onClick={() => this.inputDigit(8)}>8</button>
          <button className="button-9" onClick={() => this.inputDigit(9)}>9</button>
          <button className="button-operator button-multiply" onClick={() => this.performOperation('*')}>x</button>
          <button className="button-4" onClick={() => this.inputDigit(4)}>4</button>
          <button className="button-5" onClick={() => this.inputDigit(5)}>5</button>
          <button className="button-6" onClick={() => this.inputDigit(6)}>6</button>
          <button className="button-operator button-minus" onClick={() => this.performOperation('-')}>-</button>
          <button className="button-1" onClick={() => this.inputDigit(1)}>1</button>
          <button className="button-2" onClick={() => this.inputDigit(2)}>2</button>
          <button className="button-3" onClick={() => this.inputDigit(3)}>3</button>
          <button className="button-operator button-plus" onClick={() => this.performOperation('+')}>+</button>
          <button className="button-0" onClick={() => this.inputDigit(0)}>0</button>
          <button className="button-dot" onClick={() => this.inputDot()}>.</button>
          <button className="button-operator button-equals" onClick={() => this.performOperation(this.state.operation)}>=</button>
        </div>



      </div>
    </div>

  )
}
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Calculator />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
