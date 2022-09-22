import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__item">
          <NavLink
            to="/"
            exact
            className="NavBar__Link"
            activeClassName="NavBar__Link--active"
          >
            About
          </NavLink>
        </li>
        <li className="NavBar__item">
          <NavLink
            to="/lifecyclemethods"
            className="NavBar__Link"
            activeClassName="NavBar__Link--active"
          >
            Lifecycle Methods
          </NavLink>
        </li>
        <li className="NavBar__item">
          <NavLink
            to="/timer"
            className="NavBar__Link"
            activeClassName="NavBar__Link--active"
          >
            Timer
          </NavLink>
        </li>

        <li className="NavBar__item">
          <NavLink
            to="/users"
            className="NavBar__Link"
            activeClassName="NavBar__Link--active"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
