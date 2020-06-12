import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import AppClass from './App';

Enzyme.configure({ adapter: new EnzymeAdapter })
/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props 
 * @param {object} state 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AppClass {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const wrapper = setup();
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @function findByTestAttr
 * @param {shallowWrapper} wrapper 
 * @param {string} val 
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

const mockClick = (btn, target) => {
  wrapper.find(btn).simulate('click', target);
}

const counterDisplay = findByTestAttr(wrapper, 'counter-display');
const button = findByTestAttr(wrapper, 'increment-button');

test('renders without error', () => {
  const appComponent = findByTestAttr(wrapper, 'component-app');
  // check if data-test exists.  use this to not worry if the class changes
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
  const counter = 7;
  const mockTarget = { target: {id: 'add'}}
  wrapper.setState({counter});

  mockClick('#add', mockTarget);
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.text()).toContain(counter + 1);
});

test('clicking button decreases counter display', () => {
  const counter = 5;
  const mockTarget = { target: 'subtract' }
  wrapper.setState({counter});
  mockClick('#subtract', mockTarget);
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.text()).toContain(counter - 1);
});

test('counter does not go below zero', () => {
  const counter = 0;
  const mockTarget = { target: 'subtract' }
  wrapper.setState({counter});
  mockClick('#subtract', mockTarget);
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.text()).toContain(0);
});

test('counter displays error if counter goes below zero', () => {
  const counter = 0;
  const mockTarget = { target: 'subtract' }
  wrapper.setState({ counter });
  mockClick('#subtract', mockTarget);
  const display = findByTestAttr(wrapper, 'error');
  expect(display.length).toBe(1);
})