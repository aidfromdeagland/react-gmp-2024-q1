import React from "react"
import PropTypes from 'prop-types';
import styles from "./Counter.module.css";
class Counter extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { value: props.initialCounter };
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
      { className: styles.container, 'data-testid': 'counter' },
      React.createElement("button", { type: 'button', onClick: this.decrementCounter }, "-"),
      React.createElement("span", null, this.state.value),
      React.createElement("button", { type: 'button', onClick: this.incrementCounter }, "+"),
    );
  }
}

Counter.propTypes = {
  initialCounter: PropTypes.number,
};

Counter.defaultProps = {
  initialCounter: 42,
};

export default Counter;
