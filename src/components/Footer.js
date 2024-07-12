import "../css/Footer.css"
import { FaFacebook, FaInstagram, FaTiktok, FaLocationArrow  , FaWhatsapp, FaGithub} from "react-icons/fa"

const Footer = () => {
  let year = new Date().getFullYear()

  return (
    <div className="Footer">
      <div className="social">
        <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        <FaInstagram />
        <FaTiktok />
        <FaLocationArrow />
        <FaGithub />
        <a href="#" target="_blank"> <FaWhatsapp /></a>
      </div>
      <div className="copyright"> Copyright &copy; {year}  ABC Company</div>
    </div>
  )
}

export default Footer