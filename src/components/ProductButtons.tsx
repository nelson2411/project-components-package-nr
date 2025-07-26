import React, { useContext } from "react"
import styles from "../styles/styles.module.css"
import { ProductContext } from "./ProductCard"

export interface Props {
  className?: string
  style?: React.CSSProperties // Optional style prop for inline styles
}

export const ProductButtons = ({ className, style }: Props) => {
  // ToDo: maxCount
  // Use the ProductContext to access the product state
  // This context should provide the current count and a function to increase the count

  const { counter, increaseBy, maxCount } = useContext(ProductContext)

  console.log("maxCount", maxCount)

  // ToDo: isMaxCountReached using a useCallback

  const isMaxCountReached = React.useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  )

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxCountReached() ? styles.disabled : ""
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  )
}
