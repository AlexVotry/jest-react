import { getStringByLanguage, languageStrings } from '../helpers/strings';

const strings = {
  en: languageStrings.en,
  es: languageStrings.es,
  other: {}
}

test('returns English version of submit when en is called', () => {
  const string = getStringByLanguage('en', 'submit', strings);

  expect(string).toBe('Submit');
});
test('returns Spanish version of submit when es is called', () => {
  const string = getStringByLanguage('es', 'submit', strings);

  expect(string).toBe('Enviar');
});
test('returns English version of submit no language is called', () => {
  const string = getStringByLanguage('', 'submit', strings);

  expect(string).toBe('Submit');
});
test('returns english version of submit key does not exist', () => {
  const string = getStringByLanguage('other', 'submit', strings);

  expect(string).toBe('Submit');
});