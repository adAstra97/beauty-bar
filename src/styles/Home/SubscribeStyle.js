import styled from "styled-components";
import { movingFlare } from "../../constants/animations";
import images from "../../constants/images";

export const SubscribeWrapper = styled.div`
   background-color: ${({theme}) => theme.colors.white};
   padding: 8vh 0;
`;

export const SubscribeEl = styled.div`
   max-width: 1330px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 56px;

   @media (max-width: 1200px) {
      flex-direction: column;
   }

   img {
      max-width: 100%;
   }
`;

export const SubscribeRight = styled.div`

   h2 {
      margin-bottom: 15px;
   }

   p {
      color: ${({theme}) => theme.colors.gray};
      font-family: 'Manrope', sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.4;
      margin-bottom: 45px;
   }

   @media (max-width: 1200px) {
      text-align: center;
   }
`;

export const Form = styled.form`
   border-radius: 45px;
   background-color: ${({theme}) => theme.colors.white};
   border: 1px solid ${({theme}) => theme.colors.secondary};
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 10px 10px 30px;
   max-width: 545px;
   gap: 15px;

   @media (max-width: 1200px) {
      margin: 0 auto;
   }

   @media (max-width: 435px) {
      padding: 10px 10px 10px 20px;
   }

   input {
      flex: 1;
      color: ${({theme}) => theme.colors.dark};
      font-family: 'Manrope', sans-serif;
      font-size: 1.6rem;
      line-height: 1.5;
      outline: none;
      border: none;
      background-image: url(${images.subscribeEmail});
      background-repeat: no-repeat;
      padding-left: 40px;
      background-position: left center;

      @media (max-width: 435px) {
         background-image: none;
         padding-left: 0px;
         font-size: 1.4rem;
      }
   }

   button {
      background-color: ${({theme}) => theme.colors.dark};
      padding: 15px 30px;
      border-radius: 45px;
      color: ${({theme}) => theme.colors.white};
      font-family: 'Manrope', sans-serif;
      font-size: 1.6rem;
      font-weight: 600;
      cursor: pointer;
      position: relative;
      box-shadow: 0 3px 3px ${({theme}) => theme.colors.gray};
      overflow: hidden;
      transition: all 0.2s;

      @media (max-width: 435px) {
         padding: 10px 20px;
      }

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