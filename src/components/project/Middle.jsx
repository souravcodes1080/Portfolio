import React from 'react'
import hh from "../../assets/hh.png";
const Middle = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={hh} alt="aboutImg" className="" width={"100%"}/>

        <h3>Hungry Helper</h3>
        <p>
        This is a Food Ordering Web App build using Angular TS.
        </p>
        <br />
        <div className="project__links">
            <a href="https://sourav-hungry-helper.netlify.app/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/foodApp" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Middle