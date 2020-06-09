import React from 'react';
import { shallow, mount } from 'enzyme';

import Congrats from '../components/Congrats';
import { findByTestAttr } from './testUtils';
import { AppProps } from '../types';
import languageContext from '../contexts/languageContext';

const defaultProps = { success: false };

// const setup = (props?: AppProps) => {
//   const setupProps = { ...defaultProps, ...props };
//   return shallow(<Congrats {...setupProps } />);
// };
const setup = ({ success, language }: AppProps) => {
  language = language || 'en';
  success = success || false;

  return mount(
    <languageContext.Provider value={language}>
      <Congrats success={success} />
    </languageContext.Provider>
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

test('renders no text when "success" prop is false', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test ('renders non-empty congrats message when "success" is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text().length).not.toBe(0);
})