import React from "react";
import Product from "./components/Product";
import { useSelector } from "react-redux";

const App = () => {
  const productList = useSelector((state) => state.product.products);
  console.log(productList);
  return (
    <div className="products-container">
      {productList.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default App;
