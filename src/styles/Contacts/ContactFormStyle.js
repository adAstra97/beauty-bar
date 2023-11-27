import styled from "styled-components";
import { movingFlare } from "../../constants/animations";

export const ContactFormWrapper = styled.div`
   background-color: #FBF2E0;
   padding: 120px 0;
`;

export const ContactFormEl = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;


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
      margin-bottom: 20px;
   }

   & > p {
      color: ${({theme}) => theme.colors.gray};
      font-family: 'Manrope', sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.75;
   }
`;

export const Form = styled.form`
   margin-top: 65px;
   background-color: ${({theme}) => theme.colors.white};
   padding: 100px;
   max-width: 1010px;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   gap: 15px;
   border-radius: 20px;

   @media (max-width: 750px) {
      padding: 70px 50px;
   }

   @media (max-width: 450px) {
      padding: 50px 20px;
   }

   input, textarea {
      color: ${({theme}) => theme.colors.dark};
      font-family: 'DM Sans' , sans-serif;
      font-size: 1.9rem;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.19px;
      width: 100%;
      outline: none;
      border: none;
      box-sizing: border-box;
      padding: 20px 20px 20px 55px;
      border-radius: 5px;
      border: 1px solid ${({theme}) => theme.colors.gray};

      &:focus {
         box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.65);
      }
   }

   textarea {
      resize: none;
      width: 100%;;
   }

   div {
      position: relative;

      svg {
         position: absolute;
         left: 18px;
         top: 23px;
      }
   }
`;

export const Button = styled.button`
   border-radius: 5px;
   background-color: ${({theme}) => theme.colors.primary};
   padding: 24px 0;
   color: ${({theme}) => theme.colors.white};
   font-size: 1.4rem;
   font-weight: 800;
   line-height: 1.25;
   letter-spacing: 1.68px;
   text-transform: uppercase;
   font-family: 'Manrope', sans-serif;
   cursor: pointer;
   position: relative;
   box-shadow: 0 3px 3px ${({theme}) => theme.colors.gray};
   overflow: hidden;
   transition: all 0.2s;

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
`;