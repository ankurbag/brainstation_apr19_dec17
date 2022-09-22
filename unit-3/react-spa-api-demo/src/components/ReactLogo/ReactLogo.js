import logo from '../../assets/images/logo.svg';
import './ReactLogo.scss';

function ReactLogo({ width }) {
  return (
    <img
      className="ReactLogo"
      style={{ width: width }}
      src={logo}
      alt="React Logo"
    />
  );
}

export default ReactLogo;
