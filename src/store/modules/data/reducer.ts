import produce from 'immer';
import { AnyAction, Reducer } from 'redux';

import { DataActionTypes, IDataState } from './types';

export interface ICountry {
  iso: string;
  name: string;
  prefix: string;
}

export interface IOperator {
  id: string;
  iso: string;
  name: string;
}

export interface IProduct {
  id: string;
  products: string[];
}

const INITIAL_STATE: IDataState = {
  operators: [],
  countries: [],
  products: [],
  error: undefined,
  isRequesting: false,
};

const data: Reducer<IDataState> = (state = INITIAL_STATE, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case DataActionTypes.getDataFromApiRequest:
        draft.error = undefined;
        draft.isRequesting = true;
        break;
      case DataActionTypes.getDataFromApiSuccess: {
        const { operators, countries, products } = action.payload;
        draft.isRequesting = false;
        draft.error = undefined;
        draft.operators = operators;
        draft.countries = countries;
        draft.products = products;
        break;
      }
      case DataActionTypes.getDataFromApiFailure:
        draft.isRequesting = false;
        draft.error = 'Error';
        break;
      default:
        return draft;
    }
  });
};

export default data;
