import './Technical.css';

const Technical = () => {
  const technicalSkills = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Figma', 'React']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'APIs REST', 'SQL', 'MongoDB', 'Bash (basico)','C#','C++(basico)']
    },
    {
      title: 'Control de Versiones',
      skills: ['Git', 'GitHub']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Azure (Iniciando)']
    },
    {
      title: 'Metodologías Ágiles',
      skills: ['Scrum']
    },
    {
      title: 'Otros',
      skills: ['Desarrollo ágil', 'Automatización con RPA (Básico)']
    }
  ];

  return (
    <div className="technical">
      <div className="section-header">
        <h1 className="section-title">Habilidades Técnicas</h1>
        <p className="section-description">
          Tecnologías y herramientas que he aprendido durante mi formación.
        </p>
      </div>

      <div className="skills-grid">
        {technicalSkills.map((skillSet, index) => (
          <div key={index} className="skill-card">
            <h2 className="skill-title">{skillSet.title}</h2>
            <ul className="skill-list">
              {skillSet.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technical; 