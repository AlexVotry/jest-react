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

export interface ArrayString {
  [item: string]: string;
}

export interface CongratsType {
  success?: boolean;
  language?: string;
}

export interface GuessedWordType {
  guessedWord: string;
  letterMatchCount: number;
}

export interface InputProp {
  secretWord?: string;
  language?: string;
  success?: boolean;
}

export interface StateType {
  secretWord: string | undefined;
  language: string;
}

export interface ActionType {
  type: any;
  payload?: string;
}

