import React, { MouseEvent } from 'react';
import { InputProp } from '../types';

import languageContext from '../contexts/languageContext';
import { getStringByLanguage } from '../helpers/strings';

export default function Input ({ secretWord }: InputProp) {
  const [currentGuess, setCurrentGuess] = React.useState(''); 
  const language = React.useContext(languageContext);

  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    setCurrentGuess('');
  }

  const handleChange = (e: any): void => {
    setCurrentGuess(e.target.value);
  }

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