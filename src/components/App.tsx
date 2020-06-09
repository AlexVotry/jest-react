import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import LanguagePicker from './LanguagePicker';
import Input from './Input';
import { StateType, ActionType } from '../types';
import hookActions from '../helpers/hookActions';
import languageContext from '../contexts/languageContext';


const initialState: StateType = { secretWord: null, language: 'en' };

function reducer(state: StateType, action: ActionType) {
  switch(action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

const App = (): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord: string) => dispatch({ type: 'setSecretWord', payload: secretWord });
  const setLanguage = (language: string) => dispatch({ type: 'setLanguage', payload: language });

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="preloader-wrapper big active" data-test="spinner">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div >
    );
  }

  return (
    <div className="container" data-test="component-app">
      <languageContext.Provider value={state.language}>
        <h1 style={{textAlign: 'center'}}>Guess the Word</h1>
        <div>{state.secretWord}</div>
        <LanguagePicker setLanguage={setLanguage}/>
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  )
};

export default hot(module)(App);
