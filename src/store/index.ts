/* eslint-disable global-require, no-underscore-dangle, @typescript-eslint/explicit-module-boundary-types */

import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import thunk, { ThunkDispatch } from 'redux-thunk';

import storage from '../helpers/storage';
import rootReducer, { RootState } from './modules/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const middlewares = [thunk];

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
