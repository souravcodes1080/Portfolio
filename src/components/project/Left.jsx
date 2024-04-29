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
        This is a Full Stack web app built using React JS for frontend and Node JS, Express, Mongo DB for backend.
        </p>
        <br />
        <div className="project__links">
            <a href="https://tomato-food-delivery.onrender.com/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/food-deliver" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Left