import  { useState } from 'react'
import './Sidebar.scss'
import ToggleButton from "./ToggleButton/ToggleButton"
import Links from "./links/Links"
import { motion } from 'framer-motion'

function Sidebar() {
    const [open,setOpen] = useState(false)

    const variants = {
        open:{
            clipPath:"circle(1200px at calc(100% - 50px) 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            }
        },
        closed:{
            clipPath:"circle(30px at calc(100% - 50px) 50px)",
            transition:{
                type:"spring",
                stiffness:500,
                damping:50
            }
        }
    }

  return (
    <motion.div className='sidebar'  animate={open?"open":"closed"} >
        <motion.div className="bg" variants={variants} >
            <Links setOpen={setOpen} />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar