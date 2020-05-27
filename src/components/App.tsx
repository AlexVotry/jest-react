import React from 'react';
import { hot } from 'react-hot-loader';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Jest Test with React</h1>
    </div>
  )
};

export default hot(module)(App);
