import React from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
  id: number;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number; // Current count of the product
  increaseBy: (value: number) => void; // Function to increase or decrease the count
  product: Product; // Adding product to the context
  maxCount?: number; // Adding maxCount to the context
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): React.ReactElement;
  Title: (Props: ProductTitleProps) => React.ReactElement;
  Image: (Props: ProductImageProps) => React.ReactElement;
  Buttons: (Props: ProductButtonsProps) => React.ReactElement;
  // HOCProps is a higher-order component that takes ProductCardProps and returns a React element
}

export interface onChangeArgs {
  product: Product; // The product that has changed
  count: number; // The new count of the product
}

export interface ProductInTheCart extends Product {
  count: number; // Adding quantity to the product in the cart
}

export interface InitialValues {
  count?: number; // Initial count for the product, defaults to 0 if not provided. We left it optional to allow flexibility in the initial count.
  maxCount?: number; // Optional maximum count for the product
}

export interface ProductCardhandlers {
  count: number; // Current count of the product
  isMaxCountReached: boolean; // Indicates if the maximum count has been reached
  maxCount?: number; // Maximum count for the product, if defined
  product: Product; // The product being handled

  increaseBy: (value: number) => void; // Function to increase or decrease the count
  reset: () => void; // Function to reset the count to the initial value
}
