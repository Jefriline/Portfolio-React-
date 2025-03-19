import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Proyecto Personal',
      position: 'Servidor en Express para reseñas de productos',
      date: '2024',
      description: 'Backend con Express.js y MySQL.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'APIs REST']
    },
    {
      company: 'Proyecto Personal',
      position: 'Portafolio personal',
      date: '2025',
      description: 'Desarrollado con React y CSS',
      technologies: ['React', 'CSS', 'JavaScript', 'Responsive Design']
    }
  ];

  return (
    <div className="experience">
      <div className="section-header">
        <h1 className="section-title">Proyectos Personales</h1>
        <p className="section-description">
          Proyectos desarrollados durante mi formación como aprendiz.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">{exp.date}</span>
              <div className="timeline-dot"></div>
              <h2 className="company">{exp.company}</h2>
              <h3 className="position">{exp.position}</h3>
              <p className="description">{exp.description}</p>
              <div className="technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 