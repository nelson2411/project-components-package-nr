import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('renders without crashing', () => {
    render(
      <ProductCard product={product1} className="custom-class">
        {() => <div className="product-title">{product1.title}</div>}
      </ProductCard>
    );

    expect(screen.getByText(product1.title)).toBeInTheDocument();
  });

  test('it must increment the product count', () => {
    render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <div>
            <h1>Product Card</h1>
            <span data-testid="count">{count}</span>
            <button onClick={() => increaseBy(1)}>Increase</button>
          </div>
        )}
      </ProductCard>
    );

    // Check initial count (should be 0 by default)
    expect(screen.getByTestId('count')).toHaveTextContent('0');

    // Click the increase button
    fireEvent.click(screen.getByText('Increase'));

    // Check that count increased to 1
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });
});
