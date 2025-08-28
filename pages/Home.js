import { useSelector } from "react-redux";
import Product from "../components/Product";

const Home = () => {
  const productList = useSelector((state) => state.product.products);
  return (
    <div>
      <div className="products-container">
        {productList.map((item) => (
          <Product key={item.id} productData={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
