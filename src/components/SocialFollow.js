import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Social.css";


const SocialFollow = () => {
  return (
    <div className="social-container">
      <h3>Let’s Connect</h3>
      <div className="social-icons">
        <a href="https://www.youtube.com" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.linkedin.com" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.pinterest.com" className="pinterest social">
          <FontAwesomeIcon icon={faPinterest} size="2x" />
        </a>
      </div>
       <div className="power-text"><p>Developed by koushik_ŖąĵŌŋ@devHuß</p>
      </div>
    </div>
  );
}

export default SocialFollow;