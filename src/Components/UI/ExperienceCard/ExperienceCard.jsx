import './ExperienceCard.css';

const ExperienceCard = ({ title, company, period, description }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="experience-title">{title}</h3>
        <span className="experience-period">{period}</span>
      </div>
      <h4 className="experience-company">{company}</h4>
      <p className="experience-description">{description}</p>
    </div>
  );
};

export default ExperienceCard; 