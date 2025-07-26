import React, { useContext } from "react"
import styles from "../styles/styles.module.css"
import { ProductContext } from "./ProductCard"

// I need to create a Props interface that expects a title prop and a className optional prop.
// this interface will be used to type the props of the ProductTitle component.

export interface Props {
  title?: string // Optional title prop
  className?: string // Optional className for custom styling
  style?: React.CSSProperties // Optional style prop for inline styles
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={`${styles.productTitle} ${className} `} style={style}>
      {/* If title is provided, use it; otherwise, use product.title */}
      {title ? title : product.title}
    </span>
  )
}
