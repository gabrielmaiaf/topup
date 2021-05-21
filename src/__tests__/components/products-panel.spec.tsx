import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import ProductsPanel from '../../components/products-panel';

const mockedOnClick = jest.fn();
const mockedSelection = jest.fn();

const mockedProducts = [
  {
    id: 'ie-vod',
    products: [
      'Vodafone Topup 10 EUR',
      'Vodafone Topup 20 EUR',
      'Vodafone Topup 30 EUR',
      'Vodafone Topup 50 EUR',
    ],
  },
];
const selectedOperator = 'ie-vod';
const selectedProduct = '';

describe('Products Panel', () => {
  it('should render products panel properly', () => {
    const { getByText } = render(
      <ProductsPanel
        onClick={mockedOnClick}
        handleSelection={mockedSelection}
        operator={selectedOperator}
        products={mockedProducts}
        selectedProduct={selectedProduct}
      />
    );

    expect(getByText('Select the product')).toBeTruthy();
  });
  it('should select a product', () => {
    const { getByTestId, getByText } = render(
      <ProductsPanel
        onClick={mockedOnClick}
        handleSelection={mockedSelection}
        operator={selectedOperator}
        products={mockedProducts}
        selectedProduct={selectedProduct}
      />
    );

    const selectProduct = getByTestId('product-select');

    fireEvent.change(selectProduct, { target: { value: 'Vodafone Topup 10 EUR' } });

    expect(getByText('Vodafone Topup 10 EUR')).toBeTruthy();
  });
  it('should render only a option', () => {
    const selectedWrongOperator = 'ie-eir';
    const { getByTestId, getAllByTestId } = render(
      <ProductsPanel
        onClick={mockedOnClick}
        handleSelection={mockedSelection}
        operator={selectedWrongOperator}
        products={mockedProducts}
        selectedProduct={selectedProduct}
      />
    );

    const selectProduct = getByTestId('product-select');

    fireEvent.change(selectProduct, { target: { value: 'Vodafone Topup 10 EUR' } });

    const options = getAllByTestId('option-product');

    expect(options.length).toBe(1);
  });
  it('should onClick be called when finish the selection', async () => {
    const previouslySelectedProduct = 'Vodafone Topup 50 EUR';
    const testOnClick = jest.fn();
    const { getByTestId } = render(
      <ProductsPanel
        onClick={testOnClick}
        handleSelection={mockedSelection}
        operator={selectedOperator}
        products={mockedProducts}
        selectedProduct={previouslySelectedProduct}
      />
    );

    const selectProduct = getByTestId('product-select');

    fireEvent.change(selectProduct, { target: { value: 'Vodafone Topup 10 EUR' } });

    expect(screen.getByText('Vodafone Topup 10 EUR')).toBeInTheDocument();

    const button = screen.getByTestId('continue-button');

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toBeInTheDocument();
    });
  });
});
