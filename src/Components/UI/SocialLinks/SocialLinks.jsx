import './SocialLinks.css';

const SocialLinks = ({ socialLinks = [] }) => {
  if (!socialLinks || socialLinks.length === 0) {
    return null;
  }

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className={`fab fa-${link.icon}`}></i>
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 