import React from 'react';
import { FunctionProp } from '../types';

import { languages } from '../helpers/strings';

export default function LanguagePicker ({setLanguage}: FunctionProp) {
  const languageIcons = () => {
    return languages.map(lang => {
      return (
        <span data-test="language-icon" key={lang.code}>
          <button data-test="language-button" style={{ height: '100px', width: '150px' }} onClick={() => setLanguage(lang.code) }>
            <img src={lang.symbol} style={{height: '100%', width: '100%'}} />
          </button>
      </span>
        )
    });
  }

  return (
    <div data-test="component-language-picker">
      {languageIcons()}
    </div>
  );
};

