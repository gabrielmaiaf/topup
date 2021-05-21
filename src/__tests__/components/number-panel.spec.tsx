import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import NumberPanel from '../../components/number-panel';

const mockedOnClick = jest.fn();
const mockedOnChange = jest.fn();

describe('Number Panel', () => {
  it('should render number panel properly', () => {
    const { getByText } = render(
      <NumberPanel onClick={mockedOnClick} handleOnChange={mockedOnChange} />
    );

    expect(getByText('Enter the phone number that you want to topup')).toBeTruthy();
  });
  it('should select a country', async () => {
    const { getByPlaceholderText } = render(
      <NumberPanel onClick={mockedOnClick} handleOnChange={mockedOnChange} />
    );

    const numberInput = getByPlaceholderText('Phone number');

    fireEvent.change(numberInput, { target: { value: '012345' } });

    await waitFor(() => {
      expect(mockedOnChange).toBeCalledWith(12345);
    });
  });
});
