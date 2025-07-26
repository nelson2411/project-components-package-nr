import React, { createContext, JSX } from "react"
import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardhandlers,
} from "../interfaces/ProductInterfaces"

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  children: (args: ProductCardhandlers) => JSX.Element // Children is a function that receives the product handlers
  className?: string // Optional className for custom styling. We defined it as optional to allow flexibility in styling the component.
  style?: React.CSSProperties // Optional style prop for inline styles
  onChange?: (args: onChangeArgs) => void // Callback function to handle changes in product count
  value?: number // Optional value prop to set the initial count of the product
  initialValues?: InitialValues // Optional initial values for the product, including count and maxCount
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product, // Passing the product to the useProduct hook
      value, // Passing the initial value to the useProduct hook
      initialValues, // Passing the initial values to the useProduct hook
    })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product, // Providing the product to the context
        maxCount,
      }}
    >
      <div
        className={`${styles.productCard} ${className}`}
        style={style} // Applying the style prop to the root div
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset, // Providing the reset function to the children
        })}
      </div>
    </Provider>
  )
}
