import React, {useState, useCallback} from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  const [tally, setTally] = useState(0);

  const updateTally = (e) => {
    let counter = e.target.id === 'addBtn' ? tally + 1 : tally - 1;
    if (counter < 1 ) {
      counter = 0;
    }
    setTally(counter);
  }

  return (
    <div className="app wrapper" data-test="component-app">
      <h1 data-test="counter-display">The count is currently: {tally}</h1>
      <button id="addBtn" data-test="add-button" onClick={updateTally}>Increment Counter</button>
      <button id="subBtn" data-test="subtract-button" onClick={updateTally}>Decrement Counter</button>

    </div>
  )
};

export default hot(module)(App);
