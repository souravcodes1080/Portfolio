import React from 'react'
import bharat from "../../assets/tu.png";
const Left = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={bharat} alt="aboutImg" className="" width={"100%"} />

        <h3>Bharat Packers Group</h3>
        <p>
        This is a Text Util Web App built using React JS and Bootstrap.
        </p>
        <br />
        <div className="project__links">
            <a href="https://text-utils-by-sourav.netlify.app/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/Text-Utils" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Left