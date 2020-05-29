import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../tests/testUtils';

import Input from '../components/Input';
import { inputProp } from '../types';

const defaultProps = { secretWord: "party" };

const setup = (props?: inputProp) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input { ...setupProps }/>);
};

const wrapper = setup();

test('renders without error', () => {
  const input = findByTestAttr(wrapper, 'component-input');
  expect(input.length).toBe(1);
})