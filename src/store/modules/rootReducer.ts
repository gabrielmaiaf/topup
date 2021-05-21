import { combineReducers } from 'redux';

import data from './data/reducer';
import { DataState } from './data/types';
import selection from './selection/reducer';
import { SelectionState } from './selection/types';

export default combineReducers({
  data,
  selection,
});

export type RootState = {
  data: DataState;
  selection: SelectionState;
};
