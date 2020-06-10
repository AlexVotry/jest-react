import React from 'react';
import { getContext, getProvider } from '../helpers/contextHelpers';
import { GuessedWordType } from '../types';

const GuessedWordsContext = React.createContext<GuessedWordType[]>([]);

function useGuessedWords () {
  return getContext(GuessedWordsContext, 'GuessedWordsProvider');
};

function GuessedWordsProvider (props:any) {
  const [guessedWords, setGuessedWords] = React.useState<GuessedWordType[]>([]);
  return getProvider(GuessedWordsContext, guessedWords, setGuessedWords, props);
}

export default { GuessedWordsProvider, useGuessedWords };