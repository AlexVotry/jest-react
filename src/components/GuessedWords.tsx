import React from 'react';

import { GuessedWordType } from '../types';
import LanguageContext from '../contexts/LanguageContext';
import GuessedWordsContext from '../contexts/GuessedWordsContext';
import { getStringByLanguage } from '../helpers/strings';

export default function GuessedWords () {
  const [guessedWords] = GuessedWordsContext.useGuessedWords();
  const language = React.useContext(LanguageContext);

  const renderGuessedWords = () => {
    return guessedWords?.map((word:GuessedWordType) => {
      return (
        <div key={word.guessedWord} data-test="guessed-word" className="collection #81c784 green lighten-2">
          <div className="collection-item">{word.guessedWord} 
          <span className="badge">{word.letterMatchCount }</span>
          </div>
        </div>
      )
    }
    );
  };

  const renderContents = () => {
    if ( guessedWords && guessedWords?.length > 0) {
      return (
        <div data-test="guessed-words">
          <div className="card-content white-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card-title">{getStringByLanguage(language, 'guessedWords')}</div><div className="card-title">{getStringByLanguage(language, 'matchingLettersColumnHeader')}</div>
          </div>
          {renderGuessedWords()}
        </div>
      );
    } else {
      return (
        <div data-test="guess-instructions" className="card-content white-text" >
          {getStringByLanguage(language, 'guessPrompt')}
        </div>
      );
    }
  };

  return (
    <div className="row">
      <div className="col m6 offset-m3">
    <div data-test="component-guessed-words" className="card blue-grey darken-1">
      {renderContents()}
    </div>
    </div>
    </div>
  );

};