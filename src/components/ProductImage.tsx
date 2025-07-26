import React, { useContext } from "react"
import styles from "../styles/styles.module.css"
import { ProductContext } from "./ProductCard"
import noImage from "../assets/no-image.jpg"

export interface Props {
  img?: string // Optional img prop
  className?: string // Optional className for custom styling
  style?: React.CSSProperties // Optional style prop for inline styles
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext)
  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img
      src={imgToShow}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style} // Applying the style prop to the img element
    />
  )
}
