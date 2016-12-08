import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  render() {
    const { onIncrement, onDecrement } = this.props
    return (
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
      );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}