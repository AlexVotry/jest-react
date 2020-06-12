import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { findByTestAttr } from '../tests/testUtils';
import App from '../components/App';
import hookActions from '../actions/hookActions';

const mockGetSecretWord = jest.fn();

/**
 * we mock the 'getSecretWord' function so we don't have to test that function here,
 * @param secretWord - word that will be mocked in the useReducer payload
 * @return ReactWrapper with mockReducer and mockGetSecretWord
 */
const setup = (secretWord: string = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  const mockUseReducer = jest.fn()
    .mockReturnValue([ { secretWord }, jest.fn() ]);

    React.useReducer = mockUseReducer;
  // use mount because useEffect not called on 'shallow'.
  return mount(<App />);
}

const wrapper = setup();

test('renders without error', () => {
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount (useEffect)', () => {
    setup();
    // check to see if function in useEffect was called.
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps({});

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test('renders app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');

    expect(appComponent.exists()).toBe(true);
  });
  test('does not render spinner wehen secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(false);
  })
});

describe('secretWord IS null', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });
  test('does NOT render app when secretWord is null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');

    expect(appComponent.exists()).toBe(false);
  });
  test('renders spinner wehen secretWord is null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(true);
  })
})