import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
   ${reset}

   html {
      font-size: 62.5%;

      @media (max-width: 370px) {
         font-size: 58.5%;
      }
   }

   html, body {
      min-height: 100vh;
   }

   body > div {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
   }

   h2 {
      color: ${({theme}) => theme.colors.primary};
      font-family: 'Playfair Display', sans;
      font-size: 4.5rem;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: -0.45px;

      @media (max-width: 500px) {
         font-size: 3.5rem;
      }
   }
`;