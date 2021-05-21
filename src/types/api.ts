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

export interface IApiResponse {
  countries: ICountry[];
  operators: IOperator[];
  products: IProduct[];
}
