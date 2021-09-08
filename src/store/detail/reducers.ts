import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { Actions } from './actions';
import { initState, State } from './state';

export const reducer = createReducer<State, Actions>(initState);
