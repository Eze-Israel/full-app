import "../css/Contact.css"
import { FaEnvelope, FaPhone, FaAddressBook, FaWhatsapp, FaGithub, FaLocationArrow,FaTiktok, FaInstagram,FaFacebook} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="Contact" >
      
      <div className="Information">
        <p className="header"><h2>Contact Information</h2></p>
        <FaEnvelope/>  <i>Ezeisraeloluoma123@gamail.com</i>
        <p><FaPhone/>07061033459</p>
        <p className="website"><FaAddressBook/><h4 className="text">Website@www.EzeIsrael.io</h4></p>
        <h3 className="header">FOLLOW US ON SOCIAL MEDIA</h3>
        <p className="Icons"><a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        <FaInstagram />
        <FaTiktok />
        <FaLocationArrow />
        <FaGithub />
        <a href="#" target="_blank"> <FaWhatsapp /></a> </p>
      </div>
      <div className="Message-us">
      <p className="header"><h2>Send Us Message</h2></p>
               <form action="#" method="get">
                    <input type="text" placeholder="Full name "  className="orange"></input>
                    {" "}
                    <input type="email" name="email" className="email" placeholder="Email"  ></input>
                    {" "}
                    <input type="text" placeholder="Subject"  className="textInput"></input>
                    {" "}
                    <textarea name="massage" className="textarea" cols="30" rows="10"  >Message</textarea>
                    {" "}
                    <input type="submit" value="Send" className="send"></input>
                </form> 
      </div>


    </div>
  )
}

export default Contact