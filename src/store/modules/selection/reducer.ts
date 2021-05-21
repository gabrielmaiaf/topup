import produce from 'immer';
import { AnyAction, Reducer } from 'redux';

import { SelectionActionTypes, SelectionState } from './types';

const INITIAL_STATE: SelectionState = {
  country: '',
  operator: '',
  phone: undefined,
  product: '',
  step: 0,
};

const selection: Reducer<SelectionState> = (state = INITIAL_STATE, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SelectionActionTypes.setCountry:
        draft.country = action.payload;
        break;
      case SelectionActionTypes.setPhoneNumber:
        draft.phone = action.payload;
        break;
      case SelectionActionTypes.setOperator:
        draft.operator = action.payload;
        break;
      case SelectionActionTypes.setProduct:
        draft.product = action.payload;
        break;
      case SelectionActionTypes.setStep:
        draft.step = action.payload;
        break;
      default:
        return draft;
    }
  });
};

export default selection;
