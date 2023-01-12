import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import Scroll from './Scroll';
const Home =() => {
  
    return (
      <section className='home section' id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>
                
                <div className="img__container">
                <div className="home__img"></div>
                <div className="home__img-back"></div>
                
                </div>
                <Data/>
            </div>
            <Scroll/>
        </div>
      </section>
    )
  
}

export default Home