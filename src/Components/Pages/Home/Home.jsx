import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <span className="greeting">¡Hola! 👋</span>
        <h1 className="title">
          Soy Jefferson Lopez<br />
          Estudiante de Analisis yDesarrollo de Software
        </h1>
        <p className="subtitle">
          Interesado en el desarrollo Full Stack y en mejorar constantemente mis habilidades. 
          Aprendo rápido y disfruto enfrentando nuevos retos en tecnología.
        </p>
        <div className="cta-container">
          <NavLink to="/experience" className="cta-button cta-primary">
            Ver Proyectos
          </NavLink>
          <NavLink to="/technical" className="cta-button cta-secondary">
            Habilidades
          </NavLink>
        </div>
      </div>

      <div className="home-image">
        <div className="background-shape"></div>
        <img 
          src="/src/assets/my.png" 
          alt="Foto de perfil"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Home;
