import * as React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../tests/testUtils';
import App from '../components/App';

const setup = () => {
  return shallow(<App />);
}

const wrapper = setup();

test('renders without error', () => {
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});