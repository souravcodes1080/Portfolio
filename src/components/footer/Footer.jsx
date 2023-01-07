import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sourav</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/_souravjustchill/"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100047339140823"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-facebook-f"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sourav-chowdhury-892ba3229/"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-linkedin-alt"></i>
            
          </a>

          <a
            href="https://github.com/souravcodes1080"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; <span><a href="#home">Sourav.</a></span> All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
