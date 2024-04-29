import React from 'react'
import tomato from "../../assets/tomato.png";
const Left = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={tomato} alt="aboutImg" className="" width={"100%"} loading='lazy'/>

        <h3>Tomato</h3>
        <p>
        Tomato is a Food ordering web app built using MERN stack.
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