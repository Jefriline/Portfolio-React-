import { NavLink } from 'react-router-dom';
import './Footer.css';
import myData from '../../../mydata/mydata.json';

const Footer = () => {
  const { contacto_redes } = myData;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i>
              <span>{contacto_redes.email}</span>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <span>{contacto_redes.telefono}</span>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span>{contacto_redes.ubicacion}</span>
            </p>
            <p>
              <i className="fab fa-github"></i>
              <a href={contacto_redes.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Enlaces</h3>
          <nav className="footer-nav">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/technical">Habilidades Técnicas</NavLink>
            <NavLink to="/social">Habilidades Sociales</NavLink>
            <NavLink to="/experience">Experiencia</NavLink>
            <NavLink to="/studies">Estudios</NavLink>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Jefferson López.</p>
      </div>
    </footer>
  );
};

export default Footer;
