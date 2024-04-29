import React from 'react'
import gemini from "../../assets/gemini.png";
const Middle = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={gemini} alt="aboutImg" className="" width={"100%"} loading='lazy'/>

        <h3>Gemini Clone</h3>
        <p>
          Gemini Clone is buit using React JS and Google Gemini API.
        </p>
        <br />
        <div className="project__links">
            <a href="https://sourav-gemini-clone.netlify.app/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/gemini-clone" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Middle