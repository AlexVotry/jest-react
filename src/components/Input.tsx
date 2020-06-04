import React, { MouseEvent } from 'react';
import { inputProp } from '../types';

export default function Input ({ secretWord }: inputProp) {
  const [currentGuess, setCurrentGuess] = React.useState('');

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
          placeholder="enter guess" />
        <button 
          data-test="submit-button"
          onClick={handleSubmit}
          className="" >
          Submit
        </button>
      </form>
    </div>
  );
};