import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { StateType, ActionType } from '../types';
import hookActions from '../helpers/hookActions';

const initialState: StateType = { secretWord: null };

function reducer(state: StateType, action: ActionType) {
  switch(action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

const App = (): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord: string) => dispatch({ type: 'setSecretWord', payload: secretWord })

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
      <h1 style={{textAlign: 'center'}}>Guess the Word</h1>
      <div>{state.secretWord}</div>
      <Input secretWord={state.secretWord} />
      {/* <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'plane', letterMatchCount: 2 },
        { guessedWord: 'party', letterMatchCount: 5 },
      ]}/> */}
    </div>
  )
};

export default hot(module)(App);
