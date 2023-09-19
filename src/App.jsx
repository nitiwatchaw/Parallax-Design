
import './App.css'
import { useState } from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import { motion, useScroll } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import ButtonNone from './hook/OpacityNoneButton'
function App() {

  const { scrollYProgress } = useScroll();



  const TextScroll = () => {
    return <div className='text-scroll'>
      <div className="dot"></div>
      <p>Scroll</p>
      <div className="line"></div>
    </div>
  }

  const ButtonUp = () => {
    const buttonNone = ButtonNone();
    const shoot = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
      <>
        <button className='buttonUp' onClick={shoot} style={{ opacity: buttonNone }}><FontAwesomeIcon icon={faAnglesUp} /></button>
      </>
    )
  }



  return (

    <div className='container'>

      <motion.div
        className="progress-bar"

        style={{ scaleX: scrollYProgress }}
      />
      <TextScroll />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      <ButtonUp />
    </div>
  )
}

export default App
