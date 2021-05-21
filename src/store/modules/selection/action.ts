import { IAction } from '../../../helpers/types';
import { SelectionActionTypes } from './types';

export function SelectCountry(
  country: string
): IAction<typeof SelectionActionTypes.setCountry, string> {
  return {
    type: SelectionActionTypes.setCountry,
    payload: country,
  };
}

export function SetPhoneNumber(
  phone: number
): IAction<typeof SelectionActionTypes.setPhoneNumber, number> {
  return {
    type: SelectionActionTypes.setPhoneNumber,
    payload: phone,
  };
}

export function SelectOperator(
  operator: string
): IAction<typeof SelectionActionTypes.setOperator, string> {
  return {
    type: SelectionActionTypes.setOperator,
    payload: operator,
  };
}

export function SelectProduct(
  product: string
): IAction<typeof SelectionActionTypes.setProduct, string> {
  return {
    type: SelectionActionTypes.setProduct,
    payload: product,
  };
}

export function SetStep(step: number): IAction<typeof SelectionActionTypes.setStep, number> {
  return {
    type: SelectionActionTypes.setStep,
    payload: step,
  };
}
