import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router";
const Header = () => {
  return (
    <Header>
      <div>
        <div>
          <h2>
            <Link to="/">
              <strong>Shoopify</strong>
            </Link>
          </h2>
        </div>
        <div>
          <link to="/cart">
            <FaCartPlus />
          </link>
        </div>
      </div>
    </Header>
  );
};

export default Header;
