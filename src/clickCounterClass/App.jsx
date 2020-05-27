import React, { Component } from 'react';

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, error: false };
    this.updateCounter = this.updateCounter.bind(this);
  }
  updateCounter(e) {
    let ctr = e.target.id === 'add' ? this.state.counter + 1 : this.state.counter -1;
    if (ctr < 0) {
      ctr = 0;
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    this.setState({ counter: ctr });
  }

  renderError() {
    if(this.state.error) return <div data-test="error">Can't go below zero!</div>
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">the counter is currently { this.state.counter } </h1>
        <button id="add" data-test="increment-button" onClick={this.updateCounter}>Increment counter</button>
        <button id="subtract" data-test="decrement-button" onClick={this.updateCounter}>decrement counter</button>
        {this.renderError()}
      </div>
    )
  }
}

export default AppClass;