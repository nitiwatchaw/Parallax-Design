import React from 'react'
import './Section4.css'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer } from '../utils/motion'
import Lottie from 'lottie-react';
import animationData from '../assets/mosnters/animation_lmnl38f2.json'
import animationData2 from '../assets/mosnters/animation_lmnl3z61.json'

const Section4 = () => {



    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='wrapperSec4'>
            <Parallax className='bg-line1' speed={60} />
            <Parallax className='bg-line2' speed={60} />
            <Parallax speed={-10} className="box1" opacity={[0, 1]} />
            <Lottie animationData={animationData} className='monsAni1' />
            <motion.div variants={slideIn("left", "tween", 0.1, 1)}>
                <Lottie animationData={animationData2} className='monsAni2' />
            </motion.div>
            <Parallax speed={100} className="box2" opacity={[0, 1]} />

            <Parallax opacity={[0, 1]} className='text' />
            <Parallax opacity={[0, 1]} className='text2' />
            <Parallax opacity={[0, 1]} className='text3' />
            <Parallax opacity={[0, 1]} translateX={['-1000px', '0px']} className='text4' />
            <Parallax opacity={[0, 1]} translateX={['-400px', '0px']} className='line-long'></Parallax>
            <Parallax opacity={[0, 1]} className='circle1'></Parallax>

            <Parallax translateX={['-400px', '0px']} scale={[0.75, 1]} speed={30} className='eff1' />
            <Parallax translateX={['-900px', '0px']} scale={[0.75, 1]} speed={20} className='eff2' />
            <Parallax translateX={['-400px', '0px']} scale={[0.75, 1]} speed={50} className='eff3' />
            <Parallax translateX={['-400px', '0px']} scale={[0.75, 1]} speed={50} className='eff4' />
            <Parallax translateX={['-200px', '600px']} scale={[0.75, 1]} speed={80} className='eff5' />
            <Parallax speed={50} className='ufo1' scale={[0.7, 1]} rotate={[0, -100]} />

        </motion.div>
    )
}

export default Section4