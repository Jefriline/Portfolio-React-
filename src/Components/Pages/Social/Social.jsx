import './Social.css';

const Social = () => {
  const socialSkills = [
    {
      title: 'Trabajo en Equipo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      description: 'Habilidad para colaborar eficazmente en equipos multidisciplinarios y contribuir al éxito colectivo.',
      examples: [ 'Colaboración']
    },
    {
      title: 'Adaptabilidad',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6"/>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
          <path d="M3 22v-6h6"/>
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
        </svg>
      ),
      description: 'Capacidad para adaptarse rápidamente a nuevas tecnologías, entornos y metodologías de trabajo.',
      examples: ['Aprendizaje Continuo', 'Flexibilidad']
    },
    {
      title: 'Nivel de Inglés',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      description: 'Nivel básico de inglés (A2) con capacidad para comunicación básica y comprensión de textos simples.',
      examples: ['A2 (Básico)']
    }
  ];

  return (
    <div className="social">
      <div className="section-header">
        <h1 className="section-title">Habilidades Sociales</h1>
        <p className="section-description">
          Más allá de las habilidades técnicas, estas competencias sociales son fundamentales
          para crear relaciones sólidas y lograr resultados excepcionales en equipo.
        </p>
      </div>

      <div className="skills-container">
        {socialSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {skill.icon}
            </div>
            <h2 className="skill-title">{skill.title}</h2>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-examples">
              {skill.examples.map((example, exampleIndex) => (
                <span key={exampleIndex} className="example-tag">
                  {example}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social; 