import { StateType, ActionType } from '../types';

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}