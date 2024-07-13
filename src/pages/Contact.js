import "../css/Contact.css"
import { FaEnvelope, FaPhone, FaAddressBook, FaWhatsapp, FaGithub, FaLocationArrow,FaTiktok, FaInstagram,FaFacebook} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="Contact" >
      
      <div className="Information">
        <p className="header">Contact Information</p>
        <i><FaEnvelope className="con-icons"/> {" " }  Ezeisraeloluoma123@gamail.com</i>
        <p><FaPhone className="con-icons"/> {" " }07061033459</p>
        <p className="website"><FaAddressBook className="con-icons"/> Website@www.EzeIsrael.io {"👋🏻 "}</p>
        <h3 className="follow">FOLLOW US ON SOCIAL MEDIA</h3>
        <p className="Icons">
        <a href="https://facebook.com" target="_blank"><FaFacebook className="icon-setup" /></a>
        <FaInstagram className="icon-setup"/>
        <FaTiktok className="icon-setup" />
        <FaLocationArrow className="icon-setup"/>
        <FaGithub className="icon-setup" />
        <a href="https://wa.me/07061033459" target="_blank"> <FaWhatsapp   className="icon-setup"/></a> </p>
      </div>
      <div className="Message-us">
      <p className="title">Send Us Message</p>
               <form action="#" method="get">
                    <input type="text" placeholder="Full name "  className="text-input"></input>
                    {" "}
                    <input type="email" name="email" className="email" placeholder="Email"  ></input>
                    {" "}
                    <input type="text" placeholder="Subject"  className="Subject"></input>
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