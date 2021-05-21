import { Action } from 'redux';

export interface IAction<T, P = undefined> extends Action<T> {
  type: T;
  payload?: P;
}
