import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';

import Input from '../components/Input';
import { inputProp } from '../types';

const defaultProps = { secretWord: "party" };

const setup = (props?: inputProp) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input { ...setupProps }/>);
};


test('renders without error', () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, 'component-input');
  expect(input.length).toBe(1);
});

describe('state controlled input field', () => {
  
  test('state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  
})