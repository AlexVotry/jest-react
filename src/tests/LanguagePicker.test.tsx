import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from './testUtils';
import LanguagePicker from '../components/LanguagePicker';

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);  
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-picker');
  expect(component.exists()).toBe(true);
});

test('renders both language flags', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');

  expect(languageIcons.length).toBe(2);
});


test('calls setLanguage prop upon click', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-button');
  const firstIcon = languageIcons.first();
  firstIcon.simulate('click');

  expect(mockSetLanguage).toHaveBeenCalled();
});