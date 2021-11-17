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
          <div className="memberInfo">
            <h4>Heloise</h4>
            <span>Web Developer</span>
            <div className="socialLinks">
              <a
                href="https://github.com/hloz"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkSocial" src={github} alt="logo github" />
              </a>

              <a
                href="https://www.linkedin.com/in/h%C3%A9lo%C3%AFseferla/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkSocial" src={linkedin} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="memberImage">
            <img src={victore} alt="pictureOfMember" />
          </div>
          <div className="memberInfo">
            <h4>Victor</h4>
            <span>Web Developer</span>
            <div className="socialLinks">
              <a
                href="https://github.com/Morel-Victor"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkSocial" src={github} alt="logo github" />
              </a>

              <a
                href="https://www.linkedin.com/in/victor-morel-5265881b3/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkSocial" src={linkedin} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="memberImage">
            <img src={luigi} alt="pictureOfMember" />
          </div>
          <div className="memberInfo">
            <h4>Luigi</h4>
            <span>Web Developer</span>

            <div className="socialLinks">
              <a
                href="https://github.com/LuigiMenez"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkSocial" src={github} alt="logo github" />
              </a>

              <a
                href="https://www.linkedin.com/in/luigi-menez-03a398221/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkSocial" src={linkedin} alt="logo github" />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="memberImage">
            <img src={pierre} alt="pictureOfMember" />
          </div>
          <div className="memberInfo">
            <h4>Pierre</h4>
            <span>Web Developer</span>
            <div className="socialLinks">
              <a
                href="https://github.com/PierreGoe"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkSocial" src={github} alt="logo github" />
              </a>
              <a
                href="https://www.linkedin.com/in/pierre-goemans-b61307105/"
                target="_blank"
                rel="noreferrer"
              >
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
