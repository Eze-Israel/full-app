import { useState } from "react";
import "../css/Header.css"
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../images/logo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  const [bars, setBars] = useState(true)
  const [mobileState, setMobileState] = useState(false)

  const handleMobileChange = () => {
    setBars(!bars)
    setMobileState(!mobileState)
    
  }
  const handlelogoname = () => {
    setBars(bars)
    
  }
  
  

 
  return (
    <div className="Header">
      {/* <img src={logoImage} alt="logo" className="logo"  /> */}
      <span><Link to="/" className="name" onClick={handlelogoname}> Eze Israel O</Link></span> 
      <div className="mobile-icon" onClick={handleMobileChange}>
        {bars ? <FaBars /> : <FaTimes />}
      </div>
      <ul className={mobileState ? 'nav-menu show' : 'nav-menu'}>
        <li> <Link to="/" className="nav-item" onClick={handleMobileChange}>Home</Link></li>
        <li><Link to="about" className="nav-item" onClick={handleMobileChange}>About</Link></li>
        <li><Link to="contact" className="nav-item" onClick={handleMobileChange}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header