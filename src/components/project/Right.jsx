import React from 'react'
import joke from "../../assets/joke.png";
const Left = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={joke} alt="aboutImg" className="" width={"100%"}/>

        <h3>Dad Jokes</h3>
        <p>
        This is a PWA build using html, css, js and API integration.
        </p>
        <br />
        <div className="project__links">
            <a href="https://dad-joke-s.netlify.app/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/dad_jokes" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Left
