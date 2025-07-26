import {
  Product,
  onChangeArgs,
  InitialValues,
} from '../interfaces/ProductInterfaces';
import React, { useState } from 'react';

interface UseProductArgs {
  product: Product;
  onChange?: (onChangeArgs: onChangeArgs) => void; // Optional callback to handle changes
  value?: number; // Optional initial value for the product count
  initialValues?: InitialValues; // Optional initial values for the product, including count and maxCount
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = React.useRef(false);

  console.log('initialValues', initialValues);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0); // Ensure count is not negative
    if (initialValues?.maxCount) {
      // If maxCount is defined, ensure the count does not exceed it
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);

    onChange &&
      onChange({
        product,
        count: newValue, // Pass the updated count to the onChange callback
      });
  };

  React.useEffect(() => {
    if (!isMounted.current) return; // Prevents setting the counter on initial render

    setCounter(value);
  }, [value]);

  const reset = () => {
    setCounter(initialValues?.count || 0); // Reset to initial count or 0 if not defined
  };

  React.useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.maxCount && counter >= initialValues.maxCount,
    maxCount: initialValues?.maxCount, // Expose maxCount for use in components
    reset,
  };
};
