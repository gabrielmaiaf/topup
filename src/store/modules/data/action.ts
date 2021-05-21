import { IAction } from '../../../helpers/types';
import { DataActionTypes, DataSuccess } from './types';

export function fetchDataRequest(): IAction<typeof DataActionTypes.getDataFromApiRequest> {
  return {
    type: DataActionTypes.getDataFromApiRequest,
  };
}

export function fetchDataSuccess(
  data: DataSuccess
): IAction<typeof DataActionTypes.getDataFromApiSuccess, DataSuccess> {
  return {
    type: DataActionTypes.getDataFromApiSuccess,
    payload: data,
  };
}

export function fetchDataFailure(): IAction<typeof DataActionTypes.getDataFromApiFailure> {
  return {
    type: DataActionTypes.getDataFromApiFailure,
  };
}
