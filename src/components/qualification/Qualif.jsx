import React, { useState } from "react";
import "../qualification/qualif.css";

const Qualif = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualif section" id="qualif">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualif__container container">
        <div className="qualif__tabs">
          <div
            className={
              toggleState === 1
                ? "qualif__button qualif__active button--flex"
                : "qualif__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualif__icon"></i>Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualif__button qualif__active button--flex"
                : "qualif__button button--flex"
            }
            onClick={()=>toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualif__icon"></i>Experience
          </div>
        </div>
        <div className="qualif__sections">
          <div
            className={
              toggleState === 1
                ? "qualif__content qualif__content-active"
                : "qualif__content"
            }
            
          >
            <div className="qualif__data">
              <div>
                <h3 className="qualif__title">Secondary</h3>
                <span className="qualif__subtitle">Techno India Group Public School, Siliguri</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>2019
                </div>
              </div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>

            <div className="qualif__data">
              <div></div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
              <div>
                <h3 className="qualif__title">Higher Secondary</h3>
                <span className="qualif__subtitle">Techno India Group Public School, Siliguri</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>2021
                </div>
              </div>
            </div>

            <div className="qualif__data">
              <div>
                <h3 className="qualif__title">B. Tech CSE</h3>
                <span className="qualif__subtitle">Siliguri Institute of Technology, Darjiling</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2025 Present
                </div>
              </div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>

            {/* <div className="qualif__data">
              <div></div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
              <div>
                <h3 className="qualif__title">ux ui</h3>
                <span className="qualif__subtitle">Spain.</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - Present
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualif__content qualif__content-active"
                : "qualif__content"
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualif__data">
              <div>
                <h3 className="qualif__title">Video Editor</h3>
                <span className="qualif__subtitle">Freelancer</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - 1month
                </div>
              </div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>

            <div className="qualif__data">
              <div></div>

              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualif;
