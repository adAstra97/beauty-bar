import styled from "styled-components";
import { Link } from "react-router-dom";
import { movingFlare } from "../../constants/animations";

export const HeroEl = styled.div`
   background-color: ${({theme}) => theme.colors.primary};
   text-align: center;
   padding: 130px 0;

   span {
      color: ${({theme}) => theme.colors.secondary};
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 10px;
   }

   h1 {
      color: ${({theme}) => theme.colors.light};
      font-family: 'Playfair Display', serif;
      font-size: 5.5rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.55px;
      max-width: 650px;
      margin: 0 auto 35px;
      padding: 0 10px;
   }
`;

export const Button = styled(Link)`
   background-color: ${({theme}) => theme.colors.main};
   padding: 25px 35px;
   color: ${({theme}) => theme.colors.white};
   font-family: 'Manrope', sans-serif;
   font-size: 1.4rem;
   font-weight: 800;
   line-height: 1.25;
   letter-spacing: 1.68px;
   text-transform: uppercase;
   display: inline-block;
   text-decoration: none;
   box-shadow: 0 0 10px 0 ${({theme}) => theme.colors.dark};
   position: relative;
   overflow: hidden;
   transition: all 0.2s;
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
`;