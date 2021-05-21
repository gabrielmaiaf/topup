import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Api from '../../../services/api';
import { IApiResponse } from '../../../types/api';
import { RootState } from '../rootReducer';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from './action';

export default function fetchData(): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const { data } = await Api.get<IApiResponse>('');
      dispatch(fetchDataSuccess(data));
    } catch (err) {
      dispatch(fetchDataFailure());
    }
  };
}
