import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter });

const setup = (props = {}) => {
  return shallow(<App {...props} />);
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
const wrapper = setup();

describe('Everything renders', () => {

  test('renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    // check if data-test exists.  use this to not worry if the class changes
    expect(appComponent.length).toBe(1);
    // check if class exists in App:
    expect(wrapper.find('.app').exists()).toBe(true);
  });
  
  test('renders increment button', () => {
    const button = findByTestAttr(wrapper, 'add-button');
    expect(button.length).toBe(1);
  });
  
  test('renders counter display', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
  });
});

describe('button works', () => {

  test('button will not be less than zero', () => {
    const mockTarget = { target: { id: 'subBtn'}};
    wrapper.find("#subBtn").simulate('click', mockTarget);

    const display = findByTestAttr(wrapper, 'counter-display');
    expect(display.text()).toContain(0);
  })

  test('button increments by one', () => {
    const mockTarget = { target: { id: 'addBtn'}}
    wrapper.find('#addBtn').simulate('click', mockTarget);

    const display = findByTestAttr(wrapper, 'counter-display');
    expect(display.text()).toContain(1);
  });

});