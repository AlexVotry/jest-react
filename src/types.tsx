import React from 'react';

export interface ObjStringType {
  [column: string]: any;
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


