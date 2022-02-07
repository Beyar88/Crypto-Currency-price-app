import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <h5>Developed by Beyar Alhaji</h5>
      <ul className="footer-ul">
        <li>
          <a
            href="https://github.com/Beyar88"
            target="_blank"
            rel="noreferrer noopener"
          >
           <FontAwesomeIcon icon={faGithub} id="github" />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/beyar-alhaji-833345218"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} id="lindedin" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
