import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "../Components/Product/Product";
import Products from "../Components/Products/Products";
import MyContext from "../MyContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        console.log("shiraaaaaaa", res);
      });
  }, [id]);
  return (
    <div>
      <Product
        id={product?.id}
        title={product?.title}
        image={product?.image}
        price={product?.price}
      ></Product>
    </div>
  );
}
export default ProductDetails;
