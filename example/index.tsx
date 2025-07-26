import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../dist/components';

const product = {
  id: 1,
  title: 'Coffee Mug Card',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        style={{
          width: '200px',
          margin: '10px',
        }}
        initialValues={{
          count: 4, // Initial count for the product, can be set to any number
          //maxCount: 10, // Optional, you can set a maximum count for the product
        }}
        // Set the initial value based on the shopping cart. The ? operator checks if the product exists in the cart
        // If it does, it uses the count, otherwise it defaults to 0
      >
        {({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
