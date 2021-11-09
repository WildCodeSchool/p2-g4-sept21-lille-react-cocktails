// import liIcon from '../../assets/linkedin.png';
// import gitIcon from '../../assets/github.png';
import './style.css';
import pierre from '../../assets/Pierre.png';
import luigi from '../../assets/Luigi.png';
import heloise from '../../assets/Heloise.png';
import victore from '../../assets/Victore.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

export default function Footer() {
  return (
    <section id="footer">
      <div>
        <h2>The Team</h2>
      </div>

      <div className="row">
        <div className="member">
          <div className="memberImage">
            <img src={heloise} alt="pictureOfMember" />
          </div>
          <div className="member-info">
            <h4>Heloise</h4>
            <span>Web Developer</span>
            <div className="social-links">
              <a href="https://github.com/hloz">
                <img className="linkSocial" src={github} alt="logo github" />
              </a>

              <a href="https://www.linkedin.com/in/h%C3%A9lo%C3%AFseferla/">
                <img className="linkSocial" src={linkedin} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="memberImage">
            <img src={victore} alt="pictureOfMember" />
          </div>
          <div className="member-info">
            <h4>Victor</h4>
            <span>Web Developer</span>
            <div className="social-links">
              <a href="https://github.com/Morel-Victor">
                <img className="linkSocial" src={github} alt="logo github" />
              </a>

              <a href="/">
                <img className="linkSocial" src={linkedin} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="memberImage">
            <img src={luigi} alt="pictureOfMember" />
          </div>
          <div className="member-info">
            <h4>Luigi</h4>
            <span>Web Developer</span>

            <div className="social-links">
              <a href="https://github.com/LuigiMenez">
                <img className="linkSocial" src={github} alt="logo github" />
              </a>

              <a href="https://www.linkedin.com/in/luigi-menez-03a398221/">
                <img className="linkSocial" src={linkedin} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="memberImage">
            <img src={pierre} alt="pictureOfMember" />
          </div>
          <div className="member-info">
            <h4>Pierre</h4>
            <span>Web Developer</span>
            <div className="social-links">
              <a href="https://github.com/PierreGoe">
                <img className="linkSocial" src={github} alt="logo github" />
              </a>

              <a href="https://www.linkedin.com/in/pierre-goemans-b61307105/">
                <img className="linkSocial" src={linkedin} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>{'Made with <3 by Wild Code School'}</p>
    </section>
  );
}
