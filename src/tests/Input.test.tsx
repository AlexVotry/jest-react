import React from 'react';
import { mount } from 'enzyme';

import Input from '../components/Input';
import { findByTestAttr } from './testUtils';
import { InputProp } from '../types';
import LanguageContext from '../contexts/LanguageContext';
import SuccessContext from '../contexts/SuccessContext';
import GuessedWordsContext from '../contexts/GuessedWordsContext';


const setup = ({ secretWord, language, success }: InputProp) => {
  secretWord = secretWord || 'party';
  language = language || 'en';
  success = success || false;

  return mount(
    <GuessedWordsContext.GuessedWordsProvider>
      <LanguageContext.Provider value={language}>
        <SuccessContext.SuccessProvider value={[success, jest.fn()]}>
          <Input secretWord={secretWord} />
        </SuccessContext.SuccessProvider>
      </LanguageContext.Provider>
    </GuessedWordsContext.GuessedWordsProvider>
  )
}

describe('Input language tests', () => {
  test('Input button says is in English by default', () => {
    const wrapper = setup({});
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('Submit');
  });
  test('Submit buttons is in Spanish when language = "es"', () => {
    const wrapper = setup({language: 'es'});
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('Enviar');
  })
});

test('input component does not show when success is true', () => {
  const wrapper = setup({ success: true });
  expect(wrapper.isEmptyRender()).toBe(true);
})

test('renders without error', () => {
  const wrapper = setup({});
  const input = findByTestAttr(wrapper, 'component-input');
  expect(input.length).toBe(1);
});

describe('state controlled input field', () => {
  const mockSetCurrentGuess = jest.fn();
  let wrapper: any;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup({});
  });
  
  test('state updates with value of input box upon change', () => {
    const mockEvent = { target: { value: 'train' } };
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  
  test('state is cleared when submit button is clicked', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate("click", { preventDefault() {}}); 
    
    /* alternative way (two lines instead of one, but more flexible if you need to add more to the mockevent)
      const mockEvent = { preventDefault: jest.fn() };
      submitButton.simulate("click", mockEvent); 
    */

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  })
})