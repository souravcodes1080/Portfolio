import React from 'react'
import shopee from "../../assets/shopee.png";
const Left = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={shopee} alt="aboutImg" className="chat_app_img" width={"100%"}  loading='lazy'/>

        <h3>Shopee Shopping App</h3>
        <p>
        This is a e-commerce clone along with admin panel.
        </p>
        <br />
        <div className="project__links">
            <a href="https://mern-ecommerce-rho-fawn.vercel.app/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/mern-ecommerce" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Left
