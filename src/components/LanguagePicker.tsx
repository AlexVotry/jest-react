import React from 'react';
import { FunctionProp } from '../types';

import en from '../assets/americanFlag.jpg';
import es from '../assets/mexicanFlag.jpg';

export default function LanguagePicker ({setLanguage}: FunctionProp) {

  const languages = [
    { code: 'en', symbol: en },
    { code: 'es', symbol: es }
  ];

  const languageIcons = () => {
    return languages.map(lang => {
      return (
        <span data-test="language-icon" key={lang.code}>
          <button data-test="language-button" style={{ height: '100px', width: '150px' }} onClick={() => setLanguage() }>
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

