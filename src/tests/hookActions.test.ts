import moxios from 'moxios';

import { getSecretWord } from '../actions/hookActions';

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install();
  })
  afterEach(() => {
    moxios.uninstall();
  });

  test('calls the getSecretWord callback on axios response', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    
    const response = await getSecretWord();

    expect(response).toBe(secretWord);
  });

})