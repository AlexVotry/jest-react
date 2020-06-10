import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { GuessedWordType } from '../types';
import { findByTestAttr } from './testUtils';
import SuccessContext from '../contexts/SuccessContext';
import GuessedWordsContext from '../contexts/GuessedWordsContext';
import Input from '../components/Input';
import GuessedWords from '../components/GuessedWords';

function setup(guessedWordsString: string[] =[], secretWord:string = 'party') {
  const wrapper = mount(
    <GuessedWordsContext.GuessedWordsProvider>
      <SuccessContext.SuccessProvider>
        <Input secretWord={secretWord} />
        <GuessedWords />
      </SuccessContext.SuccessProvider>
    </GuessedWordsContext.GuessedWordsProvider>
  );
  
  const inputBox = findByTestAttr(wrapper, 'input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');

  // pre-populate guessWords context by simulating word guess.
  guessedWordsString.map(word => {
    const mockEvent = { target: {value: word } };
    inputBox.simulate('change', mockEvent);
    submitButton.simulate('click');
  })

  return [wrapper, inputBox, submitButton];
};

describe('test word guesses', () => {
  let wrapper: ReactWrapper;
  let inputBox: any;
  let submitButton: any;

  describe('non-empty guessWords', () => {

    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup(['agile'], 'party');
    });

  /*
    create mock event with guess value
    Simulate input box entry with change
    Simulate submit button click
  */
    describe('correct guess', () => {
      beforeEach(() => {
        const mockEvent = { target: {value: 'party' } };
        inputBox.simulate('change', mockEvent);
        submitButton.simulate('click');
      })

      test('Input component contains no children', () => {
        const inputComponent = findByTestAttr(wrapper, 'component-input');
        expect(inputComponent.children().length).toBe(0);
      });
      test('GuessedWords row count reflects updated guess', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows.length).toBe(2);
      })
    });
    
    describe('incorrect guess', () => {
      beforeEach(() => {
        const mockEvent = { target: {value: 'train' } };
        inputBox.simulate('change', mockEvent);
        submitButton.simulate('click');
      });

      test('Input box remains', () => {
        const inputComponent = findByTestAttr(wrapper, 'component-input');
        expect(inputComponent.exists()).toBe(true);
      });
      test('GuessedWords row count reflects updated guess', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows.length).toBe(2);
      })
    });
  });

  describe('Start with empty guessedWords', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup();
    });

    test('GuessedWords row count reflects updated guess', () => {
      const mockEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockEvent);
      submitButton.simulate('click');
      const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordRows.length).toBe(1);
    })
  });  

});


