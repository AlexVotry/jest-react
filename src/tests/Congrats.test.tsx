import React from 'react';
import { shallow } from 'enzyme';

import Congrats from '../components/Congrats';
import { findByTestAttr } from './testUtils';
import { AppProps } from '../types';


const setup = (props?: AppProps) => {
  const defaultProps = { success: false };
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps } />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test ('renders non-empty congrats message when "success" is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text().length).not.toBe(0);
})