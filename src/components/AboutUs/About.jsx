import { Container } from "../../styles/Container";
import images from "../../constants/images";
import { AboutEl, AboutRight, AboutWrapper } from "../../styles/AboutUs/AboutStyle";

const About = () => {
   return (
      <AboutWrapper>
         <Container>
            <AboutEl>
               <img src={images.aboutPhoto} alt="girl" />
               <AboutRight>
                  <span>About Us</span>
                  <h2>It&#10076;s the bridge between service companies and consumers.</h2>
                  <p>ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.</p>
               </AboutRight>
            </AboutEl>
         </Container>
      </AboutWrapper>
   )
};

export default About;