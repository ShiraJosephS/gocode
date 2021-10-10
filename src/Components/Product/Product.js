import "./Product.css";
function Product(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.item.image} />
      </div>
      <div className="product-info">
        <h5>{props.item.title}</h5>
        <h6>{props.item.price}</h6>
      </div>
    </div>
  );
}

export default Product;
