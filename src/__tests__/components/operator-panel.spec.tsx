import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import OperatorPanel from '../../components/operator-panel';

const mockedOnClick = jest.fn();

const mockedOperators = [
  {
    iso: 'IE',
    id: 'ie-vod',
    name: 'Ireland Vodafone',
  },
  {
    iso: 'IE',
    id: 'ie-three',
    name: 'Ireland Three',
  },
  {
    iso: 'IE',
    id: 'ie-eir',
    name: 'Ireland Eir',
  },
];
const selectedOperator = '';
const selectedCountry = 'IE';

describe('Operator Panel', () => {
  it('should render operator panel properly', () => {
    const { getByText } = render(
      <OperatorPanel
        onClick={mockedOnClick}
        handleSelection={mockedOnClick}
        selectedOperator={selectedOperator}
        country={selectedCountry}
        operators={mockedOperators}
      />
    );

    expect(getByText('Select the phone operator')).toBeTruthy();
  });
  it('should select an operator', () => {
    const { getByTestId, getByText } = render(
      <OperatorPanel
        onClick={mockedOnClick}
        handleSelection={mockedOnClick}
        selectedOperator={selectedOperator}
        operators={mockedOperators}
        country={selectedCountry}
      />
    );

    const selectOperator = getByTestId('operator-select');

    fireEvent.change(selectOperator, { target: { value: 'ie-vod' } });

    expect(getByText('Ireland Vodafone')).toBeTruthy();
  });
  it('should render only an option', () => {
    const selectedWrongCountry = 'BR';
    const { getAllByTestId, getByTestId } = render(
      <OperatorPanel
        onClick={mockedOnClick}
        handleSelection={mockedOnClick}
        selectedOperator={selectedOperator}
        operators={mockedOperators}
        country={selectedWrongCountry}
      />
    );

    const selectOperator = getByTestId('operator-select');
    fireEvent.change(selectOperator, { target: { value: 'ie-vod' } });

    const options = getAllByTestId('option-operator');

    expect(options.length).toBe(1);
  });
});
