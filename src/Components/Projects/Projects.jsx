import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import './Projects.scss'
import { useRef } from 'react'
import { projects } from '../../Content/data'



const Single = ({ item }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const inView = useInView(ref, {})
  return (
    <section ref={ref}>
      <motion.div initial={{ opacity: 0.2, scale: 0.8, y: 100 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', damping: 60, stiffness: 200 }} className="card">
        <img src={item.image} alt={item.title} />
        <div className='cardBody'>
          <h4>{item.title}</h4>
          {/* <p>{item.desc}</p> */}
          <span>
              {item.technologies.map((technology,i)=>(
                <img key={i} src={technology}  />
              ))}
          </span>
          <button>Code</button>
        </div>
      </motion.div>
    </section>
  )
}

function Projects() {

  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className='projects' id='projects' ref={ref}>

      <div className="headings">
        <span>Workflow</span>
        <h2>Create at the speed of thought.</h2>
        <p>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</p>
      </div>

      <div className='project-container'>
        {
          projects.map(item => (
            <Single item={item} key={item.id} />
          ))
        }
      </div>

      <div className="progress">
        <div className="progress_wrapper">
          <motion.div style={{ scaleY }} className="progress-bar"></motion.div>
        </div>
      </div>

    </div>
  )
}

export default Projects