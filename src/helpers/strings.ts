  import { ObjStringType } from '../types';

export const languageStrings: ObjStringType = {
  en: {
    congrats: 'Congatulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceHolder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  es: {
    congrats: 'Engatulaciones! Adivinaste la palabra',
    submit: 'Enviar',
    guessPrompt: '¡Intenta adivinar la palabra secreta!',
    guessInputPlaceHolder: 'entrar adivina',
    guessColumnHeader: 'Palabras adivinadas',
    guessedWords: 'Suposiciones',
    matchingLettersColumnHeader: 'Letras a juego',
  },
}

export function getStringByLanguage (languageCode: string, stringKey: string, strings=languageStrings) {

  if (languageCode === 'es') {
    return strings.es[stringKey];
  }

  return strings.en[stringKey];
};