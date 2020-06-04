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

const wrapper = setup();

test('renders without error', () => {
  const input = findByTestAttr(wrapper, 'component-input');
  expect(input.length).toBe(1);
});

describe('state controlled input field', () => {
  const mockSetCurrentGuess = jest.fn();
  let wrapper: any;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
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