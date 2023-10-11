import 'animate.css';
import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import WOW from 'wowjs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Qualif from "./components/qualification/Qualif"
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';


const App=()=>{
  return(
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualif/>
      <Project />
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    </>
  )
}

export default App
