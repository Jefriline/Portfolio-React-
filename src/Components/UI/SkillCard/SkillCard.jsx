
import './SkillCard.css';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default SkillCard; 