import React from 'react';

import { AppProps } from '../types';

export default function GuessedWords ({ guessedWords }: AppProps ) {

  const renderGuessedWords = () => {
    return guessedWords?.map(word => {
      return (
        <div key={word.guessedWord} data-test="guessed-word" style={{ display: 'flex'}}>
          <div className="eachWord">{word.guessedWord} </div>
          <div className="eachNumber">{word.letterMatchCount }</div>
        </div>
      )
    }
    );
  };

  const renderContents = () => {
    if ( guessedWords && guessedWords?.length > 0) {
      return (
        <div data-test="guessed-words" >
          <div className="Header" style={{ display: 'flex' }}>
            <h3>Guess</h3><h3>Matching Letters</h3>
          </div>
          {renderGuessedWords()}
        </div>
      );
    } else {
      return (
        <div data-test="guess-instructions">
          Try to guess the secret word!
        </div>
      );
    }
  };

  return (
    <div data-test="component-guessed-words">
      {renderContents()}
    </div>
  );

};