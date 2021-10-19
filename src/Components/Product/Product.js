import { useEffect, useState } from "react/cjs/react.development";
import "./Product.css";
import { useContext } from "react";
import MyContext from "../../MyContext";

function Product({ id, title, image, price }) {
  const [cartproducts, setcartproducts] = useContext(MyContext);
  const productInCart = cartproducts.find((product) => product.id === id);
  function addCount() {
    if (productInCart) {
      setcartproducts(
        cartproducts.map((product) => {
          const amountInCart = product.count;
          if (product.id === id) {
            return { ...product, count: amountInCart + 1 };
          }
          return product;
        })
      );
    } else {
      setcartproducts([
        ...cartproducts,
        {
          id,
          title,
          image,
          price,
          count: 1,
        },
      ]);
    }
  }

  function minusCount() {
    if (productInCart.count > 1) {
      setcartproducts(
        cartproducts.map((product) => {
          const amountInCart = product.count;
          if (product.id === id) {
            return { ...product, count: amountInCart - 1 };
          }
          return product;
        })
      );
    } else {
      if (productInCart.count === 1) {
        setcartproducts(cartproducts.filter((product) => product.id !== id));
      }
      return;
    }
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="productImage" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
      <div className="counter">
        <div className="btn" onClick={addCount}>
          +
        </div>
        <div className="count">{productInCart ? productInCart.count : 0}</div>
        <div className="btn" onClick={minusCount}>
          -
        </div>
      </div>
    </div>
  );
}

export default Product;
