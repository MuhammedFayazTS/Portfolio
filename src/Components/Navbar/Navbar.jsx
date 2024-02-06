import Sidebar from '../Sidebar/Sidebar'
import './Navbar.scss'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        {/* logo */}
        <div className='logoWrapper'>
          <a href="#Home">Portfolio</a>
        </div>

        {/* links */}
        <ul>
          <li>    <a href='#Home' data-hover="Home">Home</a>     </li>
          <li>    <a href='#Services' data-hover="Services">Services</a>     </li>
          <li>    <a href='#skills' data-hover="Skills">Skills</a>     </li>
          <li>    <a href='#projects' data-hover="Projects">Projects</a>     </li>
          <li>    <a href='#Contact' data-hover="Contact">Contact</a>      </li>
        </ul>

        {/* end */}
        <div className="social">
          <Sidebar />
        </div>

      </div>
    </>
  )
}

export default Navbar