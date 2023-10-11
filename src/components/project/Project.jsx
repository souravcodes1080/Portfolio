import React from 'react'
import './project.css'
import Left from "./Left"
import Middle from "./Middle"
import Right from "./Right"

const Project = () => {
  return (
    <section className="projects section" id="project">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My portfolio</span>

        <div className="projects__container container grid">
          <Left/>
          <Middle/>
          <Right/>

         
        </div>
    </section>
  )
}

export default Project