import "../css/About.css"
import KingImage from "../images/king photo (2).jpg"

const About = () => {

  return (
    <div className="About">
      <img src={KingImage} alt="A a young man"  
      className="Image"
      />
      <div className="content">
         <h2> Hey, I'm ISRAEL EZE O</h2>
                
                👋🏻
                <h1 className="transit">Frontend Developer</h1>
                <h3>ISRAEL EZE .O </h3>
                <p>i am  an ethusiastic young man based in Lagos State Nigeria who loves technology, innovations and creativity.
                I graduated from  Next Imeprial Computer Training  Institute, where i took a course on Website Development with major concentration on HTML,CSS3,Javascript,Bootstrap,REACT.JS,JQuery,
                Redux,Website Hosting and graphic designing.
                    Having gained some years experience in designing user friendly websites,E-COMMERCE,Student Computer based Examination
                    websites, Banking services websites for online payments for local clients and foreign clients. I am  currently a freelancer and also
                    open for part-time and full time employment for any organization or client willing to indulge my services.
                    
                </p>

      </div>





    </div>
  )
}

export default About