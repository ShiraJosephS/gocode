import Product from "../Product/Product";
import "./Cart.css";
import { useContext } from "react";
import MyContext from "../../MyContext";
function Cart() {
  const [cartproducts, setcartproducts] = useContext(MyContext);

  return (
    <section className="products">
      {cartproducts?.map((item) => (
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

export default Cart;
