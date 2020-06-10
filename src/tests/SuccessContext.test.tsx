import React from 'react';
import { shallow, mount } from 'enzyme';

import SuccessContext from '../contexts/SuccessContext';

// a functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
  SuccessContext.useSuccess();
  return <div />;
}

test('useSuccess throws error when not wrapped in SuccessProvider', () => {
  const divWithoutSuccessProvider = () => shallow(<FunctionalComponent />);
  expect(divWithoutSuccessProvider).toThrow('Needs SuccessProvider');
});

test('useSuccess runs wehn wrapped in SuccessProvider', () => {
  expect(() => {
    mount(
      <SuccessContext.SuccessProvider>
        <FunctionalComponent />
      </SuccessContext.SuccessProvider>
    )
  }).not.toThrow();
})