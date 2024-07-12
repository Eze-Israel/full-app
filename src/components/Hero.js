import "../css/Hero.css"
import heroImage from "../images/hero.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="hero" className="hero-image" />
      <div className="hero-content">
        <h1>Imposibility is only in the mind of mediocre</h1>
        {/* <button>Learn more</button> */}
      </div>
    </div>
  )
}

export default Hero