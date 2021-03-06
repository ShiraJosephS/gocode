import Product from "../Product/Product";
import "./Products.css";
import { useState } from "react";
function Products(props) {
  const listproducts = props.productsDetails;

  return (
    <section className="products">
      {listproducts.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        ></Product>
      ))}
    </section>
  );
}

export default Products;
