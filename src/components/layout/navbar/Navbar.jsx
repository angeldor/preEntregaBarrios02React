import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ToysIcon from "@mui/icons-material/Toys";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navBarContainer">
        <Link id="link" to="/">
          <h2>
            <SmartToyIcon fontSize="large" />
            Jugueteria la Niña mimada
            <ToysIcon fontSize="large" />
          </h2>
        </Link>
        <ul className="categories">
          <li>Peluches</li>
          <li>Construcción</li>
          <li>Juegos de Mesa</li>
          <li>Educativos</li>
          <li>Al Aire Libre</li>
          <li>Decorativos</li>
        </ul>
        <CartWidget className="cart" />
      </div>

      {/* <Outlet /> */}
    </>
  );
};
