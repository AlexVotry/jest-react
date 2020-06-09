import React from 'react';

export interface ObjStringType {
  [column: string]: any;
}

export interface FunctionProp {
  [column: string]: Function;
}

export interface ArrayAny {
  [item: string]: any;
}

export interface AppProps {
  success?: boolean;
  guessedWords?: guessedWordsType[];
}

export interface guessedWordsType {
  guessedWord: string;
  letterMatchCount: number;
}

export interface inputProp {
  secretWord: string;
}

export interface StateType {
  secretWord: string | undefined;
}

export interface ActionType {
  type: any;
  payload?: string;
}

