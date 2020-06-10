import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from '../components/GuessedWords';
import { findByTestAttr } from '../tests/testUtils';
import { GuessedWordType } from '../types';
import { languageStrings } from '../helpers/strings';
import GuessedWordsContext from '../contexts/GuessedWordsContext';

const { en, es } = languageStrings;

const setup = (guessedWords: GuessedWordType[] = []) => {
  const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()]);
  GuessedWordsContext.useGuessedWords = mockUseGuessedWords;
  return shallow(<GuessedWords />);
}

describe('if NO words are guessed', () => {
  const wrapper = setup([]);
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  })

});

describe('if words are guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'plane', letterMatchCount: 2 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ]
  const wrapper = setup(guessedWords);
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  })

  test('correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  })
});

describe('languagePicker', () => {
  test('renders guess instructions in English by default', () => {
    const wrapper = setup([]);
    const guessedInstructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(guessedInstructions.text()).toBe(en.guessPrompt);
  });
  test('renders guess instructions in Spanish', () => {
    const mockUseContext = jest.fn().mockReturnValue('es');
    React.useContext = mockUseContext;
    const wrapper = setup([]);
    const guessedInstructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(guessedInstructions.text()).toBe(es.guessPrompt);
  });
})
// we are mocking useContext here.  This will give us the default value and allow us to use a shallow wrapper.
