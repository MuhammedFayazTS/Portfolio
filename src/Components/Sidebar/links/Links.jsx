import { motion } from "framer-motion"

const items =[
    "Home",
    "Services",
    "Contact"
]


function Links({setOpen}) {

    const variants = {
        open:{
            transition:{
                staggerChildren:0.5
            }
        },
        closed:{
            transition:{
                staggerChildren:0.1,
                staggerDirection:-1
            }
        }
    }

    const itemVariants = {
        open:{
            y:0,
            opacity:1
        },
        closed:{
            y:50,
            opacity:0
        }
    }

  return (
    <motion.div className="links" variants={variants}>
        {
        items.map(item=>(
            <motion.a  href={`#${item}`} onClick={() => setOpen(prev => !prev)} key={item} variants={itemVariants} 
            whileTap={{scale:1.1}}
            >{item}</motion.a>
        ))
    }</motion.div>
  )
}

export default Links