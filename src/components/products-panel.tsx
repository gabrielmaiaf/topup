import { useState } from 'react';

import type { IProduct } from '../types/api';
import ContinueButton from './continue-button';

interface ProductsPanelProps {
  products: IProduct[];
  operator: string;
  selectedProduct: string;
  handleSelection: (arg0: string) => void;
  onClick: () => void;
}

const ProductsPanel: React.FC<ProductsPanelProps> = ({
  products,
  operator,
  selectedProduct,
  onClick,
  handleSelection,
}) => {
  const [finish, setFinish] = useState(false);
  const defaultSetting = selectedProduct === '';
  const renderOptions = () => {
    const productsOptions = products.filter((product) => product.id === operator);

    if (productsOptions.length === 0) return;

    return productsOptions[0].products.map((product) => (
      <option key={product} value={product} data-testid="option-product">
        {product}
      </option>
    ));
  };

  const handleFinish = () => {
    onClick();
    setFinish(true);
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-32 w-96 min-w-full">
      <strong>Select the product</strong>
      <label htmlFor="product">
        <select
          id="product"
          placeholder="Select product"
          data-testid="product-select"
          value={selectedProduct}
          className="rounded-lg bg-gray-100"
          onChange={(e) => handleSelection(e.target.value)}
        >
          <option disabled value="" data-testid="option-product">
            Select product
          </option>
          {renderOptions()}
        </select>
      </label>
      <ContinueButton onClick={handleFinish} disabled={defaultSetting || finish} loading={finish} />
    </section>
  );
};

export default ProductsPanel;
