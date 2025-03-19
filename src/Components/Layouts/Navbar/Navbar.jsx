import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Inicio
      </NavLink>
      <NavLink to="/technical" className="nav-link">
        Habilidades Técnicas
      </NavLink>
      <NavLink to="/social" className="nav-link">
        Habilidades Sociales
      </NavLink>
      <NavLink to="/experience" className="nav-link">
        Experiencia
      </NavLink>
      <NavLink to="/studies" className="nav-link">
        Estudios
      </NavLink>
    </nav>
  );
};

export default Navbar;