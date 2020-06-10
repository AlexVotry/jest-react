  import { ObjStringType } from '../types';

export const languageStrings: ObjStringType = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceHolder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
    title: 'Guess the Word'
  },
  es: {
    congrats: '¡Felicidades! ¡Adivinaste la palabra!',
    submit: 'Enviar',
    guessPrompt: '¡Intenta adivinar la palabra secreta!',
    guessInputPlaceHolder: 'entrar adivina',
    guessColumnHeader: 'Palabras adivinadas',
    guessedWords: 'Suposiciones',
    matchingLettersColumnHeader: 'Letras a juego',
    title: 'Adivina la palabra'
  },
}

export function getStringByLanguage (languageCode: string, stringKey: string, strings=languageStrings) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string: [${stringKey}] for [${languageCode}]`)
    return strings.en[stringKey];
  }

  return strings[languageCode][stringKey];
};