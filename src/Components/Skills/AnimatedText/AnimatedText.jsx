import { motion, useTransform } from 'framer-motion'
import React from 'react'
import './AnimatedText.scss'

function AnimatedText({ text, progress }) {
    const words = text.split(" ")
    return (
        <p>
            {
                words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return (
                        <Words key={word} progress={progress} range={[start, end]} >{word}</Words>
                    )
                })
            }
        </p>
    )
}

const Words = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className='word'>
            <span className='shadow'>{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    )
}

export default AnimatedText