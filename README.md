# NR-Product-Card

This is a testing deploy packlage on NPM.

### Example:

```js
import {
ProductCard,
ProductImage,
ProductTitle,
ProductButtons
} from nerm-product-card
```

````js
<ProductCard
        product={product}
        style={{
          width: "200px",
          margin: "10px",
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
      ```
````
