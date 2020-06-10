import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { findByTestAttr } from './testUtils';

import SuccessContext from '../contexts/SuccessContext';
import Input from '../components/Input';

function setup(secretWord:string = 'party') {
  const wrapper = mount(
    <SuccessContext.SuccessProvider>
      <Input secretWord={secretWord} />
    </SuccessContext.SuccessProvider>
  );
  
  const inputBox = findByTestAttr(wrapper, 'input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');

  return [wrapper, inputBox, submitButton];
};

describe('test word guesses', () => {
  let wrapper: ReactWrapper;
  let inputBox: any;
  let submitButton: any;

  beforeEach(() => {
    [wrapper, inputBox, submitButton] = setup();
  });

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
    })
  });
  
});


/*
  create mock event with guess value
  Simulate input box entry with change
  Simulage submit button click
*/
