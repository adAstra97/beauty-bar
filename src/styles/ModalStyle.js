import styled from "styled-components";
import { movingFlare } from "../constants/animations";

export const ModalMessage = styled.div`
   position: fixed;
   inset: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 900;
   background-color: rgba(0, 0, 0, 0.3);

   div {
      background-color: white;
      display: flex;
      flex-direction: column;
      max-width: 340px;
      z-index: 900;
      padding: 5vh;
      border-radius: 20px;
      box-sizing: border-box;
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.7);
   }

   span {
      text-align: center;
      font-family: 'Playfair Display', serif;
      font-size: 3.2rem;
      font-weight: 600;
      line-height: 1.3;
      margin-bottom: 30px;
   }

   button {
      background: ${({theme}) => theme.colors.main};
      color: ${({theme}) => theme.colors.white};
      cursor: pointer;
      font-family: 'Manrope', sans-serif;
      font-size: 2.2rem;
      font-weight: 600;
      border: none;
      box-shadow: 0 3px 3px ${({theme}) => theme.colors.gray};
      position: relative;
      overflow: hidden;
      transition: all 0.2s;
      padding: 10px 0;
      border-radius: 10px;

      &:after {
         content: "";
         display: block;
         width: 20px;
         height: 220px;
         margin-left: 50px;
         background: ${({theme}) => theme.colors.white};
         background: linear-gradient(
               to bottom,
               rgba(255, 255, 255, 0.5) 0%,
               rgba(255, 255, 255, 1) 50%,
               rgba(255, 255, 255, 0.5) 100%
         );
         left: -40px;
         top: -100px;
         z-index: 1;
         transform: rotate(45deg);
         position: absolute;
         animation: ${movingFlare} 3.5s ease-in-out 0.05s infinite;
      }

      &:hover {
         box-shadow: 0 0px 0px ${({theme}) => theme.colors.gray};
         transform: translateY(1px);
      }
   }
`;