import './App.scss'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      {/* <section id='Services'>Parallax</section>
      <section >Parallax</section> */}
      <Skills />
      <Projects />
      <section id='Contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
