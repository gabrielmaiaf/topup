export enum SelectionActionTypes {
  setCountry = 'SET_COUNTRY',
  setPhoneNumber = 'SET_PHONE_NUMBER',
  setOperator = 'SET_OPERATOR',
  setProduct = 'SET_PRODUCT',
  setStep = 'SET_STEP',
}

export interface SelectionState {
  country: string;
  phone?: number;
  operator: string;
  product: string;
  step: 0;
}
