import React from 'react'
import './Section5.css'
import { Parallax } from 'react-scroll-parallax'
import {  motion } from 'framer-motion'
import { slideIn, staggerContainer, fadeIn } from '../utils/motion'
import { useTypewriter } from 'react-simple-typewriter'
const Section5 = () => {

    const [text] = useTypewriter({
        words: ['MISSIONTOTHEMOON', 'Freepik', 'LottieFiles', 'PNG EGG'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 90,
        // autoStart:false
        start:300
  
    });

    return (
        <div className='section5'>
            <Parallax opacity={[-0.2, 1]} className='wrapper-5'>
                <p >
                    It is a fiction story that is as serious as if it actually existed.
                    And the information in the file will come in the form of a trial report.
                    It's not a story told like a novel.
                    Makes us feel like we're actually opening a file and looking at a test report of that thing.</p>
            </Parallax>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='gallery-monster'>
                <Parallax translateX={['-400px', '0px']}>
                    <motion.h3 >
                        Gallery-Monster
                    </motion.h3>

                </Parallax>
                <Parallax translateX={['100px', '0px']} className='line-right'></Parallax>
                <Parallax translateX={['100px', '0px']} className='gal-bg-line' />
                <div className='galContainer'>
                    <Parallax speed={-10} scale={[0.5, 1.2]} opacity={[0.5, 1]}>
                        <div className="con1">
                            <img src="../src/assets/mosnters/galMon1.png" alt="" className='galMon' />
                        </div>
                    </Parallax>

                    <Parallax speed={10} opacity={[0.5, 1]} scale={[0.5, 1.2]} >
                        <div className="con2">
                            <img src="../src/assets/mosnters/galMon2.png" alt="" className='galMon' />
                        </div>
                    </Parallax>

                    <Parallax opacity={[0.5, 1]} scale={[0.5, 1.2]}>
                        <div className="con3">
                            <img src="../src/assets/mosnters/galMon3.png" alt="" className='galMon' />
                        </div>
                    </Parallax>
                    <Parallax opacity={[0.5, 1]} scale={[0.5, 1.2]}>
                        <div className="con4">
                            <img src="../src/assets/mosnters/galMon4.png" alt="" className='galMon' />
                        </div>
                    </Parallax>
                </div>

            </motion.div>

            {/* change bg */}
            <Parallax opacity={[2, -1]}>
                <div className="changeBg">

                    <motion.h1 variants={fadeIn("up", "tween", 0.8, 1)} className="textFade">
                        Asked how serious they are? <br />To the extent that people in the community created the concept of SCP as a secret institution.
                        that has not been disclosed to outsiders The institute is supported by governments around the world in its fight against things beyond the limits of humanity.
                        <span> Whether it is a monster, an event, a person, or even an object that is “abnormal” and the cause cannot be determined.</span>
                    </motion.h1>
                </div>
            </Parallax>


            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="wrapper-img-end">

                <motion.div variants={fadeIn("left", "tween", 0.1, 0.4)} className='bg-footer'></motion.div>

                <motion.div variants={fadeIn("left", "tween", 0.1, 0.4)} className='bg-inner'>
                </motion.div>
                <motion.div variants={fadeIn("left", "tween", 0.1, 0.4)} className='bg-ceiling'>
                </motion.div>
                <motion.div variants={fadeIn("left", "tween", 0.2, 0.4)} className='bg-ground'>
                </motion.div>

                <motion.div variants={slideIn("left", "tween", 0.3, 0.9)} className='bg-post-left'>
                </motion.div>
                <motion.div variants={slideIn("right", "tween", 0.3, 0.9)} className='bg-post-right'>
                </motion.div>
                <motion.div variants={fadeIn("left", "tween", 0.1, 0.4)} className='bg-outer'>
                </motion.div>



                <motion.div className="text-end" variants={fadeIn("down", "tween", 1.2, 1.6)}>
                    <h1>Credit  </h1>
                    <span>{text}</span>
                </motion.div>


            </motion.div>

        </div>
    )
}

export default Section5