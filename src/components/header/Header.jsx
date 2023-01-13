import React, { useState } from "react";
import "./header.css";
import CV from "../../assets/SouravChowdhuryResume.pdf";
const Header = () => {

    window.addEventListener("scroll", function(){
        const scrollUp=document.querySelector(".scrollup");
        if(this.scrollY>=560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })

  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Sourav
        </a>

        <div className={Toggle ? "nav__menu show-menu " : "nav__menu"}>
          <ul className="nav__list grid ">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualif" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>

            <li className="nav__item nav__item-border">
              <a download="" href={CV} className="nav__link  ">
                <i className="uil uil-download-alt nav__icon"></i>Download CV
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
      <div className="hrtag container">
      <hr/>
      </div>
      
    </header>
  );
};

export default Header;
