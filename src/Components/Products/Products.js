import Product from "../Product/Product";
import "./Products.css";
function Products(props) {
  const listproducts = props.productsDetails;

  return (
    <section className="products">
      {listproducts.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </section>
  );
}

export default Products;
