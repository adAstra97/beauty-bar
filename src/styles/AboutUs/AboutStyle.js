import styled from "styled-components";

export const AboutWrapper = styled.div`
   background-color: rgba(247, 229, 193, 0.50);
   box-shadow: 0px 37px 60px 0px rgba(0, 0, 0, 0.02);
   padding: 100px 0;
`;

export const AboutEl = styled.div`
   background-color: ${({theme}) => theme.colors.primary};
   padding: 75px 70px;
   max-width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 70px;
   position: relative;
   box-sizing: border-box;

   @media (max-width: 1200px) {
      padding: 45px 40px;
      justify-content: space-between;
      gap: 30px;
   }

   @media (max-width: 940px) {
      flex-direction: column;
      padding: 45px 10px;
   }

   img {
      position: absolute;
      left: 60px;

      @media (max-width: 1200px) {
         position: static;
      }

      @media (max-width: 940px) {
         max-width: 50%;
      }
   }
`;

export const AboutRight = styled.div`
   max-width: 510px;

   @media (max-width: 940px) {
      text-align: center;
   }

   span {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.55;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: inline-block;
   }

   h2 {
      color: ${({theme}) => theme.colors.white};
      margin-bottom: 15px;
   }

   p {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.75;
   }
`;