import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from '../components/GuessedWords';
import { findByTestAttr } from '../tests/testUtils';
import { AppProps, ObjStringType } from '../types';

const defaultProps: ObjStringType = { guessedWords: [] };

const setup = (props?: AppProps) => {
  const setupProps = {...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps }/>);
}

describe('if NO words are guessed', () => {
  const wrapper = setup();
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
  const wrapper = setup({ guessedWords });
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

