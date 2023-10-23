import styled from "styled-components";

export const ExperienceWrapper = styled.div`
   padding: 65px 0;
   background: rgba(235, 243, 245, 0.50);
`;

export const ExperienceEl = styled.div`
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

export const Images = styled.div`
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