import React from 'react';
import { AppProps } from '../types';

import languageContext from '../contexts/languageContext';
import { getStringByLanguage } from '../helpers/strings';

export default function Congrats({ success }: AppProps): JSX.Element {
  const language = React.useContext(languageContext);

  const renderMessage = () => {
    if (!success) return null;

    return (
      <div className="col m6 offset-m3">
        <div data-test="congrats-message" style={{ textAlign: 'center'}} className="card-panel #81c784 green lighten-2">
          {getStringByLanguage(language, 'congrats')}
        </div>
      </div>
    )
  };

  return (
    <div data-test="component-congrats" className="row">
      { renderMessage() }
    </div>
  );
}