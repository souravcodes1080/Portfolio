import React from 'react'
import './skills.css'
import Left from "./Left"
import Right from "./Right"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <Left/>
          <Right/>

         
        </div>
    </section>
  )
}

export default Skills