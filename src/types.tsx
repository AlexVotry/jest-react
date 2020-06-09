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

export interface CongratsProps {
  success?: boolean;
  language?: string;
  guessedWords?: guessedWordsType[];
}

export interface guessedWordsType {
  guessedWord: string;
  letterMatchCount: number;
}

export interface InputProp {
  secretWord?: string;
  language?: string;
}

export interface StateType {
  secretWord: string | undefined;
  language: string;
}

export interface ActionType {
  type: any;
  payload?: string;
}

