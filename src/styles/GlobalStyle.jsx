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
`;