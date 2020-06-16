import React, { MouseEvent } from 'react';
import { InputProp } from '../types';

import { getStringByLanguage } from '../helpers/strings';
import { getLetterMatchCount } from '../helpers/helpers';
import LanguageContext from '../contexts/LanguageContext';
import SuccessContext from '../contexts/SuccessContext';
import GuessedWordsContext from '../contexts/GuessedWordsContext';

export default function Input ({ secretWord }: InputProp) {
  const [success, setSuccess] = SuccessContext.useSuccess();
  const [guessedWords, setGuessedWords] = GuessedWordsContext.useGuessedWords();
  const language = React.useContext(LanguageContext);
  const [currentGuess, setCurrentGuess] = React.useState(''); 

  
  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
    const newGuessedWords = [...guessedWords, { guessedWord: currentGuess, letterMatchCount}];
    
    setGuessedWords(newGuessedWords);
    
    if (currentGuess === secretWord) setSuccess(true);
    
    setCurrentGuess('');
  };

  const handleChange = (e: any): void => {
    setCurrentGuess(e.target.value);
  };
  
  if (success) return null;
  return (
    <div data-test="component-input">
      <form className="">
        <input 
          data-test="input-box" 
          className="" 
          type="text" 
          value={currentGuess}
          onChange={handleChange}
          placeholder={getStringByLanguage(language, 'guessInputPlaceHolder')} />
        <button 
          data-test="submit-button"
          onClick={handleSubmit}
          className="" >
          { getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
};