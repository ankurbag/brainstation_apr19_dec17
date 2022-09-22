import { Link } from 'react-router-dom';
import ReactLogo from '../ReactLogo';

function Header() {
  return (
    <header>
      <Link to="/">
        <ReactLogo width="100px" />
      </Link>
    </header>
  );
}

export default Header;
