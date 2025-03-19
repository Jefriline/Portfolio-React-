import './Studies.css';

const Studies = () => {
  const education = [
    {
      degree: 'Tecnología en Análisis y Desarrollo de Software',
      institution: 'SENA',
      period: '2024 - 2025',
      description: 'Formación en desarrollo de software y análisis de sistemas.',
      highlights: [
        'Desarrollo Web',
        'Bases de Datos',
        'Programación',
        'Análisis de Software'
      ]
    },
    {
      degree: 'Curso Básico de RPA',
      institution: 'PIX',
      period: '2024',
      description: 'Formación básica en automatización de procesos robóticos.',
      highlights: [
        'Automatización Básica',
        'RPA',
        'Procesos'
      ]
    }
  ];

  return (
    <div className="studies">
      <div className="section-header">
        <h1 className="section-title">Estudios</h1>
        <p className="section-description">
          Mi formación académica actual y cursos complementarios.
        </p>
      </div>

      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="card-content">
              <h2 className="degree">{edu.degree}</h2>
              <h3 className="institution">{edu.institution}</h3>
              <div className="period">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {edu.period}
              </div>
              <p className="description">{edu.description}</p>
              <div className="highlights">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <span key={highlightIndex} className="highlight-tag">
                    {highlight}
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

export default Studies;
