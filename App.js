import { productList } from "./store/productList";
import Product from "./components/Product";

const App = () => {
  console.log(productList.products);
  return (
    <div className="products-container">
      {productList.products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default App;
