import React, { useRef } from 'react'
import './Section1.css'
import { useScroll, motion, useTransform } from 'framer-motion'
import { slideIn, staggerContainer, fadeIn } from '../utils/motion'
import { Parallax, useParallax } from 'react-scroll-parallax'
import Lottie from 'lottie-react';
import scrollAni from '../assets//background-layer/scroll-animation .json'
import useOpacityNone from '../hook/Opacitynone'
const Section1 = () => {

    const ref = useRef(null);
    const scrollNone = useOpacityNone()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start ", "end start"],
    })
    const parallaxExpand = useParallax({
        scale: [1, 1.5],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])

    const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const backgroundY2 = useTransform(scrollYProgress, [0, 2], ["0%", "120%"])
    const backgroundY3 = useTransform(scrollYProgress, [0, 5], ["0%", "200%"])
    const backgroundY4 = useTransform(scrollYProgress, [0, 4], ["0%", "70%"])
    const backgroundY5 = useTransform(scrollYProgress, [0, 5], ["0%", "60%"])
    const backgroundY6 = useTransform(scrollYProgress, [0, 6], ["0%", "90%"])
    const backgroundY7 = useTransform(scrollYProgress, [0, 8], ["0%", "10%"])

    return (
        <>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='wrapper'
                ref={ref}>

                <motion.h1
                    ref={parallaxExpand.ref}
                    variants={fadeIn("down", "tween", 0.8, 0.2)}
                    style={{ y: textY }}> SCP </motion.h1>


                <motion.div variants={fadeIn("down", "tween", 1.6, 2.2)}>
                    < Lottie animationData={scrollAni} className='scrollAni' style={{ opacity: scrollNone }} />
                </motion.div>


                <motion.div
                    variants={slideIn("down", "tween", 0.2, 0.2)} className='img1' style={{ y: backgroundY1 }}>  </motion.div>
                <motion.div
                    variants={slideIn("down", "tween", 0.1, 0.2)} className='img2' style={{ y: backgroundY2 }}>   </motion.div>
                <motion.div
                    variants={slideIn("down", "tween", 0.3, 0.2)} className='img3' style={{ y: backgroundY3 }}>   </motion.div>
                <motion.div
                    variants={slideIn("down", "tween", 0.5, 0.2)} className='img4' style={{ y: backgroundY4 }}>   </motion.div>
                <motion.div
                    variants={slideIn("down", "tween", 0.4, 0.2)} className='img5' style={{ y: backgroundY5 }}>   </motion.div>
                <motion.div
                    variants={slideIn("down", "tween", 0.3, 0.2)} className='img6' style={{ y: backgroundY6 }}>   </motion.div>
                <motion.div
                    variants={slideIn("down", "tween", 0.2, 0.2)} className='img7' style={{ y: backgroundY7 }}>   </motion.div>

            </motion.div>


        </>
    )
}

export default Section1