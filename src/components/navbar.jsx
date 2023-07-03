import { NavLink } from 'react-router-dom';
import logo from '../images/hakikrislogo.jpeg';
import '../home-style/navbar.css';

const Navbar = () => (

  <nav className="container">
    <NavLink className="navlink" to="/">
      <div className="logo-container">
        <span><img src={logo} alt="logo" className="img-logo" /></span>
      </div>
    </NavLink>
    <ul className="navlink">
      <li>
        <NavLink
          className="navlink"
          style={({ isActive }) => (isActive
            ? { textDecoration: 'underline' }
            : { textDecoration: 'none' })}
          to="/"
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          style={({ isActive }) => (isActive
            ? { textDecoration: 'underline' }
            : { textDecoration: 'none' })}
          to="/Project"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          style={({ isActive }) => (isActive
            ? { textDecoration: 'underline' }
            : { textDecoration: 'none' })}
          to="/Contact"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
