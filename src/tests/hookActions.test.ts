import moxios from 'moxios';

import { getSecretWord } from '../actions/hookActions';

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install();
  })
  afterEach(() => {
    moxios.uninstall();
  });

  test('gets the secretWord respon from axios response', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    const mockSetSecretWord = jest.fn();

    await getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });

})