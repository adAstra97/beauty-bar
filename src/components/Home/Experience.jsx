import styled from "styled-components";
import images from "../../constants/images";
import { Container } from "../../styles/Container";

const ExperienceWrapper = styled.div`
   padding: 65px 0;
   background: rgba(235, 243, 245, 0.50);
`;

const ExperienceEl = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;

   h2 {
      margin-bottom: 10px;
   }

   span {
      color: ${({theme}) => theme.colors.gray};
      font-size: 2.0rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Manrope', sans-serif;
      margin-bottom: 30px;
   }
`;

const Images = styled.div`
   display: grid;
   grid-template-areas:
      "image1 image2 image3"
      "image1 image4 image5"
   ;
   gap: 24px;
   border-radius: 30px;
   overflow: hidden;

   .image1 {
      max-width: 100%;
      grid-area: image1;
   }
   .image2 {
      max-width: 100%;
      grid-area: image2;
   }
   .image3 {
      max-width: 100%;
      grid-area: image3;
   }
   .image4 {
      max-width: 100%;
      grid-area: image4;
   }
   .image5 {
      max-width: 100%;
      grid-area: image5;
   }

   @media (max-width: 1000px) {
      grid-template-areas:
         "image1 image2"
         "image1 image3"
         "image4 image5"
      ;
   }
   @media (max-width: 550px) {
      grid-template-areas:
         "image1"
         "image1"
         "image2"
         "image3"
         "image4"
         "image5"
      ;
   }
`;



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