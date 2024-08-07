import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="col">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="col">
        <Link to="/favourite">Favourites</Link>
      </div>
    </div>
  );
};

export default Navbar;
