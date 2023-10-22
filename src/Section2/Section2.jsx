import React from 'react'
import { motion } from 'framer-motion'
import { slideIn, staggerChildren } from '../utils/motion'
import { useParallax } from "react-scroll-parallax";
import web from '../assets/background-layer/wep1.png'
import './Section2.css'
const Section2 = () => {

    const parallaxRotage = useParallax({
        rotate: [0, -160],
    });
    return (
        <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='Section2'>
            <motion.h2 variants={slideIn("right", "tween", 0.5, 0.6)}> What is SCP
            </motion.h2>
            <motion.p variants={slideIn("left", "tween", 0.8, 0.6)}> SCP is a website that collects stories created by netizens.
                But they are serious netizens. It was as if a supernatural event had actually occurred.
                and recorded as an experimental file.
                Including telling how to cope if 'that thing' leaks out into human society.
            </motion.p>

            <img className='bg-wep' src={web} ref={parallaxRotage.ref} />


        </motion.div>
    )
}

export default Section2