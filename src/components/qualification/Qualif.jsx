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
            onClick={()=>toggleTab(1)}
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
                <div className="qualif__calender fc">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2019
                </div>
              </div>
              
              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div>
            
            <div className="qualif__data">
              <div>
                <h3 className="qualif__title">Higher Secondary</h3>
                <span className="qualif__subtitle">Techno India Group Public School, Siliguri</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2021
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
              <div className="left">
                <h3 className="qualif__title" >Video Editor</h3>
                <span className="qualif__subtitle">Freelancer</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2020
                </div>
              </div>
            </div>



            <div className="qualif__data">
              <div></div>

                            
            </div>

            <div className="qualif__data">
              <div>
                <h3 className="qualif__title">B. Tech CSE</h3>
                <span className="qualif__subtitle">Siliguri Institute of Technology, Darjiling</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2021 - 2025 Present
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
              <div className="left">
                <h3 className="qualif__title" >Intern</h3>
                <span className="qualif__subtitle">Groveus Informatics Pvt. Ltd</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2023
                </div><br />
              </div>
            </div>

            {/* <div className="qualif__data">
              <div>
                <h3 className="qualif__title">SIH '23</h3>
                <span className="qualif__subtitle">Smart India Hackathon Grand Finalist</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2023
                </div>
              </div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
            </div> */}
            <div className="qualif__data">
              <div></div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
              <div className="left">
                <h3 className="qualif__title" >SIH 23</h3>
                <span className="qualif__subtitle">Grand Finalist in Smart India Hackathon 2023</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2023
                </div><br />
              </div>
            </div>
          </div>

          <div className="qualif__data">
              <div></div>

              <div>
                <span className="qualif__rounder"></span>
                <span className="qualif__line"></span>
              </div>
              <div className="left">
                <h3 className="qualif__title" >Web Developer</h3>
                <span className="qualif__subtitle">WOW Gateways</span>
                <div className="qualif__calender">
                  <i className="uil uil-calendar-alt"></i>&nbsp;2024
                </div>
                <p>Present</p>
                
              </div>
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
