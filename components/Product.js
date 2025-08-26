import { addToCart } from "../store/cartReducer";
import { useDispatch } from "react-redux";

export default function Product({ productData }) {
  // console.log(productData);
  const { id, title, discount, price, image } = productData;

  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        {/* <p className="rating">{+rating} ★ ★ ★ ★</p> */}
        <p className="rating">Discount: ${discount}</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() => {
            dispatch(addToCart(id));
          }}
        >
          Add to Cart
        </button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
