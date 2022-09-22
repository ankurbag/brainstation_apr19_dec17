import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <ul className="nav__header">
      <li className="nav__title">
        <Link to="/">Home</Link>
      </li>
      <li className="nav__title">
        <Link to="/about">About</Link>
      </li>
      <li className="nav__title">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Nav;
