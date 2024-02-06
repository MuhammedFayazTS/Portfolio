import './Hero.scss'
import HeroImg from '../../assets/HeroImg.png'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Scroll from '../../assets/Lottie/Scroll.json'

function Hero() {

  return (
    <div className='hero'>

      <div className="text-container">
        <p>Hi 👋</p>
        <h1>Muhammed</h1>
        <h1>Fayaz T S</h1>
      </div>
      <a href='#skills'>
        <Player
          autoplay
          loop
          src={Scroll}
          className='lottie-player'
        >
        </Player>
      </a>




      {/* <div className="img-container">
            <img src={HeroImg} alt="" />
        </div> */}

    </div>
  )
}

export default Hero