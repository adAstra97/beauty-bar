import images from "../../constants/images";
import { Container } from "../../styles/Container";
import { ExperienceWrapper, ExperienceEl, Images } from "../../styles/Home/ExperienceStyle";

const Experience = () => {
   return (
      <ExperienceWrapper>
         <Container>
            <ExperienceEl>
               <h2>We are Experienced in making you very Beautiful</h2>
               <span>Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</span>
               <Images>
                  <img className="image1" src={images.experience1} alt="beaty1" />
                  <img className="image2" src={images.experience2} alt="beaty2" />
                  <img className="image3" src={images.experience3} alt="beaty3" />
                  <img className="image4" src={images.experience4} alt="beaty4" />
                  <img className="image5" src={images.experience5} alt="beaty5" />
               </Images>
            </ExperienceEl>
         </Container>
      </ExperienceWrapper>
   )
};

export default Experience;