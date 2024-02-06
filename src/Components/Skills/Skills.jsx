import React, { useEffect, useRef, useState } from 'react'
import './Skills.scss'
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import { skills, text } from '../../Content/data'
import AnimatedText from './AnimatedText/AnimatedText'



function Skills() {

    const [isMobile,setIsMobile] = useState(false)
    
    const checkWindowSize=()=>{
        if(window.innerWidth < 768) {
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }

    const ref = useRef(null)
    const inView = useInView(ref, { marginLeft: "-100PX" })
    const { scrollYProgress } = useScroll({ target: ref })
    const scrollTransition = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // const x =  useTransform(scrollTransition, [0, 1], ["420%", "-400%"])
    const x = isMobile?  useTransform(scrollTransition, [0, 1], ["700%", "-710%"]) : useTransform(scrollTransition, [0, 1], ["420%", "-400%"])
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50
    })

    useEffect(() => {
        checkWindowSize()
    
      return () => {
        checkWindowSize()
      }
    }, [])
    

    return (
        <>
            <section ref={ref} id='skills' className='skills'>
                <hr />
                <div className='animation-container'>
                    <h2>My Skills</h2>
                    <motion.span style={{ scaleX }} className='progressBar'></motion.span>
                    <AnimatedText text={ text } progress={scrollYProgress} />
                    <div className="skills-container">
                        {
                            skills.map((skill, index) => (
                                <motion.div ref={ref} key={index} className="skill" style={ !isMobile && {  x }}
                                    initial={{ scale: .8,opacity:0  }} animate={inView && { scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring' }} >
                                    <img src={skill} />
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills