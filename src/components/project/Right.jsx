import React from 'react'
import chat from "../../assets/chat.png";
const Left = () => {
  return (
<div className="projects__content">
        {/* <h3 className="projects__title"></h3> */}
        
        <div className="projects__box">
            
        <img src={chat} alt="aboutImg" className="chat_app_img" width={"100%"} loading='lazy'/>

        <h3>Hike - Chat App</h3>
        <p>
          Hike is a Reat time chat application built using web socket, socket.io.
        </p>
        <br />
        <div className="project__links">
            <a href="https://hike-psi.vercel.app/" className='button website-button' target='blank'>Website</a>
            <a href="https://github.com/souravcodes1080/hike" className='website-button github-btn' target='blank'>Github</a>
        </div>
        
        </div>
    </div>
  )
}

export default Left
