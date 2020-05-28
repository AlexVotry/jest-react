import React from 'react';
import { AppProps } from '../types';

export default function Congrats({ success }: AppProps): JSX.Element {

  const renderMessage = () => {
    if (!success) return null;

    return (
      <div className="col m6 offset-m3">
        <div data-test="congrats-message" style={{ textAlign: 'center'}} className="card-panel #81c784 green lighten-2">
          Congratulations! You guessed the word!
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