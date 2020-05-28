import React from 'react';
import { hot } from 'react-hot-loader';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Guess the Word</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'plane', letterMatchCount: 2 },
        { guessedWord: 'party', letterMatchCount: 5 },
      ]}/>
    </div>
  )
};

export default hot(module)(App);
