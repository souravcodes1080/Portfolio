import React from 'react'
import noteflow from "../../assets/noteflow.png";
const Left = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={noteflow} alt="aboutImg" className="" width={"100%"} loading='lazy'/>

        <h3>Note Flow</h3>
        <p>
        This is a note flow app a PWA build using html, css and vanilla js.
        </p>
        <br />
        <div className="project__links">
            <a href="https://sourav-note-flow.netlify.app/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/note_flow" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Left