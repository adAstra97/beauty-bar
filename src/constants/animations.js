import { keyframes } from 'styled-components';

export const movingFlare = keyframes`
   0% {
      left: -30px;
      margin-left: 0px;
   }
   30% {
      left: 110%;
      margin-left: 80px;
   }
   100% {
      left: 110%;
      margin-left: 80px;
   }
`;