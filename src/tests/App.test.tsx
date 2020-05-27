import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';


test('renders without error', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});