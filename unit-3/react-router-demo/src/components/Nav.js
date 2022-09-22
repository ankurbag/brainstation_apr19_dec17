import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    {/* NavLink allows you to define active styling */}
                    <NavLink to="/" className="nav__link" exact activeClassName="nav__link--active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav__link" exact  activeClassName="nav__link--active">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="nav__link"
                        activeClassName="nav__link--active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
