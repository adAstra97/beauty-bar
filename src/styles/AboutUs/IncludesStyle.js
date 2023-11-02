import styled from "styled-components";
import images from "../../constants/images";


export const IncludesWrapper = styled.div`
   background-color: ${({theme}) => theme.colors.white};
   padding: 100px 0;
`;

export const IncludesEl = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 25px;

   @media (max-width: 930px) {
      flex-direction: column;
   }
`;

export const IncludesLeft = styled.div`
   max-width: 800px;
`;

export const IncludesText = styled.div`
   margin-bottom: 35px;

   span {
      color: ${({theme}) => theme.colors.main};
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.55;
      letter-spacing: 1.5px;
      text-transform: uppercase;
   }

   h2 {
      margin-bottom: 10px;
   }

   p {
      color: #555;
      font-family: 'Manrope', sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.75;
   }
`;

export const IncludesList = styled.div`

   & > span {
      color: ${({theme}) => theme.colors.dark};
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: -0.22px;
      display: inline-block;
      margin-bottom: 20px;
   }

   ul {
      display: flex;
      flex-direction: column;
      gap: 25px;
   }

   li {
      position: relative;
      display: flex;
      flex-direction: column;
      padding-left: 65px;

      span:first-child {
         color: ${({theme}) => theme.colors.dark};
         font-family: 'Manrope', serif;
         font-size: 1.9rem;
         font-weight: 700;
         line-height: 2;
      }

      span:last-child {
         color: #555;
         font-family: 'Manrope', serif;
         font-size: 1.8rem;
         font-weight: 400;
         line-height: 1.75;
      }

      &::before {
         content: '';
         background-image: url(${images.points});
         width: 35px;
         height: 35px;
         display: block;
         position: absolute;
         left: 0;
         top: 50%;
         transform: translateY(-50%);
      }
   }
`;

export const Video = styled.video`
   max-width: 400px;

   @media (max-width: 440px) {
      display: none;
   }
`;