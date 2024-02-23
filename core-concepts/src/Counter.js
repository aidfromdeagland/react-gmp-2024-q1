import React from "react"

export default class Counter extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { value: props.initialCounter ?? 0 };
    this.incrementCounter = this.increaseValue.bind(this);
    this.decrementCounter = this.decreaseValue.bind(this);
  }

  increaseValue() {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  }

  decreaseValue() {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("button", { onClick: this.decrementCounter }, "-"),
      React.createElement("span", null, this.state.value),
      React.createElement("button", { onClick: this.incrementCounter }, "+"),
    );
  }
}