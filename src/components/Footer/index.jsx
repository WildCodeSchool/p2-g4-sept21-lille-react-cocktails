import liIcon from '../../assets/linkedin.png';
import gitIcon from '../../assets/github.png';
import './style.css';

export default function Footer() {
  return (
    <div className="footer">
      <p>Made with &lt;3 by Wild Code School</p>
      <div className="icons">
        <a href="http://www.linkedin.com/in/h%C3%A9lo%C3%AFseferla">
          <img src={liIcon} alt="Linkedin Héloise" />
        </a>
        <a href="https://www.linkedin.com/in/pierre-goemans-b61307105/">
          <img src={liIcon} alt="Linkedin Pierre" />
        </a>
        <a href="https://www.linkedin.com/in/luigi-menez-03a398221/">
          <img src={liIcon} alt="Linkedin Luigi" />
        </a>
        <a href="https://github.com/Morel-Victor">
          <img src={gitIcon} alt="Linkedin Victor" />
        </a>
      </div>
    </div>
  );
}
