import React from 'react';
import { mount } from 'enzyme';

import Congrats from '../components/Congrats';
import { findByTestAttr } from './testUtils';
import { CongratsType } from '../types';
import LanguageContext from '../contexts/LanguageContext';
import SuccessContext from '../contexts/SuccessContext';

const setup = ({ success, language }: CongratsType) => {
  language = language || 'en';
  success = success || false;

  return mount(
    <LanguageContext.Provider value={language}>
    {/* override value of success instead of the context value */}
      <SuccessContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </SuccessContext.SuccessProvider>
    </LanguageContext.Provider>
  );
};

describe('languagePicker', () => {
  
  test('correctly renders congrats string in English', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
  });
  
  test('correctly renders congrats string in Spanish', () => {
    const wrapper = setup({ success: true, language: 'es' });
    expect(wrapper.text()).toBe("¡Felicidades! ¡Adivinaste la palabra!");
  });
});

test('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when "success" is false', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test ('renders non-empty congrats message when "success" is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text().length).not.toBe(0);
})