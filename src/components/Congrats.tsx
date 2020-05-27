import React from 'react';
import { AppProps } from '../types';

export default function Congrats({ success }: AppProps): JSX.Element {

  const renderMessage = () => {
    if (!success) return null;

    return (
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    )
  };

  return (
    <div data-test="component-congrats">
      { renderMessage() }
    </div>
  );
}