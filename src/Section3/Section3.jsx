import React, { useRef } from 'react'
import './Section3.css'

import { useParallax } from "react-scroll-parallax";
import { useScroll, motion, useTransform } from 'framer-motion'
import { slideIn, staggerContainer } from '../utils/motion'
import MonAll from '../assets/mosnters/all mons.png'
import Mon1 from '../assets/mosnters/mons1.png'
import Mon2 from '../assets/mosnters/mons2.png'
import web2 from '../assets/background-layer/wep2.png'
const Section3 = () => {
    const parallax0 = useParallax({
        easing: "c",
        translateX: [0, 0],
        translateY: [-30, -600]
    });
    const parallax1 = useParallax({
        easing: "c",
        translateX: [-250, 500],
        translateY: [-550, 150]
    });
    const parallax2 = useParallax({
        easing: "easeOutQuad",
        translateX: [-70, 110],
        translateY: [-60, 80]
    });
    const parallax3 = useParallax({
        easing: "easeOutQuad",
        translateX: [0, 160],
        translateY: [0, 0]
    });
    const parallax4 = useParallax({
        easing: "easeOutQuad",
        translateX: [160, 0],
        translateY: [0, 0]
    });

    const parallaxRotage = useParallax({
        rotate: [0, -160],
    });

    const Railref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: Railref,
        offset: ["start start ", "end start"],
    })


    const rail1 = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])
    const rail2 = useTransform(scrollYProgress, [0, 5], ["0%", "-120%"])
    const rail3 = useTransform(scrollYProgress, [0, 5], ["0%", "-320%"])
    const rail4 = useTransform(scrollYProgress, [0, 5], ["0%", "-170%"])
    const rail5 = useTransform(scrollYProgress, [0, 5], ["0%", "-60%"])
    const rail6 = useTransform(scrollYProgress, [0, 5], ["0%", "-150%"])
    const rail7 = useTransform(scrollYProgress, [0, 5], ["0%", "-100%"])

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="container-body" >

            <img src={MonAll} alt="" ref={parallax0.ref} className='allMons' />
            <img src={Mon1} alt="" ref={parallax1.ref} className='mons1' />
            <img src={Mon2} alt="" ref={parallax2.ref} className='mons2' />
            <h3 ref={parallax3.ref} className='danger'>DANGER</h3>
            <h3 ref={parallax4.ref} className='danger2'>MONSTER</h3>
            <img className='bg-wep2' ref={parallaxRotage.ref} src={web2} />
            <motion.p variants={slideIn("right", "tween", 0.1, 0.6)}>
                Until later it became the SCP Foundation, which collects stories from back home in the form of “Experiment report file”.
            </motion.p>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="wrapper2" ref={Railref}>


                <motion.div className='bg-main' style={{ y: rail7 }} variants={slideIn("right", "tween", 0.1, 0.2)}></motion.div>
                <motion.div className='bg-ora' style={{ y: rail1 }} variants={slideIn("left", "tween", 0.4, 0.2)}></motion.div>
                <motion.div className='bg-border-top' style={{ y: rail2 }} variants={slideIn("right", "tween", 0.8, 0.2)}></motion.div>
                <motion.div className='bg-long-border' style={{ y: rail3 }} variants={slideIn("left", "tween", 0.6, 0.2)}></motion.div>
                <motion.div className='bg-rock-left' style={{ y: rail4 }} variants={slideIn("down", "tween", 0.9, 0.2)}></motion.div>
                <motion.div className='bg-trail-path-long' style={{ y: rail5 }} variants={slideIn("down", "tween", 1.2, 0.2)}></motion.div>
                <motion.div className='bg-trail-path' style={{ y: rail6 }} variants={slideIn("down", "tween", 1.5, 0.2)}></motion.div>
            </motion.div>
            <div className='bg-mons2'></div>

        </motion.div>
    )
}

export default Section3