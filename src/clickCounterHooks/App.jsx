import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const updateCounter = (e) => {
    let ctr = e.target.id === 'addBtn' ? counter + 1 : counter - 1;
    if (ctr < 1 ) {
      ctr = 0;
    }
    setCounter(ctr);
  }

  return (
    <div className="app wrapper" data-test="component-app">
      <h1 data-test="counter-display">The count is currently: {counter}</h1>
      <button id="addBtn" data-test="add-button" onClick={updateCounter}>Increment Counter</button>
      <button id="subBtn" data-test="subtract-button" onClick={updateCounter}>Decrement Counter</button>

    </div>
  )
};

export default hot(module)(App);
