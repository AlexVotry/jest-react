import React, { MouseEvent } from 'react';
import { InputProp } from '../types';

import LanguageContext from '../contexts/LanguageContext';
import { getStringByLanguage } from '../helpers/strings';
import SuccessContext from '../contexts/SuccessContext';

export default function Input ({ secretWord }: InputProp) {
  const [success, setSuccess] = SuccessContext.useSuccess();
  const language = React.useContext(LanguageContext);
  const [currentGuess, setCurrentGuess] = React.useState(''); 

  
  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    if (currentGuess === secretWord) setSuccess(true);
    setCurrentGuess('');
  }

  const handleChange = (e: any): void => {
    setCurrentGuess(e.target.value);
  }
  
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