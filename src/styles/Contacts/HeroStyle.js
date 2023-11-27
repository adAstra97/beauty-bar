import styled from "styled-components";

export const HeroEl = styled.div`
   background-color: ${({theme}) => theme.colors.primary};
   min-height: 495px;
   text-align: center;
   display: flex;
   justify-content: center;
   flex-direction: column;

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

   h1 {
      color: ${({theme}) => theme.colors.white};
      font-family: 'Playfair Display', serif;
      font-size: 5.5rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.55px;
      max-width: 650px;
      margin: 0 auto;
      padding: 0 10px;
   }
`;