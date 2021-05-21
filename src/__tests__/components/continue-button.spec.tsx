import { render } from '@testing-library/react';
import React from 'react';

import ContinueButton from '../../components/continue-button';

const onClickMock = jest.fn();

describe('Continue Button', () => {
  it('should render properly', () => {
    const { getByText } = render(<ContinueButton onClick={onClickMock} />);

    expect(getByText('Continue')).toBeTruthy();
  });
  it('should render a loading icon', () => {
    const { getByTestId } = render(<ContinueButton onClick={onClickMock} loading />);

    expect(getByTestId('loading')).toBeTruthy();
  });
});
