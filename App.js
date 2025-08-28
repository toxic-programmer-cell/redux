import { Outlet } from "react-router";
import Header from "./components/Header";
import Product from "./components/Product";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
