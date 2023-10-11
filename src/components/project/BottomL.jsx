import React from 'react'
import bharat from "../../assets/bharat.png";
const Left = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={bharat} alt="aboutImg" className="" width={"100%"}  loading='lazy'/>

        <h3>Bharat Packers Group</h3>
        <p>
        This is a Landing page created using PHP Codeigniter for BPG.
        </p>
        <br />
        <div className="project__links">
            <a href="https://bharatpackersgroup.com/index.php" className='button website-button' target='blank'>Website</a>
            <a href="https://bharatpackersgroup.com/index.php" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Left