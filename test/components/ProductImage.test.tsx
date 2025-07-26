import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('it must render without crashing', () => {
    const wrapper = renderer.create(
      <ProductImage img={product2.image} className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('renders the component with the product image', () => {
    // here we will test the ProductCard with ProductImage
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
