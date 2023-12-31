import { NavLink } from 'react-router-dom';
import logo from '../images/hakikrislogo.jpeg';

function Navbar() {
  return (
    <nav className="container">
      <NavLink className="navlink" to="/">
        <div className="logo-container">
          <span><img src={logo} alt="logo" className="img-logo" /></span>
        </div>
      </NavLink>
      <ul className="navlink">
        <li>
          <NavLink
            className="navlink hvr-underline-from-right"
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
            className="navlink hvr-underline-from-right"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
            to="/About"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink hvr-underline-from-right"
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
            className="navlink hvr-underline-from-right"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
            to="/Contact"
          >
            Contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
