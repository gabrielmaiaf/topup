export enum DataActionTypes {
  getDataFromApiRequest = 'GET_DATA_FROM_API_REQUEST',
  getDataFromApiSuccess = 'GET_DATA_FROM_API_SUCCESS',
  getDataFromApiFailure = 'GET_DATA_FROM_API_FAILURE',
}

export interface Country {
  iso: string;
  name: string;
  prefix: string;
}

export interface Operator {
  id: string;
  iso: string;
  name: string;
}

export interface Product {
  id: string;
  products: string[];
}

export interface DataSuccess {
  countries: Country[];
  operators: Operator[];
  products: Product[];
}

export interface DataState {
  countries: Country[];
  operators: Operator[];
  products: Product[];
  error?: string;
  isRequesting: boolean;
}
