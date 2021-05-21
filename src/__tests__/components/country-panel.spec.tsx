import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import CountryPanel from '../../components/country-panel';

const mockedOnClick = jest.fn();

const mockedCountries = [
  {
    iso: 'IE',
    name: 'Ireland',
    prefix: '353',
  },
  {
    iso: 'BR',
    name: 'Brazil',
    prefix: '55',
  },
];
const selectedCountry = '';

describe('Country Panel', () => {
  it('should render country panel properly', () => {
    const { getByText } = render(
      <CountryPanel
        onClick={mockedOnClick}
        handleSelection={mockedOnClick}
        selectedCountry={selectedCountry}
        countries={mockedCountries}
      />
    );

    expect(getByText('Select the country you want to topup a number')).toBeTruthy();
  });
  it('should select a country', () => {
    const { getByTestId, getByText } = render(
      <CountryPanel
        onClick={mockedOnClick}
        handleSelection={mockedOnClick}
        selectedCountry={selectedCountry}
        countries={mockedCountries}
      />
    );

    const selectCountry = getByTestId('country-select');

    fireEvent.change(selectCountry, { target: { value: 'IE' } });

    expect(getByText('Ireland')).toBeTruthy();
  });
});
